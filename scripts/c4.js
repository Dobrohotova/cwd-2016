// var kopce = document.querySelector('.btn');
// console.log(kopce);

// kopce.addEvenetListener('click', function(){
// 	box.style.backgroundColor = 'red';
// 	// alert('KLIK!');
// });

// for(let i = 100; i > 0; i--){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	};
// };


// for(let i = 100; i > 0; i = i - 3){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	};
// };

// for(let i = 0; i < thumbs.lenth; i++){
// 	// console.log(thumbs[i]);
// 	thumbs[i].addEvenetListener('click', function(){
// 		console.log(this);
// 	});
// }

var tb1 = document.querySelector('.textbox1');
var tf1 = document.querySelector('.textfield1');
var tf2 = document.querySelector('.textfield2');

tb1.addEvenetListener('keydown', function(e){
	tf1.innerText = tb1.value;
	tf2.innerHTML = tb1.value;
});

