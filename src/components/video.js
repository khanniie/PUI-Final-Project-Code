import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

const Video = ({
  coverImage,
  coverVideo,
}) => {

 const [loaded, setLoaded] = useState(false);

  let thumbnail;

  if (coverImage) {
    thumbnail = (
      <video
        autoPlay
        muted
        playsInline
        loop
        width="100%"
        poster={coverImage.publicURL}
      >
        <source src={coverVideo.publicURL} type="video/mp4" />
      </video>
    );
  } else {
    thumbnail = (
      <video autoPlay muted playsInline loop width="100%">
        <source src={coverVideo.publicURL} type="video/mp4" />
      </video>
    );
  }

  return (
          <LazyLoad placeholder={<img style={{width: "100%"}} src={coverImage.publicURL}/>}>
          {thumbnail}
          </LazyLoad>
  );
};

export default Video;
