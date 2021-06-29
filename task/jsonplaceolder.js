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


// const https = require('https');

// let request = https.get('https://jsonplaceholder.typicode.com/users', (res) => {
//   if (res.statusCode !==200) {
//     console.error(`INVALID REQUEST: ${res.statusCode}`);
//     res.resume();
//     return;
//   }
//   let data = '';

//   res.on('data', (chunk) => {
//     data += chunk;
//   })


//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log('data retrieved ');
//     console.log(JSON.parse(data));
    
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }

//   })

// });
