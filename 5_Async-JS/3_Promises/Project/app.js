/*
Build an app that consumes these apis
-> https://random.dog/woof.json
-> https://randomfox.ca/floof/

First ask for the number of images that can request (max 3 for each api)
Fetch the information and bring it into two cols
Each Api will need its own btn for fetching a single image
Create another btn for clearing the information
*/

function numberPick (elmt) {
    for (let i = 0; i < parseInt(elmt.value); i++) {
        fetchDoggoImg();
        fetchFoxImg();
    }
    document.getElementById('number-picker').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

function fetchFoxImg() {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
            const picture = document.createElement('picture');
            picture.innerHTML = `<img alt="random fox" width="150" src="${data.image}"/>`;
            document.getElementById('fox-gallery').append(picture);
        });
}

function fetchDoggoImg() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            const picture = document.createElement('picture');
            picture.innerHTML = `<img alt="random dog" width="150" src="${data.url}"/>`;
            document.getElementById('dog-gallery').append(picture);
        });
}

function clearAll() {
    document.getElementById('fox-gallery').innerHTML = '';
    document.getElementById('dog-gallery').innerHTML = '';
}