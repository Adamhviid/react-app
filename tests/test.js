describe('test environment', function() {

  const url = 'http://localhost:3000/'

  it('weather card city is correct', function(browser) {
    const cityElement = '/html/body/div/div/div/div[2]/div/div/div/h2'
    browser
      .url(url)
      .useXpath()
      .waitForElementVisible(cityElement)
      .assert.containsText(cityElement, 'Copenhagen')
      .end();
  });

  it('change price button', function(browser) {
    const button = '/html/body/div/div/div/div[3]/div/div/button'
    const value = '20.000.000'
    browser
      .url(url)
      .useXpath()
      .waitForElementVisible(button)
      .click(button)
      .setValue('/html/body/div[2]/div[3]/div/div[1]/div/div/input', value)
      .click('/html/body/div[2]/div[3]/div/div[2]/button')
      .assert.containsText('/html/body/div/div/div/div[3]/div/div/h1', value)
      .end();
  });

  it('change information form', function(browser) {
    const button = '/html/body/div/div/div/div[5]/div/button'
    const name = 'Torben Hansen'
    const description = 'ung og frisk eller noget'
    browser
      .url(url)
      .useXpath()
      .waitForElementVisible(button)
      .click(button)
      .setValue('/html/body/div[2]/div[3]/div/div[1]/form/div[1]/div/input', name)
      .setValue('/html/body/div[2]/div[3]/div/div[1]/form/div[2]/div/textarea[1]', description)
      .click('/html/body/div[2]/div[3]/div/div[2]/button')
      .assert.containsText('/html/body/div/div/div/div[5]/div/div/h2', name)
      .assert.containsText('/html/body/div/div/div/div[5]/div/div/p', description)
      .end();
  });
});