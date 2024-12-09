function init() {
    
}

async function await_init() {
    var workJson = await getResponse()
    console.log(workJson)
}

async function getResponse() {
    var textResponse = await fetch('htps://jsonplaceholder.typicode.com/users/1')
    .catch(error => {
        return null
    })
    var responseJson = await textResponse.json()
    return responseJson
}

init()
await_init()