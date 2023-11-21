import { expect, test } from '@playwright/test'

test('Get list of users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    const json = await response.json()
    expect(response.ok()).toBeTruthy();
    expect(json.page).toBe(2)    
})