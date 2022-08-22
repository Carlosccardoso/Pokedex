const api = 'https://pokeapi.co/api/v2/pokemon/'

var pesquisa = document.querySelector('#pesquisa')
pesquisa.addEventListener("keyup", function () {

    var dado = fetch(api+pesquisa.value)
        .then(function (Respostadoservidor) {
            return Respostadoservidor.json()
        })
        .then(function (data) {
            
            if(data.name){
                document.querySelector('#pokemonName').innerText = data.name
            }   
            if(data.id){
                document.querySelector('#pokemonNumber').innerText = data.id
            }
            if(data.sprites.front_default){
                document.querySelector('#foto').src = data.sprites.front_default

            }
        })



})




