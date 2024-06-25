import React, { memo, useEffect, useRef, useState } from 'react';
import './Main_Info.css';
import { useTranslation } from 'react-i18next';
import { birdLeft, birdRight, cake, imageBride, imageChurch, imageCouple, imageRestaurant, rings } from '../../images/Images';
import { church, ringsWedding } from '../../icons/icons';

function Main_Info() {
  const [eventItem, setEventItem] = useState(false);
  const [churchItem, setChurchItem] = useState(false);
  const [registryItem, setRegistryItem] = useState(false);
  const [banquetItem, setBanquetItem] = useState(false);
  const { t, i18n } = useTranslation();
  const eventRef = useRef(null);
  const churchRef = useRef(null);
  const registryRef = useRef(null);
  const banquetRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (eventRef.current && offset > eventRef.current.offsetTop -500) {
        setEventItem(true);
      }
      if (churchRef.current && offset > churchRef.current.offsetTop -500) {
        setChurchItem(true);
      }
      if (registryRef.current && offset > registryRef.current.offsetTop-500) {
        setRegistryItem(true);
      }
      if (banquetRef.current && offset > banquetRef.current.offsetTop-500) {
        setBanquetItem(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='main_info'>
      <h1>{t('maintitle')}</h1>
      <div className='data'>
        <span>14</span>
        <div></div>
        <span>05</span>
        <div></div>
        <span>2024</span>
      </div>
      {/* ------------------------------------------event------------------------------------- */}
      <div className='event' ref={eventRef}>
        {
          eventItem &&
          <div className='image_marriage right'>
            <img src={imageCouple} alt="not found" />
          </div>
        }
        {
          eventItem &&
          <div className='marriage_text left'>
            <span className='icon_marriage_ring'>{ringsWedding}</span>
            <div className='about'>
              <span className='marriage_title'>{t('party.0')}</span>
              <span>13:00</span>
              <span>Pharaon Complex (Cottage N2)</span>
              <span>{t('party.1')}</span>
            </div>
            <a href="https://yandex.by/maps/10262/yerevan/?ll=44.592467%2C40.252896&mode=routes&rtext=40.157360%2C44.510709~40.253241%2C44.591325&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D40482897162&z=18.36" target='_blank'>
              <button className='get odd'>{t('party.2')}</button>
            </a>
          </div>
        }
      </div>
      {/* -------------------------------------church------------------------------------------- */}
      <div className='church' ref={churchRef}>
        {
          churchItem &&
          <div className='marriage_text right'>
            <span className='icon_marriage_church'>{church}</span>
            <div className='about'>
              <span className='marriage_title'>{t('marriage.0')}</span>
              <span>15:15</span>
              <span>{t('marriage.1')}</span>
              <span>{t('marriage.2')}</span>
            </div>
            <a href="https://yandex.by/maps/10262/yerevan/?ll=44.541692%2C40.186529&mode=routes&rtext=40.157360%2C44.510709~40.186805%2C44.541124&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D15438436392&z=18.42" target='_blank'>
              <button className='get even'>{t('marriage.3')}</button>
            </a>
          </div>
        }
        {
          churchItem &&
          <div className='image_marriage left'>
            <img src={imageChurch} alt="not found" />
          </div>
        }
      </div>
      {/* ----------------------------------------------registry------------------------------------ */}
      <div className='registry' ref={registryRef}>
        {
          registryItem &&
          <div className='image_marriage right'>
            <img src={imageRestaurant} alt="not found" />
          </div>
        }
        {
          registryItem &&
          <div className='marriage_text left'>
            <div className='birds'>
              <div className='image_birds right_animation' >
                <img src={birdLeft} alt="not found" />
              </div>
              <div className='image_birds' >
                <img src={rings} alt="not found" />
              </div>
              <div className='image_birds left_animation' >
                <img src={birdRight} alt="not found" />
              </div>
            </div>
            <div className='about'>
              <span className='marriage_title'>{t('regMarriage.0')}</span>
              <span>17:00</span>
              <span>{t('regMarriage.1')}</span>
              <span>{t('regMarriage.2')}</span>
            </div>
            <a href="https://yandex.by/maps/10262/yerevan/?ll=44.483590%2C40.193367&mode=routes&rtext=40.157360%2C44.510709~40.194363%2C44.481590&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D46488697731&z=18.12" target='_blank'>
              <button className='get odd'>{t('regMarriage.3')}</button>
            </a>
          </div>
        }
      </div>
      {/* ----------------------------------------banquet--------------------------------------------- */}
      <div className='banquet' ref={banquetRef}>
        {
          banquetItem &&
          <div className='marriage_text right'>
            <div className='image_cake' >
              <img src={cake} alt="not found" />
            </div>
            <div className='about'>
              <span className='marriage_title'>{t('restaurant.0')}</span>
              <span>18:00</span>
              <span>{t('restaurant.1')}</span>
              <span>{t('restaurant.2')}</span>
            </div>
            <a href="https://yandex.by/maps/10262/yerevan/?ll=44.483590%2C40.193367&mode=routes&rtext=40.157360%2C44.510709~40.194363%2C44.481590&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D46488697731&z=18.12" target='_blank'>
              <button className='get even'>{t('restaurant.3')}</button>
            </a>
          </div>
        }
        {
          banquetItem &&
          <div className='image_marriage left'>
            <img src={imageBride} alt="not found" />
          </div>
        }
      </div>
    </div>
  )
}

export default memo(Main_Info)