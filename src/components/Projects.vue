<template>
    <section id="projects" class="section">
        <h2 class="section__title reveal-title">
            <span class="section__num"><span class="section__num-pre">0x</span>03</span>
            Projects
        </h2>

        <p class="text-muted mb-10 text-left font-light">
            Here are a few projects I’ve worked on — ranging from professional applications developed as part of my full-time role to personal experiments and side projects. They reflect my interest in solving real problems.
        </p>

        <div class="relative mx-auto max-w-4xl">
            <div class="overflow-hidden rounded-3xl">
                <div
                    class="flex transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(-${index * 100}%)` }"
                >
                    <button
                        v-for="project in projects"
                        :key="project.title"
                        type="button"
                        class="w-full shrink-0 cursor-pointer"
                        @click="$router.push({ name: 'project-view' })"
                    >
                        <img :src="project.image" :alt="project.title" class="block h-auto w-full" />

                        <div class="bg-surface -mt-4 px-5 py-2 text-left sm:px-6">
                            <h3 class="text-title text-base font-semibold sm:text-lg">{{ project.title }}</h3>
                            <p class="text-muted text-sm font-light">{{ project.description }}</p>
                        </div>
                    </button>
                </div>
            </div>

            <button
                type="button"
                aria-label="Previous project"
                class="border-subtle bg-surface text-body hover:border-accent absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition sm:-left-5"
                @click="go(-1)"
            >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <button
                type="button"
                aria-label="Next project"
                class="border-subtle bg-surface text-body hover:border-accent absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition sm:-right-5"
                @click="go(1)"
            >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div class="mt-8 flex items-center justify-center gap-2">
            <button
                v-for="(project, i) in projects"
                :key="project.title"
                type="button"
                :aria-label="`Go to ${project.title}`"
                :class="i === index ? 'bg-accent w-6' : 'bg-tertiary w-2'"
                class="h-2 rounded-full transition-all"
                @click="index = i"
            ></button>
        </div>

        <div class="mt-10 flex justify-center">
            <button class="side-button w-full sm:max-w-[16rem]" @click="$router.push({ name: 'project-view' })">
                Project view
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import wealthwarden from "../assets/images/wealthwarden.png";
import sph from "../assets/images/sph.png";
import ngMl from "../assets/images/ng-ml.png";

const projects = [
    { title: "WealthWarden", description: "Personal finance tracker.", image: wealthwarden },
    { title: "Sportheartt", description: "Centralized athlete performance measurement platform.", image: sph },
    { title: "NoiseGuard ML", description: "Audio classification server.", image: ngMl },
];

const index = ref(0);

function go(step) {
    index.value = (index.value + step + projects.length) % projects.length;
}
</script>
