import { memo } from 'react'
// import "../patterns/pattern.css"

export const Divider = memo(({classn}) => {
  return(
    <div className={`Pattern9 ${classn}`}>
    <span></span>
    <span> <li className='one'/>   <li className='two'/>   <li className='three'/>  </span>
    <span></span>
  </div>
    )
})

export const Pattern9 = memo(({classn})=>{
  return (
    <div className={`Pattern9 ${classn}`}>
      <span></span>
      <span> <li className='one'/>   <li className='two'/>   <li className='three'/>  </span>
      <span></span>
    </div>
  )
  })
