var chosenPosts = []

function init() {
    
}

async function async_init() {
    await get_posts()

    buildPage()
}

async function get_posts() {
    for (let i=1; i<=10; i++) {
        postJson = await getResponse('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random()*100+1))
        chosenPosts.push(postJson)
    }


}

async function getResponse(url) {
    var textResponse = await fetch(url)
    .catch(error => {
        return null
    })
    var responseJson = await textResponse.json()
    return responseJson
}

function updatePostsPage() {
    $("#posting-space").html("")
    for (post in chosenPosts) {
        console.log(chosenPosts[post])
        /* 
        <h1 class="post-title"></h1>
        <p class="post-user"></p>
        <p class="post-content"></p>
        */
        
        var title = `<h1>${chosenPosts[post].title}</h1>`
        var user = `<p>Username</p>`
        var content = `<p>${chosenPosts[post].body}</p>`
        
        $("#posting-space").append(title, user, content)
    }
}

function buildPage() {

    updatePostsPage()

}

init()
async_init()