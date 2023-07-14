console.log("Let's get this party started!");
const apiKey = 'mJMpGtZnp7yyvXw1dp04rE7IhMtrKS0N';

async function searchGiphy() {
    const searchValue = "dogs"
    const res = await axios.get('api.giphy.com/v1/gifs/trending', { params: {apiKey} })
    console.log(res);
}

searchGiphy();