import 'whatwg-fetch';

let AirCheapAPI = {
	fetchPosts() {
		return fetch('http://davidsutoyo.com/wp-json/wp/v2/posts')
			.then((response) => response.json());
	},

	fetchTickets(origin, destination) {
		return fetch('https://aircheapapi.pro-react.com/tickets?origin=${origin}&destination=${destination}')
			.then((response) => response.json());
	}
};

export default AirCheapAPI;
