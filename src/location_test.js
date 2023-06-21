const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'manchester');
encodedParams.set('language', 'en_US');

const options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/typeahead',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '2a7af80d8bmsh9bd131e2560e931p17d3fejsn868a77223011',
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
  },
  data: encodedParams,
};

async function getLocation() {

try {
	const response = await axios.request(options);
	console.log(response.data.results.data);
} catch (error) {
	console.error(error);
}
}

getLocation();