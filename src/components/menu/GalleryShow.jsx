import React, {useState, useCallback} from "react";
import {render} from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import pic03 from "../../images/pic03.jpg";

export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];


export default function GalleryShow(props) {


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


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
      {/*<ModalGateway sytle={{zIndex:100}}>*/}
        {/*{viewerIsOpen ? (*/}
          {/*<Modal onClose={closeLightbox}>*/}
            {/*<Carousel*/}
              {/*currentIndex={currentImage}*/}
              {/*views={photos.map(x => ({*/}
                {/*...x,*/}
                {/*srcset: x.srcSet,*/}
                {/*caption: x.title*/}
              {/*}))}*/}
            {/*/>*/}
          {/*</Modal>*/}
        {/*) : null}*/}
      {/*</ModalGateway>*/}
    </article>
  )

}