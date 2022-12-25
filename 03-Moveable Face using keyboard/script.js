 // console.log("Check")
 let face = document.getElementById('face');
 // face.addEventListener('click',(event)=>{
 //     console.log(event)
 // })
 document.addEventListener('keydown', (event) => {
     // console.log(event);
     if (event.key === 'ArrowDown') {
         face.classList.add('arrow-down')
     }
 })
 document.addEventListener('keyup', (event) => {
     // console.log(event);
     if (event.key === 'ArrowUp') {
         face.classList.add('arrow-up')
     }
 })
 document.addEventListener('keydown', (event) => {
     // console.log(event);
     if (event.key === 'ArrowRight') {
         face.classList.add('arrow-right')
     }
 })
 document.addEventListener('keyup', (event) => {
     // console.log(event);
     if (event.key === 'ArrowLeft') {
         face.classList.add('arrow-left')
     }
 })