var body = document.querySelector('body');
var ul = document.querySelector('.news-container');
// var visible = document.querySelector('.visible');

function loadItems(loading){
			var url = 'https://jsonplaceholder.typicode.com/posts';
			fetch(url).then(function(result){
			   result.json().then(function(data){	
			   			for(var i = 0; i < data.length; i++){
				   				var li = document.createElement('li');
								var p = document.createElement('p');
								var h4 = document.createElement('h4');

								h4.innerText = data[i].title;
								p.innerText = data[i].body;
								// p.style.display = 'none';

								li.addEventListener('click', function(klik){
									// klik.preventDefault();
									this.querySelector("p").className = "visible";
									// spa.style.transition = 'all .3s ease-in-out';
									// spa.style.fontSize = '13px';
									// var style = spa.style;
									// if(style.display === 'none'){
									// 	style.display = '';
									// } else {
									// 	style.display = 'none';
									// }

									// document.querySelector("p").className = "visible";


								});

								li.appendChild(h4);
								li.appendChild(p);
								ul.appendChild(li);

									p.addEventListener('click', function(){
											this.style.display = 'none';
										});
						}


				});
			})
}

loadItems();