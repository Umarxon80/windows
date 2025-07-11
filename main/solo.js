let cont=document.querySelector(".prods")

let prods= axios.create({
    baseURL:"https://686fb90591e85fac42a24435.mockapi.io/prods"
})


async function getData() {
    let {data}= await prods.get("/prods")
    return data;
    
}
async function delData(id) {
    let {data}= await prods.delete("/prods",id)
    return data;
}

async function showdata() {
    let list=await getData()
    console.log(list);;
    let id=JSON.parse(localStorage.getItem("active"))
    list.forEach(e => {
        if (e.id==id) {
            cont.insertAdjacentHTML("beforeend",`
                <div class ="prod">
                <h1 class="id">${e.id}</h1>
                    <h1>${e.name}</h1>
                    <p>${e.desc}</p>
                    <h3>$ ${e.price}</h3>
                </div>
                
                    `)
        }
    });
}



showdata()
delData(1)