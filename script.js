const search=document.getElementById("search")

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase()

const rows=document.querySelectorAll("#busBody tr")

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)?"":"none"

})

})

function filterCategory(cat){

const rows=document.querySelectorAll("#busBody tr")

rows.forEach(row=>{

if(cat==="all"){

row.style.display=""

}

else if(row.dataset.category===cat){

row.style.display=""

}

else{

row.style.display="none"

}

})

}

function toggleMode(){

document.body.classList.toggle("dark")

}


function nextBus(){

const rows=document.querySelectorAll("#busBody tr")

const now=new Date()

let next=""

rows.forEach(row=>{

const time=row.children[0].innerText

const bus=row.children[1].innerText

next=time+" - "+bus

})

document.getElementById("nextBus").innerText=next

}

nextBus()
