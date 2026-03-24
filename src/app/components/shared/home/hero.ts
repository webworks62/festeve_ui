import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
<!-- <section class="flex justify-center items-center h-screen">
  <h1 class="text-3xl font-bold">Hello festeve</h1>
</section> -->
  <!-- Hero Section -->
  <section class="h-screen flex flex-col justify-center items-center text-center px-6">
    <h1 class="text-5xl font-bold mb-4">
      A New Way to Celebrate Festivals 🎉
    </h1>
    <p class="text-lg text-gray-600 mb-6 max-w-xl">
      Discover events, hire purohits, shop festive items and make your celebrations memorable with Festeve.
    </p>
    <div class="space-x-4">
      <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
        Get Started
      </button>
      <button class="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100">
        Learn More
      </button>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-10">Our Features</h2>

    <div class="grid md:grid-cols-3 gap-8 px-8">
      <div class="p-6 shadow-lg rounded-xl text-center">
        <h3 class="text-xl font-semibold mb-2">🎯 Easy Booking</h3>
        <p class="text-gray-600">Book purohits and services in minutes.</p>
      </div>

      <div class="p-6 shadow-lg rounded-xl text-center">
        <h3 class="text-xl font-semibold mb-2">🛍️ Festive Store</h3>
        <p class="text-gray-600">Shop everything needed for your festivals.</p>
      </div>

      <div class="p-6 shadow-lg rounded-xl text-center">
        <h3 class="text-xl font-semibold mb-2">📅 Event Management</h3>
        <p class="text-gray-600">Plan and manage events effortlessly.</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-indigo-600 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">Start Your Journey with Festeve</h2>
    <p class="mb-6">Join thousands of users celebrating smarter.</p>
    <button class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
      Join Now
    </button>
  </section>
`
})
export class Hero {

}
