"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import Link from "next/link";
import anime from "animejs";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xwkdgbpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      alert(`Erro ao enviar a mensagem: ${error.message}`);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: section,
            opacity: [0, 1],
            translateY: [100, 0],
            easing: "easeOutExpo",
            duration: 1500,
          });

          anime({
            targets: ".social-icons > div",
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200, { start: 1000 }),
            easing: "easeOutExpo",
          });

          anime({
            targets: ".form-input",
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(200, { start: 1500 }),
            easing: "easeOutExpo",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative opacity-0"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Entre em Contato</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou sempre aberto para conversar. Entre em contato através desta área para se conectar!
        </p>
        <div className="social-icons flex flex-row gap-4 mt-6">
          {[
            { href: "https://www.instagram.com/denis.desenvolvedor", icon: <FaInstagram size={40} /> },
            { href: "https://www.linkedin.com/in/denis-scarabelli/", icon: <FaLinkedin size={40} /> },
            { href: "https://github.com/DenisCDev", icon: <FaGithub size={40} /> },
            { href: "https://medium.com/@denisscarabelli5", icon: <FaMedium size={40} /> },
          ].map((social, index) => (
            <div key={index}>
              <Link href={social.href} target="_blank">
                <span className="text-white hover:text-yellow-500 transition-colors duration-300">
                  {social.icon}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="form-input mb-4">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
              placeholder="seuemail@gmail.com"
            />
          </div>
          <div className="form-input mb-4">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
              placeholder="O assunto é..."
            />
          </div>
          <div className="form-input mb-4">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
              placeholder="Vamos falar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
