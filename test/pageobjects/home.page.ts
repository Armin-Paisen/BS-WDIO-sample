import { $ } from '@wdio/globals'
import Page from './page';


 // sub page containing specific selectors and methods for a specific page
 
class HomePage extends Page {
     // define selectors using getter methods

    public get header () {
        return $('');
    }

    public get navLogin () {
        return $('~Login');
    }
    public get navForms () {
        return $('~Forms');
    }

     // a method to encapsule automation code to interact with the page
     // e.g. to login using username and password
    

    
    // overwrite specific options to adapt it to page object
     
    public open () {
        return super.open('home');
    }
}

export default new HomePage();
