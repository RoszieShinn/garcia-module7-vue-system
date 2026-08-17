<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import RegistrationList from './components/RegistrationList.vue'
import RegistrationSummary from './components/RegistrationSummary.vue'
import AppFooter from './components/AppFooter.vue'

const records = ref([])
const searchTerm = ref('')
const editingId = ref(null)
const successMessage = ref('')

onMounted(() => {
  const saved = localStorage.getItem('module7-records')
  records.value = saved ? JSON.parse(saved) : []
})

function saveRecords() {
  localStorage.setItem(
    'module7-records',
    JSON.stringify(records.value)
  )
}

function addRecord(newRecord) {
  records.value.push({
    id: Date.now(),
    ...newRecord
  })

  saveRecords()

  successMessage.value = 'Registration added successfully!'

  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}

function updateRecord(updatedRecord) {
  records.value = records.value.map(record =>
    record.id === updatedRecord.id
      ? updatedRecord
      : record
  )

  editingId.value = null
  saveRecords()

  successMessage.value = 'Registration updated successfully!'

  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}

function deleteRecord(id) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this record?'
  )

  if (!confirmed) return

  records.value = records.value.filter(
    record => record.id !== id
  )

  saveRecords()
}

function editRecord(record) {
  editingId.value = record.id
}

const filteredRecords = computed(() => {
  const q = searchTerm.value.trim().toLowerCase()

  if (!q) return records.value

  return records.value.filter((record) =>
    record.eventName.toLowerCase().includes(q) ||
    record.attendeeName.toLowerCase().includes(q) ||
    record.attendeeEmail.toLowerCase().includes(q) ||
    record.status.toLowerCase().includes(q)
  )
})

const editingRecord = computed(() =>
  records.value.find(
    record => record.id === editingId.value
  ) || null
)
</script>

<template>
  <AppHeader />

  <main class="max-w-6xl mx-auto px-6 py-8">
    <RegistrationSummary :records="records" />
    <div
  v-if="successMessage"
  class="mb-4 bg-green-100 text-green-700 px-4 py-3 rounded-md"
>
  {{ successMessage }}
</div>

<RegistrationForm
  :editing-record="editingRecord"
  @submit="addRecord"
  @update="updateRecord"
  @cancel="editingId = null"
/>
  <RegistrationList
    :records="filteredRecords"
    @search="searchTerm = $event"
    @delete="deleteRecord"
    @edit="editRecord"
  />
</main>
  <AppFooter />
</template>