// const fetch = require('node-fetch');

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
        response.json().then((data)=>{
                console.log(data)
        })
})

fetch('http://localhost:3000/weather?address=BAreilly').then((response)=>{
      response.json().then((data)=>{
        if(data.error){
             console.log(data.error)
         }

        else{
         console.log(data);     
        }

        })      
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne  =document.querySelector('#message-1')


weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault()  // preventing from fdeafult refresh after serching 

        const location = search.value
        messageOne.textContent = "Loading..."
        messageOne.textContent = ""
        

fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
                if(data.error) {
                        
        messageOne.textContent  ="Please enter valid location"
                        }
                else{
                        //   latitude:data.latitude
                        //   longitude:data.longitude
        temp = data.data.temperature
        lat  = data.data.latitude
        lon = data.data.longitude
        loc = data.data.location

        messageOne.textContent = "It is currently "+temp+" degree temperature at latitude "+lat+" and longitude "+lon+" at the place you entered i.e "+loc

}

// try{
//         temp = data.data.temperature
//         lat  = data.data.latitude
//         lon = data.data.longitude
//         loc = data.data.location

//         messageOne.textContent = "It is currently "+temp+" degree temperature at latitude "+lat+" and longitude "+lon+" at the place you entered i.e "+loc


// }
// catch(e){
//         messageOne.textContent = "Please enter some vlaid location"
// }



      })
   })
})


