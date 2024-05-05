const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   

   it('should add the address', async () => {
        
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField= await $(page.fromField);
        const toField= await $(page.toField);
        await expect(fromField[value='East 2nd Street, 601']).toBe();
        await expect (toField[value='1300 1st St']).toBe();
   
    })
    

    it('should select supportive plan', async () => {
        
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
       await expect(supporttivePlan).toBeDisplayed();

        
    })
   
    it('should fill the phone number', async () => {
   
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add the credit card', async () => {
       
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
       
        await page.addingCardToPayment();

    
        const cardAddSuccessIcon= await $(page.cardAddSuccessIcon);
        await cardAddSuccessIcon.waitForDisplayed();
        await expect(await $(cardAddSuccessIcon)).toBeExisting();

        
    }) 

    it('should order a Blanket and handkerchiefs ', async () => {
       
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

    
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      

        
        
        const blanketButton= await $(page.blanketButton);
        await blanketButton.waitForDisplayed();
        await blanketButton.click();
        
        const blanketSwitch= await $(page.blanketSwitch);
    
        await expect(blanketSwitch).toBeChecked();

        
    }) 

    it('should add a message to the driver ', async () => {
        
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      
       const messageBox = await $(page.messageBox);
       await messageBox.waitForDisplayed();
       await messageBox.setValue('This is the message');
       await expect(messageBox[value='This is the message']).toBe();
    }) 

    
   it('should add two ice creams ', async () => {
       
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

     
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
      
     
       const addIceCream= await $(page.addIceCream);
       await addIceCream.click();
       await addIceCream.click();
       const iceCreamValue = await $(page.iceCreamValue);
       await iceCreamValue.waitForDisplayed();
       await expect(iceCreamValue).toHaveTextContaining('2');
   
    })
    it('should show the car search modal', async () => {
       
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

       
       const supporttivePlan = await $(page.supporttivePlanButton);
       await supporttivePlan.waitForDisplayed();
       await supporttivePlan.click();
       await expect (supporttivePlan).toBeDisplayed();

     
       const phoneNumber = helper.getPhoneNumber("+1");
       await page.submitPhoneNumber(phoneNumber);
       await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

     
       const orderButton = await $(page.orderButton);
       await orderButton.click();
    
     
       const searchModal= await $(page.searchModal);
       await expect(searchModal).toBeExisting(); 
    })
       

})
