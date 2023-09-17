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
import Swipper from '@/components/Swipper';



export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-full relative flex flex-col items-center h-full bg-slate-200 ">
        <Navbar />
        <Hero />
        <Cards />

        <Body />
        <Swipper/>
        <Section />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
