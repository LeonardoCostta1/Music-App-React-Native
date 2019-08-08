export const  timeMusic = (segundos) =>{

    return{
        type:'TIME_MUSIC',
        payload:segundos
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

export const buttonPlay = ()=>{
    return{
        type:'PRESS_BUTTON',
        payload:false,
    }
}


export const buttonPause = ()=>{
    return{
        type:'PRESS_BUTTON_PAUSE',
        payload:true,
    }
}

export const minutosCont = (minutos) =>{
    return{
        type:'MINUTOS',
        payload:minutos
    }
}