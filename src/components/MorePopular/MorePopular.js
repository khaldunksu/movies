import React from 'react';
import list from "../../svg/list-view.svg";
import card from "../../svg/card-view.svg";
import './MorePopular.scss';
import DataMovies from '../DataMovies/DataMovies'
const URL = "https://api.myjson.com/bins/p2dnz";
const getData = () => fetch(URL)
  .then(response => response.json());

class MorePopular extends React.Component{
  state = {
    movies: [],
  }
  componentDidMount() {
    getData()
      .then((movies) => {
        this.setState({
          movies
        });
      });
  }

  moviesFilter = () => {
    getData()
      .then((movies) => {
        this.setState({
          movies: movies.filter(item => item.type === 'Movie'),
        });
      });
  }

  tvFilter = () => {
    getData()
      .then((movies) => {
        this.setState({
          movies: movies.filter(i => i.type === "TV-Show")
        });
      });
  }

  allFilter = () => {
    getData()
      .then((movies) => {
        this.setState({
          movies: movies
        });
      });
  }
render(){  
return(
  <div className="container">
  <div className="container_filter">
    <p className="heading">More Popular</p>
    <div className="filter">
      <button className="filter_button"
        type="button" onClick={this.allFilter}>All</button>
      <button className="filter_button"
        type="button"
        onClick={this.moviesFilter}
      >Movies</button>
      <button className="filter_button"
        type="button"
        onClick={this.tvFilter}>TV Shows</button>
    </div>
    <div>
      <img src={card} alt="card view" className="filter_img" />
      <img src={list} alt="list view" className="filter_img" />
    </div>
  </div>
  <DataMovies movies={this.state.movies} />
</div>
        )
}
}
export default MorePopular
