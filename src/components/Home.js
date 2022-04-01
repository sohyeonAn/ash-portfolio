import React from "react";
import image from "../home.png";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt="주황색 배경"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi, I&apos;m Sohyeon.
        </h1>
      </section>
    </main>
  );
}

export default Home;
