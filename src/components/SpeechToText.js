import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function SpeechToText({mode}) {


    const mic = ()=>{

        if(listening){
            SpeechRecognition.stopListening();
        }
        else{
            SpeechRecognition.startListening();
        }
    }
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    
    
    return (
        <>
            <h1 className={`container text-${mode==='light'?'dark':'light'} my-3`}>Speech To Text Converter</h1>
            <div className={`container my-4 container text-${mode==='light'?'dark':'light'}`}>
                <strong className={`mx-2`}>Microphone: {listening ? 'on' : 'off'} </strong> 
                <p id="emailHelp" className={`form-text mx-2  text-${mode==='light'?'dark':'light'} `}>{listening ?'Speak Now':""}</p>
                <button className={`btn-${mode==='light'?'primary':'secondary'} btn  mx-1`} onClick={mic}>{listening ? 'Stop' : 'Start'}</button>
                {/* <button className={`btn-${mode==='light'?'primary':'secondary'} btn  mx-1`} onClick={SpeechRecognition.startListening}>Start</button> */}
                <button className={`btn-${mode==='light'?'primary':'secondary'} btn  mx-1`} onClick={resetTranscript}>Reset</button>
            </div>
            <div className={`container text-${mode==='light'?'dark':'light'} my-3`}>
                <h3>Your Text</h3>
                <hr />
                <p>{transcript}</p>

            </div>
        </>
    )
}
