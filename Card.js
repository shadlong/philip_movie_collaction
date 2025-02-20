import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Card = (movie) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie" ref={cardRef}>

                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
