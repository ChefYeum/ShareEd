
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
    //same for internal and external, when internal link, url is file title
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

class File {
    constructor(title,parent,isLeaf,children,elements){
        this.title = title;
        this.parent = parent;
        this.children = children;
        this.isLeaf = isLeaf;
        this.elements = elements; // with scraped elements
    }
}

class FileStructure{
    constructor(files){
        this.files = files;
    }
}
//test stuff
let testelements = [new rawElement('h1','Week1'),new rawElement('h2','death by boolean')];

let testFile1 = new File('Year1',null,false,null);
let testFile2 = new File('DMMR',testFile1,true,null,testelements);
testFile1.children = [testFile2];

let testFileStructure = new FileStructure([testFile1,testFile2]);
//end of test stuff
class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            GDFound: false,
            GDLink: null,
            fileStructure: null,
            currentFileID: null,
        }
    }
    getCurrentFile()
    {
        if(this.state.currentFileID === null){return 'root'}
        else{
            return(this.state.fileStructure.files[this.state.currentFileID]);
        }
    }
    handleLinkSubmission(link){
        this.setState({GDFound: true,
                        GDLink: link,
                        fileStructure: testFileStructure,
                        currentFileID: null});
        
    }
    handleClick = (url) => {
        let currFile =this.getCurrentFile();
        if(currFile === 'root' || !currFile.isLeaf){
            //switch current file

            //find by 'url' or title
            let clickedFile = this.state.fileStructure.files.find((file)=> file.title === url);
            let index = this.state.fileStructure.files.indexOf(clickedFile);
            //CAUTION, bad approach

            this.setState({currentFileID: index});

        }
        else{
            //go to external link
            //TODO

        }
    }
    render(){
        if(this.state.GDFound){

            let currFile = this.getCurrentFile();

            if(currFile === 'root')
            {
                let outerFolders = this.state.fileStructure.files.filter((file)=> file.parent === null);

                let elements = outerFolders.map((file)=> new rawElement('Ilink',file.title,file.title));
                return(
                   React.createElement(MarkdownContainer,{handleClick:this.handleClick,elemTable:elements,title:"root"},null)
                );
            }
            //when we reach a file which is a module (e.g. it has a docs file with a markdown)
            else if(currFile.isLeaf)
            {
                return(React.createElement(MarkdownContainer,
                    {
                    handleClick:this.handleClick,
                    elemTable:currFile.elements,
                    title:currFile.title
                    },
                    null));
            }
            //when we're at a folder which isn't such a module
            else{

                let elements = currFile.children.map((childFile)=> new rawElement('Ilink',childFile.title,childFile.title));
                return(
                   React.createElement(MarkdownContainer,
                    {
                    handleClick:this.handleClick,
                    elemTable:elements,
                    title:currFile.title
                    }
                    ,null)
                );
            }
        }else{
            return(
            React.createElement(MainPage,{handleSubmission:((link)=>this.handleLinkSubmission(link))},null)
            );
        }
    }
}
ReactDOM.render(React.createElement(App, {}, null), document.getElementById("root"));