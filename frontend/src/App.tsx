import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { statement } from '@babel/template';

interface ImageProps {
  imageLocation: string;
}

interface NavProps {
  images: string[];
}

function Image(imageProp: ImageProps) {
  return (
      <img src={imageProp.imageLocation} height="500"/> 
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function randomImages(numImages: number) {
  var images = []
  var used_numbers = []
  for (var i = 0; i < numImages; i++) {
    var num = 1 + getRandomInt(6991)
    while (num in used_numbers)
    {
      num = 1 + getRandomInt(6991)
    }
    used_numbers.push(num)
    var filename = `/assets/Humans/1 (${num}).jpg`
    images.push(filename)
    ;
  }
  return images
}

function Navigator(navProps: NavProps) {

  var [state, setState] = useState(0)

  return (
  <div>
    <Image imageLocation={navProps.images[state]}></Image>
    <button onClick={() => setState(state+1)}>Next</button>
  </div>
  )
}

function App() {
  return (
    <div>
      <Navigator images={randomImages(5)}/>
    </div>
  );
}


export default App;
