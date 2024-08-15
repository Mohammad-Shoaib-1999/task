### Project Description

For this internship task, I developed a React-based form component and a response page that meet the specified requirements and effectively handle a variety of edge cases.

#### Key Features:

1. **Form Component**:
   - **Fields Included**: The form contains fields for Name, Gender, Category, Interests, and Terms and Conditions, adhering to the task's requirements.
   - **State Management**: The form uses the `useState` hook to manage local state, ensuring that user inputs are correctly captured and updated in real time.
   - **Validation**:
     - **Name Field**: The name field is validated to ensure it only contains alphabetic characters and spaces. If invalid characters or an empty field are detected, a custom error message is displayed.
     - **Gender Field**: The gender selection is a required field, implemented as a radio button to ensure a valid selection.
     - **Category Field**: A dropdown menu allows users to select a category (Student, Professional, or Other), with validation ensuring a selection is made.
     - **Interests Field**: At least one interest must be selected from the available checkboxes (Sports, Music, Reading). An error message is displayed if none are chosen.
     - **Terms and Conditions**: The user must accept the terms and conditions before submitting the form, with validation ensuring this requirement is met.
   - **Form Submission**:
     - **Prevention of Duplicate Submissions**: The submit button is disabled after the form is submitted to prevent duplicate entries.
     - **Confirmation Message**: A confirmation message is displayed after a successful submission, indicating that the data has been saved.
   - **Form Reset**: A reset button allows users to clear the form and start over if needed.

2. **Context API**:
   - The application uses the Context API to manage and store the form data globally. Upon submission, the data is stored in a context, allowing it to be accessed from the response page.

3. **Response Page**:
   - The response page retrieves and displays the submitted data from the Context API. If no data has been submitted, a message indicating that no data is available is displayed.
   - **User Feedback**: The page clearly shows all the submitted details, including Name, Gender, Category, Interests, and Terms Accepted status.

4. **Routing Integration**:
   - The application uses `react-router-dom` to provide seamless navigation between the form and response pages. Buttons on the main screen allow users to easily switch between these pages.

5. **Styling**:
   - The entire application is styled using Tailwind CSS, ensuring a clean and responsive user interface that is both functional and visually appealing.

#### Corner Cases Addressed:

- **Empty Fields**: The form prevents submission if any required field is left empty, with appropriate error messages guiding the user.
- **Invalid Input Types**: Validation ensures that only valid data types (e.g., alphabetic characters for the name) are accepted.
- **Form Reset**: Users can reset the form to its initial state, clearing all fields and errors.
- **Multiple Submissions**: The form is protected against duplicate submissions by disabling the submit button after the first submission.
- **Error Handling**: All potential errors are handled gracefully, providing clear feedback to the user.


