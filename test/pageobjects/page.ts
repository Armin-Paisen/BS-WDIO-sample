//import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public get navLogin () {
        return $('~Login');
    }
    
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
