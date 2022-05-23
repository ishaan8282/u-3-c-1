
let ProdData = JSON.parse(localStorage.getItem("products")) || []


ProdData.map(function(el,index){

    let image = document.createElement("img")
    image.src = el.image

    let type = document.createElement("h3")
    type.innerText = el.type

    let desc = document.createElement("h3")
    desc.innerText = el.desc

    let price = document.createElement("h3")
     price.innerText = el.price

    let btn = document.createElement("button")
    btn.innerText = "REMOVE";
    btn.setAttribute("id","remove_product")

     btn.addEventListener("click",function(){
         remove(el,index)
     })

    let div = document.createElement("div")
    div.append(image,type,desc,price,btn)

    document.getElementById("all_products").append(div)

})

function remove(el,index)
{
    ProdData.splice(index,1)
    localStorage.setItem("products",JSON.stringify(ProdData))
    window.location.reload()
}