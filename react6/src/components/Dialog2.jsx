import FancyBorder from "./FancyBorder.jsx";

function Dialog2(props){
    return(
        <div>
            <FancyBorder color={`blue`}>
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </FancyBorder>
        </div>
    );
}

export default Dialog2;