import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovies, getUpcomingMovies, getGenres, getMovie, getReviews } from '../tmdb-api';
// import cors from 'cors';

const router = express.Router();

// No need to use cors(corsOptions) here, as CORS is already applied globally in your API
// router.use(cors(corsOptions));

// Get movie details

router.get('/tmdb/upcoming:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const upcomingMovies = await getUpcomingMovies(page);
  res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
  const genres = await getGenres();
  res.status(200).json(genres);
}));

router.get('/:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const movies = await getMovies(page);
  res.status(200).json(movies);
}));

router.get('/tmdb/reviews:id' , asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const reviews = await getReviews(id);
  res.status(200).json(reviews);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));



export default router;