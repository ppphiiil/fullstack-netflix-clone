// fetch(
//   "https://api.themoviedb.org/3/tv/airing_today?page=2&api_key=f07a453c7aaf1e5db98e6299a8b42491"
// )
fetch("http://localhost:3500/series/row/3/85801")
  .then((res) => res.json())
  .then((data) => console.log(data));
