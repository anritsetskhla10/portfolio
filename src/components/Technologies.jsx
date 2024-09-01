import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 py-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandTypescript className='text-7xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TiHtml5 className='text-7xl text-orange-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss  className='text-7xl text-cyan-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaBootstrap  className='text-7xl text-purple-600'/>
            </div>
        </div>
      
    </div>
  )
}

export default Technologies 
