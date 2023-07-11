var title =document.getElementById("productName");
var price =document.getElementById("productPrice");
var productCat =document.getElementById("productCat");
var desc =document.getElementById("ProductDesc");
var submit = document.getElementById("submit");
var clearData = document.getElementById("clearData");


// create the product 
var products;
// check for local storage (modify to function * TODO )


            if(localStorage.product != null)
        {
            products = JSON.parse(localStorage.product)
        }
        else {
            products = []; 
        }

 
        preview();
submit.onclick =  function (){
   var  newProduct = {
        title : title.value,
        price : price.value ,
        productCat : productCat.value,
        desc : desc.value,

    }
    products.push(newProduct);
    
    console.log(products)
    localStorage.setItem('product' , JSON.stringify(products));
    
    clear();
    preview()

}


// clear product 

 function clear () {
    title.value = '' ,
    price.value = '' , 
    productCat.value = '' ,
    desc.value = ''
    
} console.log(products)


// read Data and preview in table 

function  preview ()
{
    var trs = '';
    for(var i = 0 ; i < products.length ; i ++  )
    {
        trs += `
        <tr>
        <td>${i+1}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].productCat}</td>
        <td>${products[i].desc}</td>
        <td><button type="button" class="btn btn-warning" " onclick="update(${i})" >Update </button></td>
        <td><button type="button" onclick="deleteItem(${i})" class="btn btn-danger"  >Delete </button></td>
    </tr>
        `
    } 
    document.getElementById('tbody').innerHTML = trs;
}

// clear all products 
clearData.onclick = function(){
    localStorage.clear();
    products.splice(0);
    preview();
}

//delete product 

function deleteItem(i)  {

    products.splice(i , 1);
    localStorage.setItem('product' , JSON.stringify(products));
    preview();

}

// update product 
