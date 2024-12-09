import React from 'react'
import UseContextContactExample from './UseContextContactExample'

export default function UseContextProfileExample() {
  return (
    <div style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
    }}>
        <h1>Profile component example</h1>
        <UseContextContactExample />
    </div>
  )
}
