fetch(
  "https://api.themoviedb.org/3/tv/1399/season/2?api_key=f07a453c7aaf1e5db98e6299a8b42491"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
