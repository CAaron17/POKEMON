const button = document.querySelector('.btn');
const contenido = document.getElementById('info');
const button1 = document.getElementById('btn')

// **************************** OBTENER POKEMON ALEATORIO ****************************

button.addEventListener('click', async (e) => {
    e.preventDefault()

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random()*(max-min)) + min;
    }
    
    let number = getRandomInt(1,151);

    try {

        const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);

        const data = await resPost.json() 
        
        contenido.innerHTML = `
            El nombre del pokemon es: <span class="pokemon"> ${data.name} </span> <br>
            Tipo: <span class="pokemon"> ${data.types[0].type.name} </span> <br>
            Número: <span class="pokemon"> ${data.id} </span>`;

        const img_general = document.querySelector('.img_general');

        img_general.setAttribute('src', data.sprites.other.dream_world.front_default)

    } catch(error) {
        console.log("Error")
    }
     
})

// ***************************** OBTENER POKEMON POR SU ID *****************************

button1.addEventListener('click', async (e) => {
    e.preventDefault();

    const input = document.getElementById('input').value;
    const input1 = document.querySelector('.input');

    if(input >= 1 && input <= 151) {
        try {

            const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(input)}`);
    
            const data = await resPost.json() 
            
            contenido.innerHTML = `
                El nombre del pokemon es: <span class="pokemon"> ${data.name} </span> <br>
                Tipo: <span class="pokemon"> ${data.types[0].type.name} </span> <br>
                Número: <span class="pokemon"> ${data.id} </span>`;
    
            const img_general = document.querySelector('.img_general');
    
            img_general.setAttribute('src', data.sprites.other.dream_world.front_default)

            input1.classList.remove('invalid');
        }

        catch(error) {
            console.log("Error")
        }
    } else {
        input1.classList.add('invalid')
        alert("Número inválido, por favor ingrese un número entre el 1 y 151");
    }
})