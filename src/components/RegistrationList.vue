<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  records: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['search', 'delete', 'edit'])

const selectedStatus = ref('All')
const filteredRecords = computed(() => {
  if (selectedStatus.value === 'All') {
    return props.records
  }

 return props.records.filter(record => {
  if (selectedStatus.value === 'Active') {
    return record.status === 'Registered' || record.status === 'Confirmed'
  }

  if (selectedStatus.value === 'Inactive') {
    return record.status === 'Cancelled'
  }

  return true
})
})
</script>
<template>
  <section class="bg-white rounded-lg shadow-lg border border-slate-200 p-6 mt-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
  <div>
    <h2 class="text-xl font-semibold text-slate-800">
      Registrations
    </h2>

    <p class="text-sm text-slate-500">
      Registered attendees will appear here.
    </p>
  </div>

  <div class="flex items-center gap-3">
    <!-- Search -->
    <input
      type="text"
      placeholder="Search registrations..."
      class="border border-slate-300 rounded-full px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-slate-300"
      @input="emit('search', $event.target.value)"
    />
    <!-- Status Filter -->
<select
  v-model="selectedStatus"
  class="border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
>
  <option value="All">All</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
    <!-- Total -->
    <span
      class="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold whitespace-nowrap shadow-sm"
    >
      {{ filteredRecords.length }} Total
    </span>
  </div>
</div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-slate-200">
            <th class="px-3 py-3 text-sm font-semibold text-slate-700">
              Event Name
            </th>
            <th class="px-3 py-3 text-sm font-semibold text-slate-700">
              Attendee Name
            </th>
            <th class="px-3 py-3 text-sm font-semibold text-slate-700">
              Email
            </th>
            <th class="px-3 py-3 text-sm font-semibold text-slate-700">
              Status
            </th>
            <th class="px-3 py-3 text-sm font-semibold text-slate-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
  <tr
    v-for="record in filteredRecords"
    :key="record.id"
    class="border-b border-slate-100"
  >
    <td class="px-3 py-3">
      {{ record.eventName }}
    </td>

    <td class="px-3 py-3">
      {{ record.attendeeName }}
    </td>

    <td class="px-3 py-3">
      {{ record.attendeeEmail }}
    </td>

    <td class="px-3 py-3">
      {{ record.status }}
    </td>

    <td class="px-3 py-3">
      <button
  class="text-blue-600 hover:underline mr-3"
  @click="emit('edit', record)"
>
  Edit
</button>

      <button
  class="text-red-600 hover:underline"
  @click="emit('delete', record.id)"
>
  Delete
</button>
    </td>
  </tr>

 <tr v-if="filteredRecords.length === 0">
    <td colspan="5" class="px-3 py-6 text-center text-slate-500">
      No registrations yet.
    </td>
  </tr>
</tbody>
      </table>
    </div>
  </section>
</template>