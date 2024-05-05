const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   

   it('should add the address', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect
   
    })

    it('should select supportive plan', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       // selecting supportive
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
       await expect (supporttivePlan).toBeDisplayed();

        
    })
    it('should fill the phone number', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add the credit card', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        //card function import
        await page.addingCardToPayment();

        //verifying card added
        const cardAddIcon= await $(page.cardAddIcon);
        await cardAddIcon.waitForDisplayed();
        await expect(await $(cardAddIcon)).toBeExisting();

        
    })

    it('should order a Blanket and handkerchiefs ', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // selecting supportive
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      

        
        // selecting Blanket and Handkerchiefs
        const blanketButton= await $(page.blanketButton);
        await blanketButton.waitForDisplayed();
        await blanketButton.click();
        //verify selection
        const blanketSwitch= await $(page.blanketSwitch);
    
        await expect(blanketSwitch).toBeChecked();

        
    }) 

    it('should add a message to the driver ', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // selecting supportive
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      
       // adding message
       const messageBox = await $(page.messageBox);
       await messageBox.waitForDisplayed();
       await messageBox.setValue('This is the message');
       await expect(messageBox[value='This is the message']);
    }) 

    
   it('should add two ice creams ', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // selecting supportive
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      
       // adding ice cream
       const addIceCream= await $(page.addIceCream);
       await addIceCream.click();
       await addIceCream.click();
       const iceCreamValue = await $(page.iceCreamValue);
       await iceCreamValue.waitForDisplayed();
       await expect(iceCreamValue).toHaveTextContaining('2');
   
    })
    it('should show the car search modal', async () => {
        //calling taxi - setting the address 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       // selecting supportive
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
       await expect (supporttivePlan).toBeDisplayed();

       // input phone number
       const phoneNumber = helper.getPhoneNumber("+1");
       await page.submitPhoneNumber(phoneNumber);
       await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

       // press order button
       const orderButton = await $(page.orderButton);
       await orderButton.click();
    
      //verify search modal is displayed
       const searchModal= await $(page.searchModal);
       await expect(searchModal).toBeExisting(); 
    })
       

})
