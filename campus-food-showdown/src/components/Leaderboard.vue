<script setup>
defineProps({
  rankedSnacks: { type: Array, required: true }
})
</script>

<template>
  <section class="leaderboard">
    <h2>🏆 Live Leaderboard</h2>
    <ol>
      <li v-for="snack in rankedSnacks" :key="snack.id">
        {{ snack.emoji }} {{ snack.name }} — {{ snack.votes }} {{ snack.votes === 1 ? 'vote' : 'votes' }}
      </li>
    </ol>
  </section>
</template>
