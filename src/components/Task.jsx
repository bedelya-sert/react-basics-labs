const Task = (props) => {
       return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p><b>{props.priority_lvl}</b></p>
        </div>
    )
}
export default Task;