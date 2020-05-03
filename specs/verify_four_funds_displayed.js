describe('Vanguard Compare Fund App', function () {
    var EC = protractor.ExpectedConditions;
    let fundIdentifierArray = [
        { "id": "VAN0221AU", selector: "#selectorRow div.fundNameBlock #fundInput0" },
        { "id": "VAN3932AU", selector: "#selectorRow div.fundNameBlock #fundInput1" },
        { "id": "VAN0722AU", selector: "#selectorRow div.fundNameBlock #fundInput2" },
        { "id": "VAN0065AU", selector: "#selectorRow div.fundNameBlock #fundInput3" }
    ]


    let FundIdentifierArray

    beforeEach(function () {
        browser.manage().window().maximize();
        browser.get('https://tool.vanguardinvestments.com.au/mstar/au/fundcompare.htm?##target=fct');
        var compareFundTable = element(by.css('#main > #compareTable'));

        browser.wait(EC.visibilityOf(compareFundTable), 5000);
    });



    it('should allow to add fund by fund identifier', function () {

        /* fundIdentifierArray.forEach((elem, index) => {

            var inputFund = element(by.css(elem.selector));
            browser.wait(EC.visibilityOf(inputFund), 10000);
            inputFund.sendKeys(elem.id);

            let searchResultLink = element(by.css('#searchLink'))
            browser.wait(EC.visibilityOf(searchResultLink), 10000);
            searchResultLink.click();

            let searchResult = element(by.css('#compareTable #compareTableResults'));
            browser.wait(EC.visibilityOf(searchResult), 5000);
            

            let fundIdInresult = element(by.xpath(" //td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[" + index + "]"));
            browser.wait(EC.visibilityOf(fundIdInresult), 10000);
            expect(fundIdInresult.getText()).toEqual(elem.id); 


        }); 
 */

        var inputFund1 = element(by.css(fundIdentifierArray[0].selector));
        browser.wait(EC.visibilityOf(inputFund1), 10000);
        inputFund1.sendKeys(fundIdentifierArray[0].id);

        let searchResultLink = element(by.css('#searchLink'))
        browser.wait(EC.visibilityOf(searchResultLink), 10000);
        searchResultLink.click();


        var inputFund2 = element(by.css(fundIdentifierArray[1].selector));
        browser.wait(EC.visibilityOf(inputFund2), 10000);
        inputFund2.sendKeys(fundIdentifierArray[1].id);

        browser.wait(EC.visibilityOf(searchResultLink), 10000);
        searchResultLink.click();


        var inputFund3 = element(by.css(fundIdentifierArray[2].selector));
        browser.wait(EC.visibilityOf(inputFund3), 10000);
        inputFund3.sendKeys(fundIdentifierArray[2].id);

        browser.wait(EC.visibilityOf(searchResultLink), 10000);
        searchResultLink.click();

        var inputFund4 = element(by.css(fundIdentifierArray[3].selector));
        browser.wait(EC.visibilityOf(inputFund4), 10000);
        inputFund4.sendKeys(fundIdentifierArray[3].id);
        browser.wait(EC.visibilityOf(searchResultLink), 10000);
        searchResultLink.click();


        let searchResult = element(by.css('#compareTable #compareTableResults'));
        browser.wait(EC.visibilityOf(searchResult), 5000);
        expect(searchResult.isDisplayed()).toBe(true);

      //validate each ids displayed
        

    })


});


