import React, {useState, useEffect} from 'react'


function App() {
    
    const STARTING_TIME = 15
    const [text, setText] = useState("")

    const [timer, setTimer] = useState(STARTING_TIME)
    const [run, isRun] = useState(false)

    const [enable, isEnabled] = useState(false)
    const [numb, isNumbered] = useState(0)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function startClock() {
        isEnabled(true)
        setTimer(STARTING_TIME)
        setText('')
        isNumbered(0)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    useEffect( () => {
        setTimeout(() => {
            if (timer > 0 && enable){
                setTimer(time => time - 1)
                isRun(true)
            } else {
                isEnabled(false)
                isNumbered( calculateWordCount(text) )
                isRun(false)
            }
        }, 1000);
    }, [timer, enable])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!run}
            />
            <h4>Time remaining: {timer}</h4>
            <button  disabled={run} onClick={startClock}>Start</button>
            <h1>Word count: {numb}</h1>
        </div>
    )
}

export default App

 