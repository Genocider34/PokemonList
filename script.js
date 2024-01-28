const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: 25,
};

const { url, type } = apiData;
const apiURL = `${url}${type}/`;

const ids = function (id) {
  return id;
};

async function generateHtml(url, id) {
  try {
    const res = await axios.get(`${url}${id}`);
    const data = res.data;
    const html = `
        <div class="name">${data.name}</div>
        <img src="${data.sprites.front_default}"/>
    `;

    const elements = {
      body: document.querySelector("body"),
      pokemonDiv: document.createElement("DIV"),
    };
    const { body, pokemonDiv } = elements;

    pokemonDiv.className = "pokemon";
    body.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = html;
  } catch (e) {
    console.log("error");
  }
}

generateHtml(apiURL, 25);
generateHtml(apiURL, 40);
generateHtml(apiURL, 523);
generateHtml(apiURL, 619);
