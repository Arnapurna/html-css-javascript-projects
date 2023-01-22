const joke = document.getElementById('joke')
const btn = document.getElementById('btn')

btn.addEventListener('click', genrateJoke)

genrateJoke();
// Using .then()
// function genrateJoke() {
//     const config={
//         headers:{
//             'Accept' :'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then((res)=>res.json())
//     .then((data)=>{
//         joke.innerHTML=data.joke
//     })
// }

// Using ASYNC/AWAIT
async function genrateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke.innerHTML = data.joke
}
