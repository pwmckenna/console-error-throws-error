var error;
module.exports = {
    on: function () {
        error = console.error;
        console.error = function (msg) {
            error.apply(console, arguments);
            throw (msg instanceof Error ? msg : new Error(msg));
        }
    },
    off: function () {
        console.error = error;
    }
};
