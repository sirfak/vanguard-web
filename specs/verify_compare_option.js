describe('Validate compare fund functionalities', function () {
    var EC = protractor.ExpectedConditions;
    let firstFundName="Vanguard Active Emerging Market Equity Fund";
    let firstFundIdentifier="VAN0221AU";

    beforeEach(function () {
        browser.get('https://tool.vanguardinvestments.com.au/mstar/au/fundcompare.htm?##target=fct');
        var compareFundTable = element(by.css('#main > #compareTable'));

        browser.wait(EC.visibilityOf(compareFundTable), 5000);
    });

     it('should have 4 options to compare', function () {
 
         var compareFundLocator = '#main > #compareTable div.fundNameBox';
         let compareOptions = $$(compareFundLocator);
         expect(compareOptions.count()).toBe(4);
     });
 
     it('should have one add button enabled',function(){
     
         var disabledButtonLocator="#selectorRow div.fundNameBlock p button.disableBtn"
         let disabledButtons = $$(disabledButtonLocator);
         expect(disabledButtons.count()).toBe(3);
     })
 

    it('should allow to add fund by fund identifier', function () {

        var inputFund = element(by.css('#selectorRow div.fundNameBlock #fundInput0'));
        browser.wait(EC.visibilityOf(inputFund), 5000);
        inputFund.sendKeys(firstFundIdentifier);


        let searchResultLink = element(by.css('#searchLink'))
        browser.wait(EC.visibilityOf(searchResultLink), 5000);
        searchResultLink.click();


        //Click Add button
        let searchResult = element(by.css('#compareTable #compareTableResults'));
        browser.wait(EC.visibilityOf(searchResult), 5000);
        expect(searchResult.isDisplayed()).toBe(true);

        let fundIDInResult=element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
        expect(fundIDInResult.getText()).toEqual(firstFundIdentifier);

    })

    it('should allow to add fund by fund name', function () {

        var inputFund = element(by.css('#selectorRow div.fundNameBlock #fundInput0'));
        browser.wait(EC.visibilityOf(inputFund), 5000);
        inputFund.sendKeys(firstFundName);


        let searchResultLink = element(by.css('#searchLink'))
        browser.wait(EC.visibilityOf(searchResultLink), 5000);
        searchResultLink.click();


        let searchResult = element(by.css('#compareTable #compareTableResults'));
        browser.wait(EC.visibilityOf(searchResult), 5000);
        expect(searchResult.isDisplayed()).toBe(true);

    })
});


