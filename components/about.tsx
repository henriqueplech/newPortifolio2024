"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
      
      Desde que me entendo por gente amo a <span className="font-medium">Tecnologia</span>, então decidi seguir meu sonho por desenvolver novas <span className="font-medium">tecnologias</span>, atuando desenvolvendo <span className="font-medium">Produtos Digitais</span> como sites web, ajudando empresas a construírem seu negócio com seu proprio portifolio de clientes e dados. Diante disso, sigo estudando e aprimorando meus conhecimentos por novas tecnologias no curso de <span className="font-medium">Engenharia de Software, faculdade Uniasselvi - Maceió</span>. Minha parte favorita na programação é a resolução de problemas; adoro a sensação de finalmente encontrar a solução ideal para um desafio. Meu stack principal é composto por React, Next.js, Node.js e liquid, e também tenho familiaridade com TypeScript e Prisma. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Atualmente, estou procurando uma posição em tempo integral como desenvolvedor de software.
      </p>

      <p>
        <span className="italic">Se eu não estiver codando</span>, pode me encontrar no discord, fala comigo que no tempo livre eu devo estar jogando uma ranqueada de Valorant. No entanto,{" "}
        <span className="font-medium">aprender novas tecnologias</span> É com certeza meu hobby favorito. Atualmente estou estudando{" "}
        <span className="font-medium">Inteligencia Artificial</span> também não vou perder essa onda né?! Acredito que elas podem fornecer ferramentas poderosas para resolver problemas do mundo real.
      </p>
    </motion.section>
  );
}
