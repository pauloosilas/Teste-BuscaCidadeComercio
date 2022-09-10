
var url = window.location.href;
var urlObj = new URL(url);
var busca = urlObj.searchParams.get("search");
var lugar = urlObj.searchParams.get("place");

searchPlaces();

function showAllPlaces(){
    
    let places= '';
    database.forEach(function(place, i){
        
        places += ` <div class="card">
                          <div class="card-img">
                              ${place.img} 
                          </div>
                          <div class="card-title">
                              ${place.nome} 
                          </div>
                         <div class="card-body">
                               ${place.descricao} 
                        </div>
                    </div>`
        });

    document.querySelector(".card-content").innerHTML = places;
        
}


function searchPlaces(){
    let places= '';
    document.querySelector(".card-content").innerHTML = places;
    
    database.forEach(function(place){
        
        for(tag in place.tags){
            if(place.tags[tag] === busca)
                place.cidade.forEach((city) => {
                    if(city === lugar){
                        places += ` <div class="card">
                        <div class="card-img">
                            ${place.img} 
                        </div>
                        <div class="card-title">
                            ${place.nome} 
                        </div>
                         <div class="card-body">
                            ${place.descricao} 
                          </div>
                     </div>`
                   }    
                 })
        }
    })

    document.querySelector(".card-content").innerHTML = places;
}