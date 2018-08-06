let options = [];

let addOption = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;

    if (option) {
        options.push(option);
        e.target.elements.option.value='';
    }
    render();
};

let removeAll = () => {
    options = [];
    render();

};

let makeDecision = () => {
    let numberOfOption = Math.floor(Math.random()*options.length);
    alert(options[numberOfOption]);
};

let render = () => {
    let template = (
        <div>
            <h1>My React page</h1>
            <h2>This is some text</h2>

            <form onSubmit={addOption}>
                <input name="option" type="text"/>
                <button>Send</button>
            </form>
            <button disabled={options.length===0} onClick={removeAll}>Delete all</button>
            <button onClick={makeDecision}>Make Decision</button>

            <ol>
                {options.map((option) => <li key={option}>{option}</li>)}
            </ol>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'))
};

render();