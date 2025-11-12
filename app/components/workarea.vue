<template>
  <ul>
    <li class="mb-6 bg-white rounded p-6 shadow-md">
      <div class="flex lg:flex-row flex-center justify-between flex-col">
        <p class="text-[#36558F] font-bold text-xl">{{ item.function }}</p>
      <p class="italic">{{ item.date }}</p>
      </div>
      <div class="lg:text-left">
      <p class="text-[#36558F]">{{ item.place }}</p>
      <p>{{item.description}}</p>
      </div>
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
