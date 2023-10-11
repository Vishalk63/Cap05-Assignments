
1. What is React?

=> React is a JavaScript library for building web interfaces. It lets developers create reusable components, making it easier to manage and update different parts of a webpage. React uses a virtual representation of the DOM to efficiently update only the necessary parts when data changes, improving performance. Overall, it simplifies the process of building interactive and dynamic user interfaces.


2. Who made React?
=>React was created by Jordan Walke, a Facebook engineer, and is maintained by Facebook. It was first deployed in 2011 on Facebook's newsfeed.


3. What is Babel?
=>Babel is a JavaScript compiler often used with React to convert modern JavaScript code (ES6 and above) into a compatible format for older browsers, ensuring broader compatibility. It helps developers write code using the latest language features while maintaining cross-browser support.

4. How does Babel convert html code in React into valid code?
=>Babel primarily focuses on converting JSX (HTML-like code in React) into standard JavaScript that browsers can understand

5. What is ReactDOM used for? Write an example?
=> 
ReactDOM is a React library used for rendering React components into the DOM (Document Object Model). Example: ReactDOM.render(<App />, document.getElementById('root')); renders the "App" component into the HTML element with the id 'root'

6. What are the packages that you need to import for react to work with?
=> import React from 'react';
import ReactDOM from 'react-dom';

7. How do you add react to a web application?
=> Install Node.js:

Needed for React development.
Create React App:

Use npx create-react-app your-app-name.
Navigate:

Move to the project directory.
Start Development Server:

npm start.
Edit Code:

Modify files in the src folder.
Build for Production:

npm run build when ready.
For Existing Projects:

Install React dependencies: npm install react react-dom.
Include React in HTML:

Add script tags for React in your HTML file.


8. What is React.createElement?
=> React.createElement is a function in React used to create React elements, representing the structure and content of a component, using JavaScript. It takes three arguments: the type of the element (a string for HTML elements or a component), optional properties (or "props"), and the element's children.

9. What are the three properties that createElement accept?
=> 
React.createElement accepts three arguments: the type of the element (component or HTML tag), optional properties (or "props") for the element, and the element's children (nested elements or text content)

10. What is the meaning of render and root?
=> 
Render: Displaying or updating a React component's content.
Root: The entry point in the DOM where a React application is attached, often specified using ReactDOM.render()