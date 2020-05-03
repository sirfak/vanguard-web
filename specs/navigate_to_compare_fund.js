describe('Vanguard Compare Fund App', function () {
    var EC = protractor.ExpectedConditions;
    let homeUrl = 'https://www.vanguardinvestments.com.au/au/portal/homepage.jsp';
    let retailFundCompareUrl = 'https://www.vanguardinvestments.com.au/retail/ret/investments/product.html#/productType=retail';


    beforeEach(function () {
        browser.manage().window().maximize();

    });

    /* it('shoud be able to navigate to compare funds', function () {
        browser.get(homeUrl);
        var linkSmsf = element(by.css('p.showOnLrg a[href*="retail/jsp/home.jsp'))
        browser.wait(EC.visibilityOf(linkSmsf), 5000);
        linkSmsf.click();
        let retrailLink= element(by.cssContainingText('Retail managed funds'));
        
        browser.wait(EC.visibilityOf(retailFundLink), 10000);
        retrailLink.click();
       expect(browser.getCurrentUrl()).toContain('/retail/ret/investments/product.html#/productType=retail');
        //var retailFundLink = element(by.css('div.fundFinder dt a[href="/retail/ret/investments/product.html#/productType=retail"'));
        
        //browser.wait(EC.visibilityOf(retailFundLink), 10000);
        //retailFundLink.click();

        //browser.wait(EC.visibilityOf(element(by.css('#listviewTable'))), 10000);
        //expect(element(by.css('#listviewTable')).isDisplayed()).toBe(true);
    });
 */

    it('shoud be able to replace selected fund', function () {

        browser.get(retailFundCompareUrl);

        let selectedFundIndex = 2;
        let input = element(by.xpath("(//input[@type='checkbox'])[" + selectedFundIndex + "]"));
        browser.executeScript("arguments[0].scrollIntoView();", input);
        browser.executeScript("arguments[0].click();", input);


        //click compare
        let compareButton = element(by.css('#compareFunds'));
        expect(compareButton.isDisplayed()).toBe(true);

        compareButton.click();

        var compareFundTable = element(by.css('#main > #compareTable'));
        browser.wait(EC.visibilityOf(compareFundTable), 5000);

        let fundIDInResult = element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
        fundIDInResult.getText().then(previousFund => {

            //replace fund
            browser.wait(EC.visibilityOf(element(by.css("#replaceButton0"))), 5000);
            element(by.css("#replaceButton0")).click();
            var newFund = element.all(by.xpath("//input[@type='checkbox']")).get(3);
            browser.executeScript("arguments[0].scrollIntoView();", newFund.getWebElement());
            browser.executeScript("arguments[0].click();", input);
            element(by.css('#addFund')).click();

            let newFundAdded = element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
            expect(newFundAdded.getText()).toEqual(previousFund);

        })

    });


    it('shoud be able to selected fund and view for comparison', function () {

        browser.get(retailFundCompareUrl);

        let selectedFundIndex = 1;
        let input = element(by.xpath("(//input[@type='checkbox'])[" + selectedFundIndex + "]"));
        browser.executeScript("arguments[0].scrollIntoView();", input);
        browser.executeScript("arguments[0].click();", input);


        //click compare
        let compareButton = element(by.css('#compareFunds'));
        expect(compareButton.isDisplayed()).toBe(true);

        compareButton.click();

        var compareFundTable = element(by.css('#main > #compareTable'));
        browser.wait(EC.visibilityOf(compareFundTable), 5000);

        //validate new fund added
        browser.sleep(5000);
        let newFundAdded = element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
        browser.wait(EC.visibilityOf(compareFundTable), 5000);
        expect(newFundAdded.getText()).toBeTruthy();

    });



    it('shoud be able to add second fund for comparison fund', function () {

        browser.get(retailFundCompareUrl);

        let selectedFundIndex = 2;
        let input = element(by.xpath("(//input[@type='checkbox'])[" + selectedFundIndex + "]"));
        browser.executeScript("arguments[0].scrollIntoView();", input);
        browser.executeScript("arguments[0].click();", input);


        //click compare
        let compareButton = element(by.css('#compareFunds'));
        expect(compareButton.isDisplayed()).toBe(true);

        compareButton.click();

        var compareFundTable = element(by.css('#main > #compareTable'));
        browser.wait(EC.visibilityOf(compareFundTable), 5000);

        //Add 2nd fund for comparison
        browser.wait(EC.visibilityOf(element(by.css("#addButton1"))), 5000);
        element(by.css("#addButton1")).click();
        var newFund = element.all(by.xpath("//input[@type='checkbox']")).get(3);
        browser.executeScript("arguments[0].scrollIntoView();", newFund.getWebElement());
        browser.executeScript("arguments[0].click();", input);
        element(by.css('#addFund')).click();

        //Validate two funds are displayed
        let firstFundAdded = element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));
        let secondFundAdded = element(by.xpath("//td/strong[@id='identifierDataPnt']//ancestor::td//following-sibling::td[1]"));

        expect(firstFundAdded.getText()).toBeTruthy();
        expect(secondFundAdded.getText()).toBeTruthy();

    });



    it('shoud be allow four funds to select', function () {

        browser.get(retailFundCompareUrl);

        var fundList = element.all(by.xpath("//input[@type='checkbox']"));
        expect(fundList.count()).toBeGreaterThan(0);
        [1, 2, 3, 4].forEach(index => {
            let input = element(by.xpath("(//input[@type='checkbox'])[" + index + "]"));
            browser.executeScript("arguments[0].scrollIntoView();", input);
            browser.executeScript("arguments[0].click();", input);
        })


        let input = element(by.xpath("(//input[@type='checkbox'])[6]"));
        expect(input.getAttribute('disabled')).toBe('true')

    });


});


