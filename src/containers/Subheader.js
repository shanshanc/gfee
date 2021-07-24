import React from 'react';

import twitterSvg from '../images/twitter.svg';
import facebookSvg from '../images/facebook.svg';
import instagramSvg from '../images/instagram.svg';
import youtubeSvg from '../images/youtube.svg';

const Subheader = ({handleHideself}) => {
  return (
    <div className="flex justify-end bg-gray-600 text-white p-2">
      <div className="flex mr-20 justify-items-center">
        <span className="uppercase m-1">all</span>
        <span className="w-6 m-1">
          <a href={null}>
            <img src={twitterSvg} alt='twitter-logo' />
          </a>
        </span>
        <span className="w-6 m-1">
          <a href={null}>
            <img src={facebookSvg} alt='facebook-logo' />
          </a>
        </span>
        <span className="w-6 m-1">
          <a href={null}>
            <img src={instagramSvg} alt='instagram-logo' />
          </a>
        </span>
        <span className="w-6 m-1">
          <a href={null}>
            <img src={youtubeSvg} alt='youtube-logo' />
          </a>
        </span>
      </div>
      <div className='uppercase justify-self-center m-1' onClick={handleHideself}>hide</div>
    </div>  
  )
};

export default Subheader;
