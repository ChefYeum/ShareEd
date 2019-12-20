

class HElem extends React.Component{
    render(){return(
        React.createElement('h'+this.props.size,{},this.props.content)
    );}
}

class LinkElem extends React.Component{
    render(){return(
        React.createElement('a',{href:this.props.url,onClick:this.handleClick},this.props.content)
    );}
}

///takes in a raw element table and produces react components appropriately
///each element in the table is an object with
class MarkdownContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elemTable:props.elemTable,
            title:props.title,
        }
    }
    createElement(rawElem)
    {
        let eType = rawElem.elemType;
        let c = rawElem.content;

        if(rawElem.elemType.charAt(0) === 'h')
        {
            return(
                React.createElement(HElem,{size:eType.charAt(1),content:c},null)
            );
        }
        else if(rawElem.elemType === "link"){
            return(
                React.createElement(LinkElem,{url:rawElem.url,content:c},null)
            )
        }
    }
    render(){
        let innerElements = this.state.elemTable.map(elem => this.createElement(elem));
        let container = React.createElement('div',{className:'markdown-body'},innerElements);
        return(container);
    }

}
class rawElement{
    constructor(elemType,content,url)
    {
        if(elemType.charAt(0) === 'h')
        {
            //paragraph
            this.elemType = elemType;
            this.content = content;
            this.url = null;
        }
        else if(elemType === "link")
        {
            //url
            this.elemType = elemType;
            this.content = content;
            this.url = url;
        }
        else{
            this.elemType = undefined;
            this.content = undefined;
            this.url = undefined;
        }
    }
}
class App extends React.Component{
    render(){return(
        React.createElement(MarkdownContainer,{title:'manaal lazy',elemTable:[new rawElement('h1','header1',null),new rawElement('h3','header3',null)]})
    );
    }
}
ReactDOM.render(React.createElement(App, {}, null), document.getElementById("root"));