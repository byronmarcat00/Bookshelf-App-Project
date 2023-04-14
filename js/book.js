class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.commentsData = []; // Initialize the commentsData property as an empty array
    this.isFavorite = false; // Initialize the isFavorite property as false
  }

  // Add a comment to the commentsData array
  addComment(comment) {
    this.commentsData.push(comment);
  }

  // Get the HTML representation of the book
  render() {
    const bookinfo = document.createElement("li"); // Create a new list item element

    // Add the book info to the list item
    bookinfo.innerHTML = `<div>
      Author: ${this.author}<br>
      Language: ${this.language}<br>
      Subject: ${this.subject} <br>
      Title: ${this.title}<br>
      </div>`;

    const commentsContainer = document.createElement("div"); // Create a new div element for the comments
    commentsContainer.classList.add("comments"); // Add a "comments" class to the div element

    const addCommentButton = document.createElement("button"); // Create a new button element for adding a comment
    addCommentButton.innerText = "Add Comment"; // Set the button text to "Add Comment"

    // Add an event listener for the "Add Comment" button
    addCommentButton.addEventListener("click", () => {
      const commentTextArea = document.createElement("textarea"); // Create a new text area element for the comment
      commentTextArea.setAttribute("rows", "3"); // Set the number of rows for the text area
      commentTextArea.setAttribute("maxlength", "280"); // Set the maximum length of the comment

      const submitButton = document.createElement("button"); // Create a new button element for submitting the comment
      submitButton.innerText = "Send"; // Set the button text to "Send"

      // Add an event listener for the "Send" button
      submitButton.addEventListener("click", () => {
        const comment = commentTextArea.value; // Get the comment from the text area
        if (comment) {
          this.addComment(comment); // Add the comment to the commentsData array
          commentsContainer.removeChild(commentTextArea); // Remove the text area from the comments container
          commentsContainer.removeChild(submitButton); // Remove the submit button from the comments container
          commentsContainer.removeChild(cancelButton); // Remove the cancel button from the comments container
          const newComment = document.createElement("div"); // Create a new div element for the new comment
          newComment.innerText = `"${comment}" `; // Set the text of the new comment element
          commentsContainer.appendChild(newComment); // Add the new comment element to the comments container
          addCommentButton.style.display = "block"; // Show the "Add Comment" button
        }
      });

      const cancelButton = document.createElement("button"); // Create a new button element for cancelling the comment
      cancelButton.innerText = "Cancel"; // Set the button text to "Cancel"

      // Add an event listener for the "Cancel" button
      cancelButton.addEventListener("click", () => {
        commentsContainer.removeChild(commentTextArea); // Remove the text area from the comments container
        commentsContainer.removeChild(submitButton); // Remove the submit button from the comments container
        commentsContainer.removeChild(cancelButton); // Remove the cancel button from the comments container
        addCommentButton.style.display = "block"; // Show the "Add Comment" button
      });

      commentsContainer.appendChild(commentTextArea); // Add the text area to the comments container
      commentsContainer.appendChild(submitButton); // Add the submit button to the
      commentsContainer.appendChild(cancelButton);
      addCommentButton.style.display = "none";
    });

    // Create cancel button
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
      commentsContainer.removeChild(commentTextArea);
      commentsContainer.removeChild(submitButton);
      commentsContainer.removeChild(cancelButton);
      addCommentButton.style.display = "block";
    });

    const commentsDiv = document.createElement("div");
    commentsDiv.appendChild(commentsContainer);
    commentsDiv.appendChild(addCommentButton);
    bookinfo.appendChild(commentsDiv);

    return bookinfo;
  }
}
