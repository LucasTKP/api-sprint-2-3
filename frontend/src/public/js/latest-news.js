document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/news');
    const data = await response.json();
    const items = data.data; 

    let newsList = '';

    items.forEach((item) => {
        newsList += `
          <div class="news-article">
            <img src="${item.image || ''}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${truncateText(item.description, 120)}</p>
            <a href="${item.link}" class="read-more">Leia mais</a>
          </div>
        `;
    });

    //colocando no html//
    document.querySelector('#rss-feed').innerHTML = newsList;
  } catch (error) {
    console.error('Falha em carregar os dados RSS', error);
    document.querySelector('#rss-feed').innerHTML = '<h1>Falha em carregar os dados RSS.</h1>';
  }
});

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // trunca o texto e adiciona "..."
  }
  return text;
}