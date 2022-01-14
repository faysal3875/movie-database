import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./Like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
class Movies extends React.Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return "There are no movies in the database.";
    const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize )
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database. </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like Liked={m.liked} onClick={() => this.handleLike(m)} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m._id)}
                    className="btn btn-danger btn-sm m-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
