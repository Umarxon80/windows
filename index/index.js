let api=axios.create({
    baseURL:"https://686fb6d691e85fac42a23c4c.mockapi.io/Users"
})
// https://686fb6d691e85fac42a23c4c.mockapi.io/Users/users
async function getData() {
    let {data}=await api.get("/users")
    return data
       
}
async function addData(obj) {
    let { data } = await api.post("/users", obj)
    console.log(data);
    return data
}
async function delData(id) {
    let {data}=await api.delete("/users",id)
    return data
}
let Name=document.querySelector(".name")
let Email=document.querySelector(".email")
let Password1=document.querySelector(".p1")
let Password2=document.querySelector(".p2")
let Bnt=document.querySelector(".btn")

async function submit() {
let list= await getData() 
console.log(list); 
Bnt.addEventListener("click", (e)=>{
    let temp=0
    list.forEach(e => {
        if (e.name==Name) {
            alert("Bu ism mavjud");
            temp =1
        }
        
    });
    if (Password1.value!=Password2.value) {
        alert("Parol hato")
        temp=1
    }
    if (temp==0) {
        addData({name:Name.value,email:Email.value,password:Password1.value})
        window.open("../main.html")
    }
})
}
// addData({name:"umar", email:"salom",password:"qiyin"})

submit()