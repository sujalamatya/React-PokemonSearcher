import React from 'react'

export default function Button({label,className}) {
  return (
    <button className={className}>{label}</button>
  )
}
