// let key = document.getElementsId('key');
console.log(key);

// key.addEventListener('click', e => {
//     key.innerHTML = `Click count: ${e.detail}`;
//   });

document.getElementById("key").addEventListener("click", function(event){
    let modal = document.getElementById("modal")
    event.preventDefault()
    console.log('keys');
    modal.classList.toggle("hidden");
  });