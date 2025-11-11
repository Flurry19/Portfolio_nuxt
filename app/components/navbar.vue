<template>
  <nav class="navbar px-4 py-3 md:px-8 text-white z-99 fixed top-0 left-0 w-full">
    <div class="flex justify-between items-center">
        <a href="#banner" class="text-xl font-bold">Portfolio</a>
      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8">
        <a
          v-for="nav in navItems"
          :key="nav.label"
          :href="nav.href"
class="hover:bg-[#A99AA6] transition-colors p-2 md:w-20 lg:w-full text-center rounded flex items-center justify-center"
        >
          {{ nav.label }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden mt-3 space-y-2">
      <a
        v-for="nav in navItems"
        :key="nav.label"
        :href="nav.href"
        class="flex flex-col px-2 py-2 rounded hover:bg-[#A99AA6]"
      >
        {{ nav.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  navItems: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)
</script>
