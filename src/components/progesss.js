import React from 'react';

import './progress.css'

const Progress = ({value}) => {

  const fillerStyle = {
    height: '100%',
    width: `${value}%`,
    backgroundColor: 'yellow',
    position: 'relative'
  }

  return (
    <div className='ml-2 w-1/2'>
      <div style={fillerStyle} className="progress-bar" data-value={`${value}%`}></div>
    </div>
  )
}

export default Progress;