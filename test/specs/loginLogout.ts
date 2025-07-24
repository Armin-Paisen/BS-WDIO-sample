import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import data from '../data'

describe('Log into customer account', () => {
    it('should login with no credentials and check error', async () => {

        await Home.navLogin.click()
        await LoginPage.login('', '')
        await expect(LoginPage.errorUsername).toBeExisting()
        await expect(LoginPage.errorUsername).toHaveText("Please enter atleast 8 digits")
   })

    it('should login with wrong credentials and check error', async () => {

        await LoginPage.login(data.wrongUser.email, data.wrongUser.password)
        await expect(LoginPage.errorUsername).toBeExisting()
        await expect(LoginPage.errorUsername).toHaveText("Please enter atleast 8 digits")
    })

    it('should login with valid credentials', async () => {
    // This sample app's login doesnt really work it just shows an example "you are logged in" message"
        await LoginPage.login(data.validUser.email, data.validUser.password)
        await expect(LoginPage).toBeExisting()

    })
})

