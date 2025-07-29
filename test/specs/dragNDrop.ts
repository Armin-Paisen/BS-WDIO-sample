import DraggingPage from '../pageobjects/dragging.page'

describe('Drags and drops items into correct place', () => {



    it('Drag and drops items + check success popup', async () => {

        await DraggingPage.navigateLogin();
        await expect(DraggingPage.screen).toBeDisplayed()
        await DraggingPage.item_l1.dragAndDrop(await DraggingPage.target_l1);
        await DraggingPage.item_l2.dragAndDrop(await DraggingPage.target_l2);
        await DraggingPage.item_l3.dragAndDrop(await DraggingPage.target_l3);
        await DraggingPage.item_r1.dragAndDrop(await DraggingPage.target_r1);
        await DraggingPage.item_r2.dragAndDrop(await DraggingPage.target_r2);
        await DraggingPage.item_r3.dragAndDrop(await DraggingPage.target_r3);
        await DraggingPage.item_c1.dragAndDrop(await DraggingPage.target_c1);
        await DraggingPage.item_c2.dragAndDrop(await DraggingPage.target_c2);
        await DraggingPage.item_c3.dragAndDrop(await DraggingPage.target_c3);

        await expect(DraggingPage.successMessage).toBeDisplayed()
        await expect(DraggingPage.successMessage).toHaveText("Congratulations")
        await expect(DraggingPage.retryBtn).toBeDisplayed()
        await DraggingPage.retryBtn.click()
        await expect(DraggingPage.successMessage).not.toBeDisplayed()
        await expect(DraggingPage.retryBtn).not.toBeDisplayed()
        await expect(DraggingPage.item_c1).toBeDisplayed()

    })


})

