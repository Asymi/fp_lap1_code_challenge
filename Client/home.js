const searchBtn = document.getElementById('search');
const luckyBtn = document.getElementById('lucky');

// Ideally submit listener should be used
searchBtn.addEventListener("click", e => {
    e.preventDefault()
    window.location.replace("/Client/results.html")
})

/* Yassine's work above, Jamie's below */

luckyBtn.addEventListener("click", e => {
    e.preventDefault()
    
    fetch("http://localhost:3000/random")
    .then (resp => resp.json())
    .then (redirectFunc)
    .catch(error => {console.log(`Oops, something broke! ${error}`)});

    // load a random URL
    function redirectFunc(data){
        const url = data.url;
        window.location.replace(url);
    }
})
