import React from 'react';
import {StyleSheet, View} from 'react-native'

import TimerMusic from '../TimerMusic';
import Sound from 'react-native-sound'

import Icon from 'react-native-vector-icons/Ionicons'
import {
    Container,
    Bar,
    CoverWrapper,
    Cover,
    InfoArtistWrapper,
    Music,
    Artist,
    PlayerWrapper,
    NextButton,
    PlayButton,
    PrevButton,
    SliderVol,
    SliderVolumeWrapper
} from './styles'

import { Animated } from 'react-native';

import { PanGestureHandler,State } from 'react-native-gesture-handler';

import audio from '../../assets/one.mp3'

import { connect} from 'react-redux';

import { timeMusic,togglePlay,togglePause,volume } from '../../redux/actions/playerAction';


sound = new Sound(audio, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    alert('failed to load the sound', error);
    return;
  }
}); 

const Player = (props) =>{

  
let isPlaying = 0;

  adinatar = ()=>{
    sound.getCurrentTime((seconds) =>{
      sound.setCurrentTime(seconds += 10);
    });
    }
    
    voltar = ()=>{
      sound.getCurrentTime((seconds) =>{
        sound.setCurrentTime(seconds -= 10) 
    });
    }

      play = ()=>{
        if(isPlaying == 0){
          _onPressPlay();
          isPlaying = 1;
          props.togglePlay();
        }
       else{
            sound.pause();
            isPlaying = 0;
            props.togglePause();
        }
      }
      _onPressPlay=()=>{
        sound.play((success) => {
          if (success) {
            alert('successfully finished playing');
            sound.stop();
          } else {
           alert('playback failed due to audio decoding errors');
           sound.pause();
          }
        });
      }
 
      sound.getSystemVolume((volume)=>{
         parseFloat(props.volume((volume * 100)));

      });

    // ANIMATION VIEW
    
  let offset = 0;

  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY:translateY,
        }
      }
    ],
    { useNativeDriver:true },
  )
  function onHandlerStateChange(event){
    if(event.nativeEvent.oldState == State.ACTIVE){

      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;


      if(translationY >= 100){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0)
        offset = 0;
      }

Animated.timing(translateY,{
  toValue: opened ? 520 : 0,
  duration:1000,
  useNativeDriver:true,

}).start(()=>{
  offset = opened ? 520 : 0;
  translateY.setOffset(offset);
  translateY.setValue(0)
});


    }
  }

   return(
       <>
       <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
      >
        <Container
        style={{
            transform:[{
              translateY:translateY.interpolate({
                inputRange:[0,450],
                outputRange:[0,450],
                extrapolate:'clamp'
              }),
          }],
          }}
        
        >
            <Bar/>
            <CoverWrapper onPress={()=>{this._onPressPause()}}>
                <Cover source={require('../../assets/ariana.jpg')}/>
            </CoverWrapper>

            <TimerMusic/>
        
            <InfoArtistWrapper>
                <Music>{props.musicName}</Music>
                <Artist>{props.artista}</Artist>
            </InfoArtistWrapper>

            <PlayerWrapper>
                <NextButton onPress={()=>{this.voltar()}} > <Icon name="ios-rewind" size={20} color="#14142c"/> </NextButton>
                <PlayButton onPress={()=>{this.play()}}>
                    <View style={styles.icon} >
                    <Icon name={props.PlayIcon} size={20} color="#14142c"/>
                    </View>
                </PlayButton>
                <PrevButton onPress={()=>{this.adinatar()}}><Icon name="ios-fastforward" size={20} color="#14142c"/> </PrevButton>
            </PlayerWrapper>
            <SliderVolumeWrapper>
            <Icon name="ios-volume-mute" size={20} color="#ccc"/>
                    <SliderVol
                        step={0.1}
                        minimumValue = { 0.0 }
                        maximumValue = { 1.0 }
                        value={parseFloat((props.volumeSystem).toFixed(1))}
                        minimumTrackTintColor="#14142c"
                        thumbTintColor="#14142c"
                        onValueChange={(vol) => sound.setSystemVolume(vol)}
                        />
                        <Icon name="ios-volume-high" size={20} color="#ccc"/>
            </SliderVolumeWrapper>
 
        </Container>
        </PanGestureHandler>
        </>
   );
}

const styles = StyleSheet.create({
    icon:{
   
        height:20,
        width:20,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
})

const mapStateToProps = state => ({

  artista: state.PlayerReducer.artist,
  currentTimePlayer: state.PlayerReducer.currentTimePlayer,
  durationMusic:state.PlayerReducer.durationMusic,
  musicName:state.PlayerReducer.musicName,
  PlayIcon:state.PlayerReducer.PlayIcon,
  volumeSystem:state.PlayerReducer.volume
  
});

export default connect(mapStateToProps,{
  timeMusic,
  togglePlay,
  togglePause,
  volume
})(Player);