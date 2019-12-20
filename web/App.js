


class App extends React.Component{
    render(){
    return React.createElement(
        "div", 
        { id: "some-id"},
        React.createElement("h1",{},"Some header 1")
        );
    }
}
ReactDOM.render(React.createElement(App, {}, null), document.getElementById("root"));