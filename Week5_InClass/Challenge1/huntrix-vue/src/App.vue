<script setup>
import { ref, computed, watch } from 'vue'

const group = 'HUNTRIX'

const members = [
  {
    id: 1,
    name: 'Rumi',
    role: 'Leader, Vocal',
    img: '/photos/rumi.jpg',
    profile: [
      'Zodiac Sign: Aries',
      'Chinese Zodiac Sign: Goat',
      'Oldest of the three members in HUNTRIX',
      'Taekwondo Black Belt',
      'Loves cats',
      'Her favorite ramen flavor is Spicy Chicken.'
    ]
  },
  {
    id: 2,
    name: 'Mira',
    role: 'Rapper',
    img: '/photos/mira.jpg',
    profile: [
      'Zodiac Sign: Taurus',
      'Chinese Zodiac Sign: Monkey',
      'Dancing since 4 years old',
      'Choreography for most of HUNTRIX songs',
      'Mira can play drums',
      'Her favorite ramen flavor is roast beef.'
    ]
  },
  {
    id: 3,
    name: 'Zoey',
    role: 'Dancer',
    img: '/photos/zoey.jpg',
    profile: [
      'Zodiac Sign: Sagittarius',
      'Chinese Zodiac Sign: Rooster',
      'Her hobbies are drawing and skateboarding.',
      'She can play the bass',
      "Wrote most of HUNTRIX songs' rap parts",
      'Her favorite ramen flavor is pork with soy sauce.'
    ]
  }
]

const query = ref('')
const selectedMember = ref(null)

const filteredMembers = computed(() => {
  // Step 1: Clean up the query
  const q = query.value.trim().toLowerCase()

  // Step 2: If query is empty, show everyone
  if (!q) return members

  // Step 3: Create a new array that only includes matches
  return members.filter((m) =>
    m.name.toLowerCase().includes(q)
  )
})

// DIY Task 1: Toggle Behavior
function showProfile(member) {
  if (selectedMember.value && selectedMember.value.id === member.id) {
    selectedMember.value = null
  } else {
    selectedMember.value = member
  }
}

// DIY Task 2: Reset Highlight on Search Change
watch(query, () => {
  selectedMember.value = null
})
</script>

<template>
  <main class="container">
    <h1>{{ group }} Member Explorer</h1>

    <p>
      Search:
      <input type="text" v-model="query">
    </p>

    <p>
      Results:
      {{ filteredMembers.length }} of {{ members.length }}
    </p>

    <p v-if="filteredMembers.length === 0">
      No members found for "{{ query }}"
    </p>

    <ol v-else>
      <li v-for="m in filteredMembers" :key="m.id">
        <button
          :class="{ active: selectedMember && selectedMember.id === m.id }"
          @click="showProfile(m)"
        >
          {{ m.name }} – {{ m.role }}
        </button>
        <br>
        <img :src="m.img" :alt="m.name" :title="m.name" width="100">
      </li>
    </ol>

    <!-- Profile section -->
    <section v-if="selectedMember" class="profile">
      <h2>{{ selectedMember.name }}'s Profile</h2>
      <ul>
        <li v-for="(info, idx) in selectedMember.profile" :key="idx">
          {{ info }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.active {
  background-color: purple;
  color: white;
}
</style>
