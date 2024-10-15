import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';
  realTimeCalculation: string = '';
  currentOperator: string = '';
  firstOperand: number | null = null;

  addNum(num: number) {
    this.displayValue += num.toString();
    this.updateRealTimeCalculation();
  }

  sumar() {
    this.setOperator('+');
  }

  restar() {
    this.setOperator('-');
  }

  multiplicar() {
    this.setOperator('*');
  }

  dividir() {
    this.setOperator('/');
  }

  setOperator(operator: string) {
    if (this.displayValue) {
      this.firstOperand = parseFloat(this.displayValue);
      this.currentOperator = operator;
      this.displayValue = '';
      this.updateRealTimeCalculation();
    }
  }

  calculate() {
    if (this.firstOperand !== null && this.displayValue) {
      const secondOperand = parseFloat(this.displayValue);
      let result: number;
      switch (this.currentOperator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
        default:
          return;
      }
      this.displayValue = result.toString();
      this.realTimeCalculation = `${this.firstOperand} ${this.currentOperator} ${secondOperand} = ${result}`;
      this.firstOperand = null;
      this.currentOperator = '';
    }
  }

  reset() {
    this.displayValue = '';
    this.realTimeCalculation = '';
    this.firstOperand = null;
    this.currentOperator = '';
  }

  updateRealTimeCalculation() {
    if (this.firstOperand !== null && this.currentOperator && this.displayValue) {
      const secondOperand = parseFloat(this.displayValue);
      let result: number;
      switch (this.currentOperator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
        default:
          return;
      }
      this.realTimeCalculation = `${this.firstOperand} ${this.currentOperator} ${secondOperand} = ${result}`;
    } else {
      this.realTimeCalculation = this.displayValue;
    }
  }
}