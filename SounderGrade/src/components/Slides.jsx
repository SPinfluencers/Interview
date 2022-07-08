import React from 'react';

const data = [
    {id: 1, name: "Yesturdays workout plan", workout: "biceps"},
    {id: 1, name: "Todays workout plan", workout: "Tricep"},
    {id: 1, name: "Tommarows workout plan", workout: "legs"}
]

function Slides({Slides}) {
    const [state, setState] = React.useState(0)

    const handleOnClickNext = () => {
        setState((next) => {
            if(next === 2) {
                return next
            }
            else return next + 1
        })
    }

    const handleOnClickPrev = () => {
        setState((prev) => {
            if(prev === 0) {
                return prev
            }
            else return prev - 1
        })
    }

console.log(data[state])
let item = data[state]

return (
        <div>
        <div id="navigation" className="text-center">

        <button data-testid="button-restart" className="small outlined" >Restart</button>

        <button data-testid="button-prev" className="small" onClick={() => handleOnClickPrev()}>Prev</button> <button

        data-testid="button-next" className="small" onClick={() => handleOnClickNext()} >Next</button> </div>

        <div id="slide" className="card text-center">

            <h1 data-testid="title">{item.name}</h1>

            <p data-testid="text">{item.workout}</p>

        </div>
        </div>
);
}
export default Slides
