const dom ={
    new: document.getElementById("new"),
    add: document.getElementById("add"),
    tasks: document.getElementById("tasks")
}
const tasks=[];
dom.add.onclick = ()=>{

    const newTaskText=dom.new.value    
    if(newTaskText&&cheker(newTaskText,tasks))
    {   
        addTask(newTaskText,tasks)
        dom.new.value='' 
        cout(tasks)
    }
}
function addTask(text,list){
 const timestamp= Date.now()
 const task={
  id:timestamp,
  text,
  isComplate:false
   
 }
  list.push(task)
}
function cheker(text,list)
{ let flag = true;
 
 list.forEach(task => {
    if(task.text===text)
    {
        alert("Введите другую задачу")
        flag=false
    }
    
 });
 return(flag)
}

function cout(list)
{ let htmlt=''
 
  list.forEach((task) =>{
     const cls=task.isComplate ? 'td_task td_task_complete':'td_task'
     console.log(cls)
     const cheked=task.isComplate ? 'checked':''
     const taskHTML =`
     <div id="${task.id}" class="${cls}">
    
         <label class="td_checkbox">
         <input type="checkbox" ${cheked}> <div 
         class="td_checkbox-div"></div>
         </label>
         <div class="td_task_text">${task.text}</div>
         <div class="td_taskdel">-</div>
     </div>
     `
     htmlt=htmlt+taskHTML
  })
  dom.tasks.innerHTML=htmlt
}
dom.tasks.onclick=(event)=>{
    const target= event.target
    const isComplateEL=target.classList.contains("td_checkbox-div")
    const isDelateEL=target.classList.contains("td_taskdel")
    const space=target.classList.contains("td_task_text")
    if(isComplateEL)
    {  const task=target.parentElement.parentElement
       const taskID=task.getAttribute('id')
       chanheTaskStatus(taskID,tasks)
       cout(tasks)
    }
    if(isDelateEL)
    {
        const task=target.parentElement
       const taskID=task.getAttribute('id')
       Delete(taskID,tasks)
       cout(tasks)
    }
}
function chanheTaskStatus(id,list)
{
    list.forEach((task) =>{
        if(task.id==id)
        {
            task.isComplate=!task.isComplate
        }
    })
}
function Delete(id,list)
{
  list.forEach((task,idx)=>{
      if(task.id==id)
      {
          list.splice(idx,1)
      }
  })
}