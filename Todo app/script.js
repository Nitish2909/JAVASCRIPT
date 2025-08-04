let input=document.querySelector('#Text-input')
let button = document.querySelector('#btn')
let listcontainer =document.querySelector('.list-container')

button.addEventListener('click',()=>{
    if(input.value==="")
    {
        alert("please fill the input box")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=input.value;
        listcontainer.appendChild(li);

        let span=document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input.value=" ";
    saveData();
})
listcontainer.addEventListener('click',(e)=>{
// if(e.target.tagName==="LI")
// {
//     e.target.classList.toggle('checked')
// }
 if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()
    saveData();
}
},false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function saveTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
saveTask();