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

// Exercise 1

whatsThis();



// Exercise 2

global.whatsThis();



// Exercise 3

obj.whatsThis();



// Exercise 4

obj.inner.whatsThis();



// Exercise 5

obj.inner.whatsThis();



// Exercise 6

whatsThis.call(null);



// Exercise 7

whatsThis.call(location);


// Exercise 8

whatsThis.apply(tricky);



// Exercise 9

Ctor();



// Exercise 10

Ctor.prototype.whatsThis();



// Exercise 11

var newObject = new Ctor();



// Exercise 12

newObject.whatsThis();



// Exercise 13

obj.whatsThis.call(tricky);



// Exercise 14

whatsThis.bind(obj.inner).call(location);


