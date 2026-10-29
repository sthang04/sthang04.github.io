<script setup>
import { ref, computed } from 'vue'
import SnackCard from './components/SnackCard.vue'
import Leaderboard from './components/Leaderboard.vue'

const snacks = ref([
  { id: 1, name: 'Bubble Tea', emoji: '🧋', votes: 0 },
  { id: 2, name: 'Pizza', emoji: '🍕', votes: 0 },
  { id: 3, name: 'Fries', emoji: '🍟', votes: 0 },
  { id: 4, name: 'Ice Cream', emoji: '🍦', votes: 0 }
])

// TODO Part B: Write voteForSnack(snackId) to add one vote to the matching snack.
function voteForSnack(snackId) {
  // Your code here
  console.log("[App.vue] voteForSnack, snackId: " + snackId)

  const snack = snacks.value.find(item => item.id === snackId)
  if (snack) {
    snack.votes+=1
  }
}

// TODO Part C: Compute rankedSnacks in descending order of votes.
// Important: do not sort snacks.value directly!
const rankedSnacks = computed(() => {
  return [...snacks.value].sort((a, b) => b.votes - a.votes)
  // return snacks // Replace this
})

// TODO Part D: Compute the sum of votes across all snacks.
const totalVotes = computed(() => {
  return snacks.value.reduce((sum, snack) => sum + snack.votes, 0)
}) // Replace this
// const totalVotesAgain = computed(() => {
//   snacks.value.reduce((sum, snack) => sum + snack.votes, 0)
// }) // Replace this

const leaderMessage = computed(() => {
  if (totalVotes.value === 0) return 'No votes yet!'
  return `Currently leading: ${rankedSnacks.value[0].name}!`
  
})
// TODO Part E: Reset every snack's vote count to zero.
function resetVotes() {
  // Your code here
  snacks.value.forEach(snack => {
    snack.votes = 0
  })
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

    <!-- TODO Part D: Show 'No votes yet!' or 'Currently leading: NAME!' -->
    <p class="status">{{  leaderMessage }}</p>

    <section class="cards">
      <!-- TODO Parts A & B: Render SnackCard with v-for, :key, :snack, and @vote -->
      <SnackCard
        v-for="snack in snacks"
        :key="snack.id"
        :snack="snack"
        @vote="voteForSnack"
      />
    </section>

      
      <!-- <SnackCard></SnackCard>
      <SnackCard></SnackCard> -->

    <!-- TODO Part C: Pass :ranked-snacks to Leaderboard -->
    <Leaderboard
      :ranked-snacks="rankedSnacks"
    />
  </main>
</template>
