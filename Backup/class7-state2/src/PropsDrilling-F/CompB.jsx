import CompC from './CompC'
let CompB = (props) => {
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompC name={props.name} />
    </div>
}

export default CompB