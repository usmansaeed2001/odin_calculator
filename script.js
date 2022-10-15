class Calculator {
        constructor(previousOperandandTextElement, currentOperandandTextElement) {
                this.previousOperandandTextElement = previousOperandandTextElement
                this.currentOperandandTextElement = currentOperandandTextElement
                this.clear()
                alert('calc created')
        }

        clear() {
                this.currentOperand = '24'
                this.previousOperand = ''
                this.operation = undefined
        }

        delete() {

        }
        appendNumber(number) {
                this.currentOperand = this.currentOperand.toString() + number.toString()

        }

        chooseOperation(operation) {

        }
        compute() {

        }
        updateDisplay() {
                this.currentOperandandTextElement.innerText = this.currentOperand
        }
}

alert('wowowow')


const numberButton = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandandTextElement = document.querySelector('[data-current-operand]')
alert('wow')



const Calculator = new Calculator(previousOperandandTextElement, currentOperandandTextElement)

numberButton.forEach(button => {
        button.addEventListener('click', ()=> {
                Calculator.appendNumber(button.innerText)
                Calculator.updateDisplay()
        })
})


