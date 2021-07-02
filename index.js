// fetch(
//   "https://api.themoviedb.org/3/tv/63174/season/1?api_key=f07a453c7aaf1e5db98e6299a8b42491"
// )
fetch("http://localhost:3500/popular")
  .then((res) => res.json())
  .then((data) => console.log(data));
