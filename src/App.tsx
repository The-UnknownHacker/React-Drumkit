import React from 'react';
import Pad from "./components/Pad";

const pads = [
  {
    name: "Keyturn",
    sound: require("./assets/sounds/keyturn.wav").default,
    keyCode: "Keyturn",
    color:"#ff1f41"
  },
  {
    name:'Dialpad',
    sound: require("./assets/sounds/dialpad.mp3").default,
    keyCode: "Dialpad",
    color:"#61dafb"
  },
  {
    name: "Metal Door Opening",
    sound: require("./assets/sounds/metaldooropening.mp3").default,
    keyCode: "Metal Door Opening",
    color: "#ff6d37"
  },
  {
    name: "Pan",
    sound: require("./assets/sounds/pan.wav").default,
    keyCode: "Pan",
    color: "#ff6d37"
  },
  {
    name: "Marshmallow Walk",
    sound: require("./assets/sounds/marshmallow.wav").default,
    keyCode: "Marshmallow Walk", 
    color:"#dadada"
  },
  {
    name: "Mud Footsteps",
    sound: require("./assets/sounds/squishyfootsteps.wav").default,
    keyCode: "Mud Footsteps",
    color: "#ff6d37"
  },
  {
    name: "Wind Tunnel",
    sound: require("./assets/sounds/windtunnel.mp3").default,
    keyCode: "Wind Tunnel",
    color: "#ff6d37"
  },
  {
    name: "Whoosh",
    sound: require("./assets/sounds/woosh.wav").default,
    keyCode: "Whoosh",
    color: "#ff6d37"
  },
  {
    name:'Gong',
    sound: require("./assets/sounds/Gong.wav").default,
    keyCode: "Gong",
    color:"#3cff8a"
  },
  {
    name: "Meow",
    sound: require("./assets/sounds/meow.wav").default,
    keyCode: "Meow",
    color: "#f3fa47"
  },
  {
    name: "Fizz",
    sound: require("./assets/sounds/fizz.wav").default,
    keyCode: "Fizz",
    color: "#76c7c0"
  },
  {
    name: "Pop",
    sound: require("./assets/sounds/pop.wav").default,
    keyCode: "Pop",
    color: "#ff6d37"
  },
  {
    name: "Siren",
    sound: require("./assets/sounds/siren.wav").default,
    keyCode: "Siren",
    color: "#ff6d37"
  },
  {
    name: "Explosion",
    sound: require("./assets/sounds/explosion.wav").default,
    keyCode: "Explosion",
    color: "#ff6d37"
  },
  {
    name: "Boat Horn",
    sound: require("./assets/sounds/boat.wav").default,
    keyCode: "Boat Horn",
    color: "#ff6d37"
  },
  {
    name: "Woop",
    sound: require("./assets/sounds/woop.wav").default,
    keyCode: "Woop",
    color: "#ff6d37"
  },
  {
    name: "Teleport",
    sound: require("./assets/sounds/teleport.wav").default,
    keyCode: "Teleport",
    color: "#ff6d37"
  },
  {
    name: "Static",
    sound: require("./assets/sounds/static.wav").default,
    keyCode: "Static",
    color: "#ff6d37"
  },
  {
    name: "Landing",
    sound: require("./assets/sounds/landing.wav").default,
    keyCode: "Landing",
    color: "#ff6d37"
  },
  {
    name: "Burp",
    sound: require("./assets/sounds/burp.wav").default,
    keyCode: "Le Burp",
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
