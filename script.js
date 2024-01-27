const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: 25,
};

const { url, type, id } = apiData;
const apiURL = `${url}${type}/${id}`;

async function generateHtml(url) {
  try {
    const res = await axios.get(url);
    const data = res.data;
    const html = `
        <div class="name">${data.name}</div>
        <img src="${data.sprites.front_default}"/>

    `;

    const pokemonDiv = document.querySelector(".pokemon");
    pokemonDiv.innerHTML = html;
  } catch (e) {
    console.log("error");
  }
}

generateHtml(apiURL);
