// A test AJAX request with 'fetch'
const url = "https://rallycoding.herokuapp.com/api/music_albums";

/*
function fetchAlbums() {
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
}
*/

const fetchAlbums = async () => {
  const res = await fetch(url);
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
