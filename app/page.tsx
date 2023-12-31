"use client"
import React, { use } from 'react';
import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Body from '@/components/Body';
import Cards from '@/components/Cards';
import Section from '@/components/Section';
import Swipper2 from '@/components/Swipper2';
import Swipper from '@/components/Swipper';
import Body3 from '@/components/Body3';
import Span from '@/components/Span';
import NewContent from '@/components/NewContent';
import NewContent1 from '@/components/NewContent1';
import NewContent2 from '@/components/NewContent2';
import NewContent3 from '@/components/NewContent3';


export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-screen overflow-hidden relative flex flex-col items-center bg-zinc-900 ">
        <Navbar />
        <Hero />
        <Cards />
        <div className='w-full ml-8 mr-8'>
          <div className='w-full mt-20 md:m-20 text-4xl font-bold text-white flex justify-center items-center'>
          <h1>Mas sobre nosotros</h1>
          
          </div>
        <NewContent1 />
        <NewContent2 />
        <NewContent3 />
        <NewContent />
        
        </div>
        <Span />
        
        {/*<Body3 /><Body />
        */}
        <Swipper/>
        <Section />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
