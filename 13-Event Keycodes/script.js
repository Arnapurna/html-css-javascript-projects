
const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    document.body.innerHTML = ""

    let divkey = document.createElement('div');
    let smallkey = document.createElement('small')
    divkey.classList.add('key');
    divkey.innerText = `${event.key === " " ? "Space" : event.key}`;
    smallkey.innerHTML = "event.key";
    divkey.appendChild(smallkey)
    document.body.appendChild(divkey);

    let divkeycode = document.createElement('div')
    let smallkeycode = document.createElement('small')
    divkeycode.classList.add('key');
    divkeycode.classList.add('red');
    divkeycode.innerText = (event.code);
    smallkeycode.innerHTML = "event.keyCode";
    divkeycode.appendChild(smallkeycode);
    document.body.appendChild(divkeycode);

    // let divcode = document.createElement('div')
    // divcode.classList.add('key');
    // divcode.classList.add('green');
    // divcode.innerText=(event.key);
    // document.body.appendChild(divcode);

});