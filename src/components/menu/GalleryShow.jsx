import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import {graphql, useStaticQuery} from "gatsby";
import {photos} from './gallery/photos'


export default function GalleryShow(props) {




  return (
    <article
      id="gallery"
      className={`${props.article === 'gallery' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
        }`}
      style={{display: 'none'}}
    >
      <h2 className="major">Gallery</h2>

      <Gallery photos={photos} direction={"column"}/>
    </article>
  )

}
