export const FetchMovies = async (searchValue) => {
    const searchUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=8d55e7b4`
    const response = await fetch(searchUrl);
    return await response.json();
};