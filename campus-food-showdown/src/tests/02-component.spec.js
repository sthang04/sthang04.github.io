import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SnackCard from '../components/SnackCard.vue'
import Leaderboard from '../components/Leaderboard.vue'

describe('SnackCard', () => {

  const snack = { id: 1, name: 'Bubble Tea', emoji: '🧋', votes: 1 }
  
  it('displays the snack name and vote count', () => {
    const wrapper = mount(SnackCard, { props: { snack } })
    // an instance of snackcard child component has been created, has recieved bubble tea obejct
    expect(wrapper.text()).toContain('Bubble Tea')
    expect(wrapper.text()).toContain('1 vote')
  })

  it('emits a vote event with the snack ID', async () => {
    const wrapper = mount(SnackCard, { props: { snack } })
    await wrapper.get('button').trigger('click')
    // wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('vote')
    expect(wrapper.emitted('vote')[0]).toEqual([1])
  })
})

describe('Leaderboard', () => {
  const rankedSnacks = [
    { id: 2, name: 'Pizza', emoji: '🍕', votes: 3 },
    { id: 3, name: 'Fries', emoji: '🍟', votes: 2 },
    { id: 1, name: 'Bubble Tea', emoji: '🧋', votes: 1 }
  ]

  it('displays snacks in the order provided', () => {
    const wrapper = mount(Leaderboard, { props: { rankedSnacks } })
    const items = wrapper.findAll('li')
    expect(items).toHaveLength(3)
    expect(items[0].text()).toContain('Pizza')
    expect(items[1].text()).toContain('Fries')
    expect(items[2].text()).toContain('Bubble Tea')
  })

  it('shows plural votes correctly', () => {
    const wrapper = mount(Leaderboard, { props: { rankedSnacks } })
    const items = wrapper.findAll('li')
    expect(items[0].text()).toContain('3 votes')
    expect(items[2].text()).toContain('1 vote')
  })
})
