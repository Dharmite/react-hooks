import React from 'react'

export default function UseMemoExample() {
    // Cube of a number

    const [number, setNumber] = React.useState(0)
    const [counter, setCounter] = React.useState(0)

    const calculateCube = (num: number) => {
        console.log('Calculating cube')
        return num ** 3
    }

    // Without memoization it will recalculate the cube value every time the component re-renders
    // const cube = calculateCube(number)

    const memoizationCube = React.useMemo(() => calculateCube(number), [number])


    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <h1>The cube value of {number} is: {memoizationCube}</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
            <h1>{counter}</h1>
        </div>
    )
}
