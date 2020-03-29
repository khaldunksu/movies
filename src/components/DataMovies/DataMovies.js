import React from "react";
import comment from "../../svg/products/actions/comment.svg"
import gradeless from "../../svg/products/actions/gradeless.svg"
import share from "../../svg/products/actions/share.svg"
import heart from "../ComigSoon/Like_Follow.png";
import grade from "../../svg/grade.png"
import Footer from "../Footer/Footer";

const DataMovies = ({ movies }) => {
 
  return (
    <div>
      {movies.map(i => (
        <>
          <div className="list" key={i.id}>
            <div><img src={i.poster} alt="poster"className="movie_photo"></img></div>
            <div className="grade"><img src={grade} alt="gradeless" /></div>
            <div className="list_content">
              <p className='name'>{i.title.length > 26 ? "Amile" : i.title}</p>
              <p className='descrip'>{i.year}|Director:{i.director}|Writer:{i.writer}</p>
      <p className="content">{i.content}</p>
          <div className="info">
            <img src={share} alt="share" className="atribute" />
            <p className="numbers">{i.comments_count} | <img src={comment} alt="comment" className="atribute" /></p>
            <p className="numbers">{i.rank?i.rank:"0"} | <img src={gradeless} alt="gradeless" className="atribute" /></p>
            <p className="numbers">{i.likes_count} | <img src={heart} alt="likes" className="atribute" /></p>
            <p className="link"><a href={i.link} className="name a">Read more</a></p>
          </div>
            </div>
          </div>
        </>
      ))}
     <Footer />
     </div>
  )
}
export default DataMovies