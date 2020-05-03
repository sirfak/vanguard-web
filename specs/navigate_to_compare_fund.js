describe('Vanguard Compare Fund App', function () {
    var EC = protractor.ExpectedConditions;
    let homeUrl = 'https://www.vanguardinvestments.com.au/au/portal/homepage.jsp';
    let retailFundCompareUrl = 'https://www.vanguardinvestments.com.au/retail/ret/investments/product.html#/productType=retail';
    beforeEach(function () {
        //browser.get(homeUrl);

    });

    /*   it('shoud be able to navigate to compare funds', function () {
  browser.get(homeUrl);
          var linkSmsf = element(by.css('p.showOnLrg a[href*="retail/jsp/home.jsp'))
          browser.wait(EC.visibilityOf(linkSmsf), 5000);
          linkSmsf.click();
  
          var retailFundLink = element(by.css('div.fundFinder dt a[href="/retail/ret/investments/product.html#/productType=retail"'));
          browser.wait(EC.visibilityOf(retailFundLink), 10000);
          retailFundLink.click();
  
          browser.wait(EC.visibilityOf(element(by.css('#listviewTable'))), 10000);
          expect(element(by.css('#listviewTable')).isDisplayed()).toBe(true);
      }); */


   /*  it('shoud be allow for funds to select', function () {

        browser.get(retailFundCompareUrl);

        var fundList = element.all(by.xpath("//input[@type='checkbox']"));
        expect(fundList.count()).toBeGreaterThan(0);
        [1, 2, 3, 4].forEach(index => {
            let input = element(by.xpath("(//input[@type='checkbox'])[" + index + "]"));
            browser.actions().mouseMove(input).click().perform();
            browser.driver.sleep(10000);
        })


        let input = element(by.xpath("(//input[@type='checkbox'])[6]"));
        expect(input.getAttribute('disabled')).toBe('disabled')




        element(by.css('#floatingFooter #compareFunds')).click();

    });
 */
    it('shoud be able to replace selected fund', function () {

        browser.get(retailFundCompareUrl);

        let input = element(by.xpath("(//input[@type='checkbox'])[1]"));
        browser.actions().mouseMove(input).click().perform();
        browser.driver.sleep(10000);

        let compareButton=element(by.css('#floatingFooter #compareFunds'));
        browser.wait(EC.visibilityOf(compareButton), 10000);
        compareButton.click();
        browser.driver.sleep(10000);
    });



});


