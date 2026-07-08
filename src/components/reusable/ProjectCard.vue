<template>
  <div class="project-card">
    <div class="project-header d-flex justify-content-between align-items-center">
      <div class="project-title" style="background-color: transparent;">
        {{ title }}
      </div>
    </div>

    <div class="project-description-wrapper">
      <div class="project-description">
        <div v-if="image" class="d-flex flex-column w-100 justify-content-center align-items-center">
          <img :src="image" :alt="title + ' image'" class="project-image" />
        </div>

        <p class="description">{{ description }}</p>

        <div class="chips-tech-wrapper">
          <div class="keyword-chips">
            <span v-for="(word, index) in key_words" :key="'kw-' + index" class="chip">
              {{ word }}
            </span>
          </div>

          <div class="tech-stack-chips">
            <span v-for="(tech, index) in tech_stack" :key="'tech-' + index" :title="tech">
              <img
                  v-if="techIcons[tech]"
                  :src="techIcons[tech]"
                  width="27"
                  height="27"
              />
              <span v-else class="chip tech-chip">{{ tech }}</span>
            </span>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
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

const props = defineProps({
  title: String,
  description: String,
  tech_stack: Array,
  key_words: Array,
  website: String,
  index: Number,
  image: String,
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

<style scoped>
.project-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  background-color: var(--background-color-secondary);
  text-align: center;
  color: var(--text-color-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  height: 680px;
}

.project-header {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: var(--background-color-secondary);
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid var(--border-color);
}

.project-description-wrapper {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow-y: hidden;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}

.project-description {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  gap: 1rem;
}

.project-image {
  max-width: 100%;
  max-height: 380px;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
}

.description {
  flex: 1;
  min-height: 0;
  margin-bottom: 0;
  overflow-y: auto;
}

.chips-tech-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.keyword-chips, .tech-stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background-color: var(--background-color-tertiary, #f1f1f1);
  color: var(--text-color-secondary, #555);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease;
}

.chip:hover {
  background-color: var(--background-color-secondary, #e0e0e0);
  cursor: default;
}

.tech-chip {
  background-color: var(--background-color-secondary, #e8e8e8);
  color: var(--text-color-primary, #333);
}

@media(max-width: 925px) {
  .chips-tech-wrapper {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .tech-stack-chips {
    padding: 1rem;
  }
}

@media(max-width: 725px) {
  .chips-tech-wrapper {
    flex-direction: row;
    padding: 0;
  }
  .tech-stack-chips {
    padding: 0;
  }
}

@media(max-width: 545px) {
  .project-card {
      height: 540px;
  }
  .project-image {
      max-height: 240px;
  }
}

@media(max-width: 500px) {
  .chips-tech-wrapper {
    padding: 1rem;
    justify-content: center;
    flex-direction: column;
  }
  .tech-stack-chips {
    padding: 1rem;

  }
}
</style>