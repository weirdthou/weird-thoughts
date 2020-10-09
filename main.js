// Where the fetched data will be inserted
const content = document.querySelector('.text-content');

async function fetchPost() {
  // API endpoint
  const url = 'https://www.reddit.com/r/showerthoughts/top.json';

  const response = await fetch(url); // response from API endpoint
  const data = await response.json(); // Turning the response into JSON

  // Putting the fetched data in DOM
  for (const child of data.data.children) {
    content.innerHTML += `
      <div class"post">
        <h3>${child.data.title}</h3>
      </div>
    `;
  }
}

fetchPost();
