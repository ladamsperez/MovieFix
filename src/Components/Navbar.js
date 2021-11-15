import React, { Component } from "react"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }
  handleSearch = e => {
    e.preventDefault()
    window.location.href = `#/results/${this.state.query}`
    window.location.reload()
  }

  render() {
    return (
      <nav className="navbar">
        <a href="#/">HOME</a>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={e => this.setState({ query: e.target.value })}
          />
          <button type="submit" onClick={this.handleSearch}>
            <i className="fa fa-search" />
          </button>
        </form>
      </nav>
    )
  }
}
