import React, { memo, useCallback } from 'react'

interface HeaderProps {
    newFunc: () => void;
}

const Header = memo(({ newFunc }: HeaderProps) => {
    console.log('Rendering Header')
    newFunc()
    return <h1>useCallback Example</h1>
})

export default function UseCallbackExample() {
    const [counter, setCounter] = React.useState(0)

    const newFunc = useCallback(() => {
        console.log('Callback function')
    }, [])

    return (
        <div>
            <Header newFunc={newFunc}/>
            <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
            <h1>{counter}</h1>
        </div>
    )
}
