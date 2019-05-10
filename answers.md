Q:
Describe the biggest difference between .forEach & .map.

A:
.forEach
-just iterates over the given array does not need to return anything, can also only process
-Can be used to manipulate the original given array

.map
-returns an array of processed items
-can be used to use processed data of an array without manipulating it
-returns an array that has the same size as the input array


Q:
What is the difference between a function and a method?

A:
A function is a piece of code that allows us to process data as it accepts an input
via a parameter, then applies some logic to the data and so it can return 
processed/manipulated data. A method does the same but is only called so when it
is within an object/class.

Q:
What is closure?

A:
Closure means the different scope that functions, blocks and code in general has.
Access to data always happens to the outside never to the inside. So a function
can easily access data outside of it, but not a variable that is within a subfunction
of this function.


Q:
Describe the four rules of the 'this' keyword.

A:
Window/Global Binding:
When you use "this" in global scope it will bind to global/window scope. You want to avoid this.

Implicit Binding:
Whenever you call a function with the dot notation (myObj.speak()) look to the left of the 
dot and you will see which object "this" is bound to. Also works with nested objects like 
myParentObj.myChildObj.speak()) so here "this" is bound to the myChildObj and not the parent.

New Binding:
Whenever an object is invoked by the keyword new "this" will be bound to the instance of the object.

Explicit Binding:
With explicit binding you can instruct how "this" will be bound for a function call.
Functions to use for that are
obj.call(obj2, args) obj.bind(obj2, args) or obj.apply(obj2, argsArry)
.call and .apply will immediately revoke the function while .apply is made for arrays as arguments
.bind is similiar to .call but returns a new function instead of invoking the original one.


Q:
Why do we need super() in an extended class?

A:
Super(args); has to be used with the keyword extends so the base attributes of the
class that we want to inherit from can be referenced. Under the hood it uses
the Prototype to connect the classes. Also it replaces the .call function from ES5 version.




