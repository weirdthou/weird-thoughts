const content = document.querySelector('.text-content');

function totalUpdate() {
	fetch('https://www.reddit.com/r/showerthoughts/top.json')
		.then((response) => {
			return response.json();
		})
		.then((res) => {
			for (let i = 0; i < res.data.children.length; i++) {
				content.innerHTML += `<p>${res.data.children[i].data.title}</p>`;
			}
		});
}

totalUpdate();
