class DriveFile{
    //children are other files, or if this file is a leaf, react elements
    children = [];
    name = '';
    id = DriveFile.counter;
    isLeaf = true;
    static counter = 0;

    constructor(name){
        this.name = name;
        ++DriveFile.counter;
    }

    addChildren(children){
        this.children.push(children);
        this.isLeaf = false;
    }
    setChildren(children)
    {
        this.children = children;
        this.isLeaf = false;
    }
    //we require that the jsx elements have pairwise unique keys
    addChildrenJSX(children){
        this.children.push(children);
        this.isLeaf = true;
    }

    //we require that the jsx elements have pairwise unique keys
    setChildrenJSX(children){
        this.children = children;
        this.isLeaf = true;
    }


}

export default DriveFile;