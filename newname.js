const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://football98.p.rapidapi.com/premierleague/table/squadname/Liv');
xhr.setRequestHeader('x-rapidapi-key', '73811c320dmshd7452e2f4b33a9bp17f87ajsn79007bfd6af0');
xhr.setRequestHeader('x-rapidapi-host', 'football98.p.rapidapi.com');

xhr.send(data);
