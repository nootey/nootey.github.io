<template>
    <div
        class="w-100 align-items-center justify-content-center"
        style="padding: 100px 25px 200px 25px; max-width: 1600px"
    >
        <animated-component>
            <div class="title" style="padding-left: 1rem">Project showcase</div>
        </animated-component>

        <div class="project-grid p-3">
            <div v-for="(project, index) in projects" :key="index" class="w-100">
                <ProjectCard
                    :title="project.title"
                    :description="project.description"
                    :tech_stack="project.tech_stack"
                    :key_words="project.key_words"
                    :website="project.website"
                    :index="index"
                    :image="project?.image"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from "../components/reusable/ProjectCard.vue";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";
import sphImage from "../assets/images/sph.png";
import calSisImage from "../assets/images/ims-cal-sis.png";
import wealthwardenImage from "../assets/images/wealthwarden.png";
import ngMlImage from "../assets/images/ng-ml.png";
import ngLicenceImage from "../assets/images/ng-licence.png";
import dsaImage from "../assets/images/dsa-go.png";
import walkoImage from "../assets/images/walko.png";
import anScraperImage from "../assets/images/an-scraper.png";

const projects = [
    {
        title: "Wealth Warden",
        description:
            "Wealth Warden is a personal finance tracker designed to be simple, intuitive, and efficient. " +
            "Inspired by my own Excel-based template, this project aims to provide a seamless experience for tracking personal finances, investment assets and savings goals, while displaying detailed insights.",
        tech_stack: ["Go", "Vue", "Postgres"],
        key_words: ["Personal finance", "Investments"],
        image: wealthwardenImage,
    },
    {
        title: "Athlete performance monitoring",
        description:
            "Was a part in the development of a platform designed to centralize and analyze sports performance data. " +
            "It integrates data from Polar devices to provide detailed insights into physical metrics, empowering users to make data-driven decisions. " +
            "I am primarily responsible for building and maintaining the backend as well as the Android application.",
        tech_stack: ["Go", "Kotlin", "Angular", "Postgres"],
        key_words: ["Centralization", "Measurements"],
        image: sphImage,
    },
    {
        title: "Sound classification",
        description:
            "I've started building and contributed to NoiseGuards implementation of sound event classification. It is a FastAPI-based audio processing pipeline that segments .mp3 recordings using soundscape percentile metadata and classifies them with multiple ML models. " +
            "I was responsible for designing and implementing the pipeline, re-training a classification model to improve performance on urban soundscapes and was also involved in the development of the NoiseGuard ecosystem.",
        tech_stack: ["Python", "Postgres"],
        key_words: ["Sound classification", "Machine learning"],
        image: ngMlImage,
    },
    {
        title: "Calibration management",
        description:
            "This project is an inventory tracking system at it's core. I started working on it as a student project, but it evolved over time and became and integrated into multiple aspects of the company. I implemented workflow-enhancing features, integrated HubSpot for CRM synchronization, developed systems for automatic notifications and detailed activity logging to streamline day-to-day operations.",
        tech_stack: ["Laravel", "Vue", "MySQL"],
        key_words: ["CRM", "Internal operations"],
        image: calSisImage,
    },
    {
        title: "License server",
        description:
            "I designed and developed a secure licensing server to manage and validate authorized devices across our hardware ecosystem, including Raspberry Pi units, SLM modules, and custom-built solutions. " +
            "The server ensures that only registered and authenticated hardware can access company resources or operate within defined parameters.",
        tech_stack: ["Go", "Vue", "MongoDB"],
        key_words: ["License manegement", "Security"],
        image: ngLicenceImage,
    },
    {
        title: "Crawlers",
        description:
            "I built some web crawlers for personal use to monitor listings on avto.net and nepremicnine.net. \n" +
            "The tools feature asynchronous operations, multi-page support, automated scheduling, and browser automation via playwright.\n" +
            "I do not endorse scraping websites, but the projects were incredibly useful for their use-cases, and were a valuable learning experience.",
        tech_stack: ["Python"],
        key_words: ["Crawler", "Discord"],
        image: anScraperImage,
    },
];
</script>

<style scoped>
.project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    justify-items: center;
}

@media (max-width: 925px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
</style>
