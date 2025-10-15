Live Link - https://jocular-dango-f65917.netlify.app/

**1. What is JSX, and why is it used?**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within
React. Instead of writing React.createElement() manually, JSX provides a simpler and more readable way to structure
UI components. The browser cannot directly understand JSX, so tools like Babel compile it into plain JavaScript.
It is used because it makes code easier to read, maintain, and understand. With JSX, you can combine markup and
logic in the same file, which makes component-based development smoother.



**2. What is the difference between State and Props?**
State:
Managed inside a component (local to it).
Can be updated using hooks like useState.
Used for dynamic data that changes over time.
Props:
Passed from parent to child components.
Read-only (cannot be modified by the child).
Used to pass data and functions between components.



**3. What is the useState hook, and how does it work?**
useState is a React hook used to create and manage state inside functional components.
It returns two values:
The current state value.
A function to update that value.




**4. How can you share state between components in React?**
There are a few ways:
Props Drilling → Lift state up to a parent component and pass it down as props.
Context API → Avoids props drilling by making state globally available.
State Management Libraries (Redux, Zustand, Recoil, etc.) → For larger apps.



**5. How is event handling done in React?**
Event handling in React is the process of managing user interactions, such as clicks, key presses, 
form submissions, or mouse movements, within a React application. It is similar to handling events in 
plain JavaScript, but React introduces a few important differences that make event handling more efficient 
and consistent across different browsers.




