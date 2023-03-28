const usernameInput = document.getElementById('username-input');
const submitBtn = document.getElementById('submit-btn');

// Add event listener to submit button
submitBtn.addEventListener('click', function() {
  // Get the username from the input field
  const username = usernameInput.value;

  // Store the username in local storage
  localStorage.setItem('username', username);

  // Redirect to the new page
  window.location.href = 'todolist.html';
});