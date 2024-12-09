import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffectExample() {
    // UseLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations.
    // Use this to read from the DOM and synchronously re-render.
    // https://reactjs.org/docs/hooks-reference.html#uselayouteffect

    // useEffect vs useLayoutEffect
    // useEffect: Fires after the browser has painted.
    // useLayoutEffect: Fires before the browser has painted.

    // useEffect is recommended in most cases.
    // useLayoutEffect is recommended when you need to perform DOM measurements before the browser paints.

    
    useEffect(() => {
        // This effect will run after the browser has painted.
        console.log('Message from useEffect');
    }, []);

    useLayoutEffect(() => { 
        // This effect will run before the browser has painted.
        console.log('Message from useLayoutEffect');
    }, []);

  return (
    <div>
        <h2>Test message</h2>
    </div>
  )
}
