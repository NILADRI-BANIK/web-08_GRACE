import React from "react";
import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Plan from "../component/Plan/Plan";
import Testimonials from "../component/Testimonials/Testimonials";
// import Message from "../component/Message/Message";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Plan />
      <Testimonials />
      
      {/* 
      
      
      <Message /> */}
    </>
  );
}

export default Home;
