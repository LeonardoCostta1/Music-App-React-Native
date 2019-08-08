import React from 'react';

import {StatusBar} from 'react-native';

import Player from '../../components/Player'
import Menu from '../../components/Menu'
import Playlist from '../../components/Playlist'



import { Container} from './style';


 const Main = ()=>{


    return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Container>
      <Menu/>
      <Player/>
      <Playlist/>
      </Container> 
    </>
    );
  }

  export default Main;