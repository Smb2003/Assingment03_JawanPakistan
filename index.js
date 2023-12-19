let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
];
//-----------------------------------------------------------------------

let cards = document.getElementById('cards');
let input_text = document.getElementById('input_text');
let input_btn = document.getElementById('input_btn');
input_btn.addEventListener('click', filter_items);
let select_option =document.getElementById("select_option");


function Render(){
    arr.forEach((items)=>{
        const {brand,model,price,camera,rom,ram} = items;
        console.log(items);
            cards.innerHTML += `
            <div class= "cardBox" >
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`

        
    })
}
Render();

function filter_items(){
    if(select_option.value == "brand" || select_option.value == "brand" ){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return brand == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "There is no such brand exist."
        })
    }
    else if(select_option.value == "model" || select_option.value == "Model" ){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return model == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "<h2>There is no such model exist.</h2>"
        })
    }
    else if(select_option.value == "camera" || select_option.value == "Camera"){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return camera == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "There is no such camera exist."
        })
    }
    else if(select_option.value == "rom" || select_option.value == "Rom"){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return rom == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "There is no such brand exist."
        })
    }
    else if(select_option.value == "ram" || select_option.value == "Ram"){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return ram == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "There is no such brand exist."
        })
    }
    else if(select_option.value == "price" || select_option.value == "Price"){
        cards.innerHTML= "";
        arr.filter((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return price == input_text.value?
            cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            : 
            "There is no such brand exist."
        })
    }
    else if(select_option.value == "All" || select_option.value == "all"){
        cards.innerHTML= "";
        arr.map((item,index) =>{
            const {brand,model,price,camera,rom,ram} = item;
            return cards.innerHTML += `
            <div class= "cardBox" key=${index}>
            <h2>Model: ${model}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Camera Specification: ${camera}</h3>
            <h3>Ram: ${ram}</h3>
            <h3>Rom: ${rom}</h3>
            <h3>Price: ${price}</h3>`
            
        })
    }
    
    else{
    null
    }
    
    


};