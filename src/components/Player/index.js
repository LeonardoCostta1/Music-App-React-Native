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
    Loop

} from './styles'

import { Animated } from 'react-native';

import { PanGestureHandler,State } from 'react-native-gesture-handler';

import audio from '../../assets/one.mp3'

import { connect} from 'react-redux';

import { timeMusic,togglePlay,togglePause,volume,buttonPlay,buttonPause } from '../../redux/actions/playerAction';


sound = new Sound(audio, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    alert('failed to load the sound', error);
    return;
  }
}); 

const Player = (props) =>{


    play = ()=>{
    if(props.isPlaying === true){
      sound.play((success) => {
        if (success) {
          sound.stop();
          sound.getCurrentTime((seconds) =>{
          sound.setCurrentTime(seconds = 0);
          });
          props.togglePause();
        } else {
         alert('playback failed due to audio decoding errors');
 
        }
      });
      props.togglePlay();
      props.buttonPlay();
    }
    else{
      sound.pause();
      props.togglePause();
      props.buttonPause();
      }
    }

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
        duration:300,
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
          }}>
            <Bar/>
           
            <CoverWrapper onPress={()=>{this._onPressPause()}}>
                <Cover source={require('../../assets/ariana.jpg')}/>
            </CoverWrapper>

       

        
            <InfoArtistWrapper>
                <Music>{props.musicName}</Music>
                <Artist>{props.artista}</Artist>
            </InfoArtistWrapper>

            <Loop>
              <View onPress={()=>{sound.setLoops()}} style={{width:20, marginLeft:50,marginRight:50}}>
              <Icon name="ios-repeat" size={20} color="#000"/>
              </View>
            
              <View style={{width:20, marginLeft:20,marginRight:20}}>
              <Icon name="ios-heart" size={20} color="#000"/>
              </View>

              <View style={{width:20,marginLeft:50,marginRight:50}}>
              <Icon name="ios-shuffle" size={20} color="#000"/>
              </View>
  
              </Loop>

            <TimerMusic/>
            <PlayerWrapper>
                <NextButton onPress={()=>{this.voltar()}} > <Icon name="ios-rewind" size={20} color="#000"/> </NextButton>
                <PlayButton onPress={()=>{this.play()}}>
                    <View style={styles.icon} >
                    <Icon name={props.PlayIcon} size={20} color="#000"/>
                    </View>
                </PlayButton>
                <PrevButton onPress={()=>{this.adinatar()}}><Icon name="ios-fastforward" size={20} color="#000"/> </PrevButton>
            </PlayerWrapper>

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
  volumeSystem:state.PlayerReducer.volume,
  isPlaying: state.PlayerReducer.isPlaying,
  
});

export default connect(mapStateToProps,{
  timeMusic,
  togglePlay,
  togglePause,
  volume,
  buttonPlay,
  buttonPause
})(Player);