const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('language', 'en_US');
encodedParams.set('limit', '500');
encodedParams.set('location_id', '297704');
encodedParams.set('currency', 'GBP');

async function getRestaurants () {

const options = {
  method: 'POST',
  url: 'https://worldwide-restaurants.p.rapidapi.com/search',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '2a7af80d8bmsh9bd131e2560e931p17d3fejsn868a77223011',
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

console.log(options.data);

}

getRestaurants();