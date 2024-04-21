const basketCount = document.querySelector('#sup')

let sebet = []

if(localStorage.getItem('sebet')){
    sebet = JSON.parse(localStorage.getItem('sebet'))
}
basketCount.innerHTML=`${sebet.length}`


const table=document.querySelector("#table")
for (let i = 0; i < sebet.length; i++) {
    table.innerHTML+=`
    <tr>
        <td><img src="${sebet[i].img}"  alt=""></td>
        <td>${sebet[i].name}</td>
        <td>${sebet[i].count}</td>
    </tr>
    `
}


