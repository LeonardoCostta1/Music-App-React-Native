import React from 'react';

import { Container,PlaylistWrapper ,Music,Img,Sound,Artist} from './style';

import {data} from '../../services/data'

const Playlist = () => {
    return(

    
    <Container>
        <PlaylistWrapper>
            {data.music.map((music)=>{
                return(
                    <Music key={music.id}>
                    <Img>{music.img}</Img>
                    <Sound>{music.title}</Sound>
                    <Artist>{music.artist}</Artist>
                </Music>

                );
            })}
     
        </PlaylistWrapper>
    </Container>

    )
};

export default Playlist;
