document.getElementById('reasonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    const reasonInput = document.getElementById('reasonInput');
    const responseMessage = document.getElementById('responseMessage');
    const sharedResponses = document.getElementById('sharedResponses');

    const userReason = reasonInput.value.trim();

    // If the user input is empty, show an error message
    if (userReason === '') {
        responseMessage.textContent = "Please provide a reason before submitting.";
        responseMessage.className = 'response-message error'; // Adds error styling
        return;
    }

    // Display a success message after submission
    responseMessage.textContent = "Thank you for sharing your thoughts!";
    responseMessage.className = 'response-message success'; // Adds success styling

    // Create a new paragraph to add the response to the shared responses section
    const responseParagraph = document.createElement('p');
    responseParagraph.textContent = userReason;
    sharedResponses.appendChild(responseParagraph);

    // Clear the input field for new responses
    reasonInput.value  =  '';
});