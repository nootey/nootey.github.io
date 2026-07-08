<template>
    <div id="hideOnMobile" class="rectangle">
        <h2 id="hideOnMobile">Contact</h2>
    </div>

    <Smoothie
        id="contact"
        :weight="0.01"
        class="smoothie-container"
        style="
            margin-bottom: 80px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-left: 1px solid var(--text-color-primary);
            border-right: 1px solid var(--text-color-primary);
        "
    >
        <div
            id="main-row"
            style="width: 90%; margin-right: auto"
            class="d-flex flex-row align-items-center justify-content-center g-2"
        >
            <div id="main-col" class="d-flex flex-column w-50">
                <form
                    id="form"
                    :action="formActionUrl"
                    method="POST"
                    style="
                        width: 60%;
                        border-top-left-radius: 20px;
                        border-top: 8px solid var(--accent-color);
                        border-left: 8px solid var(--accent-color);
                    "
                >
                    <input type="hidden" name="_subject" :value="'New message from: ' + websiteName" />

                    <div class="form-group" style="width: 90%">
                        <label for="formName" class="d-block">
                            <i class="icon" data-feather="user"></i>
                        </label>
                        <input
                            id="formName"
                            required
                            type="text"
                            name="name"
                            class="form-control form-control-lg thick"
                            placeholder="Name"
                        />
                    </div>

                    <div class="form-group position-relative" style="width: 90%">
                        <label for="formEmail" class="d-block">
                            <i class="icon" data-feather="mail"></i>
                        </label>
                        <input
                            id="formEmail"
                            required
                            type="email"
                            name="email"
                            class="form-control form-control-lg thick"
                            placeholder="E-mail"
                        />
                    </div>

                    <div class="form-group message" style="width: 90%">
                        <textarea
                            id="formMessage"
                            required
                            name="message"
                            class="form-control form-control-lg"
                            rows="7"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <div class="row mt-3 w-75" style="margin-left: 25%; !important">
                        <div class="col">
                            <button id="button" type="submit" class="main-button" tabIndex="-1">Send</button>
                        </div>
                    </div>
                </form>
            </div>

            <div id="main-col" class="d-flex flex-column w-50 gap-2">
                <animated-component>
                    <div class="title">Get in touch</div>
                </animated-component>

                <div class="paragraph-text flex flex-row text-left">
                    Have any questions? Feel free to contact me, and I'll be happy to assist you as soon as possible.
                    You can also directly write to the email below.
                </div>

                <div id="email" class="paragraph-text d-flex flex-row p-2 mt-4">
                    <div class="row" style="border-left: 5px solid var(--accent-color); padding-left: 10px">
                        <div class="row"><b>Email</b></div>
                        <div class="row">
                            <a href="mailto:jure.bovha2@gmail.com" class="email-link">jure.bovha2@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Smoothie>
</template>

<script setup>
import { Smoothie } from "vue-smoothie";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";

const props = defineProps({
    darkMode: Boolean,
});

const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
const formActionUrl = `https://formspree.io/f/${formspreeId}`;
const websiteName = import.meta.env.VITE_WEBSITE_NAME;

function sendMessage() {
    const formName = document.getElementById("formName");
    const formEmail = document.getElementById("formEmail");
    const formMessage = document.getElementById("formMessage");

    const name = formName?.value;
    const email = formEmail?.value;
    const message = formMessage?.value;

    console.log(name);
    console.log(email);
    console.log(message);
}
</script>

<style scoped>
form {
    max-width: 50rem;
    margin: 0 auto;
    .form-control:focus {
        color: var(--text-color-primary);
    }
    .form-control {
        margin: 20px;
        background-color: var(--background-color-secondary);
        border-radius: 1rem;
        border: none;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.11);

        &.thick {
            height: 3.3rem;
            padding: 0.5rem 1.8rem;
            font-size: 1rem;
        }

        &:focus {
            border: 1px solid var(--accent-color);
            box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
        }
    }

    .message .form-control {
        padding: 0.5rem 1.8rem;
        font-size: 1rem;
    }

    ::placeholder {
        color: #838788;
        position: relative;
        left: 0;
    }

    input,
    textarea {
        color: var(--text-color-primary);
        max-height: 500px;
    }

    .icon {
        color: #57565c;
        height: 1.3rem;
        position: absolute;
        left: 1.5rem;
        top: 1.1rem;
    }
}

.rectangle {
    position: absolute;
    z-index: 2;
    background-color: var(--accent-color);
    transform: translateY(50%);
    top: 300%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(((100vw - 90%) / 2) + 90px);
    max-width: 180px;
    right: 0;
    margin-right: calc((100vw - 1800px) / 2);
    border-radius: 25px;
    padding-right: 3.5rem;
    overflow-x: hidden;
}

.rectangle h2 {
    background: none !important;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--background-color-primary);
    display: flex;
    align-items: center;
    margin-left: 45%;
    margin-bottom: 0;
    transform: rotate(-90deg);
}

@media only screen and (max-width: 1770px) {
    .rectangle {
        margin-right: 0 !important;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}

@media only screen and (max-width: 1100px) {
    .rectangle {
        max-width: 90px;
    }
}

@media only screen and (max-width: 800px) {
    form {
        .form-control {
            margin: 10px !important;
        }
    }
    #hideOnMobile {
        display: none;
    }
    #email {
        width: 50% !important;
    }
    #main-row {
        width: 100% !important;
        flex-direction: column;
        flex-wrap: wrap-reverse;
        padding: 1rem;
        gap: 2rem;
    }
    #main-col {
        width: 100% !important;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    .paragraph-text {
        font-size: 1rem !important;
    }
}

@media only screen and (max-width: 625px) {
    #button {
        font-size: 0.8rem !important;
    }

    #email {
        width: 70% !important;
    }

    #form {
        width: 75% !important;
        border-top: 4px solid var(--accent-color) !important;
        border-left: 4px solid var(--accent-color) !important;
    }

    .form-control {
        &.thick {
            height: 2rem !important;
            padding: 0.5rem 1.25rem !important;
            font-size: 0.9rem !important;
        }
    }

    .message .form-control {
        padding: 0.5rem 1.25rem !important;
        font-size: 0.9rem !important;
    }

    textarea {
        max-height: 125px !important;
    }
}

.email-link {
    color: var(--text-color-primary);
    font-weight: 600;
    text-decoration: underline;
    word-break: break-word;
}

.email-link:hover {
    opacity: 0.8;
}
</style>
