/// <reference types="vite-plugin-svgr/client" />
import Layer1 from "./layer1.svg?react";
import Layer2 from "./layer2.svg?react";
import Layer3 from "./layer3.svg?react";
import Layer4 from "./layer4.svg?react";
import Layer5 from "./layer5.svg?react";
import Layer6 from "./layer6.svg?react";
import NavigationBar from "../NavBar/NavBar";
import "./Parallax.css";
import About from "./about.svg?react";
import AboutSection from "../About/about";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxSection: React.FC = () => {

  return (
    <div className="parallax">
      <Parallax pages={2} className='animation'>

        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="layer6"><Layer6 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.55}>
          <div className="animation_layer parallax" id="layer5"><Layer5 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="layer4"><Layer4 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer3"><Layer3 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="layer2"><Layer2 className='animation_image'/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="layer1"> <Layer1 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <NavigationBar />
          <div id='titles'>
              <h1>TREEHACKS</h1>
              <h2>Feb 14-16, 2025</h2>
            </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className='animation_layer parallax' id='about'> <About className="animation_image"/></div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
};

export default ParallaxSection;