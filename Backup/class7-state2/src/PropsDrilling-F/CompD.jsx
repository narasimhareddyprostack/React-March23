let CompD = (props) => {
    return <div>
        <h1>Component D</h1>
        <pre>{JSON.stringify(props.name)}</pre>
        <h3>Employee Name:{props.name}</h3>
    </div>
}

export default CompD