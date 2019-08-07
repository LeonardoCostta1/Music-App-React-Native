
const INICIAL_STATE = {
    currentTimePlayer:'00:00',
    durationMusic:'00:00',
    artist:'Ariana Grande',
    musicName:'One Last Time',
    PlayIcon:'ios-play',
    volume:0
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

    return state
}