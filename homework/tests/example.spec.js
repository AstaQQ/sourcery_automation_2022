const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Function add, 4 + 3 result should be 7', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('4', '3'); // field1 and field2 value
      await searchPage.selectOption('Add');  // operation field
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 7').toHaveValue('7');
    });
  });

    test.describe(version + ': Subtract', () => {
      test('Function subtract, 4 - 3 = result should be 1', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('4', '3');
      await searchPage.selectOption('Subtract');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });

  test.describe(version + ': Add', () => {
    test('Function multiply, 5 * 2 = result should be 10', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('5', '2');
      await searchPage.selectOption('Multiply');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('10');
    });
  });

  test.describe(version + ': Add', () => {
    test('Function divide, 6/2 = result should be 3', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('6', '2');
      await searchPage.selectOption('Divide');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('3');
    });
  });

  test.describe(version + ': Add', () => {
    test('Function concatenate, 1 and 1 = result should be 11', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('1', '1');
      await searchPage.selectOption('Concatenate');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('11');
    });
  });

  test.describe(version + ': Add', () => {
    test('First and second number fields can be filled only with numbers ', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('a', 'a');
      await searchPage.selectOption('Add');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
  
  test.describe(version + ': Add', () => {
    test('Checkbox "Integers only" should be visible in all builds and operation', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await page.selectOption('#selectOperationDropdown', { label: 'Add'});

      await expect(page.locator('#integerSelect')).toBeVisible();
    });
  });

  test.describe(version + ': Add', () => {
    test('3 fields( first, second number and answer) and 2 buttons (calculate, clear) should be visible in all builds', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});

      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#selectOperationDropdown')).toBeVisible();
      await expect(page.locator('#calculateButton')).toBeVisible();
      await expect(page.locator('#numberAnswerField')).toBeVisible();
      await expect(page.locator('#clearButton')).toBeVisible();      
    });
  });
});