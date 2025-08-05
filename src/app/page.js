'use client';

import { Header, Intro, About, Projects, Services, Contact, Footer, NavHandler, Portfolio } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavHandler />
      
      {/* Header */}
      <Header />

      {/* Intro */}
      <Intro />

      {/* About */}
      <About />

      {/* Resume */}
      <Projects />

      {/* Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
