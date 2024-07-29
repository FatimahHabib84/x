import React from 'react'

function YouMayLike(props) {
  return (
    <div className='flex flex-row items-center w-full justify-between'>
        <div className='flex flex-row items-center gap-2'>
        <img className='w-10 h-10 rounded-full' src={props.imgsrc} />
        <div className='flex flex-col'>
        <h1 className='font-bold text-secondary'>{props.uname}</h1>
        <p className='text-sm text-neutral'>{props.hashname}</p>
        </div>
        </div>
        <button className='btn btn-secondary rounded-full h-4 text-base justify-end'>متابعة</button>
    </div>
)
}

export default YouMayLike