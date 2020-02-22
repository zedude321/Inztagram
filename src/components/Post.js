import React, { useEffect, useRef } from 'react'
import './index.scss'
import M from 'materialize-css/dist/js/materialize.min.js'

const Post = (props) => {
     var instance;
     const carouselRef = useRef(null);

     useEffect(() => {
          instance = M.Carousel.init(carouselRef.current, { fullWidth: true, indicators: props.post.length > 1 ? true : false });

          return () => {
               instance.destroy();
          }
     }, [])

     return (
          <div className="row thing container" style={{ marginLeft: '0px' }}>
               <div className="container" style={{ backgroundColor: 'white' }}>
                    <ul className="collection col s12 m12 l8" style={{ padding: '0px' }}>
                         <li className="collection-item avatar">
                              <img className="circle" src={props.avatar} />
                              <span className="title">{props.name}</span>
                              <a href="#" className="secondary-content"><i className="material-icons black-text">more_horiz</i></a>
                         </li>
                         <div ref={carouselRef} className="carousel carousel-slider">
                              {props.post.map((imgUrl, indx) => <a key={indx} className="carousel-item"><img alt="image" src={imgUrl} className="imag" /></a>)}
                         </div>
                         <li className="collection-item" style={{ padding: '0px' }}>
                              <i className="material-icons small btns">favorite_border</i>
                              <i className="material-icons small btns">chat_bubble_outline</i>
                              <i className="material-icons small btns">send_outline</i>
                              <i className="material-icons small right btns" style={{ marginRight: '13px' }}>bookmark_border</i>
                              <p className="btns" style={{ marginTop: '5px', marginBottom: '5px' }}>3 likes</p>
                              <span className="btns">Commentor: Some Comment</span>
                              <p style={{ marginLeft: '15px', marginTop: '0px', fontSize: '12px', color: 'grey' }}>February 17th</p>
                         </li>
                         <li className="collection-item" style={{ padding: '0px', paddingLeft: '10px' }}>
                              <input id="search" type="search" placeholder="Add a comment..." required />
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default Post;