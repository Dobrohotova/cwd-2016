function m2b(megabyte){
	var output = megabyte * 1048576;
	// console.log(output);
	return output;
}

function b2m(byte){
	var output = byte / 1024 / 1024;
	// console.log(output);
	return output;
}


var a = m2b(3);
console.log(a);

// m2b();

// b2m();



var godini = 38;

if(godini > 35){
	console.log('Mlad/a si');
} else {
	console.log('Star/a si');
}


var a = 10;
var b  = 27;

if(a > 4 && b < 50){
	console.log("VISTINA");
} else {
	console.log('NEVISTINA')
}


a = 5;
b = 10;
var c = 15;
var d = 25;


if(a < 10 && (b > 14 || c > 100) || !(d == 20)){
	console.log('vistina');
} else {
	console.log('nevistina');
}

var e = 7;

if(e <= 5){
	console.log('mal broj');
} else if(e > 5 && e <= 10){
	console.log('sreden broj');
} else {
	console.log('golem broj');
}




var ovoshje = 'Cresha';
var dolzhina_ovoshje = ovoshje.length;
console.log(dolzhina_ovoshje);




// function ubavoOvoshje(o){
// 	var br = o.length;


// 	if(br % 2 == 0){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


// ubavoOvoshje(cresha);


// return br % 2 == 0 ? true : false;

// return br % 2 == 0; 

// return 0.length % 2 == 0;




function ubavoOvoshje(ovoshje){

// var ubavoOvoshje = ovoshje.length;


if(ovoshje.length % 2 == 0){
	return true;
} else {
	return false;
}

}



var u = ubavoOvoshje('portokal');

if(u = true){
	console.log('Ovoshjeto e ubavo');
} else {
	console.log('Ovoshjeto ne e ubavo')
}








function matematika(operation, numbera, numberb){
	var znak = operation;
	var a = numbera;
	var b = numberb;

if(znak == '+'){
	return (a + b);
} else if(znak == '/'){
	return (a / b);
} else if(znak == '-'){
	return (a - b);
} else if(znak == '*'){
	return (a * b);
}

}

var s = matematika('+', 2, 4);
console.log(s); // 6

var d = matematika('/', 6, 3);
console.log(d); // 2

var o = matematika('-', 6, 3);
console.log(o); // 3

var m = matematika('*', 6, 3);
console.log(m); // 18


var grad = 'Skopje';

switch(grad){
	case 'Veles':
		console.log('Zdravo Veleshani!');
	break;

	case 'Skopje':
		console.log('Zdravo Skopjanishcha!');
	break;

	case 'Ohrid' :
		console.log('Zdravo Origjani!');
	break;

	default:
		console.log('Zdravo nepoznat choveku!');
	break;
}



function matematika(operation, numbera, numberb){
	var znak = operation;
	var a = numbera;
	var b = numberb;

switch(znak){
	case '+':
		return(a + b);
	break;
	case '/':
		return(a / b);
	break;
	case '-':
		return(a - b);
	break;
	case '*':
		return(a * b);
	break;
}

}

var s = matematika('+', 2, 4);
console.log(s); // 6

var d = matematika('/', 6, 3);
console.log(d); // 2

var o = matematika('-', 6, 3);
console.log(o); // 3

var m = matematika('*', 6, 3);
console.log(m); // 18