import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

export default function UseContextContactExample() {
    const {phoneNumber} = useContext(AppContext)
  return (
    <div style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
    }}>
        Context component example {phoneNumber}
    </div>
  )
}
