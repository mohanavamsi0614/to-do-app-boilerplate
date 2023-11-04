const button=document.getElementById("button")
const todo=document.getElementById("todolist")
const input=document.getElementById("input")
let l=[]
button.addEventListener("click",click)
function click() {
    if (input.value==""){
        j=prompt("please enter your task :)")
        l.push(j)

    }
    else{
    l.push(input.value)
    }
    input.value=""
    main()
}
function main() {
    todo.innerHTML=""
    l.forEach((v,i)=>{
        todo.innerHTML+="<li>"+v+"<a onclick='edit("+i+")'>edit</a><a onclick='del("+i+")'>X</li>"
})
}
function edit(i) {
    h=prompt("edit your task here")
    l.splice(i,1,h)
    main()
}
function del(i) {
    l.splice(i,1)
    main()
}