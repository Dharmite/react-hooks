import { useEffect, useState } from "react";

export default function UseEffectExample() {
    // Update counter every 2 seconds

    const [counter, setCounter] = useState(0);

    /*     useEffect(() => {
            // This function will be called when the component is mounted
            // Will only run setTimout once
            // Meaning that the counter will only be updated once
            const timeout = setTimeout(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 2000);
    
            return () => {
                clearTimeout(timeout);
            }
        }, []); */

    /*     useEffect(() => {
            // This function will be called when the component is mounted
            // Will run setTimout every time the counter is updated
            // Meaning that the counter will be updated every 2 seconds
            // Don't use useEffect without a dependency array!!! You can create an infinite loop
            const timeout = setTimeout(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 2000);
    
            return () => {
                clearTimeout(timeout);
            }
        }); */

    useEffect(() => {
        // This function will be called when the component is mounted
        // Will run setTimout every time the counter is updated
        // Meaning that the counter will be updated every 2 seconds
        const timeout = setTimeout(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        }
    }, [counter]);

    return (
        <div>Current counter value: {counter}</div>
    )
}
