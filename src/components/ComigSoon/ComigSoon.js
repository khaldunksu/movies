import React from 'react';
import './ComingSoon.scss';
import list from "../../svg/list-view.svg";
import card from "../../svg/card-view.svg";
import comment from "../../svg/products/actions/comment.svg"
import gradeless from "../../svg/products/actions/gradeless.svg"
import share from "../../svg/products/actions/share.svg"
import heart from "../ComigSoon/Like_Follow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const   settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: null,
  slidesToScroll: 2
};
const URL = "https://api.myjson.com/bins/p2dnz";
const getData = () => fetch(URL)
  .then(response => response.json());

class ComingSoon extends React.Component {
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
  render() {
    const { movies } = this.state;
    console.log(movies)
    return (
      <div className="container">
        <div className="container_filter">
          <p className="heading">Coming soon</p>
          <div className="filter">
            <button className="filter_button"
              type="button"
              onClick={this.allFilter}>All</button>
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
        {settings.slidesToShow=movies.length<4?2:4}
        <Slider {...settings} className="slider">
          {movies.map(i => (
            <>
              <div className="poster">
                <p className='title'>{i.title.length > 26 ? "Amile" : i.title}</p>
                <p className='title'>{i.year}</p>
                <img src={i.poster} alt="poster"className="photo"></img>
                  <div className='rank'>
                  <p className="number">{i.comments_count}</p>
                  <p className="number">{i.rank}</p>
                  <p className="number">{i.likes_count}</p>
                  </div>
                  <div className='rank'>
                  <p><img src={share} alt="share" className="atribute" /></p>
                  <p><img src={comment} alt="comment" className="atribute" /></p>
                  <p><img src={gradeless} alt="gradeless" className="atribute" /></p>
                  <p><img src={heart} alt="likes" className="atribute" /></p>
                  </div>
              </div>
            </>
          ))}
          </Slider>
        
      </div>
    )
  }
}
export default ComingSoon
