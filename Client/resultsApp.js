// Get section because this is where we will add search results

// Use fetch to grab a list of objects upon webpage loading.
// Each object contains a url, title, and body.
document.addEventListener("DOMContentLoaded", event => {
    const section = document.getElementById('searchResults')

    url = "http://localhost:3000/results"

    // Getting data from server
    fetch(url)
    .then(resp => resp.json())
    .then(populatePage)
    .catch(error => {console.log(`Oops, something broke! ${error}`)});

    // Grab the data
    function populatePage(data){
        for (let i = 0; i < data.length; i++) {
            // Getting our values
            let address = data[i].url;
            let title = data[i].title;
            let bodyText = data[i].bodyText;

            // Creating elements that will be used to hold text
            let article = document.createElement("article");
            let addressTag = document.createElement("p");
            let titleTag = document.createElement("h3");
            let anchor = document.createElement("a")
            let bodyTextTag = document.createElement("p");

            // Inserting text into elements
            addressTag.textContent = address;
            titleTag.textContent = title;
            anchor.setAttribute("href", address)
            bodyTextTag.textContent = bodyText;

            // Appending text to anchor
            anchor.appendChild(titleTag);

             // Appending text to article
            article.appendChild(addressTag);
            article.appendChild(anchor);
            article.appendChild(bodyTextTag);

            // Appending to section
            section.appendChild(article);
        } 
    }
})

// Subfunction that will iteratively take each element in the list that is returned by fetch (i.e. a single object)
// Then creat a new div/section for each element and populate it