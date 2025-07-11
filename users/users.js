let cont=document.querySelector(".prods")

let prods= axios.create({
    baseURL:"https://686fb6d691e85fac42a23c4c.mockapi.io/Users"
})


async function getData() {
    let {data}= await prods.get("/users")
    return data;
    
}

async function showdata() {
    let list=await getData()
    console.log(list);;
    
    list.forEach(e => {
        cont.insertAdjacentHTML("beforeend",`
        <div class ="prod">
        <h1 class="id">${e.id}</h1>
            <h1>${e.name}</h1>
            <p>${e.email}</p>
            <h3>$ ${e.password}</h3>
        </div>
        
            `)
    });
}



showdata()
