"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import "./global.css";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gray-900 text-white flex flex-col pt-16">
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
