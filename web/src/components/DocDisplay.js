// This component will display a single Google Doc file as a Markdown style format 

import React, { Component } from 'react';



class DocDisplay extends Component {
    render() {
        // Extract all content of the document
        const docContents = (this.props.docData.body.content);

        // filter the valid paragraphs
        const paragraphs = docContents.filter((c) => ('paragraph' in c));

        // TODO: extract style of paragraphs

        // Function to extract the (first) content
        const parseElements = (c) => c.paragraph.elements[0].textRun.content;

        return (
            <div>
                {paragraphs.map((c) => <p>{parseElements(c)}</p>)}
            </div>);
    };
}

export default DocDisplay;