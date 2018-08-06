"use strict";

var options = [];

var addOption = function addOption(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var removeAll = function removeAll() {
    options = [];
    render();
};

var makeDecision = function makeDecision() {
    var numberOfOption = Math.floor(Math.random() * options.length);
    alert(options[numberOfOption]);
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "My React page"
        ),
        React.createElement(
            "h2",
            null,
            "This is some text"
        ),
        React.createElement(
            "form",
            { onSubmit: addOption },
            React.createElement("input", { name: "option", type: "text" }),
            React.createElement(
                "button",
                null,
                "Send"
            )
        ),
        React.createElement(
            "button",
            { disabled: options.length === 0, onClick: removeAll },
            "Delete all"
        ),
        React.createElement(
            "button",
            { onClick: makeDecision },
            "Make Decision"
        ),
        React.createElement(
            "ol",
            null,
            options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
