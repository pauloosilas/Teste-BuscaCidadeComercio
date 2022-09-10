
showAllPlaces();

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
