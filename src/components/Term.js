import React from 'react';
import Progress from './progesss'

const Term = ({name, count, percentageNum}) => {
  return (
    <div className='flex m-1 font-bold'>
      <div className='ml-2 w-1/4'>{name}</div>
      <Progress value={percentageNum} />
      <div className='ml-2 w-1/4'>{count}</div>
    </div>
  )
}

export default Term;
