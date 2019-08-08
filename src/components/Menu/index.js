import React from 'react'

import {Container,Title} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';

const Menu = (props) =>{
    {console.log(props)}
    return(
        <Container>
            <Icon name="ios-menu" size={24} color="#000"/>
            <Title>{props.artista}</Title>
            <Icon name="ios-information-circle-outline" size={24} color="#000"/>
        </Container>
    )
}
const mapStateToProps = state => ({

    artista: state.PlayerReducer.artist,

  });
  
  export default connect(mapStateToProps,null)(Menu);