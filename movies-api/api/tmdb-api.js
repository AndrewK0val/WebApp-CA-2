import fetch from 'node-fetch';



export const getMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        );
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}


export const getUpcomingMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    } 
};


export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }};


    export const getMovie = (args) => {
        console.log(args)
        const [, idPart] = args.queryKey
        const { id } = idPart
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message)
          }
          return response.json()
        })
        .catch((error) => {
          throw error
       })
      }


      export const getMovieReviews = (id) => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
          .then((res) => res.json())
          .then((json) => {
            // console.log(json.results)
            return json.results
          })
      }