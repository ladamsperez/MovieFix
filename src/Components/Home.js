import React, { Component } from "react"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  handleSearch = e => {
    e.preventDefault()
    this.props.history.push(`/results/${this.state.query}`)
  }

  render() {
    return (
      <div className="home-background">
        <div className="home-container">
          <div className="home-title">
          <h1> Movie Fix </h1>
          <div className="home-title"></div>
          <form>
            <input
              type="text"
              placeholder="Find Movies, TV Shows and more..."
              onChange={e => this.setState({ query: e.target.value })}
            />
            <button type="submit" onClick={this.handleSearch}>
              Search
            </button>
          </form>
          </div>
          </div>
      </div>
    )
  }
}
