function receivesAFunction(hey) {
    hey();
};

function returnsANamedFunction() {
    return function namedFunc() {
        alert('I have a name');
    };
};

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I have no name')
    }
};