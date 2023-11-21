import { expect, test } from '@playwright/test'
import logger from '../../support/logger'

test('Create a new user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    })
    const json = await response.json()
    expect(response.ok()).toBeTruthy();

    //Mock API - Verify the inserted user here
    const user =  await request.get('https://reqres.in/api/users?page=2') 
    expect(user.ok()).toBeTruthy();
})