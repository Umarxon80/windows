let cont=document.querySelector(".prods")

let prods= axios.create({
    baseURL:"https://686fb90591e85fac42a24435.mockapi.io/prods"
})


async function getData() {
    let {data}= await prods.get("/prods")
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
            <p>${e.desc}</p>
            <h3>$ ${e.price}</h3>
            <button> Buy now </button>
        </div>
        
            `)
    });
}

cont.addEventListener("click",(e)=>
{
    let card=e.target.closest(".prod"); 
    let id=card.firstElementChild
    console.log(id.textContent);
    localStorage.setItem("active",JSON.stringify(id.textContent))
    window.open("solo.html")


})



showdata()
