import React from 'react'

export default function Label({label,className}) {
  return (
    <label style={{textTransform:'capitalize'}} className={className}>{label}</label>
  )
}
