import Page from "./page";

// sub page containing specific selectors and methods for a specific page

class HomePage extends Page {
  // define selectors using getter methods

  public get screen() {
    return $("~Drag-drop-screen");
  }

  public get navDrag() {
    return $("~Drag");
  }

  public get successMessage() {
    return $('//android.widget.TextView[@text="Congratulations"]');
  }

  public get retryBtn() {
    return $("~button-Retry");
  }

  //DRAG ITEMS-----------
  //#####################
  public get item_l1() {
    return $("~drag-l1");
  }

  public get item_l2() {
    return $("~drag-l2");
  }

  public get item_l3() {
    return $("~drag-l3");
  }

  public get item_r1() {
    return $("~drag-r1");
  }

  public get item_r2() {
    return $("~drag-r2");
  }

  public get item_r3() {
    return $("~drag-r3");
  }

  public get item_c1() {
    return $("~drag-c1");
  }

  public get item_c2() {
    return $("~drag-c2");
  }

  public get item_c3() {
    return $("~drag-c3");
  }

  //TARGET FIELDS-----------
  //#####################
  public get target_l1() {
    return $("~drop-l1");
  }

  public get target_l2() {
    return $("~drop-l2");
  }

  public get target_l3() {
    return $("~drop-l3");
  }

  public get target_r1() {
    return $("~drop-r1");
  }

  public get target_r2() {
    return $("~drop-r2");
  }

  public get target_r3() {
    return $("~drop-r3");
  }

  public get target_c1() {
    return $("~drop-c1");
  }

  public get target_c2() {
    return $("~drop-c2");
  }

  public get target_c3() {
    return $("~drop-c3");
  }

  // a method to encapsule automation code to interact with the page
  // e.g. to login using username and password

  public async navigateLogin() {
    await this.navDrag.click();
    await expect(this.screen).toBeDisplayed();
  }

  // overwrite specific options to adapt it to page object

  public open() {
    return super.open("home");
  }
}

export default new HomePage();
