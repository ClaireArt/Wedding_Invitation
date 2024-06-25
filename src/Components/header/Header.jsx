import React, { memo, useEffect, useState } from 'react';
import './Header.css';
import Language from '../language/Language';
import Music from '../music/Music';
import Timer from '../timer/Timer';
import { down } from '../../icons/icons';
import { bouqetAnimation, female, headerBackground, male } from '../../images/Images';
import { useTranslation } from 'react-i18next';

function Header() {
  const [display, setDisplay] = useState(false);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 500)
  }, [])


  return (
    <header style={{ backgroundImage: `url(${headerBackground})` }}>
      <div className='container'>
        <Language />
        <div className='header'>
          <div className='header_content'>
            <Music />
            <h1>{t('headertitle')}</h1>
            <div className='name_logo'>
              {
                display &&
                <div className='couple couple_male'>
                  <img src={male} alt="not found" />
                </div>
              }
              {
                display &&
                <div className='couple_name'>
                  <img src={bouqetAnimation} alt="not found" />
                  <span className='male'>{t('couple.0')}</span>
                  <span className='female'>{t('couple.1')}</span>
                </div>
              }
              {
                display &&
                <div className='couple couple_female'>
                  <img src={female} alt="not found" />
                </div>
              }
            </div>
            <Timer />
            <span className='down'>{down}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)