<template>
    <!-- Fixed height so every card in the carousel matches; the description absorbs the slack. -->
    <article class="card-surface flex h-[32rem] flex-col gap-4 text-left sm:h-[36rem]">
        <div class="border-subtle flex shrink-0 items-center justify-between gap-4 border-b pb-4">
            <h3 class="text-title text-lg font-semibold">
                {{ title }}
            </h3>

            <a
                v-if="repo"
                :href="repo"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${title} repository`"
                class="text-muted hover:text-accent shrink-0 transition"
            >
                <svg viewBox="0 0 16 16" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                    />
                </svg>
            </a>
        </div>

        <img
            v-if="image"
            :src="image"
            :alt="title"
            class="mx-auto max-h-[260px] w-auto max-w-full shrink-0 rounded-lg object-contain"
        />

        <p class="text-muted min-h-0 flex-1 overflow-y-auto text-sm font-light">{{ description }}</p>

        <div
            class="flex shrink-0 flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4"
        >
            <div class="flex flex-wrap justify-center gap-2 sm:justify-start">
                <span v-for="word in keyWords" :key="word" class="chip">{{ word }}</span>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span v-for="tech in techStack" :key="tech" :title="tech">
                    <img v-if="techIcons[tech]" :src="techIcons[tech]" :alt="tech" width="27" height="27" />
                    <span v-else class="chip">{{ tech }}</span>
                </span>
            </div>
        </div>
    </article>
</template>

<script setup>
import vueIcon from "../../assets/language-icons/vue.svg";
import goIcon from "../../assets/language-icons/go.svg";
import kotlinIcon from "../../assets/language-icons/kotlin.svg";
import mysqlIcon from "../../assets/language-icons/mysql.svg";
import laravelIcon from "../../assets/language-icons/laravel.svg";
import pythonIcon from "../../assets/language-icons/python.svg";
import angularIcon from "../../assets/language-icons/angular.svg";
import nextIcon from "../../assets/language-icons/next_js.svg";
import mongoIcon from "../../assets/language-icons/mongo.svg";
import postgresIcon from "../../assets/language-icons/postgres.svg";
import prismaIcon from "../../assets/language-icons/prisma.svg";

defineProps({
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    techStack: { type: Array, default: () => [] },
    keyWords: { type: Array, default: () => [] },
    image: { type: String, default: "" },
    repo: { type: String, default: "" },
});

const techIcons = {
    Go: goIcon,
    Vue: vueIcon,
    Kotlin: kotlinIcon,
    MySQL: mysqlIcon,
    Laravel: laravelIcon,
    Python: pythonIcon,
    Angular: angularIcon,
    NextJS: nextIcon,
    MongoDB: mongoIcon,
    Postgres: postgresIcon,
    Prisma: prismaIcon,
};
</script>
