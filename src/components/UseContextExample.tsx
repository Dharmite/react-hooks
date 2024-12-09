import React from 'react'
import UseContextProfileExample from './UseContextProfileExample'
import UseContextFooterExample from './UseContextFooterExample'

export default function UseContextExample() {
  return (
    <div style={{
      border: '1px solid black',
      padding: '10px',
      margin: '10px'
    }}> Main component
      <UseContextProfileExample />
      <UseContextFooterExample />
    </div>
  )
}
