async function getNews() {

    const city = document.getElementById("city").value;

    const response = await fetch(
        `http://localhost:5000/news/${city}`
    );

    const data = await response.json();

    const container =
        document.getElementById("newsContainer");

    container.innerHTML = "";

    data.articles.forEach(article => {

        container.innerHTML += `
        <div class="news-card">

            <img src="${article.urlToImage || ''}" />

            <h2>${article.title}</h2>

            <p>${article.description || ''}</p>

            <a href="${article.url}" target="_blank">
                Read More
            </a>

        </div>
        `;
    });
}