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


for(let i = 100; i > 0; i = i - 3){
	if(i % 2 == 0){
		console.log(i);
	};
};

for(let i = 0; i < thumbs.lenth; i++){
	// console.log(thumbs[i]);
	thumbs[i].addEvenetListener('click', function(){
		console.log(this);
	});
}


