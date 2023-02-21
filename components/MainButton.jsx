export default function MainButton(props){
    return(
        <>
        <div className={"main-btn " + props.additional_clases}>
        <a className="main-btn-a" href={props.goto}>
            <p className="btn-p">{props.text}</p>
            </a>
        </div>
        </>
    )
}