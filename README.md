# Intro to JSX (React)

## What is JSX?

- JSX stands for `JavaScript Syntax Extension` or `JavaScript XML`.
- JSX is just a JavaScript Syntax Extension; hence the name. Think of it as "syntactic sugar" that allows you to write HTML/XML-like syntax in JavaScript.

## Why use JSX?

- JSX makes code easier to read and write.
- JSX allows you to use all the power and syntax features of JavaScript that you're used to.
- React recommends using JSX.
- JSX provides syntatic sugar for the `React.createElement()` function.

<br>

## Let's see some examples!

<br>

Writing JSX is very similar to writing HTML.

Let's start with a simple JSX example:

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

The same code written without JSX looks like this:

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

That code is compiled by [Babel](https://babeljs.io/docs/en/) to:

```js
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
<br>

## Another Example?

<br>

![Another One](https://media1.giphy.com/media/3o7WTxyMSVN7lM5I7C/giphy.gif)

NOTE: The below example was taken from StackOverflow

```jsx
const MyComponent = () => { 
  return <div> 
    <p>This is not HTML...!</p> 
    <p>Wait...Is this JavaScript?</p> 
    <p>No, What the hell is this?</p> 
    <p>This is JSX.</p> 
  </div> 
} 
```

Without JSX the above code would look like this:

```js
const MyComponent = () => { 
  return React.createElement("div", null, React.createElement("p", null, "This is not HTML...!"), React.createElement("p", null, "Wait...Is this JavaScript?"), React.createElement("p", null, "No, What the hell is this?"), React.createElement("p", null, "This is JSX.")); 
};
```

<br>

## What is React?

- React is a JavaScript library for building user interfaces.
- React is maintained by Facebook and a community of individual developers and companies.
- React components are written in JavaScript (JSX)

<br>

## Why React?

<br>

- It's just JavaScript. You know JavaScript. It makes your life easier.
- React can be used to development single-page apps (SPA's) or mobile apps (React Native).
- React components are modular.
- React components are reusable.
- and more...

<br>

# Let's begin!
<br>

- Clone this repository by copy/pasting the following code into your terminal:
  
   ```
   git clone https://github.com/mbocon/intro-to-jsx-react.git
   ```
- Create a .env file and add your environment variables for `PORT` and `DATABASE_URL`.
- Run `npm i` to install dependencies.
- Open in VS Code and review the starter code.
- Let's install `express-react-views` & `react` & `react-dom`
    - `express-react-views` is an npm package that allows you to server side render React components.
    - More on `express-react-views`  [here](https://github.com/reactjs/express-react-views)
    - ERV requires `react` & `react-dom` as peer dependencies.
- 