export function getTotalVotes(snacks) {
  return snacks.reduce((total, snack) => {
    return total + snack.votes
  }, 0)
}

export function rankSnacks(snacks) {
  const copiedSnacks = [...snacks]

  copiedSnacks.sort((first, second) => {
    return second.votes - first.votes
  })

  return copiedSnacks
}

export function addVote(snacks, snackId) {
  return snacks.map((snack) => {
    if (snack.id === snackId) {
      return {
        ...snack,
        votes: snack.votes + 1
      }
    }

    return snack
  })
}

export function clearVotes(snacks) {
  return snacks.map((snack) => {
    return {
      ...snack,
      votes: 0
    }
  })
}
