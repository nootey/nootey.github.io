<template>
    <article class="card-surface flex h-full flex-col gap-4 text-left">
        <h3 class="text-title border-subtle border-b pb-4 text-lg font-semibold">
            {{ title }}
        </h3>

        <img
            v-if="image"
            :src="image"
            :alt="title"
            class="mx-auto max-h-[380px] w-auto max-w-full rounded-lg object-contain"
        />

        <p class="text-muted flex-1 text-sm font-light">{{ description }}</p>

        <div class="flex flex-wrap items-start justify-between gap-4">
            <div class="flex flex-wrap gap-2">
                <span v-for="word in keyWords" :key="word" class="chip">{{ word }}</span>
            </div>

            <div class="flex flex-wrap items-center gap-2">
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
