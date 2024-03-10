import fetch from 'node-fetch';

async function fetchCards() {
    // Fetch the maximum value from the API
    const maxResponse = await fetch('https://api.pokemontcg.io/v2/sets/sv1');
    const maxValueData = await maxResponse.json();
    const maxValue = maxValueData.data.name;

    console.log('Max value:', maxValue); // Log the max value
}

fetchCards();