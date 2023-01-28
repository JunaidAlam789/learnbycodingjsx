"use client"
import {useState} from 'react'
const wordlist= ["go","walk","run","fly","swim","jog"]
export default function WordGenerator(){
const [word, setWord]=useState("Start")
function randomWords(){

    setWord(wordlist[Math.floor(Math.random()*wordlist.length)])
    //setWord("go")
}

return (

<div>
    <button onClick={randomWords}>Get Word</button>
    <p>{word}</p>
    </div>

)

}