import React, { Component } from "react";
import Like from "./Like";
import TableBody from "./TableBody";
import TableHeader from "./tableHeader";

class MoviesTable extends React.Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (m) => (
        <Like Liked={m.liked} onClick={() => this.props.onLike(m)} />
      ),
    },
    {
      key: "delete",
      content: (m) => (
        <button
          onClick={() => this.props.onDelete(m._id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
