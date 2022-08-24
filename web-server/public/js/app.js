console.log('Client side js loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/weather?address=asd123').then((response) => {
	response.json().then((data) => {
		if (data.error) {
			return console.log(data.error);
		}

		console.log(data.location, data.forecast);
	});
});
