import React, { Component } from "react"

import Navbar from "./Navbar"
import MovieCard from "./MovieCard"

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null
    }
  }
  componentDidMount = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=171e2987e8b3b870adbd8ca8f489ae38&query=${
        this.props.match.params.query
      }&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    console.log(this.state.results)
    return (
      <div>
        <Navbar />
        <div className="movie-cards-container">
          {this.state.results ? (
            this.state.results.length !== 0 ? (
              this.state.results.map(movie => {
                if (movie.adult === false && movie.poster_path) {
                  return (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      posterSize={200}
                      posterPath={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      overview={movie.overview}
                    />
                  )
                } else return null
              })
            ) : (
              <h3>No Results Found</h3>
            )
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    )
  }
}
