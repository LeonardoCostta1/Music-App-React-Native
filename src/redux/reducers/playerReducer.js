import { DrawerActions } from "react-navigation";

const INICIAL_STATE = {
        currentTimePlayer:'0',
        durationMusic:'0',
        artist:'Ariana Grande',
        musicName:'One Last Time',
        PlayIcon:'ios-play',
        volume:0,
        isPlaying:true,
        minutos:'0'
}


export default (state = INICIAL_STATE,action)=>{


    if(action.type == 'TIME_MUSIC'){

        return{ ...state,currentTimePlayer:action.payload}
    }

    if(action.type == 'TOGGLE_PLAY'){
        return{...state,PlayIcon:action.payload}
    }

    if(action.type == 'TOGGLE_PAUSE' ){
        return{...state,PlayIcon:action.payload}
    }

    if(action.type == 'VOLUME'){
        return{...state,volume:action.payload}
    }

    if(action.type == 'PRESS_BUTTON'){
        return{...state,isPlaying:action.payload}
    }

    if(action.type == 'PRESS_BUTTON_PAUSE'){
        return{...state,isPlaying:action.payload}
    }

    if(action.type == 'MINUTOS'){
        return { ...state,minutos:action.payload}
    }
    return state
}