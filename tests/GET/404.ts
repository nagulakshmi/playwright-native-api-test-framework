import { expect, test } from '@playwright/test'
import logger from '../../support/logger'

test('Single user not found', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/23')
    const json = await response.json()
    expect(response.status()).toBe(404);
})