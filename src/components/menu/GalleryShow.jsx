import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import {graphql, useStaticQuery} from "gatsby";

export default function GalleryShow(props) {

  const data = useStaticQuery(
    graphql`
    query{
    allMenuCsv {
      edges {
        node {
          src,
          width,
          height
        }
      }
    }
  }`
  )

  const photos = data && data.allMenuCsv.edges
    .map(e => ({src: e.node.src, width: e.node.width, height: e.node.height}))

  console.log("what's photos %o", photos)


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);


  return (
    <article
      id="gallery"
      className={`${props.article === 'gallery' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
        }`}
      style={{display: 'none'}}
    >
      <h2 className="major">Gallery</h2>

      <Gallery photos={photos} onClick={openLightbox}/>
    </article>
  )

}
