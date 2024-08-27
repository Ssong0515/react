import FancyBorder from "./FancyBorder.jsx";

function Dialog3(props){
    return(
        <div>
            <FancyBorder color={props.color}>
                <h1>{props.title}</h1>
                <h1>{props.message}</h1>
            </FancyBorder>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Dialog3;