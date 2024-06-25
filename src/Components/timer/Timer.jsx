import React, { memo, useEffect, useState } from 'react';
import './Timer.css';
import { useTranslation } from 'react-i18next';

function Timer() {
  const [sec, setSec] = useState(null);
  const [min, setMin] = useState(null);
  const [hours, setHours] = useState(null);
  const [day, setDay] = useState(null);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    let timer = setInterval(() => {
      const remainingTime = Math.floor(new Date(2024, 4, 14).getTime() - new Date().getTime());

      setSec(Math.floor((remainingTime % 60000) / 1000));
      setMin(Math.floor(remainingTime % (60000 * 60) / 60000));
      setHours(Math.floor(remainingTime % (60000 * 60 * 60) / (60000 * 60)));
      setDay(Math.floor(remainingTime % (60000 * 60 * 60 * 24) / (60000 * 60 * 24)));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <h1>{t('timer.0')}</h1>
      <div className='timer_content'>
        <div className='time'>
          <span>{day}</span>
          <span>{t('timer.1')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{min}</span>
          <span>{t('timer.2')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{hours}</span>
          <span>{t('timer.3')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{sec}</span>
          <span>{t('timer.4')}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(Timer)