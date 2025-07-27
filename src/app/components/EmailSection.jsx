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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ email: "", subject: "", message: "" });
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
      ([entry]) => {
        if (entry.isIntersecting) {
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
      className="
        grid md:grid-cols-2
        my-12 py-24
        gap-4 relative opacity-0
        bg-[#18191E]
        rounded-2xl
        border border-gray-700
        shadow-2xl shadow-black/50
        ring-1 ring-yellow-500/30
        transition-shadow duration-300
        hover:shadow-3xl hover:shadow-yellow-500/40
        w-full max-w-screen-xl mx-auto
        px-8 md:px-16
      "
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 blur-lg" />

      <div className="z-10">
        <h5 className="text-xl font-bold text-white mb-2">Entre em Contato</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou sempre aberto para conversar. Entre em contato através desta área para se conectar!
        </p>
        <div className="social-icons flex gap-4 mt-6">
          {[
            { href: "https://www.instagram.com/denis.desenvolvedor", icon: <FaInstagram size={40} /> },
            { href: "https://www.linkedin.com/in/denis-scarabelli/", icon: <FaLinkedin size={40} /> },
            { href: "https://github.com/DenisCDev", icon: <FaGithub size={40} /> },
            { href: "https://medium.com/@denisscarabelli5", icon: <FaMedium size={40} /> },
          ].map((social, i) => (
            <Link key={i} href={social.href} target="_blank" className="text-white hover:text-yellow-500 transition-colors duration-300">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {[
            { id: 'email', label: 'Seu email', type: 'email', name: 'email', placeholder: 'seuemail@gmail.com', value: formData.email },
            { id: 'subject', label: 'Assunto', type: 'text', name: 'subject', placeholder: 'O assunto é...', value: formData.subject },
          ].map(({ id, label, type, name, placeholder, value }) => (
            <div key={id} className="form-input mb-4">
              <label htmlFor={id} className="text-white text-sm mb-2 font-medium block">{label}</label>
              <input
                id={id}
                name={name}
                type={type}
                required
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md transition-colors duration-300"
              />
            </div>
          ))}

          <div className="form-input mb-4">
            <label htmlFor="message" className="text-white text-sm mb-2 font-medium block">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Vamos falar sobre..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md transition-colors duration-300"
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
