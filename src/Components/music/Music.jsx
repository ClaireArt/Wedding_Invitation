import React, { memo, useRef } from 'react';
import './Music.css';

function Music() {
  const audioRef = useRef(null);

  const playaudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else audioRef.current.pause()
  }
  return (
    <div className="button-container_music" onClick={playaudio}>
      <audio controls ref={audioRef} style={{ display: 'none' }}>
        <source src={require('../../audio/Christina Perri feat. Steve Kazee - A Thousand Years (Part 2).mp3')} type="audio/mpeg" />
      </audio>
      <a className="button_music">
        <div className="note"></div>
      </a>
    </div>
  )
}

export default memo(Music)