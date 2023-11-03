# Bowling Scorecard App

This is a simple Bowling Scorecard App created in JavaScript that allows you to keep track of your bowling scores. The app calculates the total score, identifies strikes and spares, and handles the bonus points. 

![Screenshot 1](/static/Screenshot%202023-11-03%20at%2016.38.55.png)
![Screenshot 2](/static/Screenshot%202023-11-03%20at%2016.52.39.png)

## Installation and Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bowling-scorecard.git
   ```

2. Change your current directory to the project folder:

   ```bash
   cd bowling-scorecard
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node APP.js
   ```

5. Follow the on-screen prompts to input your frame scores (example: 1-5) or type 'X' to exit the application.

## Features

- Record frame scores using a simple format (e.g., 1-5).
- Calculate and display the total score.
- Identify strikes and spares.
- Handle bonus points for strikes and spares.
- Supports up to 10 frames, including frame 10's third roll.
- Alerts you if you make a scoring error.

## Technologies and Libraries Used

- JavaScript: The core programming language.
- Node.js: The runtime for executing JavaScript on the server.
- readline: Used for reading user input from the command line.
- cli-table: Used for creating formatted tables in the console.

## Screenshots

![Screenshot 1](/static/Screenshot%202023-11-03%20at%2016.38.55.png)

![Screenshot 2](/static/Screenshot%202023-11-03%20at%2016.52.39.png)

## Known Issues

- There is a known issue with frame 10 that may cause the program to add two additional points when a strike is scored and the third roll is executed. The total score may be incorrect in this specific scenario.

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to contribute to the project.