<template>
    <Smoothie
        id="about"
        :weight="0.03"
        class="smoothie-container"
        style="border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary)"
    >
        <div id="main-row" style="width: 99%; margin: auto" class="mb-5">
            <div class="main-col">
                <img
                    id="mainImg"
                    src="../assets/images/setup-1.jpg"
                    style="width: 100%; height: auto; border-radius: 12px"
                />
            </div>

            <div class="main-col gap-3">
                <animated-component>
                    <div class="title">About me</div>
                </animated-component>

                <div class="paragraph-text">
                    I work full-time as a software engineer, based in Ljubljana, Slovenia. I'm passionate about software
                    development, but my hobbies extend to artificial intelligence, fitness, crypto, finance and cars.
                </div>

                <div class="paragraph-text">
                    I design and implement architecture for modern web applications. While my main focus is backend
                    development, I also contribute to UI development and enjoy scripting in Python, to automate tasks
                    and streamline workflows.
                </div>
            </div>
        </div>

        <div
            id="main-row"
            style="width: 99%; margin: auto"
            class="row w-100 justify-content-center align-items-center mt-5"
        >
            <animated-component>
                <div id="slide-in-right" class="row align-items-center mt-5">
                    <div class="col">
                        <div class="icon-display row mx-auto text-center justify-content-center gap-1 p-1">
                            <div class="col col-auto min-width-col">
                                <a
                                    title="Github"
                                    href="https://github.com/nootey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        id="spinImg"
                                        height="50"
                                        width="50"
                                        viewBox="0 -3.1 2490.3 2493"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="1245.2"
                                            cy="1243.4"
                                            :fill="darkMode ? '#3D3D3D' : 'white'"
                                            rx="1217.6"
                                            ry="1246.5"
                                        />
                                        <path
                                            d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"
                                            :fill="darkMode ? 'white' : '#3D3D3D'"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="col col-auto min-width-col">
                                <a
                                    title="Linkedin"
                                    href="https://www.linkedin.com/in/jurebovha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        id="spinImg"
                                        height="50"
                                        width="50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="7.025 7.025 497.951 497.95"
                                    >
                                        <linearGradient
                                            id="a"
                                            gradientUnits="userSpaceOnUse"
                                            x1="-974.482"
                                            y1="1306.773"
                                            x2="-622.378"
                                            y2="1658.877"
                                            gradientTransform="translate(1054.43 -1226.825)"
                                        >
                                            <stop offset="0" stop-color="#2489be" />
                                            <stop offset="1" stop-color="#0575b3" />
                                        </linearGradient>
                                        <path
                                            d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                                            :fill="darkMode ? 'white' : '#3D3D3D'"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="col col-auto min-width-col">
                                <a title="email" href="mailto:jure.bovha2@gmail.com">
                                    <svg
                                        id="spinImg"
                                        height="50"
                                        width="50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="1 1 600 600"
                                    >
                                        <g transform="matrix(6.66667 0 0 6.66667 -5.667 -6408.081)">
                                            <linearGradient
                                                id="a"
                                                gradientUnits="userSpaceOnUse"
                                                x1="-110.934"
                                                y1="1129.751"
                                                x2="-110.35"
                                                y2="1720.099"
                                                gradientTransform="matrix(1 0 0 -1 156.89 2180.75)"
                                            >
                                                <stop offset="0" stop-color="#70efff" />
                                                <stop offset="1" stop-color="#5770ff" />
                                            </linearGradient>
                                            <path
                                                d="M21.653 961.362h48.695a20.608 20.608 0 0 1 20.653 20.653v48.695a20.608 20.608 0 0 1-20.653 20.653H21.653A20.608 20.608 0 0 1 1 1030.71v-48.695a20.608 20.608 0 0 1 20.653-20.653z"
                                                :fill="darkMode ? 'white' : '#3D3D3D'"
                                            />
                                            <path
                                                d="M20.719 986.956c-.474 0-.921.082-1.344.25l8.469 8.719 8.563 8.875.156.188.25.25.25.25.5.531 7.344 7.531c.122.076.477.404.754.543.357.178.743.343 1.141.357.43.015.869-.108 1.256-.296.29-.141.419-.343.755-.603l8.5-8.781 8.594-8.844 8.281-8.531a3.635 3.635 0 0 0-1.75-.438H20.719zm-2.594 1.062c-.903.856-1.469 2.142-1.469 3.594v28.625c0 1.175.377 2.243 1 3.062l1.187-1.125 8.844-8.594 7.844-7.594-.156-.187-8.594-8.844-8.594-8.875-.062-.062zm57.188.282l-8.375 8.656-8.563 8.844-.156.156 8.156 7.906 8.844 8.594.531.5c.476-.764.75-1.705.75-2.719v-28.625c0-1.294-.448-2.468-1.187-3.312zm-38.782 18.718l-7.812 7.594-8.875 8.594-1.125 1.094c.593.382 1.268.625 2 .625h51.719c.88 0 1.678-.338 2.344-.875l-.562-.562-8.875-8.594-8.156-7.875-7.344 7.562c-.397.264-.663.556-1.051.735-.625.289-1.309.533-1.997.523-.69-.011-1.367-.281-1.986-.585-.311-.153-.477-.305-.841-.61l-7.439-7.626z"
                                                :fill="!darkMode ? 'white' : '#3D3D3D'"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="hideOnMobile" class="col"><hr /></div>
                </div>
            </animated-component>

            <animated-component>
                <div id="slide-in-left" class="row align-items-center mt-5">
                    <div id="hideOnMobile" class="col justify-content-center"><hr /></div>

                    <div id="hideOnMobile" class="col">
                        <div class="icon-display row mx-auto text-center justify-content-center gap-1 p-1">
                            <div class="col col-auto min-width-col">
                                <svg
                                    id="spinImg"
                                    height="45"
                                    viewBox="-.1 -20 206.8 100.4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    :fill="darkMode ? 'white' : '#3D3D3D'"
                                >
                                    <path
                                        d="m15.5 23.2c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6zm-15.1 9.2c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6zm24.2 9.2c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7zm103.8-20.2c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7h-19.3c-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7z"
                                    />
                                    <path
                                        d="m161.5 76.7c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1z"
                                    />
                                </svg>
                            </div>

                            <div class="col col-auto min-width-col">
                                <svg
                                    id="spinImg"
                                    height="60"
                                    viewBox="16 16 32 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                                        :fill="darkMode ? '#D8D8D8' : '#5C5C5C'"
                                    />
                                    <path
                                        d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                                        :fill="darkMode ? 'white' : '#3D3D3D'"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="a"
                                            x1="19.075"
                                            y1="18.782"
                                            x2="34.898"
                                            y2="34.658"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#387EB8" />
                                            <stop offset="1" stop-color="#366994" />
                                        </linearGradient>
                                        <linearGradient
                                            id="b"
                                            x1="28.809"
                                            y1="28.882"
                                            x2="45.803"
                                            y2="45.163"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FFE052" />
                                            <stop offset="1" stop-color="#FFC331" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div class="col col-auto min-width-col">
                                <svg
                                    id="spinImg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 256 221"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMinYMin meet"
                                >
                                    <path
                                        d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                                        fill="#41B883"
                                    />
                                    <path
                                        d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
                                        :fill="darkMode ? '#D8D8D8' : '#5C5C5C'"
                                    />
                                    <path
                                        d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
                                        :fill="darkMode ? 'white' : '#3D3D3D'"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </animated-component>
        </div>
    </Smoothie>
</template>

<script setup>
import { Smoothie } from "vue-smoothie";
import AnimatedComponent from "../components/reusable/AnimatedComponent.vue";

const props = defineProps({
    darkMode: Boolean,
});
</script>

<style scoped>
#spinImg {
    transition: transform 0.5s ease-in-out;
}

#spinImg:hover {
    transform: rotate(360deg);
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid var(--text-color-primary);
    margin: 1em 0;
    padding: 0;
}

#slide-in-right {
    animation: revealFromRight 3s ease-in-out;
}

#slide-in-left {
    animation: revealFromLeft 3s ease-in-out;
}

@keyframes revealFromRight {
    0% {
        opacity: 0;
        transform: translateX(1em);
    }
    30%,
    50% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

@keyframes revealFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-1em);
    }
    30%,
    50% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

#main-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.main-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 0;
    max-width: 50%;
    padding: 0 1rem 0 1rem;
}

@media only screen and (max-width: 800px) {
    #hideOnMobile {
        display: none;
    }
    #mainImg {
        width: 75% !important;
    }
    #main-row {
        flex-direction: column-reverse;
        gap: 1rem;
    }
    .main-col {
        max-width: 100%;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 1rem;
    }
    #main-row .main-col:first-child {
        padding-left: 0;
    }
    .icon-display {
        transform: scale(0.9);
        padding: 0 !important;
    }
    #slide-in-left {
        margin-top: 0 !important;
    }
    #slide-in-right {
        margin-top: 0 !important;
    }
    .paragraph-text {
        font-size: 1rem !important;
    }
}
</style>
