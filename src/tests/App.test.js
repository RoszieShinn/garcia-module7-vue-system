import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RegistrationForm from '../components/RegistrationForm.vue'
import RegistrationList from '../components/RegistrationList.vue'

describe('Registration Form', () => {
  it('adds a valid registration', async () => {
    const wrapper = mount(RegistrationForm)

    await wrapper.find('input[type="text"]').setValue('Computer Science Seminar')

    const inputs = wrapper.findAll('input[type="text"]')
    await inputs[1].setValue('Juan Dela Cruz')

    await wrapper.find('input[type="email"]').setValue('juan.delacruz@example.com')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')).toBeTruthy()

    expect(wrapper.emitted('submit')[0][0]).toEqual({
      eventName: 'Computer Science Seminar',
      attendeeName: 'Juan Dela Cruz',
      attendeeEmail: 'juan.delacruz@example.com',
      status: 'Registered'
    })
  })
})

describe('Registration List', () => {
  it('displays registration records', () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      },
      {
        id: 2,
        eventName: 'Technology Workshop',
        attendeeName: 'Maria Santos',
        attendeeEmail: 'maria.santos@example.com',
        status: 'Confirmed'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    expect(wrapper.text()).toContain('Computer Science Seminar')
    expect(wrapper.text()).toContain('Juan Dela Cruz')
    expect(wrapper.text()).toContain('juan.delacruz@example.com')
    expect(wrapper.text()).toContain('Registered')

    expect(wrapper.text()).toContain('Technology Workshop')
    expect(wrapper.text()).toContain('Maria Santos')
    expect(wrapper.text()).toContain('maria.santos@example.com')
    expect(wrapper.text()).toContain('Confirmed')
  })
})
describe('Registration List - Edit', () => {
  it('emits the selected record when Edit is clicked', async () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')[0][0]).toEqual(records[0])
  })
})
describe('Registration List - Delete', () => {
  it('emits the record id when Delete is clicked', async () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    const buttons = wrapper.findAll('button')

    await buttons[1].trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0][0]).toBe(1)
  })
})
describe('Registration List - Search', () => {
  it('emits the search term when searching', async () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    const searchInput = wrapper.find('input[placeholder="Search registrations..."]')

    await searchInput.setValue('Juan Dela Cruz')

    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')[0][0]).toBe('Juan Dela Cruz')
  })
})
describe('Registration List - Status Filter', () => {
  it('shows only Active records when Active filter is selected', async () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      },
      {
        id: 2,
        eventName: 'Technology Workshop',
        attendeeName: 'Maria Santos',
        attendeeEmail: 'maria.santos@example.com',
        status: 'Cancelled'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    await wrapper.find('select').setValue('Active')

    expect(wrapper.text()).toContain('Computer Science Seminar')
    expect(wrapper.text()).not.toContain('Technology Workshop')
  })

  it('shows only Inactive records when Inactive filter is selected', async () => {
    const records = [
      {
        id: 1,
        eventName: 'Computer Science Seminar',
        attendeeName: 'Juan Dela Cruz',
        attendeeEmail: 'juan.delacruz@example.com',
        status: 'Registered'
      },
      {
        id: 2,
        eventName: 'Technology Workshop',
        attendeeName: 'Maria Santos',
        attendeeEmail: 'maria.santos@example.com',
        status: 'Cancelled'
      }
    ]

    const wrapper = mount(RegistrationList, {
      props: {
        records
      }
    })

    await wrapper.find('select').setValue('Inactive')

    expect(wrapper.text()).toContain('Technology Workshop')
    expect(wrapper.text()).not.toContain('Computer Science Seminar')
  })
})