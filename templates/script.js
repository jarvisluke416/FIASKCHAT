// script.js
document.addEventListener('DOMContentLoaded', () => {
  const emojiBtn = document.getElementById('emojiBtn'); // The button to toggle emoji picker
  const emojiContainer = document.getElementById('emojiContainer'); // The container with emojis
  const messageInput = document.getElementById('messageInput'); // The message input field
  const sendMessageBtn = document.getElementById('sendMessageBtn'); // The send message button
  const messagePreview = document.getElementById('messagePreview'); // For displaying the message preview

  // Show or hide the emoji container when emoji button is clicked
  emojiBtn.addEventListener('click', () => {
    emojiContainer.style.display = emojiContainer.style.display === 'none' ? 'flex' : 'none';
  });

  // Add selected emoji to message input
  const emojiButtons = document.querySelectorAll('.emoji-btn');
  emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
      messageInput.value += button.textContent; // Add the emoji to the message
      emojiContainer.style.display = 'none'; // Hide the emoji container after selection
    });
  });

  // Display the message when the send button is clicked
  sendMessageBtn.addEventListener('click', () => {
    messagePreview.innerHTML = `<p>Your message: ${messageInput.value}</p>`;
    messageInput.value = ''; // Clear the input after sending
  });
});
