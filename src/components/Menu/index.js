import React from 'react'

import {Container,Title} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Menu (){
    return(
        <Container>
            <Icon name="ios-menu" size={24} color="#fff"/>
            <Title>Artist</Title>
            <Icon name="ios-information-circle-outline" size={24} color="#fff"/>
        </Container>
    )
}