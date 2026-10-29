<script setup>
// TODO Part A: Define required Object prop named snack.
defineProps({
  snack: { type: Object, required: true }
})

// TODO Part B: Declare a vote event with defineEmits().
const emit = defineEmits(['vote'])
</script>

<template>
  <article class="card">
    <!-- TODO Part A: Display emoji, snack name, and vote count -->
    <!-- {{ snack }} -->
    <p class="emoji">{{ snack.emoji }}</p>
    <h2>{{ snack.name }}</h2>
    <!-- <h3>{{ greeting }}</h3> -->
    <p>{{ snack.votes }} {{snack.votes === 1 ? 'vote' : 'votes'}}</p>
    <!-- TODO Part B: Emit vote with the snack ID when clicked -->
    <button @click="emit('vote', snack.id)">
      Vote!
    </button>
  </article>
</template>
