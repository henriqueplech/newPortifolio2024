import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduação em Engenharia de Software - Uniasselvi",
    location: "Maceió, Brasil",
    description:
      "Ínicio aos meus estudos no Bacharelado de Engenharia de Software, onde aprendi sobre desenvolvimento de software, engenharia de software, banco de dados, redes de computadores, metodologias ágeis, sistemas operacionais, entre outros.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Desenvolvedor Full Stack",
    location: "Maceió, Brasil",
    description:
      "Atuei desenvolvendo sites e aplicativos web, utilizando tecnologias como React, Next.js, Node.js, Express, PostgreSQL, Prisma, Tailwind, Figma, Git, entre outras. Prestando serviços para empresas locais.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Desenvolvedor Web",
    location: "São Paulo, Brazil",
    description:
      "Desenvolvendo em tecnologia liquid (Própria do Shopify), construio landing pages, paginas de cadastros, desenvolvo reuniões com provedores de serviçõs da shopify(Ingles) garantindo um bom desempenho e qualidade no desenvolvimento e vendas do site Cumbuca Boa.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rede Social",
    description:
      "Como deve ser uma rede social? Eu criei uma rede social com funcionalidades como postar, comentar, curtir e seguir.",
    tags: ["React", "Next.js", "Typescript", "Javascript", "Tailwind", "Git", "Vercel"],
    imageUrl: corpcommentImg,
  },
  {
    title: "EuFinanceiro",
    description:
      "Dashboard financeiro para controle de gastos. Ele mostra gráficos de despesas, receitas e saldo.",
    tags: ["HTML5 e CS3", "Javascript", "Vercel", "Bootstrap", "Git"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Chatbot Usando GPT 3.5 AI",
    description:
      "O próprio GPT 3.5 sendo integrado em uma aplicação e fornecendo respostas em tempo real. Útil para atendimento ao cliente né?!",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Git", "VercelSDK", "IA-GPT 3.5"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Liquid",
  "Figma",
  "Shopify",
  "Scrum|Kanban",
  "Express",
  "PostgreSQL",
  "Python",
  "Pandas|NumPy",
  "Framer Motion",
] as const;
