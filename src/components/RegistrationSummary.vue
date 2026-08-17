<script setup>
import { computed } from 'vue'

const props = defineProps({
  records: {
    type: Array,
    default: () => []
  }
})

const totalRegistrations = computed(() => props.records.length)

const registeredCount = computed(() =>
  props.records.filter(record => record.status === 'Registered').length
)

const confirmedCount = computed(() =>
  props.records.filter(record => record.status === 'Confirmed').length
)

const cancelledCount = computed(() =>
  props.records.filter(record => record.status === 'Cancelled').length
)
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

    <!-- Total Registrations -->
    <div
  class="bg-white rounded-lg shadow-lg p-5 border border-slate-200 border-l-4 border-l-slate-800"
  aria-label="Total registrations"
>
      <p class="text-sm font-medium text-slate-500 uppercase">
        Total Registrations
      </p>

      <p class="text-3xl font-bold text-slate-800 mt-2">
        {{ totalRegistrations }}
      </p>
    </div>

    <!-- Registered -->
    <div
      class="bg-white rounded-lg shadow-lg p-5 border border-slate-200 border-l-4 border-l-blue-500"
    >
      <p class="text-sm font-medium text-slate-500 uppercase">
        Registered
      </p>

      <p class="text-3xl font-bold text-blue-600 mt-2">
        {{ registeredCount }}
      </p>
    </div>

    <!-- Confirmed -->
    <div
      class="bg-white rounded-lg shadow-lg p-5 border border-slate-200 border-l-4 border-l-green-500"
    >
      <p class="text-sm font-medium text-slate-500 uppercase">
        Confirmed
      </p>

      <p class="text-3xl font-bold text-green-600 mt-2">
        {{ confirmedCount }}
      </p>
    </div>

    <!-- Cancelled -->
    <div
      class="bg-white rounded-lg shadow-lg p-5 border border-slate-200 border-l-4 border-l-red-500"
    >
      <p class="text-sm font-medium text-slate-500 uppercase">
        Cancelled
      </p>

      <p class="text-3xl font-bold text-red-600 mt-2">
        {{ cancelledCount }}
      </p>
    </div>

  </section>
</template>