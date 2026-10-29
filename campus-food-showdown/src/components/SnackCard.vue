<script setup>
defineProps({
  snack: { type: Object, required: true }
})

const emit = defineEmits(['vote'])
</script>

<template>
  <article class="card">
    <p class="emoji">{{ snack.emoji }}</p>
    <h2>{{ snack.name }}</h2>
    <p>{{ snack.votes }} {{ snack.votes === 1 ? 'vote' : 'votes' }}</p>
    <button @click="emit('vote', snack.id)">Vote!</button>
  </article>
</template>
