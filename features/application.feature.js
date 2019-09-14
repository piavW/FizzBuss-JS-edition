require('../spec.helper');

describe('User can input a value and get FizzBuzz results', () => {
before(async () => {
  await browser.init()
  await browser.visitPage('http://localhost:8080/')
});
  beforeEach(async () => {
    await browser.page.reload();
  })

  after(async () => {
    await browser.close();
  })

  it ('clicking on the "check" button', async () => {
    await browser.fillIn("input[id='value']", {
      with: '3'})
      await browser.clickOnButton("input[value='check']")
      let content = await browser.getContent("div[id='display_answer']")
      expect(content) == ('Fizz');
    })
})