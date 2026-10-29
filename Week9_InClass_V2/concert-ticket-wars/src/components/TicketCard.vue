<script setup>
// TODO Part A: define props: ticket (Object), remaining (Number), atLimit (Boolean).
// TODO Part B: declare the 'book' custom event.
</script>

<template>
  <div class="card h-100"><div class="card-body">
    <!-- TODO Part A: show ticket name, price, remaining inventory, SOLD OUT state. -->
    <h3 class="h5">Ticket category</h3>
    <p>Price: TODO</p>
    <p>Availability: TODO</p>
    <!-- TODO Part G: render the named 'message' slot. -->
    <!-- TODO Part B: disable button when sold out or at four-ticket limit;
         emit 'book' with ticket.id when clicked. -->
    <button class="btn btn-primary" disabled>Book Ticket</button>
  </div></div>
</template>
