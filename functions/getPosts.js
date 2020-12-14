const fetch = require('node-fetch');

const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const todos = await res.json();
    return todos;
}

function getRandomNum(int) {
    return Math.floor(Math.random() * Math.floor(int));
}

exports.handler = async function(event, context) {

    const posts = await getTodos();
    posts.map(post => {
        post.views = getRandomNum(30002);
        post.comments = getRandomNum(400);
    })
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    };
}