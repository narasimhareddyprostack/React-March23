let CompB = (props) => {
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>ID:{props.id}</h3>
        <h3>ID:{props.name}</h3>
    </div>
}
export default CompB