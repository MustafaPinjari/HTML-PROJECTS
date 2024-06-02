# 📚 Blog App

This Blog App is a simple web application that allows users to create, edit, delete, and view blog posts. The project utilizes HTML, CSS, and JavaScript, along with external libraries such as Bootstrap for styling and FontAwesome for icons.

![Blog App Screenshot](Screenshots/demo.gif)
![](Screenshots/ss1.png)
![](Screenshots/ss2.pngf)
![](Screenshots/ss3.png)

## 📖 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/MustafaPinjari/Blog-Application.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Blog-Application
    ```

3. **Open `index.html` in your preferred web browser to view the application.**

## 🚀 Usage

Upon opening `index.html`, you will be presented with a simple blog interface. The navbar includes a "Home" link and a button to add a new blog post.

### ➕ Adding a New Blog Post

1. Click the "Add New" button in the navbar.
2. Fill in the form with the required details (Image URL, Title, Type, and Description).
3. Click "Save Changes" to add the new blog post.

### ✏️ Editing a Blog Post

1. Click the pencil icon on the blog post you want to edit.
2. Modify the content directly in the card.
3. Click "Save Changes" to save the updated content.

### 🗑️ Deleting a Blog Post

1. Click the trash icon on the blog post you want to delete.
2. The blog post will be removed from the list.

### 📖 Viewing a Blog Post

1. Click the "Open Blog" button on the desired blog post.
2. A modal will appear displaying the blog post's details.

## 📁 Files

### `index.html`

This file contains the HTML structure of the Blog App, including the navbar, modals, and blog container. It also links to external resources like Google Fonts, Bootstrap, and FontAwesome.

### `style.css`

This file contains custom CSS styles for the Blog App. It styles elements such as the body, card images, and placeholders to provide a consistent look and feel.

### `script.js`

This file contains JavaScript functions to handle various operations such as:

- Creating new blog cards
- Loading data from local storage
- Saving changes to local storage
- Editing and deleting blog posts
- Opening blog posts in a modal

## ✨ Features

- **Add New Blog Posts:** Users can add new blog posts with a title, image URL, type, and description.
- **Edit Blog Posts:** Users can edit existing blog posts directly in the cards.
- **Delete Blog Posts:** Users can delete blog posts.
- **View Blog Posts:** Users can view blog posts in a modal.

## 🤝 Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
