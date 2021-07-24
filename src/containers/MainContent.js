import React from 'react';
import Term from '../components/Term';

import { TERMS, TOTAL } from '../constants/index';


const MainContent = () => {
  return (
    <div className='flex flex-col flex-grow overflow-y-scroll'>
      <div className="uppercase text-gray-600 sticky top-0 bg-white">top terms</div>
      <div className="flex justify-between text-gray-600">
        <div className="uppercase">terms</div>
        <div className="uppercase"># of total posts</div>
        <div className="uppercase"># of posts</div>
      </div>
      <div className='flex flex-col'>
        {TERMS.map(term => (
          <Term
            key={term.name}
            name={term.name}
            count={term.count}
            percentageNum={Number.parseInt((term.count / TOTAL) * 100, 10)}
          />
        ))}
      </div>
    </div>
  )
}

export default MainContent;
