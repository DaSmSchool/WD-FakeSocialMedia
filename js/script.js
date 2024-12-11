function init() {
    
}

async function async_init() {
    workJson = await getResponse()
    buildPage()
}

async function getResponse() {
    var textResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    .catch(error => {
        return null
    })
    var responseJson = await textResponse.json()
    return responseJson
}

function buildPage() {

    

}

init()
async_init()