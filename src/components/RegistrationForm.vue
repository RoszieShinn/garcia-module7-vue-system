```vue
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  editingRecord: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['submit', 'update', 'cancel'])

const eventName = ref('')
const attendeeName = ref('')
const attendeeEmail = ref('')
const status = ref('Registered')

watch(
  () => props.editingRecord,
  (record) => {
    if (record) {
      eventName.value = record.eventName
      attendeeName.value = record.attendeeName
      attendeeEmail.value = record.attendeeEmail
      status.value = record.status
    } else {
      eventName.value = ''
      attendeeName.value = ''
      attendeeEmail.value = ''
      status.value = 'Registered'
    }
  },
  { immediate: true }
)

function submitForm() {
  // Check if required fields are empty
  if (
    !eventName.value.trim() ||
    !attendeeName.value.trim() ||
    !attendeeEmail.value.trim()
  ) {
    window.alert(
      'Please fill in all required fields before submitting.'
    )
    return
  }

  const data = {
    eventName: eventName.value.trim(),
    attendeeName: attendeeName.value.trim(),
    attendeeEmail: attendeeEmail.value.trim(),
    status: status.value
  }

  if (props.editingRecord) {
    emit('update', {
      id: props.editingRecord.id,
      ...data
    })
  } else {
    emit('submit', data)
  }

  eventName.value = ''
  attendeeName.value = ''
  attendeeEmail.value = ''
  status.value = 'Registered'
}

function cancelEdit() {
  emit('cancel')
}
</script>

<template>
  <section class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold text-slate-800 mb-4">
      {{ editingRecord ? 'Edit Registration' : 'Add Registration' }}
    </h2>

    <form class="space-y-4" @submit.prevent="submitForm">

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Event Name
        </label>

        <input
          v-model="eventName"
          type="text"
          placeholder="Enter event name"
          class="w-full border border-slate-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Attendee Name
        </label>

        <input
          v-model="attendeeName"
          type="text"
          placeholder="Enter attendee name"
          class="w-full border border-slate-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Attendee Email
        </label>

        <input
          v-model="attendeeEmail"
          type="email"
          placeholder="Enter attendee email"
          class="w-full border border-slate-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Status
        </label>

        <select
          v-model="status"
          class="w-full border border-slate-300 rounded-md px-3 py-2"
        >
          <option>Registered</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div class="flex gap-3">

        <button
          type="submit"
          class="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          {{ editingRecord ? 'Update Registration' : 'Add Registration' }}
        </button>

        <button
          v-if="editingRecord"
          type="button"
          @click="cancelEdit"
          class="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-md hover:bg-slate-100"
        >
          Cancel
        </button>

      </div>

    </form>
  </section>
</template>
```
