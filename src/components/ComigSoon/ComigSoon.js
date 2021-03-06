import React from 'react';
import './ComingSoon.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../svg/list-view.svg";
import card from "../../svg/card-view.svg";
import comment from "../../svg/products/actions/comment.svg"
import gradeless from "../../svg/products/actions/gradeless.svg"
import share from "../../svg/products/actions/share.svg"
import heart from "../ComigSoon/Like_Follow.png";

const URL = "https://api.myjson.com/bins/p2dnz";
const getData = () => fetch(URL)
  .then(response => response.json());

class ComingSoon extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    movies: [],
  }
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
    const   settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: movies.length<4?2:4,
      slidesToScroll: 2
    };
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
        <Slider {...settings}>
          {movies.map(i => (
              <div className="poster" key={i.id}>
                <div><p className='title'>{i.title.length > 26 ? "Amile" : i.title}</p></div>
                <div><p className='title'>{i.year}</p></div>
                <div><img src={i.poster} alt="poster"className="photo"></img></div>
                  <div className='rank'>
                  <div><p className="number">{i.comments_count}</p></div>
                  <div><p className="number">{i.rank}</p></div>
                  <div><p className="number">{i.likes_count}</p></div>
                  </div>
                  <div className='rank'>
                  <div><p><img src={share} alt="share" className="atribute" /></p></div>
                  <div><p><img src={comment} alt="comment" className="atribute" /></p></div>
                  <div><p><img src={gradeless} alt="gradeless" className="atribute" /></p></div>
                  <div><p><img src={heart} alt="likes" className="atribute" /></p></div>
                  </div>
              </div>
            
          ))}
          </Slider>
          </div>
   
    )
  }
}
export default ComingSoon
