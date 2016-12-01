var parniBroevi = [2, 4, 6, 8, 10];
console.log(parniBroevi);
console.log(parniBroevi[2]);

var iminja = ['Bojan', 'Janko', 'Petko', 'Stanko'];
console.log(iminja);
console.log(iminja[3]);

var nizi = [
	['Pero', 'Janko', 'Stanko'],
	[123, 543, 563],
	[true, false, true],
	[1.85, 2.32, 1.11]
];

console.log(nizi);
console.log(nizi[0][2]);
console.log(nizi.length);


var n = [];
n[10] = 'Skopje';
n[20] = 'Veles';
n[22] = 'Ohrid';

console.log(n);
console.log(n.length);

var student = [];
student['ime'] = 'Pero';
student['prezime'] = 'Perovski';

console.log(student);
console.log(student.length);

console.log(student['ime']);
console.log(student.ime);


var profesor = {
	ime: 'Janko',
	prezime: 'Jankovski',
	predmet: 'Astro Fizika'
};

console.log(profesor);
console.log(profesor.ime);
console.log(profesor['ime']);


var test = [
	{ime: 'Pero Perovski', ocena: 5},
	{ime: 'Janko Jankovski', ocena: 4},
	{ime: 'Stanko Stankovski', ocena: 2},
	{ime: 'Goran Goranovski', ocena: 3},
	{ime: 'Ivan Ivanovski', ocena: 1}
];

console.log(test[2].ime);
console.log(test[1].ocena);
console.log(test[4].ime);
console.log(test[4].ocena);
console.log(test[0].ime + ' ima ocena ' + test[0].ocena);


var pozdrav = function(){
	console.log('Zdravo Svetu!');
}

pozdrav();


// function pozdravIme(ime){
// 	console.log('Zdravo ' + ime);
// }


var pozdravIme = function(ime){
	console.log('Zdravo ' + ime);
}

pozdravIme('Pero');


var funkcii = {
	eden: function(){
		console.log('Funkcija br 1');
	},
	dva: function(){
		console.log('Funkcija br 2');
	},
	tri: function(){
		console.log('Funkcija br 3');
	}
};

funkcii.dva();
funkcii['dva']();


var broj = 'tri';
funkcii[broj]();
// funkcii['tri']();




var priceCigar = 0.065;
var smokedCigarsPerDay = 19;


var cars = [
	{ price: 11000, name: 'Dacia' },
	{ price: 14000, name: 'Skoda' },
	{ price: 20000, name: 'VolksWagen' },
	{ price: 30000, name: 'Audi' },
	{ price: 50000, name: 'BMW' }
];

var avtomobili = {
	Dacia: function(){
		return cars[0].price / (smokedCigarsPerDay * 365 * priceCigar);
	},
	Skoda: function(){
		return cars[1].price / (smokedCigarsPerDay * 365 * priceCigar);
	},
	VolksWagen: function(){
		return cars[2].price / (smokedCigarsPerDay * 365 * priceCigar);
	},
	Audi: function(){
		return cars[3].price / (smokedCigarsPerDay * 365 * priceCigar);
	},
	BMW: function(){
		return cars[4].price / (smokedCigarsPerDay * 365 * priceCigar);
	}
};

function presmetka(smokedCigarsPerDay, priceCigar, car){
	return avtomobili[car]();
}

console.log(presmetka(19, 0.065, 'Dacia'));
console.log(presmetka(19, 0.065, 'Skoda'));





var priceCigar = 0.065;
var smokedCigarsPerDay = 19;


var cars = [
	{ price: 11000, name: 'Dacia' },
	{ price: 14000, name: 'Skoda' },
	{ price: 20000, name: 'VolksWagen' },
	{ price: 30000, name: 'Audi' },
	{ price: 50000, name: 'BMW' }
];

var avtomobili = {
	Dacia: function(godPresmetka){
		return cars[0].price / godPresmetka
	},
	Skoda: function(godPresmetka){
		return cars[1].price / godPresmetka
	},
	VolksWagen: function(godPresmetka){
		return cars[2].price / godPresmetka
	},
	Audi: function(godPresmetka){
		return cars[3].price / godPresmetka
	},
	BMW: function(godPresmetka){
		return cars[4].price / godPresmetka
	}
};

function presmetka(smokedCigarsPerDay, priceCigar, car){
	godPresmetka = smokedCigarsPerDay * 365 * priceCigar;
	return avtomobili[car](godPresmetka);
}

console.log(presmetka(19, 0.065, 'Dacia'));
console.log(presmetka(19, 0.065, 'Skoda'));

