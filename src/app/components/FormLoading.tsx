import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function FormLoading() {
  return (
    <ThreeDots
  visible={true}
  height="60"
  width="60"
  color="#0075FF"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  wrapperClass=""
  />
  )
}
