import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { footerBackground, handLeft, handRight, redHeart, wedding } from '../../images/Images';
import './Footer.css';

function Footer() {
    const { t, i18n } = useTranslation();
    const footerRef = useRef(null);
    const [viewhands, setViewHands] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > footerRef.current.offsetTop + 300) {
                setViewHands(true)
                console.log(footerRef.current.offsetTop);
            }

        })
    }, [])


    return (
        <footer style={{ backgroundImage: `url(${footerBackground})` } }  ref={footerRef}>
            <div className='container'>
                <div className='footer'>
                    <h1>{t('formText.0')}</h1>
                    <form onSubmit={handleSubmit}>
                        {/* ----------------------------------radio-btn-------------------------------------- */}
                        <div className='invitation'>
                            <input type='radio' id="rdo1" className="radio-input" name="radio-group" />
                            <label htmlFor="rdo1" className="radio-label" >
                                <span className="radio-border"></span>
                                {t('formText.1')}
                            </label>
                            <input type='radio' id="rdo2" className="radio-input" name="radio-group" />
                            <label htmlFor="rdo2" className="radio-label" >
                                <span className="radio-border"></span>
                                {t('formText.2')}
                            </label>
                        </div>
                        {/* --------------------------------------------------------------------------------- */}
                        <input type="text" placeholder={t('formText.3')} autoComplete='off' required />
                        <input type="text" placeholder={t('formText.4')} autoComplete='off' required />
                        <button className="button_answer">
                            {t('formText.5')}
                            <div className="button__horizontal"></div>
                            <div className="button__vertical"></div>
                        </button>
                    </form>
                    <div className='hands'>
                        {
                            viewhands &&
                            <div className='image_hands left_hand' ><img src={handLeft} alt="not found" /></div>
                        }
                        <div className='image_heart heart' ><img src={redHeart} alt="not found" /></div>
                        <div className='image_cell'><img src={wedding} alt="not found" /></div>
                        {
                            viewhands &&
                            <div className='image_hands right_hand' ><img src={handRight} alt="not found" /></div>
                        }
                    </div>
                    <h2>~{t('formText.6')}~</h2>
                </div>
            </div>
            <h1>tandz</h1>
        </footer>
    )
}

export default memo(Footer)