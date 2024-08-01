import React from 'react';
import Pad from "./components/Pad";

const pads = [
  {
    name:'boom',
    sound: require("./assets/sounds/213BPMMetronome.mp3").default,
    keyCode: "213 BPM Metronome",
    color:"#61dafb"
  },
  {
    name:'clap',
    sound: require("./assets/sounds/1721887657962Converted.mp3").default,
    keyCode: "1721887657962Converted",
    color:"#3cff8a"
  },
  {
    name: "hihat",
    sound: require("./assets/sounds/1721887691779Converted.mp3").default,
    keyCode: "1721887691779Converted",
    color:"#ff1f41"
  },
  {
    name: "kick",
    sound: require("./assets/sounds/1721887701257Converted.mp3").default,
    keyCode: "1721887701257Converted",
    color:"#dadada"
  },
  {
    name: "openhat",
    sound: require("./assets/sounds/1721887953418Converted.mp3").default,
    keyCode: "1721887953418Converted",
    color: "#f3fa47"
  },
  {
    name: "ride",
    sound: require("./assets/sounds/1721887964817Converted.mp3").default,
    keyCode: "1721887964817Converted",
    color: "#ff6d37"
  },
  {
    name: "snare",
    sound: require("./assets/sounds/fryingpan.mp3").default,
    keyCode: "fryingpan",
    color: "#ff6d37"
  },
  {
    name: "tink",
    sound: require("./assets/sounds/metaldooropening.mp3").default,
    keyCode: "metaldooropening",
    color: "#ff6d37"
  },
  {
    name: "tom",
    sound: require("./assets/sounds/metalpipe.mp3").default,
    keyCode: "Metal Pipe",
    color: "#ff6d37"
  },
  {
    name: "clap",
    sound: require("./assets/sounds/metalhitmemesound.mp3").default,
    keyCode: "metalhitmemesound",
    color: "#ff6d37"
  }
]

type SoundTypes = {
  keyCode: string,
  name: string,
  sound: any,
  color:string
}

const App:React.FC = () => {
  return (
    <div className="pad_container">
      {
        pads.map((pad:SoundTypes,index:any)=>{
          return <Pad key={index} keyCode={pad.keyCode} color={pad.color} name={pad.name} sound={pad.sound}/>
        })
      }
    </div>
  );
}

export default App;
