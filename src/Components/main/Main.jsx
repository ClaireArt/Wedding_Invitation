import React, { memo } from 'react';
import './Main.css';
import Main_Info from '../main_info/Main_Info';
import { mainBackground } from '../../images/Images';

function Main() {
  return (
    <main style={{ backgroundImage: `url(${mainBackground})` }}>
      <div className='container'>
        <div className='main'>
          <Main_Info />
        </div>
      </div>
    </main>
  )
}

export default memo(Main)