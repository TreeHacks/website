/// <reference types="vite-plugin-svgr/client" />
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import About from "./about.svg?react";
import Layer1 from "./layer1.svg?react";
import Layer2 from "./layer2.svg?react";
import Layer3 from "./layer3.svg?react";
import Layer4 from "./layer4.svg?react";
import Layer5 from "./layer5.svg?react";
import Layer6 from "./layer6.svg?react";
import "./Parallax.css";

const SCROLL_SPEED = 1 / 6;

const ParallaxSection: React.FC = () => {

  return (
    <div className="parallax">
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={SCROLL_SPEED}>
          <div id="layer6"><Layer6 className="animation_image"/></div>
          <div id='titles'>
            <h1>TREEHACKS</h1>
            <h2>Feb 14-16, 2025</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={SCROLL_SPEED * 2}>
          <div id="layer5"><Layer5 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={SCROLL_SPEED * 3}>
          <div id="layer4"><Layer4 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={SCROLL_SPEED * 4}>
          <div id="layer3"><Layer3 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={SCROLL_SPEED * 5}>
          <div id="layer2"><Layer2 className="animation_image"/></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={SCROLL_SPEED * 6}>
          <div id="layer1" className="about">
            <Layer1 className="animation_image"/>
            <About className="animation_image" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;