import React from 'react';

import {StatusBar} from 'react-native';

import Player from '../../components/Player'
import Menu from '../../components/Menu'



import { Container} from './style';


 const Main = ()=>{


    return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#14142c" />
    <Container>
      <Menu/>
      <Player/>
      </Container> 
    </>
    );
  }

  export default Main;