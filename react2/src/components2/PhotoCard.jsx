function PhotoCard(props){
    return(
        <div className={"text-center"}>
            <img className={"w-25"} src={props.data.img} alt=""/>
            <br/>
            <span>{props.data.name}</span>
            <br/>
            <button className={"btn btn-primary"}>투표</button>
        </div>
    )
}

export default PhotoCard;