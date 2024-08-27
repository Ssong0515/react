function FancyBorder(props){
    return(
        <div className={`border border-2 border-info m-3 p-3 FancyBorder FancyBorder-` + props.color}>
            <h4 className={`mb-3`}>자식 컴포넌트 영역</h4>
            {props.children}
        </div>
    )
}

export default FancyBorder