var chosenPosts = []

var cachedUsers = {}

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
        if (!cachedUsers.hasOwnProperty("user"+postJson.userId)) {
            cachedUsers["user"+postJson.userId] = await getResponse('https://jsonplaceholder.typicode.com/users/'+postJson.userId)
        }
    }
    console.log(chosenPosts)
    console.log(cachedUsers)


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
        <p></p>
        */
        
        var title = `<h1 class="post-title poppins-bold">${chosenPosts[post].title}</h1>`
        var user = `<p class="post-user wix-madefor-text-italic">${cachedUsers["user"+chosenPosts[post].userId].username}</p>`
        var content = `<p class="post-content wix-madefor-text-regular">${chosenPosts[post].body}</p>`
        
        var postContainer = document.createElement("div")
        postContainer.classList.add("post-container")
        postContainer.id = "post"+post

        $("#posting-space").append(postContainer)
        $("#post"+post).append(title, user, content)
    }
}

function buildPage() {

    updatePostsPage()

}

init()
async_init()