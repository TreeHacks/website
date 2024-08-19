import { Parallax } from 'react-scroll-parallax';
import Layer2 from "./layer2.svg?react";
import Layer3 from "./layer3.svg?react";
import Layer4 from "./layer4.svg?react";
import Layer5 from "./layer5.svg?react";
import Layer6 from "./layer6.svg?react";
import "./Parallax.css";

const SCROLL_INCREMENT = -7;
const SVG_ASPECT_RATIO = 1728 / 1117;
const PARALLAX_PORTION = 0.75; // portion of the parallax element to animate

const LAYERS = [
  Layer6,
  Layer5,
  Layer4,
  Layer3,
  Layer2
];

type LayerProps = {
  speed: number;
  SVG: typeof Layer2;
  clientWidth: number;
  clientHeight: number;
  isMobile: boolean;
};

const Layer: React.FC<LayerProps> = ({ speed, SVG, clientWidth, clientHeight, isMobile }) => {
  const end = speed * SCROLL_INCREMENT;

  const aspectRatio = clientWidth / clientHeight;
  const width = isMobile ? '130%' : '100%';
  const left = isMobile ? '-15%' : '0';
  const transform = isMobile ? 'translateX(-15%)' : 'none';
  const height = PARALLAX_PORTION * clientHeight * aspectRatio / SVG_ASPECT_RATIO;

  return (
    <Parallax
      startScroll={0}
      endScroll={height}
      translateY={[0, -end]}
      style={{
        position: 'absolute',
        left,
        width: width,
        transform,
        zIndex: -speed
      }}
    >
      <SVG width="100%" height="100%" />
    </Parallax>
  );
};

type ParallaxSectionProps = {
  clientWidth: number;
  clientHeight: number;
  isMobile: boolean;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ clientWidth, clientHeight, isMobile }) => (
  <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
    <div id='titles'>
      <h1>TREEHACKS</h1>
      <h2>Feb 14-16, 2025</h2>
    </div>
    {LAYERS.map((layer, i) =>
      <Layer
        speed={LAYERS.length - i}
        SVG={layer}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        isMobile={isMobile} 
      />)}
  </div>
);

export default ParallaxSection;