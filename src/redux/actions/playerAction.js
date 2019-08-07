export const  timeMusic = (seconds) =>{

    return{
        type:'TIME_MUSIC',
        payload:seconds
    }
}

export const togglePlay = ()=>{
    return {
        type:'TOGGLE_PLAY',
        payload:'ios-pause'
    }
}

export const togglePause = () =>{

    return{
        type:'TOGGLE_PAUSE',
        payload:'ios-play'
    }
}

export const volume = (volume) =>{

    return{
        type:'VOLUME',
        payload:volume
    }   

}