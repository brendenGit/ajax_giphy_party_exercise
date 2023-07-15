// giphy api_key
const api_key = 'mJMpGtZnp7yyvXw1dp04rE7IhMtrKS0N';
const limit = 50;

// selectors
const giphyForm = document.getElementById('giphyForm');
const giphysContainer = document.getElementById('giphysContainer');
const removeGiphys = document.getElementById('removeGiphys');

// event listeners
giphyForm.addEventListener('submit',submitHandler);
removeGiphys.addEventListener('click',removeHandler);


async function searchGiphy(q) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: {api_key, q, limit} })
    const rng = Math.floor(Math.random()* 51);
    const imgSrc = res.data.data[rng].images.original.url;
    const giphy = document.createElement('img');
    giphy.setAttribute("src", imgSrc);
    giphysContainer.append(giphy);
}

function submitHandler(e) {
    e.preventDefault();
    let q = document.getElementById('giphySearch').value;
    searchGiphy(q);
    giphyForm.reset();
}

function removeHandler(e) {
    giphysContainer.innerHTML = "";
}