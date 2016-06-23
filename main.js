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

ex = obj.inner.whatsThis();



// Exercise 6

ex = whatsThis.call(null);



// Exercise 7

ex = whatsThis.call(location);


// Exercise 8

ex = whatsThis.apply(tricky);



// Exercise 9

ex = Ctor();



// Exercise 10

ex = Ctor.prototype.whatsThis();



// Exercise 11

ex = var newObject = new Ctor();



// Exercise 12

ex = newObject.whatsThis();



// Exercise 13

ex = obj.whatsThis.call(tricky);



// Exercise 14

ex = whatsThis.bind(obj.inner).call(location);


