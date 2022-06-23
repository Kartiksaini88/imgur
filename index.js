
let access_token="COMWL61Ry6dIwD5taYP29tFZNnaFylm-IZJT-JfGEBY"


let getdata = async()=>{
    try {
        let res = await fetch("https://dummyjson.com/products")
        let res1 = await fetch(`https://api.unsplash.com/photos/?client_id=${access_token}`)
        let data = await res.json()
        let data1=await res1.json()
        console.log(data1)
        data = data.products
            append_data (data,data1)
      
    } catch (error) {
        console.log(error)
    }
}

let itemarr = []
let imgur_div = document.getElementById("imgur-div")

let append_data = (data , data1)=>{
   
    data.map((e,i)=>{
        let div = document.createElement("div")
        div.setAttribute("id" , "every_smalldiv")
        let img = document.createElement("img")
        img.setAttribute("id","imgur-img")
        img.src=e.images[0]
   

        let txt_div = document.createElement("div")
        txt_div.innerText=e.description
        txt_div.setAttribute("id" , "txt-div")

       div.addEventListener("click",function(){
        itemarr.push(e)
        localStorage.setItem(("item"),JSON.stringify(itemarr))
       })
        div.append(img,txt_div)
   
        imgur_div.append(div)
 
      

     
    })
    data1.map((e)=>{
        let div = document.createElement("div")
        div.setAttribute("id" , "every_smalldiv")
        let img = document.createElement("img")
        img.setAttribute("id","imgur-img")
        img.src=e.urls.regular

        let txt_div = document.createElement("div")
        txt_div.innerText=e.user.bio
        txt_div.setAttribute("id" , "txt-div")
        div.append(img,txt_div)
   
        imgur_div.append(div)
     
    })
  
}




window.addEventListener("scroll" ,function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky" , window.scrollY>0)
})
getdata()




