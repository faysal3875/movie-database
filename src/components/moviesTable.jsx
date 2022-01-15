import React, { Component } from "react";
import Like from "./Like";
const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("title")}>
            Title
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("genre.name")}
          >
            Genre
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("numberInStock")}
          >
            Stock
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("dailyRentalRate")}
          >
            Rate
          </th>
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
              <Like Liked={m.liked} onClick={() => onLike(m)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(m._id)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
