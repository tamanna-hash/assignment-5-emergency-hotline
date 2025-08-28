1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
    1.getElementById grabs a single element by its ID.
    2.getElementsByClassName returns a live collection of all elements with a class.
    3.querySelector use CSS selectors to selects the first matching element .
    4.querySelectorAll use CSS selectors to grab one or all matching elements.

2.How do you create and insert a new element into the DOM?
ans:
First document.createElement() to make a new element, set its content or attributes, then insert it with methods like appendChild().
3.What is Event Bubbling and how does it work?
ans:
Events start from the deepest element (target) and bubble up through parent elements until they reach the document, letting multiple listeners react.
4.What is Event Delegation in JavaScript? Why is it useful?
ans:
Event Delegation Attach a single listener to a parent element to handle events on its children; it saves memory and works for dynamically added elements.
5.What is the difference between preventDefault() and stopPropagation() methods?
ans:
preventDefault() stops the browser’s default action like form submit or link click, while stopPropagation() stops the event from bubbling or capturing further.
