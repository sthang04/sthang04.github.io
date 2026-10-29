<script setup>
import { ref } from 'vue'
import CatCard from '../components/CatCard.vue'
const initialCats = [
  { id: 1, name: 'Mochi', emoji: '🐈', hunger: 80, feedings: 0 },
  { id: 2, name: 'Luna', emoji: '🐈‍⬛', hunger: 60, feedings: 0 },
  { id: 3, name: 'Milo', emoji: '🐱', hunger: 100, feedings: 0 }
]
const cats = ref(initialCats.map(cat => ({ ...cat })))
// TODO Part 3: Render CatCard with v-for, :key, and :cat.
// TODO Part 4: Write feedCat(catId), and listen for @feed.
// TODO Part 5: Pass custom message content through a named slot.
// TODO Part 6: Restore state in onMounted; save with watch and JSON.stringify.
</script>
<template>
  <main class="container py-5">
    <h1 class="text-center">🐾 Feed My Cats!</h1>
    <p class="text-center">Keep the kitties happy and well-fed.</p>
    <div class="row g-3">
      <!-- TODO Part 3: Render the cat cards here. -->
    </div>
  </main>
</template>
