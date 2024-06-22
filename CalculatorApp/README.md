# Calculator App using Flask

Welcome to the Calculator App built using Flask. This simple web application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Below you will find the necessary information to set up and run the app.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Files Description](#files-description)
- [Usage](#usage)
- [Credits](#credits)

## Prerequisites
Before you begin, ensure you have the following installed:
- Python 3.x
- Flask

## Project Structure
The project consists of the following files:

```
CalculatorApp/
│
├── app.py
├── templates/
│   └── index.html
├── static/
│   └── style.css
└── README.md
```

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MustafaPinjari/CalculatorApp.git
   cd CalculatorApp
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On MacOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install Flask:**
   ```bash
   pip install Flask
   ```

## Running the App
1. Ensure your virtual environment is activated.
2. Run the Flask app:
   ```bash
   python app.py
   ```
3. Open your web browser and navigate to `http://127.0.0.1:5000`.

## Files Description
### app.py
This is the main file of the application, containing the Flask app setup and routes. The app has two main routes:
- `/`: Displays the calculator form.
- `/send`: Processes the form submission and displays the result.

### templates/index.html
This HTML file contains the structure of the web page. It includes a form for user input and displays the result of the calculation.

### static/style.css
This CSS file contains the styles for the web page, including layout, fonts, and colors.

## Usage
1. Open the application in your web browser.
2. Enter the first number in the "First Number" field.
3. Enter the second number in the "Second Number" field.
4. Select the desired operation (Add, Subtract, Multiply, Divide) from the dropdown menu.
5. Click the "Calculate" button to see the result.

## Credits
- Developed by Mustafa
- GitHub: [MustafaPinjari](https://github.com/MustafaPinjari)

Feel free to contribute to this project by submitting issues or pull requests on the GitHub repository. Enjoy using the Calculator App!