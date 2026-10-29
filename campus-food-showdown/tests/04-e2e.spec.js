import { test, expect } from '@playwright/test'

test('a student votes, sees the leaderboard update, and resets votes', async ({ page }) => {
  await page.goto('/')

  // TODO: Vote for Pizza twice.
  const pizzaCard = page.locator('.card').filter({ hasText: 'Pizza' })
  await pizzaCard.getByRole('button', { name: 'Vote!' }).click()
  await pizzaCard.getByRole('button', { name: 'Vote!' }).click()

  // TODO: Assert that the total is 2 and Pizza leads the leaderboard.
  await expect(page.locator('.topline')).toContainText('Total Votes: 2')
  await expect(page.locator('.status')).toHaveText('Currently leading: Pizza!')
  await expect(page.locator('.leaderboard ol li').first()).toContainText('Pizza')
  await expect(page.locator('.leaderboard ol li').first()).toContainText('2 votes')

  // TODO: Click Reset Votes and assert that the total returns to 0.
  await page.getByRole('button', { name: 'Reset Votes' }).click()
  await expect(page.locator('.topline')).toContainText('Total Votes: 0')
  await expect(page.locator('.status')).toHaveText('No votes yet!')
})
