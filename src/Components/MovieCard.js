import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <Link to={`/movie/${this.props.id}`} style={{ display: "inherit" }}>
          <img
            src={`https://image.tmdb.org/t/p/w${this.props.posterSize}/${
              this.props.posterPath
            }`}
            alt={this.props.title}
          />
        </Link>
        <div className="container">
          <h2>{this.props.title}</h2>
          <p className="year">({this.props.releaseDate.split("-")[0]})</p>
          <p className="overview">{this.props.overview}</p>
          <p className="footer">
            <Link to={`/movie/${this.props.id}`}>More Info...</Link>
          </p>
        </div>
      </div>
    )
  }
}
