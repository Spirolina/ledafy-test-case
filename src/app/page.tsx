import React, { useState } from 'react'
import RightPart from './components/RightPart'
import LeftPart from './components/LeftPart'
import {cookies} from 'next/headers';

export default function Home() {

  return (
  <main className=" flex flex-col lg:flex-row">
    <LeftPart />
    <RightPart/>
  </main> 

  );
}
