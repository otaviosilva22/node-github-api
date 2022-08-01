function filterLanguage(repositories, language){

    const result = repositories.filter(value => value.language == language);

    return result;
}

function sortByDate(repositories){

    repositories.sort((a, b) => {
        
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    });

    return repositories;
}

function formatResult(repositories){
    
    const result = repositories.map(item => {
        return {
            id: item.id,
            name: item.name,
            html_url: item.html_url,
            description: item.description,
            created_at: item.created_at,
            language: item.language,
            avatar_url: item.owner.avatar_url
        }
    });
 
    let resultFormat = {};
    result.forEach( (element, index) => {
        resultFormat[`repositorie_${index+1}`] = element;
    });

    return resultFormat;

}

module.exports = {
    filterLanguage,
    sortByDate,
    formatResult
}