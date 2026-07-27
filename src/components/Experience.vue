<template>
    <section id="experience" class="section">
        <h2 class="section__title reveal">
            <span class="section__num"><span class="section__num-pre">0x</span>02</span>
            Experience
        </h2>

        <ol class="flex flex-col gap-10 border-l border-subtle pl-8 text-left">
            <li v-for="role in roles" :key="`${role.company}-${role.date}`" class="relative">
                <span
                    class="bg-primary border-accent absolute top-1.5 -left-[2.375rem] h-3 w-3 rounded-full border-2"
                ></span>

                <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 class="text-title text-lg font-semibold">{{ role.company }}</h3>
                    <span class="text-accent font-mono text-sm whitespace-nowrap">{{ role.date }}</span>
                </div>

                <p class="text-muted mt-1 text-sm font-light">{{ role.title }}</p>

                <ul class="mt-3 list-disc space-y-2 pl-5">
                    <li v-for="point in role.points" :key="point" class="text-muted text-sm font-light">
                        {{ point }}
                    </li>
                </ul>
            </li>
        </ol>

        <p class="text-muted mt-10 text-left text-sm font-light">
            To view my whole experience, take a look at my
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-accent underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
                >Resume</a
            >.
        </p>
    </section>
</template>

<script setup>
const roles = [
    {
        company: "Bitstamp",
        title: "Software engineer",
        date: "March 2026 - Present",
        points: [
            "Part of the Prime team, building products and infrastructure for institutional clients on the platform.",
            "Contributing to systems responsible for customer balances, settlement between internal accounts and order flows.",
            "Micro-service development in Go and Python."],
    },
    {
        company: "IMS Merilni sistemi",
        title: "Software engineer",
        date: "October 2022 - February 2026",
        points: [
            "Full-stack development with an emphasis on backend systems using Laravel, Golang and Python.",
            "Designed, implemented, and maintained systems to support integration across internal tools and third-party platforms.",
            "Experience with various facets of machine learning, with a focus on audio classification and agentic workloads.",
        ],
    },
    {
        company: "IMS Merilni sistemi",
        title: "Intern",
        date: "March 2022 - September 2022",
        points: ["Designed and implemented an internal management system to support sound calibration workflows."],
    },
];
</script>
