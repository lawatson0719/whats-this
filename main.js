/**
 * Set-up
 */

function whatsThis() {
    console.log('This is...', this);
}

var obj = {
    id: 'object',
    whatsThis: whatsThis,
    inner: {
        id: 'inner-object',
        whatsThis: whatsThis
    }
};

function func() {
    this.id = 'constructor';
    whatsThis.call(this);
}

func.whatsThis = whatsThis;

func.prototype.whatsThis = whatsThis;

var tricky = {
    id: 'tricky'
};

var location = {
    state: 'Alaska',
    city: 'Anchorage'
};



/**
 * Exercises
 */

// Exercise 1

whatsThis();



// Exercise 2

window.whatsThis();



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

func();



// Exercise 10

func.prototype.whatsThis();



// Exercise 11

var newObject = new func();



// Exercise 12

newObject.whatsThis();



// Exercise 13

object.whatsThis.call(tricky);



// Exercise 14

whatsThis.bind(object.inner).call(location);


