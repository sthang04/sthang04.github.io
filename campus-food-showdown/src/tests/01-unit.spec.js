import { describe, it, expect } from 'vitest'
import { getTotalVotes, rankSnacks, addVote, clearVotes } from '../lib/voting.js'

const snacks = [
  { id: 1, name: 'Bubble Tea', votes: 1 },
  { id: 2, name: 'Pizza', votes: 3 },
  { id: 3, name: 'Fries', votes: 2 }
]

describe('Voting utility functions', () => {
  // Test Case 1
  it('calculates the total number of votes', () => {
    const total = getTotalVotes(snacks)
    expect(total).toBe(6) //asertion 
  })
  // Test Case 2
  it('returns zero for an empty list', () => {
    const emptySnacks = []
    expect(getTotalVotes(emptySnacks)).toBe(0)
  })

  // Test Case 3
  it('ranks snacks without changing the original list', () => {
    const rankedSnacks = rankSnacks(snacks)
    expect(rankedSnacks[0].name).toBe('Pizza')
    expect(rankedSnacks[1].name).toBe('Fries')
    expect(rankedSnacks[2].name).toBe('Bubble Tea')

    expect(snacks[0].name).toBe('Bubble Tea') // Ensure original snacks array is not mutated
  })

  // Test Case 4
  it('adds a vote only to the selected snack', () => {
    const updated = addVote(snacks, 1)
    expect(updated[0].votes).toBe(2)
    expect(updated[1].votes).toBe(3)
    expect(updated[2].votes).toBe(2)

    expect(snacks[0].votes).toBe(1) // Ensure original snacks array is not mutated
  })

  // Test Case 5
  it('resets all vote counts to zero', () => {
    const reset = clearVotes(snacks)
    expect(reset[0].votes).toBe(0)
    expect(reset[1].votes).toBe(0)
    expect(reset[2].votes).toBe(0)

    expect(snacks[0].votes).toBe(1) // Ensure original snacks array is not mutated
  })
})
