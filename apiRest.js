let apiKey= "b0aa7fd95061e1f4a5c97971ddb0214d"
  
const botonClima=document.querySelector(".btnCiudad")
botonClima.addEventListener("click", ()=>{
    
    let city=document.querySelector(".ciudad").value

    const clima= async()=>{
    
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const data= await res.json()
        console.log(data)

       // let { weather } = data
        //data.forEach(el => {
            
        // for (el in data){
        //  let article=document.createElement("article")
        //  article.innerHTML=`
        //     <h3>${el.data.main}</h3>
        //     <p>${el.data.name}</p>
        //     <p>${el.data.weather[0].descripcion}</p>
        //     `
        //     let container=document.querySelector(".container")
        //     container.appendChild(article)
        // }
        //imprime en pantalla datos de ciudad, temp y clima gral
        let ciudad=document.createElement("h3")
        ciudad.innerHTML=data.name
        let climaDiv=document.querySelector(".climaDiv")
        climaDiv.appendChild(ciudad)

        let datoTemp=document.createElement("p")
        let temp=parseFloat(data.main.temp)
        let tempCelcius=Math.floor(temp-271.15)
        datoTemp.textContent=`La temperatura actual es de: ${tempCelcius}°C`
        console.log(datoTemp)
        climaDiv.appendChild(datoTemp)
        
        let img=document.createElement("img")
        img.src=" https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"
        climaDiv.appendChild(img)

    } 
        clima()
        let climaDiv=document.querySelector(".climaDiv")
        if(climaDiv !==""){
            climaDiv.innerHTML=""
        }
        
    });

   