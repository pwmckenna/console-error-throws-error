var error;
module.exports = {
    on: function () {
        error = console.error;
        console.error = function (msg) { throw msg; }
    },
    off: function () {
        console.error = error;
    }
};
