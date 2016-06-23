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

var tricky = {
    id: 'tricky'
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
    this.id = 'constructor';
    whatsThis.call(this);
}

Ctor.whatsThis = whatsThis;

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

ex = whatsThis.apply(tricky);



// Exercise 8

ex = Ctor();



// Exercise 9

ex = Ctor.prototype.whatsThis();



// Exercise 10

var newObject = ex = new Ctor();



// Exercise 11

ex = newObject.whatsThis();



// Exercise 12

ex = obj.whatsThis.call(tricky);



// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);


