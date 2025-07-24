import { $ } from '@wdio/globals'
import Page from './page';
import homePage from './home.page';


 // sub page containing specific selectors and methods for a specific page
 
class LoginPage extends Page {
     // define selectors using getter methods

    public get inputUsername () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    public get errorUsername () {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    public get errorPassword () {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    public get btnLoginAlert () {
        return $('id:android:id/button1');
    }

     // a method to encapsule automation code to interact with the page
     // e.g. to login using username and password
    
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async navigateLogin (){
        await homePage.navLogin.click()
        await expect(this.btnSubmit).toBeDisplayed()
    } 
    
    // overwrite specific options to adapt it to page object
     
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
