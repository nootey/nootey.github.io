<template>
    <section id="contact" class="section">
        <h2 class="section__title reveal-title">
            <span class="section__num"><span class="section__num-pre">0x</span>04</span>
            Contact
        </h2>

        <div class="grid gap-10 text-left md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div class="flex flex-col gap-4">
                <h3 class="text-title text-xl font-semibold">Contact me</h3>

                <p class="text-muted font-light">
                    If you have a project, an idea, or a technical problem that needs solving, feel free to contact me. I'm always open to discussing new projects or opportunities.
                </p>

                <p class="text-muted font-light">
                  Get in touch via the form, or contact me via email directly.
                </p>

                <div class="border-accent mt-4 border-l-2 pl-4">
                    <p class="text-title text-sm font-semibold">Email</p>
                    <a
                        href="mailto:jure.bovha2@gmail.com"
                        class="text-muted text-sm break-words underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
                        >jure.bovha2@gmail.com</a
                    >
                </div>
            </div>

            <form :action="formActionUrl" method="POST" class="flex flex-col gap-5">
                <input type="hidden" name="_subject" :value="'New message from: ' + websiteName" />

                <div class="flex flex-col gap-2">
                    <label for="formName" class="text-faint text-xs font-medium tracking-wider uppercase">Name</label>
                    <input
                        id="formName"
                        required
                        type="text"
                        name="name"
                        autocomplete="name"
                        placeholder="Your name"
                        class="border-subtle bg-surface text-body placeholder:text-faint focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-4 py-3 text-sm transition focus:ring-2 focus:outline-none"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="formEmail" class="text-faint text-xs font-medium tracking-wider uppercase">E-mail</label>
                    <input
                        id="formEmail"
                        required
                        type="email"
                        name="email"
                        autocomplete="email"
                        placeholder="you@example.com"
                        class="border-subtle bg-surface text-body placeholder:text-faint focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-4 py-3 text-sm transition focus:ring-2 focus:outline-none"
                    />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="formMessage" class="text-faint text-xs font-medium tracking-wider uppercase"
                        >Message</label
                    >
                    <textarea
                        id="formMessage"
                        required
                        name="message"
                        rows="7"
                        placeholder="What's on your mind?"
                        class="border-subtle bg-surface text-body placeholder:text-faint focus:border-accent focus:ring-accent/30 w-full resize-y rounded-lg border px-4 py-3 text-sm transition focus:ring-2 focus:outline-none"
                    ></textarea>
                </div>

                <div class="w-full sm:max-w-[12rem]">
                    <button type="submit" class="main-button">Send</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
const formActionUrl = `https://formspree.io/f/${formspreeId}`;
const websiteName = import.meta.env.VITE_WEBSITE_NAME;
</script>
