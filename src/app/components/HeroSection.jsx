"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import anime from "animejs";

const HeroSection = () => {
  useEffect(() => {
    anime({
      targets: ".animate-section",
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 700,
      easing: "easeOutQuad",
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="animate-section col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary">
              Olá, eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Denis",
                1500,
                "Dev Web",
                1500,
                "Nextjs Dev",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <blockquote className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl italic">
            &quot;
            Grandes programadores não são apenas solucionadores de problemas;<br />
            eles são criadores de possibilidades.&ldquo;
            <cite> - Bill Gates</cite>
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-yellow-600 to-yellow-800 hover:bg-yellow-500 text-white font-semibold text-lg shadow-md transition-transform transform hover:scale-100 duration-300 hover:from-purple-500 hover:to-indigo-500"
            >
              Contate-me
            </button>
            <Link
              href="https://drive.google.com/file/d/165UvJOXpUlPqJivLXtotEo0BMRFcE6Ys/view?usp=sharing"
              target="_blank"
              className="px-8 py-3 w-full sm:w-auto rounded-lg bg-yellow-600 hover:bg-indigo-500 text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-100 duration-300 mt-3 sm:mt-0"
            >
              Baixar Currículo
            </Link>
          </div>
        </div>
        <div className="animate-section col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="w-[300px] h-[250px] lg:w-[500px] lg:h-[350px] relative overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-100 duration-300">
            <iframe
              src="https://lottie.host/embed/4ce15160-9caf-4e23-879f-c255bcd9c300/zgUrMHDsnb.json"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ position: 'absolute', top: 0, left: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
