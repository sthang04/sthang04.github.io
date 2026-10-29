import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import SnackCard from '../components/SnackCard.vue'
import Leaderboard from '../components/Leaderboard.vue'

describe('Campus Food Showdown integration', () => {
  it('updates the total after voting for a snack', async () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Total Votes: 0')

    const firstCard = wrapper.findComponent(SnackCard)
    await firstCard.get('button').trigger('click')

    expect(wrapper.text()).toContain('Total Votes: 1')
  })

  it('updates the leaderboard when a snack receives more votes', async () => {
    const wrapper = mount(App)
    const cards = wrapper.findAllComponents(SnackCard)

    // Vote for Pizza (second card, index 1)
    await cards[1].get('button').trigger('click')

    const leaderboard = wrapper.findComponent(Leaderboard)
    const items = leaderboard.findAll('li')
    expect(items[0].text()).toContain('Pizza')
    expect(items[0].text()).toContain('1 vote')
    expect(wrapper.text()).toContain('Currently leading: Pizza!')
  })

  it('resets votes across cards, total, and status', async () => {
    const wrapper = mount(App)
    const cards = wrapper.findAllComponents(SnackCard)

    // Vote for the first snack
    await cards[0].get('button').trigger('click')
    expect(wrapper.text()).toContain('Total Votes: 1')
    expect(wrapper.text()).toContain('Currently leading: Bubble Tea!')

    // Click the Reset Votes button
    await wrapper.get('button.secondary').trigger('click')

    expect(wrapper.text()).toContain('Total Votes: 0')
    expect(wrapper.text()).toContain('No votes yet!')
    expect(cards[0].text()).toContain('0 votes')
  })
})
