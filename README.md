# React Query JSON Server Example

This repository contains an example implementation of using React Query to query data from a JSON server. It demonstrates how to set up React Query, configure API endpoints, and perform CRUD operations on the server.

## Prerequisites

Before getting started, ensure that you have the following installed:

- Node.js (v14 or higher)
- NPM (v6 or higher)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1.Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
4. Start the JSON server:
This will start a JSON server at `http://localhost:8000`.
5. In a separate terminal, start the React application:

This will start the React application at `http://localhost:3000`.

6.Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

The application allows you to perform CRUD operations (Create, Read, Update, Delete) on a list of books. It uses React Query to manage the data fetching and caching.

- The list of books is displayed on the homepage.
- You can add a new book by clicking the "Add Book" button and filling in the form.
- Each book in the list has options to edit or delete the book.
- Clicking the "Edit" button will take you to a form where you can update the book details.
- Clicking the "Delete" button will remove the book from the list.

## Project Structure

The project structure is as follows:

- `src`
- `components`: Contains the React components used in the application.
- `hooks`: Custom hooks for data fetching using React Query.
- `pages`: React components representing different pages of the application.
- `services`: API service to interact with the JSON server.
- `App.js`: Entry point of the application.
- `index.js`: Root file that renders the App component.

## Customizing the JSON Server

If you want to customize the JSON server or use your own data, you can modify the `db.json` file located in the root directory. Update the data according to your needs and restart the JSON server to see the changes.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
