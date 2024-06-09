# User Management Screen Specification

## Overview

This document provides a detailed specification for the User Management screen, including UI components, behavior, and initial display. The purpose of this screen is to manage user accounts by providing functionalities for creating, viewing, editing, and disabling users. This document will be used by software developers to implement the user interface.

## Requirements

1. **User Management Table**
   - Columns:
     - ID
     - Username
     - Email
     - Enabled status
   - Functionalities:
     - Sorting by each column.
     - Hide disabled users using a checkbox.
     - Pagination for large datasets.
     - Row selection for editing.

2. **New User Form**
   - Fields:
     - Username (text input, required)
     - Display Name (text input, required)
     - Phone (text input, optional, numeric)
     - Email (text input, required, valid email format)
     - User Roles (dropdown menu, required, options: Guest, Admin, SuperAdmin)
     - Enabled (checkbox, default: true)
   - Functionalities:
     - Form validation.
     - Clear form on submission.
     - Display success/error messages.

3. **Buttons**
   - **New User**: Opens the new user form.
   - **Save User**: Submits the new user form.
   - **Hide Disabled User**: Filters the user list to hide disabled users.

## Initial Display

- Display the user management table populated with existing users.
- "Hide Disabled User" checkbox unchecked by default.
- "New User" form hidden by default.
- "New User" button visible and clickable.
- Pagination controls for navigating through user lists.

## Behavior

1. **On Page Load**
   - Fetch and display all users in the user management table.
   - Ensure the "Hide Disabled User" checkbox is unchecked.

2. **New User Button Click**
   - Display the "New User" form.
   - Ensure the form fields are empty and ready for input.

3. **Save User Button Click**
   - Validate the form fields.
   - If validation passes, send a request to the server to create a new user.
   - Display a success message if the user is created successfully.
   - Display an error message if the creation fails.
   - Clear the form fields upon successful submission.

4. **Hide Disabled User Checkbox Toggle**
   - When checked, filter the user list to hide users with the enabled status set to false.
   - When unchecked, display all users.

5. **Table Column Sorting**
   - Allow sorting of users by clicking on the column headers.
   - Toggle between ascending and descending order on each click.

6. **Row Selection for Editing**
   - Allow users to select a row to edit user details.
   - Populate the form with the selected user's details.
   - Allow updates to the user information and save changes.

## User Interface Components

### User Management Table

- **Table Headers:**
  - ID: Numeric identifier for the user.
  - Username: The unique username of the user.
  - Email: The email address of the user.
  - Enabled: A boolean indicating whether the user is active.
- **Features:**
  - Sorting: Clickable headers to sort data.
  - Pagination: Controls to navigate through pages of users.
  - Filtering: Checkbox to hide disabled users.
  - Row Selection: Ability to select a row for editing.

### New User Form

- **Form Fields:**
  - **Username:** Text input, required.
  - **Display Name:** Text input, required.
  - **Phone:** Text input, optional, numeric.
  - **Email:** Text input, required, valid email format.
  - **User Roles:** Dropdown menu, required, options: Guest, Admin, SuperAdmin.
  - **Enabled:** Checkbox, default checked.
- **Buttons:**
  - **Save User:** Submits the form to create a new user.
  - **New User:** Opens the form for creating a new user.
- **Validation:**
  - Username, Display Name, Email, and User Roles are required.
  - Email must be in a valid format.
  - Phone must be numeric if provided.

## Accessibility

- Ensure all form fields have appropriate labels.
- Ensure the "Save User" and "New User" buttons are accessible via keyboard navigation.
- Provide clear error messages for validation issues.

## Example Usage

1. **Creating a New User:**
   - Click the "New User" button.
   - Fill out the form with valid data.
   - Click the "Save User" button.
   - If the form is valid, the new user is added to the table, and a success message is displayed.
   - If there are validation issues, display the corresponding error messages.

2. **Hiding Disabled Users:**
   - Check the "Hide Disabled User" checkbox.
   - The table updates to hide users with the "Enabled" status set to false.

3. **Editing a User:**
   - Select a user row from the table.
   - The form populates with the selected user's data.
   - Make the necessary changes and click "Save User".
   - The table updates with the modified user data, and a success message is displayed.
