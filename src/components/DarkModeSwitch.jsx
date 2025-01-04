'use client'
import React, { useEffect, useState } from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    const{theme,setTheme, systemtheme} = useTheme();
    const[mounted,setMounted] = useState(false); // mounted adalah state/kondisi saat ini
    // seMounted function fungsi yang berfungsi untuk mengupdate tema/theme
    // argumen didalam use state adalah default value dari state/kondisi bawaan
    useEffect(()=> setMounted(true),[]);
    const currentTheme = theme === 'system' ? systemtheme : theme
  return (
    <div>
        {mounted && currentTheme === 'dark' ? 
        <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>:
        <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>}
    </div>
  )
}
