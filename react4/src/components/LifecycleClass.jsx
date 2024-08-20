import React from "react";

class LifecycleClass extends React.Component {
    num1;

    constructor(props) {
        super(props);

        this.state = {
            num2: null,
        }
    }

    componentDidMount() {
        this.num1 = 100;
        this.setState({num2 : 200});
        console.log(this.num1)
        console.log(this.state.num2)
    }

    componentDidUpdate() {
        console.log(`setState() 실행 후 동작하는 componentDidUpdate() 함수`);
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <div>
                <p>num1 : {this.num1}</p>
                {console.log(this.num1)}
                <p>num2 : {this.state.num2}</p>
                {console.log(this.state.num2)}
            </div>
        );
    }

}

export default LifecycleClass;