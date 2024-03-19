import fetch from 'node-fetch';

async function fetchCards() {
    // Fetch the maximum value from the API"
    const maxResponse = await fetch('https://api.pokemontcg.io/v2/cards?q=name:charizard%20set.id:sv3pt5');
    const maxValueData = await maxResponse.json();
    const maxValue = maxValueData.data[1];

    console.log('Max value:', maxValue); // Log the max value
}

fetchCards();