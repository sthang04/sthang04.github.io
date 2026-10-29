<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import TicketCard from './components/TicketCard.vue'
import BookingItem from './components/BookingItem.vue'

const STORAGE_KEY = 'concert-ticket-wars-bookings-v1'
const MAX_TICKETS = 4
const tickets = [
  { id: 1, name: 'VIP Soundcheck', price: 350, capacity: 5 },
  { id: 2, name: 'Standing Pen', price: 220, capacity: 10 },
  { id: 3, name: 'Category 1', price: 180, capacity: 15 },
  { id: 4, name: 'Category 2', price: 120, capacity: 20 }
]
const bookings = ref([]) // [{ ticketId: 1, quantity: 2 }]
const message = ref('')

// TODO Part E: calculate totalQuantity and totalCost using computed().
const totalQuantity = computed(() => 0)
const totalCost = computed(() => 0)

// TODO Part D: return booking records combined with their ticket information.
const bookingDetails = computed(() => [])

// TODO Part C: implement bookedQuantity(ticketId) and remaining(ticket).
function remaining(ticket) {
  return ticket.capacity
}

// TODO Part B: enforce the four-ticket limit and available inventory.
// Add one ticket to bookings, or increase its existing quantity.
function addTicket(ticketId) {
  message.value = 'TODO: implement addTicket'
}

// TODO Part D: change the quantity (+1 or -1), removing a booking at zero.
function changeQuantity(ticketId, change) {
  message.value = 'TODO: implement changeQuantity'
}
function removeBooking(ticketId) {
  message.value = 'TODO: implement removeBooking'
}
function resetBookings() {
  bookings.value = []
  message.value = 'All bookings cleared.'
}

// TODO Part F: load saved bookings in onMounted().
onMounted(() => {})
// TODO Part F: watch bookings (deep: true) and save to localStorage.
</script>

<template>
  <main class="container py-4">
    <h1>🎤 Concert Ticket Wars</h1>
    <p class="text-muted">The Ultimate Ticket Drop! Maximum {{ MAX_TICKETS }} tickets per customer.</p>
    <div v-if="message" class="alert alert-info" role="status">{{ message }}</div>
    <h2 class="h4 mt-4">Available Tickets</h2>
    <div class="row g-3">
      <div v-for="ticket in tickets" :key="ticket.id" class="col-md-6">
        <!-- TODO Part A: pass props and listen for the book event. -->
        <TicketCard :ticket="ticket" :remaining="remaining(ticket)" :at-limit="totalQuantity >= MAX_TICKETS" @book="addTicket">
          <template #message><span v-if="remaining(ticket) <= 2 && remaining(ticket) > 0" class="text-danger">Selling fast!</span></template>
        </TicketCard>
      </div>
    </div>
    <h2 class="h4 mt-4">Your Bookings ({{ totalQuantity }}/{{ MAX_TICKETS }})</h2>
    <p v-if="bookingDetails.length === 0">No tickets booked yet.</p>
    <div v-for="item in bookingDetails" :key="item.ticketId" class="mb-2">
      <!-- TODO Part D: implement BookingItem's props and emitted events. -->
      <BookingItem :ticket="item.ticket" :quantity="item.quantity" :can-increase="totalQuantity < MAX_TICKETS && remaining(item.ticket) > 0" @change-quantity="changeQuantity" @remove="removeBooking" />
    </div>
    <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
      <strong>Total: S${{ totalCost.toFixed(2) }}</strong>
      <button class="btn btn-outline-secondary" :disabled="totalQuantity === 0" @click="resetBookings">Clear Bookings</button>
    </div>
  </main>
</template>
