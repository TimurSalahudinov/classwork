let API = 'https://rickandmortyapi.com/api/character';
let list2 = $('.list2');
let list = $('.list');
async function start(){ fetch(API).then((data)=>data.json())
.then((res)=>{
    res.results.forEach(item=>{list.append(`<li>${item.name}<img src=${item.image}></li>`);
    // postJson(item);
})
    
    
});}

start();

let API2 = "http://localhost:8002/characters";

// async function postJson(a){
//     await fetch(API2,{
//         method:"POST",
//         body:JSON.stringify(a),
//         headers:{"Content-type": "application/json; charset=utf-8"},
//     })
// }

async function end(){ await fetch(API2).then((data)=>data.json())
    .then((res)=>{
        res.forEach(item=>{list2.append(`<li>${item.name}<img src=${item.image}></li>`);
        console.log(res)
    })
        
    
    });}
    end();