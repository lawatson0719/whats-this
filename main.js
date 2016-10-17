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



// Exercise 2

ex = global.whatsThis();



// Exercise 3

ex = obj.whatsThis();



// Exercise 4

ex = obj.inner.whatsThis();



// Exercise 5

ex = whatsThis.call(null);



// Exercise 6

ex = whatsThis.call(location);



// Exercise 7

ex = whatsThis.apply(location);



// Exercise 8

ex = Ctor();



// Exercise 9

ex = Ctor.prototype.whatsThis();



// Exercise 10

var ctorInstance = ex = new Ctor();



// Exercise 11

ex = ctorInstance.whatsThis();



// Exercise 12

ex = obj.whatsThis.call(ctorInstance);



// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);


