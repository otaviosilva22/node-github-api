const clients = require('./clients/clientsFindRepositories');
const {token} = require('../../common/constants');
const {filterLanguage, sortByDate, formatResult} = require('./functions/functionsFindRepositories.js');


class FindRepositories{

    async handle(req, res){
        try{
            
            const {authorization} = req.headers;
            if (!authorization || authorization != token){
                return res.status(401).json({
                    error: 'Invalid token'
                })
            }

            const {user, language} = req.body;
            if (!user || !language){
                return res.status(400).json({
                    error: 'Invalid params'
                })
            }

            const response = await clients.getRepositories(user);
            
            const resultFilter = filterLanguage(response.data, language);
            
            if (response.length == 0 || resultFilter.length == 0){
                return res.status(500).json({
                    error: 'There are not C# repositories'
                })
            }
            
            const resultSort = sortByDate(resultFilter).slice(0, 6);
            
            const resultFormat = formatResult(resultSort);

            return res.status(200).json({
                success: true,
                repositories: resultFormat
            })

        }catch(e){
            return res.status(500).json({
                error: e
            })
        }
    }

}

module.exports = FindRepositories;