import { useEffect, useState } from "react";

function DrumMachine() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    })
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <div id='drum-machine'>
      <div id='display'>You Clicked The <span>( {activeKey} )</span> Key</div>
      <div className='drum-pads'>
        {drumPads.map((drumPad) => (
          <button
            key={drumPad.url}
            onClick={() => { playSound(drumPad.keyTrigger) }}
            className='drum-pad'
            id={drumPad.url}>
            {drumPad.keyTrigger}
            <audio className='clip' id={drumPad.keyTrigger} src={drumPad.url}></audio>
          </button>
        ))}
      </div>
    </div>
  )
}

export default DrumMachine;
