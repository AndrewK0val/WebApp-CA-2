
export const getMovies = (page) => {
  console.log("page: " + parseInt(page))
  return fetch(
    `http://localhost:8080/api/movies/${page}`, {headers: {'Authorization': window.localStorage.getItem('token')}}
  ).then((response) => {
    if (!response.ok) {
      return response.text().then(text => {
        throw new Error(text)
      })
    }
    return response.json()
  })
  .catch((error) => {
     throw error
  })
}

// export const getMovies = async () => {
//   const response = await fetch(
//     'http://localhost:8080/api/movies', {headers: {'Authorization': window.localStorage.getItem('token')}}
//   )
//   return response.json();
// };

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


export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message)
    }
    return response.json()
  })
  .catch((error) => {
    throw error
 })
}

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey
  const { id } = idPart
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_image_language=en,null`
  ).then( (response) => {
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

  export const getUpcomingMovies = (page) => {
    console.log("page: " + parseInt(page))

    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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


  export const getTopRatedMovies = (page) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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


  export const getPopularMovies = (page) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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

  
  export const getSimilarMovies = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };


  
  export const getMovieActors = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=2`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getMovieActor = (args) => {
    console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getMovieActorsDetails = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };


  export const getActorPortofolio = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error;
    });
  };
