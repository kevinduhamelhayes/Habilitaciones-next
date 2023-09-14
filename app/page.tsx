"use client"
import React, { use } from 'react';
import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Body from '@/components/Body';


export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-full overflow-x-hidden relative flex flex-col items-center h-full bg-white ">
        <Navbar />
        <Hero />
        <Body />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
