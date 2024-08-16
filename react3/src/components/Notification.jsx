import React from "react";

class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        console.log(`constructor() 호출됨`)
    }

    componentDidMount() {
        console.log(`component did mount()`)
    }

    componentDidUpdate() {
        console.log(`component did updated()`)
    }

    componentWillUnmount() {
    }Mount() {
        console.log(`component will unmount()`)
    }

    render() {
        return(
            <div className={`m-2 p-2 d-flex border rounded-3`}>
                <span className={`text-black fs-4`}>{this.props.message}</span>
                {console.log(`render() 호출`)}
            </div>
        );
    }

}

export default Notification;