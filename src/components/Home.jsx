import React, { useRef } from "react";
import SocialCard from "./Card/socialCard/socialcard";
import img from "../Assets/me/hero-bg.svg";
function Home() {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-between items-center h-max relative py-20 mt-16">
      <div className=" font-museo-moderno font-system lg:pt-0 pt-20 md:p-10 ">
        <div className="name lg:text-6xl md:text-5xl text-3xl font-bold leading-tight mb-10">
          <span data-cursor-style>I AM </span>
          <p
            className="text-anim lg:text-7xl md:text-6xl text-5xl"
            style={{ position: "relative", zIndex: 1000 }}
          >
            Abdulvohid
          </p>
        </div>
        <p data-cursor-style className="text-gray-300 border-[#333] mt-12">
          I am a Front-end developer with 1 year of experience. I specialize in
          React.js, Next.js, and Vue.js. My skills include designing project
          architectures, developing custom libraries, and implementing them
          effectively. I am experienced in API integrations.
        </p>
        <div className="mt-10">
          <SocialCard />
        </div>
      </div>
      <div className="avatar">
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default Home;
