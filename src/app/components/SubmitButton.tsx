import React from 'react'

type SubmitButtonProps = { 
    text: string,
    onClick: any,
}

export default function SubmitButton({text, onClick}: SubmitButtonProps) {
  return (
    <div>
        <button type='submit' className='bg-secondary w-full rounded py-4 font-bold text-primary ' onClick={onClick}>
            {text}
        </button>
    </div>
  )
}
