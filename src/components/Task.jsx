const Task = (props) => {
       return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Task;