<template>

  <div class="w-100 align-items-center justify-content-center" style="padding: 100px 25px 200px 25px; max-width: 1600px;">

    <animated-component>
      <div class="title" style="padding-left: 1rem;">Project showcase</div>
    </animated-component>

    <div class="project-grid p-3">
      <div v-for="(project, index) in projects" :key="index" class="w-100">
        <ProjectCard :title="project.title" :description="project.description"
                     :tech_stack="project.tech_stack" :key_words="project.key_words"
                     :website="project.website" :index="index" :image="project?.image" />
      </div>
    </div>
  </div>
</template>

<script setup>

import ProjectCard from "../components/reusable/ProjectCard.vue";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";
import sphImage from "../assets/images/sph_v3.png";
import calSisImage from "../assets/images/ims-cal_v2.png";
import wealthwardenImage from "../assets/images/wealthwarden.png";
import ngMlImage from "../assets/images/ng-ml_v2.png";
import aiBotImage from "../assets/images/ai_bot.png";
import ngLicenceImage from "../assets/images/ng-licence.png";
import dsaImage from "../assets/images/dsa-go.png";
import walkoImage from "../assets/images/walko.png";
import anScraperImage from "../assets/images/an-scraper.png";

const projects = [
  {
    title: "SPH",
    description: "SPH is a platform designed to centralize and analyze sports performance data. " +
        "It integrates data from Polar devices to provide detailed insights into physical metrics, empowering users to make data-driven decisions. " +
        "I am primarily responsible for building and maintaining the backend as well as the Android application.",
    tech_stack: ["Go", "Kotlin", "Angular", "Postgres"],
    key_words: ["Centralization", "Measurements"],
    image: sphImage
  },

  {
    title: "Wealth Warden",
    description: "Wealth Warden is a personal finance tracker designed to be simple, intuitive, and efficient. Inspired by my own Excel-based template, this project aims to provide a seamless experience for tracking general finances, assets (enhanced crypto and stocks tracking) and financial goals - without unnecessary complexity, all in one place.",
    tech_stack: ["Go", "Vue", "Postgres"],
    key_words: ["Finance", "Tracking"],
    image: wealthwardenImage
  },

  {
    title: "NoiseGuard ML",
    description: "NoiseGuard ML is a FastAPI-based audio processing pipeline that segments .mp3 recordings using soundscape percentile metadata and classifies them with multiple ML models. " +
        "I developed the backend, a priority queue, and structured logging. I also created utility and testing scripts, and re-trained a classification model to improve performance on urban soundscapes, which represent the majority of NoiseGuard's data.",
    tech_stack: ["Python", "Postgres"],
    key_words: ["Sound classification", "Transfer learning"],
    image: ngMlImage
  },

  {
    title: "Calibration management system",
    description: "This is an internal operations tool for managing equipment calibration, repair and order statuses, as well as customer interactions. I implemented workflow-enhancing features, integrated HubSpot for CRM synchronization, and developed systems for automatic notifications and detailed activity logging to streamline day-to-day operations.",
    tech_stack: ["Laravel", "Vue", "MySQL"],
    key_words: ["Hubspot", "Internal operations"],
    image: calSisImage
  },

  {
    title: "Personal AI agent assistant",
    "description": "I designed and developed an AI-powered assistant to streamline daily operations within a company. The assistant transcribes meetings, processes product and company-related information, and builds a centralized knowledge base. Leveraging this knowledge, it can summarize meetings, generate action plans, analyze documents, and keep team members informed - minimizing the need for constant meeting attendance.",
    tech_stack: ["Go", "Vue", "Postgres"],
    key_words: ["AI", "Transcription", "Knowledgebase"],
    image: aiBotImage
  },

  {
    title: "NoiseGuard License",
    "description": "I designed and developed a secure internal licensing server to manage and validate authorized devices across our hardware ecosystem, including Raspberry Pi units, SLM modules, and custom-built solutions. The server ensures that only registered and authenticated hardware can access company resources or operate within defined parameters. It includes features such as device registration, license generation, validation endpoints.",
    tech_stack: ["Go", "Vue", "MongoDB"],
    key_words: ["License", "Security"],
    image: ngLicenceImage
  },

  {
    title: "DSA implementation",
    "description": "I implemented most of the data structures and algorithms, to enhance my knowledge of programming, as well as to familiarize myself with Golang.",
    tech_stack: ["Go"],
    key_words: ["DSA", "Theory"],
    image: dsaImage
  },

  {
    title: "Walko",
    "description": "Walko is a blockchain PNL analyzer, currently only on Solana. It is a simple CLI tool, which analyzes trading history and calculates theoretical performance over the wallets lifetime.",
    tech_stack: ["Python"],
    key_words: ["Crypto", "Solana", "PNL"],
    image: walkoImage
  },

  {
    title: "AvtoNet Scraper",
    "description": "A custom-built web scraper designed for personal use to monitor car listings on AvtoNet while searching for a vehicle.\n" +
        "The tool evolved from a basic scraper into a robust solution featuring asynchronous operations, multi-page support, automated scheduling, and browser automation via pyppeteer for better reliability with dynamic content.\n" +
        "I no longer run or endorse scraping AvtoNet, but the project was a valuable learning experience.",
    tech_stack: ["Python"],
    key_words: ["AsyncIO", "APScheduler "],
    image: anScraperImage
  }
];
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-items: center;
}

@media(max-width: 925px) {
  .project-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>