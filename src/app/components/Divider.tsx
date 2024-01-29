import React from 'react'

export default function Divider() {
  return (
    <div className='mt-6'>
        <div className='flex items-center'>
            <div className='flex-1 h-[1px] bg-gray-200'></div>
            <div className='mx-4 text-gray-400'>or</div>
            <div className='flex-1 h-[1px] bg-gray-200'></div>
        </div>
    </div>
  )
}
