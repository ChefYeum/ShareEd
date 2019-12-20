
class MainPage extends React.Component{
    render(){
        return(
            React.createElement('div',{},
                React.createElement('div',{className:'markdown-body'},
                    React.createElement('h1',{},"ShareEd - Automatic Tool For Making Students' lives easier")),
                React.createElement('div',{className:'markdown-body'},
                    React.createElement('h2',{},"Enter google drive link:")),
                    React.createElement('button',{onClick:this.props.handleSubmission},"enters link")
            )
        );
    }
}


class HElem extends React.Component{
    render(){return(
        React.createElement('h'+this.props.size,{},this.props.content)
    );}
}

class LinkElem extends React.Component{
    render(){return(
        React.createElement('a',{href:this.props.url,onClick:this.props.handleClick},this.props.content)
    );}
}
class InternalLinkElem extends React.Component{
    render(){return(
        React.createElement('button',{onClick:this.props.handleClick},this.props.content)
    );  
    }
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
    //same for internal and external, when internal link, url is Folder title
    handleClick(url){
        this.props.handleClick(url);
    }
    createElement(rawElem)
    {
        let eType = rawElem.elemType;
        let c = rawElem.content;
        let newKey = this.state.elemTable.length + 1;
        if(rawElem.elemType.charAt(0) === 'h')
        {
            return(
                React.createElement(HElem,{key:newKey,size:eType.charAt(1),content:c},null)
            );
        }
        else if(rawElem.elemType === 'link'){
            return(
                React.createElement(LinkElem,{key:newKey,handleClick:(()=>this.handleClick(rawElem.url)),url:rawElem.url,content:c},null)
            )
        }
        else if(rawElem.elemType === 'Ilink'){
            return(
                React.createElement(InternalLinkElem,{key:newKey,handleClick:(()=>this.handleClick(rawElem.url)),content:c})
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
        else{
            this.elemType = elemType;
            this.content = content;
            this.url = url;
        }
    }
}

class Folder {
    constructor(title,parent,isLeaf,children,elements){
        this.title = title;
        this.parent = parent;
        this.children = children;
        this.isLeaf = isLeaf;
        this.elements = elements; // with scraped elements
    }
}

class FolderStructure{
    constructor(Folders){
        this.Folders = Folders;
    }
}
//test stuff
let testelements = [new rawElement('h1','Week1'),new rawElement('h2','death by boolean')];

let testFolder1 = new Folder('Year1',null,false,null);
let testFolder2 = new Folder('subYear folder',testFolder1,false,null);
let testFolder3 = new Folder('DMMR',testFolder1,true,null,testelements);
testFolder1.children = [testFolder2];
testFolder2.children = [testFolder3];
testFolder3.children = null;

let testFolderStructure = new FolderStructure([testFolder1,testFolder2]);
//end of test stuff
class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            GDFound: false,
            GDLink: null,
            FolderStructure: null,
            currentFolderID: null,
        }
    }
    getCurrentFolder()
    {
        if(this.state.currentFolderID === null){return 'root'}
        else{
            return(this.state.FolderStructure.Folders[this.state.currentFolderID]);
        }
    }
    handleLinkSubmission(link){
        this.setState({GDFound: true,
                        GDLink: link,
                        FolderStructure: testFolderStructure,
                        currentFolderID: null});
        
    }
    handleClick = (url) => {

        let currFolder =this.getCurrentFolder();
        if(currFolder === 'root' || !currFolder.isLeaf){
            //switch current Folder

            for(let i = 0; i < this.state.FolderStructure.Folders.length;i++)
            {
                if(url === this.state.FolderStructure.Folders[i].title)
                {
                    var index = i;
                }
            }
            this.setState({currentFolderID: index});

        }
        else{
            //go to external link
            //TODO

        }
    }
    render(){
        if(this.state.GDFound){

            let currFolder = this.getCurrentFolder();
            let elements = null;
            let title = null;
            let handleClick = this.handleClick;

            let markdownContainer = null;

            if(currFolder === 'root')
            {
                let outerFolders = this.state.FolderStructure.Folders.filter((Folder)=> Folder.parent === null);

                elements = outerFolders.map((Folder)=> new rawElement('Ilink',Folder.title,Folder.title));
                title = 'root';
            }
            //when we reach a Folder which is a module (e.g. it has a docs Folder with a markdown)
            else if(currFolder.isLeaf)
            {
                elements = currFolder.elements;
                title = currFolder.title;
            }
            //when we're at a folder which isn't such a module
            else{
                elements = currFolder.children.map((Folder)=> new rawElement('Ilink',Folder.title,Folder.title));

                title = currFolder.title;
            }

            markdownContainer = React.createElement(MarkdownContainer,
                {
                    handleClick:handleClick,
                    elemTable:elements,
                    title:title,
                })
            return(markdownContainer);
        }else{
            return(
            React.createElement(MainPage,{handleSubmission:((link)=>this.handleLinkSubmission(link))},null)
            );
        }
    }
}
ReactDOM.render(React.createElement(App, {}, null), document.getElementById("root"));