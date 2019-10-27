import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import {graphql, useStaticQuery} from "gatsby";
import {photos} from './gallery/photos'


export default function GalleryShow(props) {

  // TODO how to externalise src ???
  // const data = useStaticQuery(
  //   graphql`
  //   query{
  //   allMenuCsv {
  //     edges {
  //       node {
  //         src,
  //         width,
  //         height
  //       }
  //     }
  //   }
  // }`
  // )

  // const photos = data && data.allMenuCsv.edges
  //   .map(e => ({src: e.node.src, width: e.node.width, height: e.node.height}))


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
