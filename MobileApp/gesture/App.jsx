import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import BottomSheet from './components/BottomSheet';
import CircularProgress from './components/CircularProgress';
import EventData from './components/EventData';
import FlatAnimated from './components/FlatAnimated';
import Interpolate from './components/Interpolate';
import Interpolation2 from './components/Interpolation2';
import PanGesture from './components/PanGesture';
import PerspectiveMenu from './components/PerspectiveMenu';
import PinchGesture from './components/PinchGesture';
import RippleEffect from './components/RippleEffect';
import RotationGesture from './components/RotationGesture';
import Swip from './components/Swip';

export default function App() {
  return (
    <>
      {/* <StatusBar backgroundColor="rgba(0, 0, 256, .5)" /> */}
      {/* <PanGesture /> */}
      {/* <Interpolate /> */}
      {/* <Interpolation2 /> */}
      {/* <PinchGesture /> */}
      {/* <CircularProgress /> */}
      {/* <Swip /> */}
      {/* <RippleEffect /> */}
      <PerspectiveMenu />
      {/* <FlatAnimated /> */}
      {/* <BottomSheet /> */}
      {/* <EventData /> */}
      {/* <RotationGesture /> */}
    </>
  );
}
