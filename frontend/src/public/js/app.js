document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/news');
    const data = await response.json();
    const items = data.data; 

    let featuredNews = '';
    let newsList = '';

    items.forEach((item, index) => {
      if (index === 0) {
        featuredNews = `
          <img id="featured-img" src="${item.image || ''}" alt="${item.title}">
          <div class="article-content">
            <h2 id="featured-title">${item.title}</h2>
            <p id="featured-desc">${truncateText(item.description, 150)}</p>
            <a id="featured-link" href="${item.link}" class="read-more">Leia mais</a>
          </div>
        `;
      } else {
        newsList += `
          <div class="news-article">
            <img src="${item.image || ''}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${truncateText(item.description, 120)}</p>
            <a href="${item.link}" class="read-more">Leia mais</a>
          </div>
        `;
      }
    });

    //colocando no html//
    document.querySelector('.featured-article').innerHTML = featuredNews;
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