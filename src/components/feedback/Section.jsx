import React from "react";



class Section extends React.Component { 
    render() {
        return (
            <div>
                <ul className="Feedback__text">{this.props.title}</ul> 
                {this.props.children}
            </div>
        );

        }
    }
    export default Section;
    