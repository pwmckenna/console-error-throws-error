var warn;
module.exports = {
    on: function () {
        warn = console.warn;
        console.warn = function (msg) { throw msg; }
    },
    off: function () {
        console.warn = warn;
    }
};
