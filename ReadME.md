# AJAX 

* [x] What is Ajax?
* [x] Pros/Cons Ajax?
* [x] Ajax Methods
* [] Demos

## What is Ajax?

A set of web developpment technologies that allows us to interact with asynchronously with other web applications. 


```js
console.log("1")

console.log("2")

setInterval(() => {
    console.log("3")
}, 0)

console.log("4")
```

# Pros of using Ajax
- Async allows for multiple request at once
- Snappier user experience (no page reload)
- Reduced server load
- Not having password and personal information stored locally 

# Cons of using Ajax
- potential security breach
- adds a layer of complexity 
- history is not updated on its own
- You have to know and expirement on how to recover the data 


# Ajax Methods
VANILLA
- XMLHttpRequest
- fetch

LIBRARIES (react, angular, vue, jquery, bootstrap)
- jquery
- axios