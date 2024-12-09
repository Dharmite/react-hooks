import { useEffect, useRef, useState } from "react";

export default function UseRefExample() {
    const [counter, setCounter] = useState(0);
    const value = useRef(0);

    useEffect(() => {
        value.current += 1;
    });

    const inputElement = useRef<HTMLInputElement>(null);

    const onClickCb = () => {
        if (inputElement.current) {
            inputElement.current.style.backgroundColor = 'red';
        }
    }
    return (
        <><div>
            <button type="button" onClick={() => setCounter(counter => counter - 1)}>-1</button>
            <span>{counter}</span>
            <button type="button" onClick={() => setCounter(counter => counter + 1)}>+1</button>
        </div><div>
                <span>{value.current}</span>
            </div>
            <input type="text" ref={inputElement} />
            <button onClick={onClickCb}>Click here</button>
            </>
            
    )
}
