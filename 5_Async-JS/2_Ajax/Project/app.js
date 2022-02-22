/*
Using the api => `https://api.lyrics.ovh/v1/${artist}/${song}`
build an interface that can get the artist and the song, then, search for it.

Must have input validation and use any CSS Framework like bootstrap
*/
const songOutput = document.getElementById('output');
const callout = document.querySelector('.callout');
document.querySelector('form').addEventListener('submit', searchSong);

function searchSong(evt) {
    evt.preventDefault();
    const artist = document.getElementById('artist').value;
    const song = document.getElementById('song').value;

    const xhr = new XMLHttpRequest();
            
    xhr.open('GET', `https://api.lyrics.ovh/v1/${artist}/${song}`, true);
    
    xhr.onload = function() {
        if (this.status === 200) {
            const res = JSON.parse(this.responseText);
            songOutput.innerText = res.lyrics;
        } else {
            callout.style.display = 'block';
            callout.textContent = `something went wrong... ${this.status}`;
            setTimeout(() => callout.style.display = 'none', 3200);
        }
    }
    xhr.send();
}