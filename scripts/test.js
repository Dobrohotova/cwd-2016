var url = 'https://jsonplaceholder.typicode.com/photos';

fetch(url).then(function(result){

	result.json().then(function(r){
		var list = document.querySelector('#albumList')


		for(let i = 0; i < r.length; i++){
			var ul = document.querySelector('#albumList');
			var li = document.createElement('li');

			var li1 = document.createElement('li');
			li1.innerText = r[i];
			ul.appendChild(li1);

			var div = document.createElement('div');
			li.appendChild(div);
			var img = document.createElement('img');
			// img = 'http://placehold.it/600/771796' + r.url;
			// div.appendChild(img);
			var title = document.createElement('p');
			title.innerText = r.title;
			div.appendChild(title);






			// var li2 = document.querySelector('img').src;
			// li2 = 'http://placehold.it/600/' + r.url;
			// ul.appendChild(li2);

			// var li3 = document.createElement('li');
			// li3.innerText = r[i].thumbnailUrl;
			// ul.appendChild(li3);

			ul.appendChild(li1);
			// ul.appendChild(li2);
			// ul.appendChild(li3);
		}

		var body = document.querySelector('body');
		body.appendChild(ul);
		
		// var body = document.querySelector('body');
		// var list = document.querySelector('#albumList')
		// var title = document.querySelector('.title'); 
		// var url = document.querySelector('.url'); 
		// var thumbnailUrl = document.querySelector('.thumbnailUrl');
		// var url2 = 'http://placehold.it/600/' + r.url; 
		// var thumbnailUrl2 = 'http://placehold.it/150/dff9f6' + r.thumbnailUrl; 
		// title.innerText = r.title;
		// url.innerText = r.url;
		// thumbnailUrl.innerText = r.thumbnailUrl;


		function thumbnails(thumb_selector, list_selector){
			var thumbs = document.querySelectorAll(thumb_selector);
			// klasata na slikite da bide postavena thumb
			var list = document.querySelector(list_selector);

			for(let i = 0; i < thumbs.length; i++){
				thumbs[i].addEventListener('click', function(){
					list.querySelector('img').src = this.src;
					list.style.display = 'table';
				});
			}
list
			list.addEventListener('click', function(){
				list.style.display = 'none';
	});
}

		
		var input1 = document.querySelector('.inputFrom');
		var input2 = document.querySelector('.inputTo');

		input1.addEvenetListener('change', function(e){
			if(input1 > 0){
				// addEvenetListener('click', function)
			} else {
				alert('Out of range!');
			}
		});

	});
})
