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



export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-screen overflow-hidden relative flex flex-col items-center bg-zinc-900 ">
        <Navbar />
        <Hero />
        <Cards />
        <Span />
        {/*<Body3 />
        <Body />*/}
        <Swipper/>
        <Section />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
