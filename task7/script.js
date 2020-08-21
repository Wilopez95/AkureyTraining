var contenido = document.querySelector('#contenido')
var datos;

function get_bodyguards() {
    fetch('https://my-json-server.typicode.com/Wilopez95/bodyguards_json/companies')
    .then(response => response.json())
    .then(data => {
        datos = data;
        fill_full_data()
        
  });
}

function fill_full_data(){
    contenido.innerHTML = ''
    for(let valor of datos){
        auxFillData(valor)
        
    }
}

function auxFillData(valor){
    if(valor.isCertified){
        contenido.innerHTML += `
            <li class="profile">
            <div class="profile-title">
                <h3>${valor.name}</h3>
                <img src="./assets/certified.png"" alt="">
            </div>
            <div class="profile-body">
                <img src=${valor.image} alt=""> 
                <p>${valor.description}</p>
            </div>
            <div class="profile-options">
                <h5>Desde: $${valor.rate}/${valor.hours} horas</h5>
                <div class="profile-options_btn">
                    <button type="button">Contratar</button>
                </div>
                
            </div>
        </li>
        `
    }else{
        contenido.innerHTML += `
            <li class="profile">
            <div class="profile-title">
                <h3>${valor.name}</h3>
                <img src=""" alt="">
            </div>
            <div class="profile-body">
                <img src=${valor.image} alt=""> 
                <p>${valor.description}</p>
            </div>
            <div class="profile-options">
                <h5>Desde: $${valor.rate}/${valor.hours} horas</h5>
                <div class="profile-options_btn">
                    <button type="button">Contratar</button>
                </div>
                
            </div>
        </li>
        `
    }
}


function find() {
    var text = document.getElementsByName("find")[0].value;
    if(text !== ''){
        contenido.innerHTML = ''
        for(let valor of datos){
            if(valor.name.includes(text))  {
                auxFillData(valor)
            }                 
        }
        
    }else{
        fill_full_data(); 
    }
   
}