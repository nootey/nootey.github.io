<template>
    <section id="projects" class="section">
        <h2 class="section__title reveal">
            <span class="section__num"><span class="section__num-pre">0x</span>03</span>
            Projects
        </h2>

        <p class="text-muted mb-6 text-left font-light sm:mb-10">
            Here are a few projects I’ve worked on — ranging from professional applications developed as part of my full-time role to personal experiments and side projects. They reflect my interest in solving real problems.
        </p>

        <div class="relative">
            <!-- Vertical padding keeps the cards' hover lift and shadow out of the clip. -->
            <div class="overflow-hidden py-2 sm:py-4">
                <div
                    class="flex transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(-${page * 100}%)` }"
                >
                    <div v-for="project in projects" :key="project.title" class="w-full shrink-0 md:w-1/2 md:px-3">
                        <ProjectCard
                            :title="project.title"
                            :description="project.description"
                            :tech-stack="project.techStack"
                            :key-words="project.keyWords"
                            :image="project.image"
                            :repo="project.repo"
                        />
                    </div>
                </div>
            </div>

            <button
                type="button"
                aria-label="Previous projects"
                class="border-subtle bg-surface text-body hover:border-accent absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition sm:-left-5"
                @click="go(-1)"
            >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <button
                type="button"
                aria-label="Next projects"
                class="border-subtle bg-surface text-body hover:border-accent absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition sm:-right-5"
                @click="go(1)"
            >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <div class="mt-4 flex items-center justify-center gap-2 sm:mt-8">
            <button
                v-for="n in pageCount"
                :key="n"
                type="button"
                :aria-label="`Go to page ${n}`"
                :class="n - 1 === page ? 'bg-accent w-6' : 'bg-tertiary w-2'"
                class="h-2 rounded-full transition-all"
                @click="page = n - 1"
            ></button>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import ProjectCard from "../components/reusable/ProjectCard.vue";
import { projects } from "../data/projects";

// Slide width is CSS-driven (`md:w-1/2`), but the page count is not derivable
// in CSS, so the breakpoint has to be read once here to size the dots.
const mq = window.matchMedia("(min-width: 768px)");
const perPage = ref(mq.matches ? 2 : 1);

function syncPerPage() {
    perPage.value = mq.matches ? 2 : 1;
}

onMounted(() => mq.addEventListener("change", syncPerPage));
onUnmounted(() => mq.removeEventListener("change", syncPerPage));

const page = ref(0);
const pageCount = computed(() => Math.ceil(projects.length / perPage.value));

watch(pageCount, (count) => {
    if (page.value >= count) page.value = count - 1;
});

function go(step) {
    page.value = (page.value + step + pageCount.value) % pageCount.value;
}
</script>
