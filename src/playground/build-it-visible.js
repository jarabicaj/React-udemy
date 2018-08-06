let visibility = false;

let toogle = () => {
    visibility = !visibility;
    render();
};

let render = () => {
    let jsx = (
        <div>
            <p>Visibility toogle</p>
            <button onClick={toogle}>{visibility ? <p>hide</p> : <p>show</p>}</button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();

