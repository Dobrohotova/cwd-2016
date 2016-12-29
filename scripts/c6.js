var url = 'http://api.openweathermap.org/data/2.5/weather?q=Skopje,mk&units=metric&APPID=87df752ff544d906183cc03f17b4c9fc';

fetch(url).then(function(result){

	result.json().then(function(r){

		console.log(r);
		console.log(r.weather[0].icon);
		console.log(r.name);

		console.log(r.main.temp);
		console.log(r.main.pressure);
		console.log(r.wind.speed);

		var body = document.querySelector('body');
		var grad = document.querySelector('.grad'); 
		var temp = document.querySelector('.temp'); 
		var pres = document.querySelector('.pres'); 
		var wind = document.querySelector('.wind'); 
		// body.appendChild(grad);
		// body.appendChild(temp);
		// body.appendChild(pres);
		// body.appendChild(wind);
		grad.innerText = r.name;
		temp.innerText = r.main.temp;
		pres.innerText = r.main.pressure;
		wind.innerText = r.wind.speed;

		var iconUrl = 'http://openweathermap.org/img/w/' + r.weather[0].icon + '.png';

		// console.log(iconUrl);

		document.querySelector('img').src = iconUrl;

	});
})



