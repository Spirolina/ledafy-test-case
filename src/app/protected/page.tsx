import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import Welcome from './components/Welcome';



export default function Dashboard() {
  return (
   <Welcome />
  )
}
