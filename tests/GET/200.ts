import { expect, test } from '@playwright/test'
import logger from '../../support/logger'

test('Get list of users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    const json = await response.json()
    expect(response.ok()).toBeTruthy();
    logger.info("Verify the response content")
    expect(json.page).toBe(2)    
    expect(json.total).toBe(12)
    const verifyUser = json.data.some(u => u.first_name === 'Michael')
    expect(verifyUser).toBeTruthy()
})

test('Get Single user',async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')
    const json = await response.json()
    expect(response.ok()).toBeTruthy();
    expect(json.data.first_name).toBe('Janet')
})