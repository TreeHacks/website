import { Parallax } from 'react-scroll-parallax';
import Layer2 from "./layer2.svg?react";
import Layer3 from "./layer3.svg?react";
import Layer4 from "./layer4.svg?react";
import Layer5 from "./layer5.svg?react";
import Layer6 from "./layer6.svg?react";
import "./Parallax.css";

const SCROLL_INCREMENT = -7;
const CLIENT_WIDTH = document.documentElement.clientWidth;
const CLIENT_HEIGHT = document.documentElement.clientHeight;
const SVG_ASPECT_RATIO = 1728 / 1117;
const CLIENT_ASPECT_RATIO = CLIENT_WIDTH / CLIENT_HEIGHT;
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
};

const Layer: React.FC<LayerProps> = ({ speed, SVG }) => {
  const end = speed * SCROLL_INCREMENT;
  const height = PARALLAX_PORTION * CLIENT_HEIGHT * CLIENT_ASPECT_RATIO / SVG_ASPECT_RATIO;

  return (
    <Parallax
      startScroll={0}
      endScroll={height}
      translateY={[0, -end]}
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: -speed
      }}
    >
      <SVG width="100%" height="auto" />
    </Parallax> 
  );
}

const ParallaxSection: React.FC = () => (
  <div style={{ position: 'absolute', width: '100%' }}>
    <div id='titles'>
      <h1>TREEHACKS</h1>
      <h2>Feb 14-16, 2025</h2>
    </div>
    {LAYERS.map((layer, i) => <Layer speed={LAYERS.length - i} SVG={layer} />)}
  </div>
);

export default ParallaxSection;