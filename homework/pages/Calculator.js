class Calculator {

    constructor(page) {
      this.page = page;
    }

    async numberInput(number1, number2) {
      await this.page.locator('#number1Field').type(number1);
      await this.page.locator('#number2Field').type(number2);
    }

    async selectOperation(operation) {
      await this.page.selectOption('#selectOperationDropdown', {label: operation});
    }

    async number1() {
    await this.page.locator('#number1Field');
    }

    async number2() {
    await this.page.locator('#number2Field');
    }

    async operationDropdown() {
    await this.page.locator('#selectOperationDropdown');
    }

    async calculateButton() {
    await this.page.locator('#calculateButton').click();
    }

    async answerField() {
    await this.page.locator('#numberAnswerField');
    }

    async clearButton() {
    await this.page.locator('#clearButton').click();
    }

    async integersOnly() {
    await this.page.locator('#integerSelect').check();
    }
  }
  module.exports = { Calculator };