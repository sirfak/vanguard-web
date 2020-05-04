describe('Validate compare fund functionalities', function () {

    var EC = protractor.ExpectedConditions;
    let firstFundName="Vanguard Active Emerging Market Equity Fund";
    let firstFundIdentifier="VAN0221AU";

    beforeEach(function () {
        let host=  browser.params.appUrl;
        browser.get(host+'/mstar/au/fundcompare.htm?##target=fct');
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

        //input fund identifier
        var inputFund = element(by.css('#selectorRow div.fundNameBlock #fundInput0'));
        browser.wait(EC.visibilityOf(inputFund), 5000);
        inputFund.sendKeys(firstFundIdentifier);


        //select the fund
        let searchResultLink = element(by.css('#searchLink'))
        browser.wait(EC.visibilityOf(searchResultLink), 5000);
        searchResultLink.click();


        //validate search result displayed
        let searchResult = element(by.css('#compareTable #compareTableResults'));
        browser.wait(EC.visibilityOf(searchResult), 5000);
        expect(searchResult.isDisplayed()).toBe(true);

        //validate fund is added
        let fundIDInResult=element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
        browser.wait(EC.visibilityOf(fundIDInResult), 5000);
        expect(fundIDInResult.getText()).toEqual(firstFundIdentifier);

    })

    it('should allow to add fund by fund name', function () {

        //input fund name
        var inputFund = element(by.css('#selectorRow div.fundNameBlock #fundInput0'));
        browser.wait(EC.visibilityOf(inputFund), 5000);
        inputFund.sendKeys(firstFundName);


        //select the fund
        let searchResultLink = element(by.css('#searchLink'))
        browser.wait(EC.visibilityOf(searchResultLink), 5000);
        searchResultLink.click();


        //validate search result displayed
        let searchResult = element(by.css('#compareTable #compareTableResults'));
        browser.wait(EC.visibilityOf(searchResult), 5000);
        expect(searchResult.isDisplayed()).toBe(true);

        //validate fund name selected
        expect(element(by.cssContainingText('*',firstFundName)).isPresent()).toBeTruthy();

    })
});


