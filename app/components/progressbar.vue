<template>
  <div class="m-auto">
    <div v-for="skill in skills" :key="skill.name" class="mb-2">
      <h4 class="text-[#36558F] font-bold text-left">{{ skill.name }}</h4>
      <div class="bg-[#c3ccdd] overflow-hidden rounded-full">
        <div class="bg-[#36558F] h-6 text-white px-2 flex items-center justify-end" :style="{ width: skill.percentage }">
          {{ skill.percentage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
});
</script>
