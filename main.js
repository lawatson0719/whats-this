/**
 * Set-up
 */

if (typeof window === 'undefined') {
    global.whatsThis = whatsThis;
} else {
    global = window;
}

var obj = {
    id: 'object',
    whatsThis: whatsThis,
    inner: {
        id: 'inner-object',
        whatsThis: whatsThis
    }
};

var location = {
    state: 'Alaska',
    city: 'Anchorage'
};

function whatsThis() {
    console.log('This is...', this);
    return this;
}

function Ctor() {
    this.ownProperty = 'blah';
    console.log('This is...', this);
}

Ctor.prototype.whatsThis = whatsThis;



/**
 * Exercises
 */

var ex;

// Exercise 1

ex = whatsThis();
// this is the global object because there is nothing to the left of the dot

console.assert(whatsThis === global.whatsThis);


// Exercise 2

ex = global.whatsThis();
// this is also a global object. it is set to the global object. 

console.assert(global.whatsThis === whatsThis);

// Exercise 3

ex = obj.whatsThis();
// this is now obj becuase that is whats left of the dot

console.assert(obj.whatsThis() === obj)

// Exercise 4

ex = obj.inner.whatsThis();
// this = inner because obj.inner equals the inner object

console.assert(obj.inner.whatsThis() === obj.inner)

// Exercise 5

ex = whatsThis.call(null);
//this is equal to the global object because you are passing null which is essentially is equal to nothing

console.assert(whatsThis.call(null) === global);

// Exercise 6

ex = whatsThis.call(location);
// this is equal to the locations object because thats what it is calling

console.assert(whatsThis.call(location) === location);

// Exercise 7

ex = whatsThis.apply(location);
// this is equal to the locations objects because that is what is being passed in via the built in method .apply

console.assert(whatsThis.apply(location) === location);


// Exercise 8

ex = Ctor();
// this is equal to eh global object because there is nothing to the left of the dot

console.assert(Ctor() === global.Ctor);


// Exercise 9

ex = Ctor.prototype.whatsThis();
// this is equal the whatsThis property with a property of 'function whatsThis()'

console.assert(typeof Ctor.prototype === 'object')
// not too sure of a better way to test this

// Exercise 10

var ctorInstance = ex = new Ctor();
// this is equal to the new object ctorInstance.

//console.log(ctorInstance === typeof 'object')
console.assert(typeof ctorInstance === 'object')

// Exercise 11

ex = ctorInstance.whatsThis();
// this is equal to the object with the property/value of ownProperty: 'blah';

//console.assert(ctorInstance.whatsThis() === Ctor);
//console.assert(ctorInstance.whatsThis() === Ctor.prototype.whatsThis()); 
// not too sure what to test with this one either, not sure if you can test a function against another function 

// Exercise 12

ex = obj.whatsThis.call(ctorInstance);
// this is also equal to the object with the property/value of ownProperty: 'blah'

console.assert(obj.whatsThis.call(ctorInstance) === ctorInstance);

// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);

// this ia equal to the inner object of obj

//console.assert(Object.keys(whatsThis).length === 2);
// not too sure how to go about testing this one either. 
