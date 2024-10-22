import React, { useState } from 'react'

export default function Input({className,getSearchPoke}) {
  const [srch,setsrch] = useState('')
  const handlechange=(e)=>{
    setsrch(e.target.value)
    getSearchPoke(e.target.value)
  }
  return (
    <input type="text" className={className} onChange={handlechange} value={srch}/>
  )
}
