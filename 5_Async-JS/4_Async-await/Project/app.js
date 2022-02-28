/*
Using the api -> https://restcountries.com/

do an app that can search for countries that have the same language
that can also search country by name
that can also search country by capital city
that can also search countries by continent

Each country should be displayed in a card with the majoriy of the avaliable information.
*/


class App {
    static init() {
        Helper.setUpSearchType();
        App.whenSubmit();
    }

    static whenSubmit() {
        const form = document.querySelector('form');
        form.onsubmit = async function(evt) {
            evt.preventDefault();
    
            const searchType = Helper.getSearchType();
            const searchValue = document.getElementById('search-value').value;
            const data = await API.fetchCountryData(searchType, searchValue.toLowerCase());
            UI.addCards(data);
            UI.clearInput();
        }
    }
}
    
class UI {
    static getCard(card) {
        return `
        <div class="columns small-4">
            <div class="card">
                <div class="card-divider">
                    ${card.nativeName}
                </div>
                <img src="${card.flag}" alt="Country flag">
                <div class="card-section">
                    <h4>Capital: ${card.capital}</h4>
                    <ul>
                        <li><b>Alpha Code: </b>${card.alpha3Code}</li>
                        <li><b>Calling Code: </b>${card.callingCodes[0]}</li>
                        <li><b>Currency: </b>${card.currencies[0].name}</li>
                        <li><b>Continent: </b>${card.region}</li>
                        <li><b>Regional Block: </b>${card.regionalBlocs[0].acronym} (${card.regionalBlocs[0].name})</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    static addCards(cards) {
        const cardsGallery = document.querySelector('.row');
        let cardsHTML = '';
        cards.forEach(card => cardsHTML += UI.getCard(card));
        cardsGallery.innerHTML = cardsHTML;
    }

    static clearInput() {
        document.getElementById('search-value').value = '';
    }
}
    
class API {
    static async fetchCountryData(type, term) {
        const res = await fetch(`https://restcountries.com/v2/${type}/${term}`);
        return await res.json();
    }
}

class Helper {
    static getSearchType() {
        return document.querySelector('select').value;
    }

    static setUpSearchType() {
        document.querySelector('span').innerText = Helper.getSearchType()
        document.querySelector('select')
            .addEventListener('change', () => {
                document.querySelector('span').innerText = Helper.getSearchType()
            });
    }
}

App.init();