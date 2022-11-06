const pokeBtn = document.querySelector('#PokeBtn')

pokeBtn.addEventListener('click', getName)

async function getName(){ 
    try {
   const getPokemonStats = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then(res => res.data.results)
      .then(data => {
         data.map(pokeStat => {
            getStats(pokeStat)
         })
         return data
        })
    } catch (error){
        console.error(error)
    }
}

const getMainContainer = document.querySelector('#maincontainer')
const getStats = async (charStats) => {
    try {
        const inStats = await axios.get(charStats.url)
          .then(res => res.data)
          .then(data => {
            console.log()
            
              const card = document.createElement('div')
               card.className = 'card'
             
            const frontShiny = data.sprites.front_shiny
            const img = document.createElement('img')
               img.src = frontShiny
               img.className = 'card-img-top'
            card.append(img) 

            const cardBody = document.createElement('div')
              cardBody.className = 'card-body'
              const h5 = document.createElement('h5')
                 h5.className = 'card-title'
                 h5.textContent = charStats.name
                 cardBody.append(h5)
                 //console.log(charStats.name)


            const pE1 = document.createElement('p')
                pE1.className = 'card-text'
                //console.log(data.types)
                pE1.textContent = data.types.map(type => {
                    console.log(type.type.name)
                    return  type.type.name
                })
                cardBody.append(pE1)
                card.append(cardBody) 

            getMainContainer.append('segrsthsrhrh')
            
          }) 
        
        }catch (error) {
            console.error (error)       
    }
}
