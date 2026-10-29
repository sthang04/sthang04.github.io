<script setup>
// TODO Part C: Define required Array prop named rankedSnacks.
defineProps({
  rankedSnacks: {
    type: Array,
    required: true
  }

})
</script>

<template>
  <section class="leaderboard">
    <h2>🏆 Live Leaderboard</h2>
    <!-- {{ rankedSnacks }} -->
    <ol>
      <!-- TODO Part C: Use v-for and :key to show snack name and votes -->
      <li v-for="snack in rankedSnacks" :key="snack.id">
        {{snack.emoji}} {{ snack.name }} - {{ snack.votes }} {{snack.votes === 1 ? 'vote' : 'votes'}}
      </li>
    </ol>
  </section>
</template>


