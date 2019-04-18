/*
// using XHR

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    const data = JSON.parse(xhttp.responseText);
    const { Title, Plot, imdbRating } = data;
    document.getElementById('movie-title').innerText = Title;
    document.getElementById('movie-plot').innerText = Plot;
    document.getElementById('movie-rating').innerText = imdbRating;
  }
};

const searchForMovie = title => {
  xhttp.open('GET', `http://www.omdbapi.com/?apikey=c5817894&t=${title}`);
  xhttp.send();
};
*/
/*
// using Axios

const searchForMovie = title => {
  axios
    .get(`http://www.omdbapi.com/?apikey=c5817894&t=${title}`)
    .then(response => {
      const { data } = response;
      const { Title, Plot, imdbRating } = data;
      document.getElementById('movie-title').innerText = Title;
      document.getElementById('movie-plot').innerText = Plot;
      document.getElementById('movie-rating').innerText = imdbRating;
    })
    .catch(err => {
      console.error(err);
    });
};
*/

// using Fetch

const searchForMovie = title => {
  fetch(`http://www.omdbapi.com/?apikey=c5817894&t=${title}`)
    .then(response => response.json())
    .then(data => {
      const { Title, Plot, imdbRating } = data;
      document.getElementById('movie-title').innerText = Title;
      document.getElementById('movie-plot').innerText = Plot;
      document.getElementById('movie-rating').innerText = imdbRating;
    })
    .catch(err => {
      console.error(err);
    });
};

document.getElementById('searchButton').onclick = () => {
  const { value } = document.getElementById('movie-input');
  searchForMovie(value);
};
