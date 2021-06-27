const fetch = require('node-fetch'); // run npm install node-fetch on terminal

async function getUsersName () {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    return data.map ((users)=> {
        console.log(users.name)
        return users.name;
         }
    )

}


        getUsersName()
