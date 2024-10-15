
// Text Animation
var textWrapper = document.querySelector('.header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.header .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
   
    delay: (el, i) => 70*i
  })


  const openTime=document.querySelector(".open-time")
//   set Open Time

function onTime(){
    let date=new Date()
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()



openTime.textContent=`${day}/${month}/${year} , ${hour}:${min}:${sec} `
console.log(openTime);
console.log("updated");


}

window.addEventListener("load",onTime)
// const nonee=document.querySelector(".nonee")
const placeToAdd=document.querySelector(".text-content")

const submit=document.querySelector(".inputWala")
const inputs=document.querySelector(".inputs")
submit.addEventListener("click",()=>{
    if(inputs.value===""){
        alert("Enter Task")
        return
    }
    placeToAdd.classList.add("active")
    // nonee.classList.add("active")
   
    inputs.value=inputs.value.toUpperCase()
    // console.log(value);
    let newEle=document.createElement("h2")
    console.log(newEle);
   newEle.textContent=inputs.value
    newEle.classList.add("textx")
    // newEle.textContent=`$(<i class="fa fa-trash-o" ></i>}`
    let iwala=document.createElement("i")
    iwala.classList.add("fa")
    iwala.classList.add("fa-trash-o")
 
    // console.log(iwala);
    // newEle.textContent=`${inputs.value} ${iwala}`
    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task-item");
    taskWrapper.appendChild(newEle);
    taskWrapper.appendChild(iwala);
  
    placeToAdd.appendChild(taskWrapper);
  
    // Clear input value
    inputs.value = "";
  
    // Add event listener for delete button
    iwala.addEventListener("click", () => {
      taskWrapper.remove(); // Remove the task item (both h2 and i element)





//     placeToAdd.appendChild(newEle)
//     placeToAdd.appendChild(iwala)

    
// inputs.value=""
// // iwala.textContent=""




})

// let iwala=document.querySelector("fa-trash-o")
// let newEle=document.querySelector("textx")


// iwala.addEventListener("click",()=>{
//   console.log("clickedd");
//   newEle=""
//   iwala=""
})
