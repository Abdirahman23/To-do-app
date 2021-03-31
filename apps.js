let btn = document.querySelector("input[type='submit']")
let input = document.querySelector("input[type='text']")
let output = document.querySelector(".output")
let li = document.querySelector(".output li")
console.log(li)


ListIt = ()=>{

  

    let list = document.createElement('li')

     output.appendChild(list)

    list.textContent =  input.value;

    input.value = '';

    list.addEventListener('click', ()=>{
      list.style.textDecoration = 'line-through'
    })
    list.addEventListener('dblclick', ()=>{
      
     output.removeChild(list)
    })

    
  
 

  console.log(toDo)
    
}


btn.addEventListener('click', ListIt)


// li.addEventListener('click', DeleteIt)




