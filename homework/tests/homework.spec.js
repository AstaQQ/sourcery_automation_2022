const { test, expect } = require('@playwright/test');
const { Calculator } = require('../pages/Calculator');
const { SelectBuild } = require('../pages/SelectBuild');

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
        test('Add 4 and 3 to get the result 5', async ({ page }) => {
        let calculator = new Calculator(page);
        let selectBuild = new SelectBuild(page);
        await selectBuild.navigate();
        await selectBuild.selectBuild(version);
        await calculator.numberInput('4', '3');
        await calculator.selectOperation('Add');
        await calculator.calculateButton();
    
        await expect(page.locator('#numberAnswerField'), 'Answer should be 7').toHaveValue('7');
        });
      });

    test.describe(version + ': Subtract', () => {
      test('Subtract 8 and 3 to get the result 5', async ({ page }) => {
        let calculator = new Calculator(page);
        let selectBuild = new SelectBuild(page);
        await selectBuild.navigate();
        await selectBuild.selectBuild(version);
        await calculator.numberInput('8', '3');
        await calculator.selectOperation('Subtract');
        await calculator.calculateButton();
    
        await expect(page.locator('#numberAnswerField'), 'Answer should be 5').toHaveValue('5');
        });
      });

    test.describe(version + ': Multiply', () => {
      test('Multiply 4 and 3 to get the result 12', async ({ page }) => {
        let calculator = new Calculator(page);
        let selectBuild = new SelectBuild(page);
        await selectBuild.navigate();
        await selectBuild.selectBuild(version);
        await calculator.numberInput('4', '3');
        await calculator.selectOperation('Multiply');
        await calculator.calculateButton();
    
        await expect(page.locator('#numberAnswerField'), 'Answer should be 12').toHaveValue('12');
        });
      });

    test.describe(version + ': Divide', () => {      
      test('Divide 8 and 4 to get the result 2', async ({ page }) => {
      let calculator = new Calculator(page);
      let selectBuild = new SelectBuild(page);
      await selectBuild.navigate();
      await selectBuild.selectBuild(version);
      await calculator.numberInput('8', '4');
      await calculator.selectOperation('Divide');
      await calculator.calculateButton();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 12').toHaveValue('2');
      });
    });

    test.describe(version + ': Concatenate', () => {
        test('Concatenate 5 and 6 to get the result 56', async ({ page }) => {
            let calculator = new Calculator(page);
            let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            await calculator.numberInput('5', '6');
            await calculator.selectOperation('Concatenate');
            await calculator.calculateButton();
        
            await expect(page.locator('#numberAnswerField'), 'Answer should be 56').toHaveValue('56');
          });
        });
      
      test.describe(version + ': Add', () => {
        test('Clicking on Clear button should result in empty answer field', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            await calculator.numberInput('3', '2');
            await calculator.selectOperation('Add');
            await calculator.calculateButton();

            await calculator.clearButton();
            await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
        });
      });

      test.describe(version + ': Add', () => {
        test('Marked check box Integers only should show answer integers numbers', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            await calculator.numberInput('3.2', '2.2');
            await calculator.selectOperation('Add');
            await calculator.integersOnly();
            await calculator.calculateButton();
            
            await expect(page.locator('#numberAnswerField'), 'Answer should be in integers').toHaveValue('5');
        });
      });

      test.describe(version + ': Add', () => {
        test('Clicking on "Clear" button should result in empty answer field', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            await calculator.numberInput('2', '23');
            await calculator.selectOperation('Add');
            await calculator.calculateButton();
            await calculator.clearButton();

            await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
        });
      });

      test.describe(version + ': Add', () => {
        test('Adding letter and number should be shown as error in error message field ', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            await calculator.numberInput('a', '1');
            await calculator.selectOperation('Add');
            await calculator.calculateButton();
            
            await expect(page.locator('#errorMsgField'), 'Error message should be displayed').toContainText('Number 1 is not a number');
        });
      });

      test.describe(version + ': Add', () => {
        test('Second number field should be enabled ', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            
            await expect(page.locator('#number2Field'), 'Second number field should be enabled in number1 field').toBeEnabled();
          });
      });
      test.describe(version + ': Add', () => {
        test('IntegerSelect button should be enable ', async ({ page }) => {
          let calculator = new Calculator(page);
          let selectBuild = new SelectBuild(page);
            await selectBuild.navigate();
            await selectBuild.selectBuild(version);
            
            await expect(page.locator('#integerSelect'), 'IntegerSelect button should be enable').toBeEnabled();
          });
      });
});