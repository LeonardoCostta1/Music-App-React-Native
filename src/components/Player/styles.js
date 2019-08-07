import { Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`

flex:1;
backgroundColor:#fff;

borderTopLeftRadius:80;
paddingLeft:30;
paddingRight:30;
paddingBottom:30;
alignItems:center;
position:absolute;
left:0;
right:0;
bottom:0;
height:86%;


`;

export const Bar = styled.View`

height:4;
width:20%;
background:#ddd;
borderRadius:10;
marginBottom:20;
marginTop:5;

`;

export const CoverWrapper = styled.View`

flex:4;
justify-content:center;
align-items:center;

`;
export const Cover = styled.Image`
height:150;
width:150;
backgroundColor:#eee;
borderRadius:20;
marginBottom:20;
`;

export const InfoArtistWrapper = styled.View`
justify-content:center;
align-items:center;
flex:2;

`;

export const Music = styled.Text`
font-size:24;
font-weight:bold;
color:#14142c;

`;
export const Artist = styled.Text`
color:#7F9BFC;
`;

export const PlayerWrapper = styled.View`
flex:2;
flex-direction:row;
justify-content:center;
align-items:center;
`;

export const NextButton = styled.Text``;

export const PlayButton = styled.TouchableOpacity`

height:70;
width:70;
borderWidth:1;
borderColor:#ccc;
borderRadius:35;
marginLeft:20;
marginRight:20;
textAlign:center;
flex-direction:row;
justify-content:center;
align-items:center;

`;

export const PrevButton = styled.Text``;



export const SliderVolumeWrapper = styled.View`

flex:1;
flexDirection:row;
justifyContent:space-between;
align-items:center;
`;

export const SliderVol = styled.Slider`
width:90%;
`;