const name= document.getElementById("name") 
 const write= document.getElementById("write") 
 const display= document.getElementById("display") 
 const history= document.getElementById("history") 
 const completed= document.getElementById("completed") 
 const expired= document.getElementById("expired") 
 const wel= document.getElementById("wel") 
 const home= document.getElementById("home") 
 const home2= document.getElementById("home2") 
 const home3= document.getElementById("home3") 
 const home4= document.getElementById("home4") 
 const visit= document.getElementById("visit") 
 const add= document.getElementById("add") 
 const add1= document.getElementById("add1") 
 const add2= document.getElementById("add2") 
 const completes1 =document.getElementById("completes1")
 const completes2 =document.getElementById("completes2")
 const completes3 =document.getElementById("completes3")
 const completes4 =document.getElementById("completes4")
 const expires1 =document.getElementById("expires1")

 const expires2 =document.getElementById("expires2")
 const expires3 =document.getElementById("expires3")
 const expires4 =document.getElementById("expires4")

 // Load saved courses from local storage on page load
window.addEventListener("load", () => {
    let savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    // Loop through saved courses and display them on the page
    savedCourses.forEach(courseObj => {
        results.innerHTML +=` 
        <div class="shows" id="shows"> 
            <div class="show"> 
                <div class="titles"> 
                    <div class="title"><h2>${courseObj.title}</h2></div> 
                    <div class="title"><button class="edit"><i class="fa-solid fa-pen"></i></button></div> 
                </div>
            </div> 
            <div class="show"> 
                <div class="activities"> 
                    <div class="activity"><button class="done"><i class="fa-solid fa-square-check"></i></button></div> 
                    <div class="activity"><p>${courseObj.date}</p></div> 
                    <div class="activity"><p class="state">${courseObj.state}</p></div> 
                    <div class="activity"> 
                    <p>${courseObj.startTime}</p> 
                    <p>-</p> 
                    <p>${courseObj.stopTime}</p> 
                    </div> 
                    <div class="activity"><button class="delete"><i class="fa-solid fa-trash"></i></button></div> 
                </div> 
            </div> 
        </div>  

`
const shows = document.querySelectorAll(".shows");
document.getElementById("count").innerHTML=shows.length
document.getElementById("count1").innerHTML=shows.length
document.getElementById("count2").innerHTML=shows.length
document.getElementById("count3").innerHTML=shows.length


shows.forEach((choose) => {
const deleteButton = choose.querySelector(".delete");

if (deleteButton) {
deleteButton.addEventListener("click", () => {
 choose.remove();
 localStorage.clear()
 document.getElementById("count").innerHTML=shows.length-1
document.getElementById("count1").innerHTML=shows.length-1
document.getElementById("count2").innerHTML=shows.length-1
document.getElementById("count3").innerHTML=shows.length-1
});
}
const doneButton = choose.querySelector(".done");
const dones= document.querySelector(".dones");


if (doneButton) {
doneButton.addEventListener("click", () => { 
 if (choose.classList.contains("completed")) { 
            choose.classList.remove("completed"); 
            choose.querySelector(".state").innerHTML=state
            dones.innerHTML+=`""`
            document.getElementById("count").innerHTML=shows.length
            document.getElementById("count1").innerHTML=shows.length
            document.getElementById("count2").innerHTML=shows.length
            document.getElementById("count3").innerHTML=shows.length
        } else { 
            choose.classList.add("completed");
            choose.querySelector(".state").innerHTML="Done"
            dones.innerHTML +=` 
                            <div class="shows" id="shows" style=" background:#13d7a6"> 
                                <div class="show"> 
                                    <div class="titles"> 
                                        <div class="title"><h2>${courseObj.title}</h2></div> 
                                        <div class="title"><button><i class="fa-solid fa-pen"></i></button></div> 
                                    </div> 
                                </div> 
                                <div class="show"> 
                                    <div class="activities"> 
                                        <div class="activity"><button class="done"><i class="fa-solid fa-square-check"></i></button></div> 
                                        <div class="activity"><p>${courseObj.date}</p></div> 
                                        <div class="activity"><p class="state">Done</p></div> 
                                        <div class="activity"> 
                                        <p>${courseObj.startTime}</p> 
                                        <p>-</p> 
                                        <p>${courseObj.stopTime}</p> 
                                        </div> 
                                        <div class="activity"><button class="delete"><i class="fa-solid fa-trash"></i></button></div> 
                                    </div> 
                                </div> 
                            </div>  
         
        `
            document.getElementById("count").innerHTML=shows.length-1
            document.getElementById("count1").innerHTML=shows.length-1
            document.getElementById("count2").innerHTML=dones.length-1
            document.getElementById("count3").innerHTML=shows.length-1
        };
});
}
});
    });
});

 visit.addEventListener("click", ()=>{ 
     name.style.display="None" 
     write.style.display="None" 
     history.style.display="None" 
     wel.style.display="None" 
     completed.style.display="None" 
     display.style.display="block" 
     expired.style.display="none"
 }) 
 add.addEventListener("click", ()=>{ 
     name.style.display="None" 
     write.style.display="block" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="none" 
     completed.style.display="None" 
     expired.style.display="none"
 }) 
 add1.addEventListener("click", ()=>{ 
     name.style.display="None" 
     write.style.display="block" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="none" 
     completed.style.display="None" 
     expired.style.display="none"
 }) 
 add2.addEventListener("click", ()=>{ 
     name.style.display="None" 
     write.style.display="block" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="none" 
     completed.style.display="None" 
     expired.style.display="none"
 }) 
 home.addEventListener("click", ()=>{
    updateHome() 
    home.style.color="blue" 
 }) 
 home2.addEventListener("click", ()=>{ 
     updateHome()
     home.style.color="blue"
 })
 home3.addEventListener("click", ()=>{ 
     updateHome()
     home.style.color="blue"
 })
 home4.addEventListener("click", ()=>{ 
     updateHome()
     home.style.color="blue"
 })

completes1.addEventListener("click", ()=>{
    updateCompleted()
}) 
completes2.addEventListener("click", ()=>{
    updateCompleted()
}) 
completes3.addEventListener("click", ()=>{
    updateCompleted()
}) 
completes4.addEventListener("click", ()=>{
    updateCompleted()
})

/*expires1.addEventListener("click", ()=>{
    updateExpired()
})
expires2.addEventListener("click", ()=>{
    updateExpired()
})
expires3.addEventListener("click", ()=>{
    updateExpired()
})
expires4.addEventListener("click", ()=>{
    updateExpired()
})*/
 
  
 function updateHome(){ 
     name.style.display="None" 
     write.style.display="none" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="block"
     completed.style.display="None" 
     expired.style.display="none"
 } 
 function updateCompleted(){ 
     name.style.display="None" 
     write.style.display="none" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="none"
     completed.style.display="block"
     expired.style.display="none"
 } 
 function updateExpired(){ 
     name.style.display="None" 
     write.style.display="none" 
     history.style.display="None" 
     wel.style.display="None" 
     display.style.display="none"
     completed.style.display="none" 
     expired.style.display="block"
 } 
  
  
 const save= document.getElementById("save") 
 const results = document.getElementById("results")
 const title= document.getElementById("title")
     const date= document.getElementById("date") 
     const startTime= document.getElementById("startTime") 
      const stopTime= document.getElementById("stopTime")  
  
 save.addEventListener("click", ()=>{
    
    if (title.value && date.value && startTime.value && stopTime.value  ){

        const titleValue= title.value 
        const dateValue= date.value 
        const startTimeValue= startTime.value 
         const stopTimeValue= stopTime.value 
         const state = updateState(startTimeValue, stopTimeValue)
         function updateState() {
            let d = new Date()
        const now= d.toLocaleString('default', {   
           hour:'numeric'  , 
           minute:'numeric',
           second:'numeric'     
           }); 
            let current = now
             const start = startTime.value; 
             const stop = stopTime.value; 
          
             if (start > current) { 
                 return "Upcoming"; 
             } else if (start < current ) { 
                 return "Active";
             } else if(stop < current) { 
                 return "Expired";   
             }else{
                return "invalid";
             }
          
         }
         
        // Create an object to represent the course
        const courseObj = {
            title: titleValue,
            date: dateValue,
            startTime: startTimeValue,
           stopTime: startTimeValue,
            state: state,
        };

        // Check if there are existing courses in local storage
        let savedCourses = JSON.parse(localStorage.getItem("courses")) || [];

        // Add the new course to the array
        savedCourses.push(courseObj);

        // Save the updated courses array to local storage
        localStorage.setItem("courses", JSON.stringify(savedCourses));

        if(title.value === "" || date.value === "" || startTime.value === "" || stopTime.value === ""){ 
            alert("enter") 
        }else{ 
            const titleValue= title.value 
        const dateValue= date.value 
        const startTimeValue= startTime.value 
         const stopTimeValue= stopTime.value 
         const state = updateState(startTimeValue, stopTimeValue)
         function updateState() {
           let d = new Date()
       const now= d.toLocaleString('default', {   
          hour:'numeric'  , 
          minute:'numeric',
          second:'numeric'     
          }); 
           let current = now
            const start = startTime.value; 
            const stop = stopTime.value; 
         
            if (start > current) { 
                return "Upcoming"; 
            } else if (start < current ) { 
                return "Active";
            } else if(stop < current) { 
                return "Expired";   
            }else{
               return "invalid";
            }
         
        }
   
        updateHome() 
     
        results.innerHTML +=` 
                            <div class="shows" id="shows"> 
                                <div class="show"> 
                                    <div class="titles"> 
                                        <div class="title"><h2>${titleValue}</h2></div> 
                                        <div class="title"><button class="edit"><i class="fa-solid fa-pen"></i></button></div> 
                                    </div> 
                                </div> 
                                <div class="show"> 
                                    <div class="activities"> 
                                        <div class="activity"><button class="done"><i class="fa-solid fa-square-check"></i></button></div> 
                                        <div class="activity"><p>${dateValue}</p></div> 
                                        <div class="activity"><p class="state">${state}</p></div> 
                                        <div class="activity"> 
                                        <p>${startTimeValue}</p> 
                                        <p>-</p> 
                                        <p>${stopTimeValue}</p> 
                                        </div> 
                                        <div class="activity"><button class="delete"><i class="fa-solid fa-trash"></i></button></div> 
                                    </div> 
                                </div> 
                            </div>  
         
        ` 
        const shows = document.querySelectorAll(".shows");
        document.getElementById("count").innerHTML=shows.length
        document.getElementById("count1").innerHTML=shows.length
        document.getElementById("count2").innerHTML=shows.length
        document.getElementById("count3").innerHTML=shows.length
   
   
   shows.forEach((choose) => {
     const deleteButton = choose.querySelector(".delete");
   
     if (deleteButton) {
       deleteButton.addEventListener("click", () => {
         choose.remove();
         localStorage.clear()
         document.getElementById("count").innerHTML=shows.length-1
        document.getElementById("count1").innerHTML=shows.length-1
        document.getElementById("count2").innerHTML=shows.length-1
        document.getElementById("count3").innerHTML=shows.length-1
       });
     }
     const doneButton = choose.querySelector(".done");
     //const dones= document.querySelector(".dones");
   
   
     if (doneButton) {
       doneButton.addEventListener("click", () => { 
         if (choose.classList.contains("completed") && choose.click) { 

                    choose.classList.remove("completed"); 
                    choose.querySelector(".state").innerHTML=state
                    dones.innerHTML+=""
                    document.getElementById("count").innerHTML=shows.length
                    document.getElementById("count1").innerHTML=shows.length
                    document.getElementById("count2").innerHTML=shows.length
                    document.getElementById("count3").innerHTML=shows.length
                } else { 
                    choose.classList.add("completed");
                    choose.querySelector(".state").innerHTML="Done"
                    dones.innerHTML +=` 
                            <div class="shows" id="shows" style=" background:#13d7a6"> 
                                <div class="show"> 
                                    <div class="titles"> 
                                        <div class="title"><h2>${titleValue}</h2></div> 
                                        <div class="title"><button><i class="fa-solid fa-pen"></i></button></div> 
                                    </div> 
                                </div> 
                                <div class="show"> 
                                    <div class="activities"> 
                                        <div class="activity"><button class="done"><i class="fa-solid fa-square-check"></i></button></div> 
                                        <div class="activity"><p>${dateValue}</p></div> 
                                        <div class="activity"><p class="state">Done</p></div> 
                                        <div class="activity"> 
                                        <p>${startTimeValue}</p> 
                                        <p>-</p> 
                                        <p>${stopTimeValue}</p> 
                                        </div> 
                                        <div class="activity"><button class="delete"><i class="fa-solid fa-trash"></i></button></div> 
                                    </div> 
                                </div> 
                            </div>  
         
        `
                    document.getElementById("count").innerHTML=shows.length-1
                    document.getElementById("count1").innerHTML=shows.length-1
                    document.getElementById("count2").innerHTML=dones.length-1
                    document.getElementById("count3").innerHTML=shows.length-1
                };
                title.value=" " 
                date.value="" 
                startTime.value="HH:mm:ss" 
                 stopTime.value=" HH:mm:ss" 
       });
     }
   });

   const editButtons = document.querySelectorAll(".edit");

editButtons.forEach(editButton => {
    editButton.addEventListener("click", () => {
        write.style.display="none" 
        name.style.display="None"    
        history.style.display="None" 
        wel.style.display="None" 
        display.style.display="none" 
        completed.style.display="None" 
        expired.style.display="block"

    });

});
   
        } 

    } 
     title.value=" " 
     date.value="" 
     startTime.value="HH:mm:ss" 
     stopTime.value=" HH:mm:ss" 
 }) 
  
function updateTime(){
    let d = new Date()
    const now= d.toLocaleString('default', {   
       hour:'numeric'  , 
       minute:'numeric',
       second:'numeric'     
   });
   
    const now2= d.toLocaleString('default', {   
       year:'numeric'  , 
       weekday:'long',
       day:'numeric'     
   });
    
   
    const day=document.getElementById("day")
    const time=document.getElementById("time")
    time.innerHTML=now
    day.innerHTML=now2
    const day1=document.getElementById("day1")
    const time1=document.getElementById("time1")
    time1.innerHTML=now
    day1.innerHTML=now2
    const day3=document.getElementById("day3")
    const time3=document.getElementById("time3")
    time3.innerHTML=now
    day3.innerHTML=now2
    const day4=document.getElementById("day4")
    const time4=document.getElementById("time4")
    time4.innerHTML=now
    day4.innerHTML=now2
}

updateTime()
setInterval(updateTime, 1000)


