"use strict";

document.getElementById('fetchHoroscope').addEventListener('click', fetchHoroscope);

async function fetchHoroscope() {
    const zodiacSign = document.getElementById('zodiacSign').value;
    const url = `https://astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com/horoscope?lang=en&zodiac=${zodiacSign}&type=daily`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '19be292321msh3ac614872cfb12dp15206djsn31711ee16015',
            'x-rapidapi-host': 'astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        displayHoroscope(result);
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        document.getElementById('horoscopeResult').innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    }
}

function displayHoroscope(data) {
    const horoscopeResultDiv = document.getElementById('horoscopeResult');

    if (data && data.horoscope) {
        horoscopeResultDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Today's Horoscope for ${data.zodiac}</h3>
                    <p class="card-text">${data.horoscope}</p>
                </div>
            </div>
        `;
    } else {
        horoscopeResultDiv.innerHTML = `<p class="text-danger">No horoscope data found for the selected sign.</p>`;
    }
}