let currentInput = '';
let history = [];

// Function to append value to the display
function appendValue(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  document.getElementById('result').value = '';
}

// Function to calculate the result
function calculate() {
  try {
    let result = eval(currentInput);
    addHistory(currentInput + ' = ' + result); // Store the calculation in history
    currentInput = result.toString();
    document.getElementById('result').value = currentInput;
  } catch (error) {
    document.getElementById('result').value = 'Error';
    setTimeout(() => clearDisplay(), 1000); // Clear after 1 second
  }
}

// Function to add calculation to the history
function addHistory(calculation) {
  history.push(calculation);
  updateHistory();
}

// Function to update the history list in the UI
function updateHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = ''; // Clear the history list
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// Function to clear the history
function clearHistory() {
  history = [];
  updateHistory();
}
