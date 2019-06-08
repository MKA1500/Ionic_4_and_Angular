const inputExpense = document.querySelector('#inputExpense');
const inputAmount = document.querySelector('#inputAmount');
const btnClear = document.querySelector('#btnClear');
const btnConfirm = document.querySelector('#btnConfirm');
const expensesList = document.querySelector('#expensesList');
const totalExpensesOutput = document.querySelector('#totalExpenses');
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
  inputExpense.value = '';
  inputAmount.value = '';
};

btnConfirm.addEventListener('click', () => {
  const enteredExpense = inputExpense.value;
  const enteredAmount = inputAmount.value;

  if (
    enteredExpense.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alertController.create({
      message: "Please enter valid expense and amount!",
      header: "Invalid inputs",
      buttons: ['OK']
    }).then(alertElement => {
      alertElement.present();
    });
    return;
  }
  console.log(enteredExpense, enteredAmount);

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredExpense + ': $' + enteredAmount;
  expensesList.appendChild(newItem);
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

btnClear.addEventListener('click', clear);
