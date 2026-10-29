<script setup>
import { ref, computed } from 'vue'
import SnackCard from './components/SnackCard.vue'
import Leaderboard from './components/Leaderboard.vue'
import { getTotalVotes, rankSnacks, addVote, clearVotes } from './lib/voting.js'

const snacks = ref([
  { id: 1, name: 'Bubble Tea', emoji: '🧋', votes: 0 },
  { id: 2, name: 'Pizza', emoji: '🍕', votes: 0 },
  { id: 3, name: 'Fries', emoji: '🍟', votes: 0 },
  { id: 4, name: 'Ice Cream', emoji: '🍦', votes: 0 }
])

function voteForSnack(snackId) {
  snacks.value = addVote(snacks.value, snackId)
}

const rankedSnacks = computed(() => {
  return rankSnacks(snacks.value)
})

const totalVotes = computed(() => {
  return getTotalVotes(snacks.value)
})

function resetVotes() {
  snacks.value = clearVotes(snacks.value)
}
</script>

<template>
  <main>
    <h1>🍕 Campus Food Showdown!</h1>
    <p class="subtitle">Vote for the snack that deserves to win Campus Favorite.</p>

    <div class="topline">
      <p><strong>Total Votes:</strong> {{ totalVotes }}</p>
      <button class="secondary" @click="resetVotes">Reset Votes</button>
    </div>

    <p class="status" v-if="totalVotes === 0">No votes yet!</p>
    <p class="status" v-else>Currently leading: {{ rankedSnacks[0].name }}!</p>

    <section class="cards">
      <SnackCard
        v-for="snack in snacks"
        :key="snack.id"
        :snack="snack"
        @vote="voteForSnack"
      />
    </section>

    <Leaderboard :ranked-snacks="rankedSnacks" />
  </main>
</template>
