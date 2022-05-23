//store the products array in localstorage as "products"

let arr = JSON.parse(localStorage.getItem("products")) || []
function Product(type,desc,price,image)
{
   this.type = type
    this.desc = desc
    this.price = price 
    this.image = image
}

function productfunction(event){
    event.preventDefault()

    let form = document.getElementById("products")

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

   var prod = new Product(type,desc,price,image)

//    console.log(prod)
  
   arr.push(prod)

   console.log(arr)
localStorage.setItem("products",JSON.stringify(arr))


   
    // console.log(type,desc,price,image)
    
}


