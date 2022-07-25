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
        test('Page with operation Add testing', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await page.selectOption('#selectBuild', { label: version});
        await searchPage.search('4', '3'); // number1field and number2field value
        await searchPage.selectOption('Add');  // operation field
  
        let number1field = page.locator('#number1Field');
        let number2field = page.locator('#number2Field');
        let selectOperationDropdow = page.locator('#selectOperationDropdown');
        let calculateButton = page.locator('#calculateButton');
        let numberAnswerField = page.locator('#numberAnswerField');
        let clearButton = page.locator('#clearButton');

        await expect((number1field), 'First number field should be enabled').toBeEnabled();
        await expect((number2field), 'Second number field should be enabled').toBeEnabled();
        await expect((selectOperationDropdow), 'Operation dropdown should be enabled').toBeEnabled();
        await expect((calculateButton), 'Button Calculate should be enabled').toBeEnabled();
        await expect((numberAnswerField), 'Answer field should be enabled').toBeEnabled();
        await expect((clearButton), 'Clear button should be enabled').toBeEnabled()
     
        await expect((number1field), 'First number field should be visible').toBeVisible();
        await expect((number2field), 'Second number field should be visible').toBeVisible();
        await expect((selectOperationDropdow), 'Operation dropdown should be visible').toBeVisible();
        await expect((calculateButton), 'Button Calculate should be visible').toBeVisible();
        await expect((numberAnswerField), 'Answer field should be visible').toBeVisible();
        await expect((clearButton), 'Clear button should be visible').toBeVisible()

        await calculateButton.click();
    
        await expect(page.locator('#numberAnswerField'), 'Answer should be 7').toHaveValue('7');
        });
      });

    test.describe(version + ': Subtract', () => {
        test('Page with operation Subtract testing', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await page.selectOption('#selectBuild', { label: version});
        await searchPage.search('8', '3'); // number1field and number2field value
        await searchPage.selectOption('Subtract');  // operation field
  
        let number1field = page.locator('#number1Field');
        let number2field = page.locator('#number2Field');
        let selectOperationDropdow = page.locator('#selectOperationDropdown');
        let calculateButton = page.locator('#calculateButton');
        let numberAnswerField = page.locator('#numberAnswerField');
        let clearButton = page.locator('#clearButton');

        await expect((number1field), 'First number field should be enabled').toBeEnabled();
        await expect((number2field), 'Second number field should be enabled').toBeEnabled();
        await expect((selectOperationDropdow), 'Operation dropdown should be enabled').toBeEnabled();
        await expect((calculateButton), 'Button Calculate should be enabled').toBeEnabled();
        await expect((numberAnswerField), 'Answer field should be enabled').toBeEnabled();
        await expect((clearButton), 'Clear button should be enabled').toBeEnabled()
     
        await expect((number1field), 'First number field should be visible').toBeVisible();
        await expect((number2field), 'Second number field should be visible').toBeVisible();
        await expect((selectOperationDropdow), 'Operation dropdown should be visible').toBeVisible();
        await expect((calculateButton), 'Button Calculate should be visible').toBeVisible();
        await expect((numberAnswerField), 'Answer field should be visible').toBeVisible();
        await expect((clearButton), 'Clear button should be visible').toBeVisible()

        await calculateButton.click();
    
        await expect(page.locator('#numberAnswerField'), 'Answer should be 5').toHaveValue('5');
        });
      });

    test.describe(version + ': Multiply', () => {
        test('Page with operation Multiply testing', async ({ page }) => {
          let searchPage = new SearchPage(page);
          await searchPage.navigate();
          await page.selectOption('#selectBuild', { label: version});
          await searchPage.search('4', '3'); // number1field and number2field value
          await searchPage.selectOption('Multiply');  // operation field
  
          let number1field = page.locator('#number1Field');
          let number2field = page.locator('#number2Field');
          let selectOperationDropdow = page.locator('#selectOperationDropdown');
          let calculateButton = page.locator('#calculateButton');
          let numberAnswerField = page.locator('#numberAnswerField');
          let clearButton = page.locator('#clearButton');
  
          await expect((number1field), 'First number field should be enable').toBeEnabled();
          await expect((number2field), 'Second number field should be enable').toBeEnabled();
          await expect((selectOperationDropdow), 'Operation dropdown should be enable').toBeEnabled();
          await expect((calculateButton), 'Button Calculate should be enable').toBeEnabled();
          await expect((numberAnswerField), 'Answer field should be enable').toBeEnabled();
          await expect((clearButton), 'Clear button should be enable').toBeEnabled()
       
          await expect((number1field), 'First number field should be visible').toBeVisible();
          await expect((number2field), 'Second number field should be visible').toBeVisible();
          await expect((selectOperationDropdow), 'Operation dropdown should be visible').toBeVisible();
          await expect((calculateButton), 'Button Calculate should be visible').toBeVisible();
          await expect((numberAnswerField), 'Answer field should be visible').toBeVisible();
          await expect((clearButton), 'Clear button should be visible').toBeVisible()
  
          await calculateButton.click();
    
          await expect(page.locator('#numberAnswerField'), 'Answer should be 12').toHaveValue('12');
        });
      });

    test.describe(version + ': Divide', () => {
        test('Page with operation Divide testing', async ({ page }) => {
          let searchPage = new SearchPage(page);
          await searchPage.navigate();
          await page.selectOption('#selectBuild', { label: version});
          await searchPage.search('8', '4'); // number1field and number2field value
          await searchPage.selectOption('Divide');  // operation field
  
          let number1field = page.locator('#number1Field');
          let number2field = page.locator('#number2Field');
          let selectOperationDropdow = page.locator('#selectOperationDropdown');
          let calculateButton = page.locator('#calculateButton');
          let numberAnswerField = page.locator('#numberAnswerField');
          let clearButton = page.locator('#clearButton');
  
          await expect((number1field), 'First number field should be enable').toBeEnabled();
          await expect((number2field), 'Second number field should be enable').toBeEnabled();
          await expect((selectOperationDropdow), 'Operation dropdown should be enable').toBeEnabled();
          await expect((calculateButton), 'Button Calculate should be enable').toBeEnabled();
          await expect((numberAnswerField), 'Answer field should be enable').toBeEnabled();
          await expect((clearButton), 'Clear button should be enable').toBeEnabled()
       
          await expect((number1field), 'First number field should be visible').toBeVisible();
          await expect((number2field), 'Second number field should be visible').toBeVisible();
          await expect((selectOperationDropdow), 'Operation dropdown should be visible').toBeVisible();
          await expect((calculateButton), 'Button Calculate should be visible').toBeVisible();
          await expect((numberAnswerField), 'Answer field should be visible').toBeVisible();
          await expect((clearButton), 'Clear button should be visible').toBeVisible()
  
          await calculateButton.click();
    
          await expect(page.locator('#numberAnswerField'), 'Answer should be 2').toHaveValue('2');
        });
      });

    test.describe(version + ': Concatenate', () => {
        test('Page with operation Concatenate testing', async ({ page }) => {
          let searchPage = new SearchPage(page);
          await searchPage.navigate();
          await page.selectOption('#selectBuild', { label: version});
          await searchPage.search('5', '6'); // number1field and number2field value
          await searchPage.selectOption('Concatenate');  // operation field
  
          let number1field = page.locator('#number1Field');
          let number2field = page.locator('#number2Field');
          let selectOperationDropdow = page.locator('#selectOperationDropdown');
          let calculateButton = page.locator('#calculateButton');
          let numberAnswerField = page.locator('#numberAnswerField');
          let clearButton = page.locator('#clearButton');
  
          await expect((number1field), 'First number field should be enable').toBeEnabled();
          await expect((number2field), 'Second number field should be enable').toBeEnabled();
          await expect((selectOperationDropdow), 'Operation dropdown should be enable').toBeEnabled();
          await expect((calculateButton), 'Button Calculate should be enable').toBeEnabled();
          await expect((numberAnswerField), 'Answer field should be enable').toBeEnabled();
          await expect((clearButton), 'Clear button should be enable').toBeEnabled()
       
          await expect((number1field), 'First number field should be visible').toBeVisible();
          await expect((number2field), 'Second number field should be visible').toBeVisible();
          await expect((selectOperationDropdow), 'Operation dropdown should be visible').toBeVisible();
          await expect((calculateButton), 'Button Calculate should be visible').toBeVisible();
          await expect((numberAnswerField), 'Answer field should be visible').toBeVisible();
          await expect((clearButton), 'Clear button should be visible').toBeVisible()
  
          await calculateButton.click();
    
          await expect(page.locator('#numberAnswerField'), 'Answer should be 56').toHaveValue('56');
        });
      });
      
      test.describe(version + ': Add', () => {
        test('Clicking on Clear button should result in empty answer field', async ({ page }) => {
            let searchPage = new SearchPage(page);
            await searchPage.navigate();
            await page.selectOption('#selectBuild', { label: version});
            await searchPage.search('3', '2'); // number1field and number2field value
            await searchPage.selectOption('Add');  // operation field
            
            let calculateButton = page.locator('#calculateButton');
            await expect(calculateButton).toBeEnabled();
            await expect(calculateButton).toBeVisible();
            await calculateButton.click();
            
            page.locator("#numberAnswerField");
            await expect(page.locator('#numberAnswerField')).toBeTruthy();
            await page.click('#clearButton');
            await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
        });
      });

      test.describe(version + ': Add', () => {
        test('Marked check box Integers only should show answer integers numbers', async ({ page }) => {
            let searchPage = new SearchPage(page);
            await searchPage.navigate();
            await page.selectOption('#selectBuild', { label: version});
            await searchPage.search('3.2', '2.2'); // number1field and number2field value
            await searchPage.selectOption('Add');  // operation field

            let integerSelectButton = page.locator('#integerSelect');
            await expect((integerSelectButton), 'IntegerSelect button should be enable').toBeEnabled();
            await expect((integerSelectButton), 'IntegerSelect button should be enable').toBeVisible();
            await integerSelectButton.check();

            let calculateButton = page.locator('#calculateButton');
            await calculateButton.click();
            
            await expect(page.locator('#numberAnswerField'), 'Answer should be in integers').toHaveValue('5');
        });
      });

      test.describe(version + ': Add', () => {
        test('Clicking on "Clear" button should result in empty answer field', async ({ page }) => {
            let searchPage = new SearchPage(page);
            await searchPage.navigate();
            await page.selectOption('#selectBuild', { label: version});
            await searchPage.search('2', '23');
            await searchPage.selectOption('Add');
    
            let calculateButton = page.locator('#calculateButton');
            await expect(calculateButton).toBeEnabled();
            await expect(calculateButton).toBeVisible();
            await calculateButton.click();
        
            page.locator("#numberAnswerField");
        
            await expect(page.locator('#numberAnswerField')).toBeTruthy();
            await page.click('#clearButton');
            await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
        });
      });

      test.describe(version + ': Add', () => {
        test('Adding letter and number should be shown as error in error message field ', async ({ page }) => {
            let searchPage = new SearchPage(page);
            await searchPage.navigate();
            await page.selectOption('#selectBuild', { label: version});
            await searchPage.search('a', '1');
            await searchPage.selectOption('Add');
            
            let calculateButton = page.locator('#calculateButton');
            await expect(calculateButton).toBeEnabled();
            await expect(calculateButton).toBeVisible();
            await calculateButton.click();
            
            await expect(page.locator('#errorMsgField'), 'Error message should be displayed').toContainText('Number 1 is not a number');
        });
      });
});