import React, { Component } from "react"

import Navbar from "./Navbar"

export default class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }
  }
  componentDidMount = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=0324eb4b8130330ff1662244a7f60777&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movie: data })
        console.log(this.state.movie)
      })
      .catch(err => {
        console.log(err)
      })
  }
  addCommasToNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.movie ? (
          <div
            className="movie-card-container"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                this.state.movie.backdrop_path
              })`
            }}
          >
            <div className="movie-card-container-overlay" />
            <div className="movie-card-big">
              <div className="container">
                <h2 style={{ marginBottom: 0 }}>{this.state.movie.title}</h2>
                <p style={{ margin: 0 }}>
                  ({this.state.movie.release_date.split("-")[0]})
                </p>
                <h4>{this.state.movie.tagline}</h4>
                <p className="overview">{this.state.movie.overview}</p>
                <div className="movie-stats">
                  <p>Rating: {this.state.movie.vote_average}/10</p>
                  <p>Runtime: {this.state.movie.runtime} Minutes</p>
                  <p>
                    Budget: ${this.addCommasToNumber(this.state.movie.budget)}
                  </p>
                  <p>
                    Box Office: ${this.addCommasToNumber(
                      this.state.movie.revenue
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    )
  }
}
