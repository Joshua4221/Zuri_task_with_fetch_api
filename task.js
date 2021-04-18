const fs = require('fs');
const fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts')
.then((res) => {
    return res.json()
}).then((json) => { 
    fs.writeFile("result/Posts.txt", JSON.stringify(json), (err) => {
      if (err) throw err;
    })
})
console.log('json file has successful been created');