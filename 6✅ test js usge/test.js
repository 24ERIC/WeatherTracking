// pick up the form, input, and output elements
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[type="number"]');
const output = document.querySelector('.output');

// add an submit listener to the form that calls `handleSubmit`
form.addEventListener('submit', handleSubmit, false);

function handleSubmit(e) {

  // prevent the form from submitting
  e.preventDefault();

  // loop over the inputs and add their values to the total
  let total = 0;
  for (let i = 0; i < inputs.length; i++) {
    total += Number(inputs[i].value);
  }

  // calculate the total
  const avg = total / inputs.length;

  // add the total and average to the text content of the output element
  output.textContent = `Total: ${total}, Avg: ${avg}`;
}