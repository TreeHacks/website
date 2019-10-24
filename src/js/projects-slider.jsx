import React, { Component } from 'react'
import { render } from 'react-dom'
// import cx from 'classnames'
import { projects as data } from './content.json';
import NonPassiveTouchTarget from './util/NonPassiveTouchTarget'
import touchWithMouseHOC from './util/touchWithMouseHOC'
import TouchCarousel, { clamp } from 'react-touch-carousel'
// import touchWithMouseHOC from 'react-touch-carousel'
// import './index.css'

const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function log(text) {
    console.log(text);
}

const CarouselContainer = (props) => {
    const { cursor, carouselState: { active, dragging }, ...rest } = props
    let current = -Math.round(cursor) % data.length
    while (current < 0) {
        current += data.length
    }

    const translateX = (cursor - cardPadCount) * cardSize + (window.innerWidth - cardSize) / 2
    console.log(translateX);
    console.log(props);
    return (
        <NonPassiveTouchTarget
            id='project-carousel'
            style={{ border: "1px solid black" }}
        >
            <NonPassiveTouchTarget
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
            />
        </NonPassiveTouchTarget >
    )
}

const Container = () => touchWithMouseHOC(CarouselContainer)

class App extends Component {
    renderCard(index, modIndex, touch) {
        console.log(touch);
        const item = data[modIndex]
        console.log(item.title + " " + index + " " + modIndex);
        return (
            <div key={index} class={`carousel-item main`} style={{ backgroundColor: "#afafaf" }}>
                <h1>{item.title}</h1>
            </ div>
        )
    }

    render() {
        return (
            <React.StrictMode>
                <TouchCarousel
                    component={CarouselContainer}
                    cardSize={cardSize}
                    cardCount={data.length}
                    // cardPadCount={cardPadCount}
                    // loop={true}
                    autoplay={enableAutoplay ? 2e3 : false}
                    renderCard={this.renderCard}
                    onRest={index => log(`rest at index ${index}`)}
                    onDragStart={() => log('dragStart')}
                    onDragEnd={() => log('dragEnd')}
                    onDragCancel={() => log('dragCancel')}
                />
            </React.StrictMode>
        )
    }
}

export default App;