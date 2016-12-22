var div1 = document.createElement('div');

div1.innerText = 'Zdravo Svetu!';
div1.style.color = '#ffffff';
div1.style.backgroundColor = 'red';
div1.style.height = '200px';

console.log(div1);

var body = document.querySelector('body');

body.appendChild(div1);




var ul1 = document.createElement('ul');

var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');
var li5 = document.createElement('li');

li1.innerText = 'Text';
li2.innerText = 'Text';
li3.innerText = 'Text';
li4.innerText = 'Text';
li5.innerText = 'Text';

body.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);



var studenti = [
	{ime: 'Pero', prezime: 'Perovski', prosek: 7},
	{ime: 'Janko', prezime: 'Jankovski', prosek: 9},
	{ime: 'Stanko', prezime: 'Stankovski', prosek: 6.5},
	{ime: 'Petko', prezime: 'Petkovski', prosek: 9.5},
];

var table1 = document.createElement('table');
table1.border = 1;




for(let i = 0; i < studenti.length; i++){
	var tr = document.createElement('tr');
	var td = document.createElement('td');

	var td1 = document.createElement('td');
	td1.innerText = studenti[i].ime;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.innerText = studenti[i].prezime;
	tr.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = studenti[i].prosek;	
	tr.appendChild(td3);

	table1.appendChild(tr);
}

body.appendChild(table1);


