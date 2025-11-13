<template>
    <div>
    <img class="w-20 h-20 object-contain" :src="logo.logo"/>
    </div>
</template>
<script setup>
defineProps({
  logo: {
    type: Array,
    required: true
  }
});
</script>