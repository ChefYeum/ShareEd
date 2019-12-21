class DriveFile{
    children = [];
    name = '';
    id = DriveFile.counter;
    static #counter = 0;

    constructor(name){
        this.name = name;
        ++DriveFile.counter;
    }

    addChild(child){
        this.children.push(child);
    }

    setChildren(children){
        this.children = children;
    }

}

export default DriveFile;