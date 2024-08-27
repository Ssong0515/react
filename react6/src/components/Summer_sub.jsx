function Summer_sub(props) {
    const {img, title, body} = props

    return (
        <div className={`row ms-0`}>
            <div className={`col-sm-4 p-3`}>
                <img className={`w-100`} src={img} alt={title}/>
            </div>
            <div className={`col-sm my-auto`}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Summer_sub