import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

export default function UseContextFooterExample() {
    const { phoneNumber } = useContext(AppContext)
  return (
    <div style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
    }}>UseContextFooterExample: {phoneNumber}</div>
  )
}
