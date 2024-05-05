module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code' ,
    messageBox: '#comment',
    addIceCream: '.counter-plus',
    iceCreamValue: '.counter-value',


    // Buttons

    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supporttivePlanButton: 'img[alt=Supportive]',
    paymentButton:'.pp-text', 
    addCardButton: "div=Add card", 
    linkCardButton:'button=Link',
    closePaymentmodal: '.payment-picker .close-button',
    blanketButton: '.switch',
    blanketSwitch: '.switch-input',
    orderButton: '.smart-button',
    
    //strip
    cardStrip: '.plc',
    cardAddIcon: 'img[alt=card]',


    // Modals
    phoneNumberModal: '.modal',
    searchModal: '.order-subbody',


    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    
    },
    //Adding card

    addingCardToPayment: async function(){
        
        //clicking payment method
        const paymentButton = await $(this.paymentButton);
        await paymentButton.waitForDisplayed();
        await paymentButton.click();

        // selecting add card 
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
         
        //adding card number
        const cardNumber= await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234432112341234);
        
        //adding cvc
        const cardCode= await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(223);

        //clicking link card 
        const cardStrip= $(this.cardStrip);
        await cardStrip.click(); 
        

        const linkCardButton= await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        //closing modal

        const closePaymentmodal = await $(this.closePaymentmodal);
        await closePaymentmodal.waitForDisplayed();
        await closePaymentmodal.click();

    }
};