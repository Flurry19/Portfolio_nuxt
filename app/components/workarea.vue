<template>
  <ul>
    <li class="mb-6">
      <p class="italic">{{ item.date }}</p>
      <p class="font-bold text-[#36558F]">{{ item.place }}</p>
      <p class="text-[#36558F]">{{ item.function }}</p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  item: {
    type: Array,
    required: true
  }
});
</script>
