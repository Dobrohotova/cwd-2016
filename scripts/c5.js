var ime = 'racecar';
var praznoIme = '';

for(let i = ime.length - 1; i >= 0; i--){
	// console.log(ime[i]);
	praznoIme += ime[i];
};

console.log(praznoIme);

if(ime == praznoIme){
	console.log('Ova e palindrom');
} else if(ime != praznoIme){
	console.log('Ova ne e palindrom');
};

