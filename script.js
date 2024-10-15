
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
  
    
    iwala.addEventListener("click", () => {
      taskWrapper.remove(); // Remove the task item (both h2 and i element)



})

})



const container=document.querySelector(".container")


const color1=document.querySelector(".color-1")
const color2=document.querySelector(".color-2")
const color3=document.querySelector(".color-3")

color1.addEventListener("click",()=>{
  console.log("clocec");
 container.style.background = `linear-gradient(90deg, rgba(214, 204, 204, 1) 0%, rgba(70, 68, 105, 1) 100%, rgba(226, 225, 245, 1) 100%)`;
})

color2.addEventListener("click",()=>{
  console.log("clocec");
  container.style.background = "linear-gradient(90deg, rgba(255,169,169,1) 0%, rgba(51,42,212,1) 100%, rgba(143,238,210,1) 100%)";
 })

 color3.addEventListener("click",()=>{
  container.style.background = " linear-gradient(90deg, rgba(248,179,233,1) 0%, rgba(75,59,165,1) 100%, rgba(135,143,31,1) 100%)";
 })
