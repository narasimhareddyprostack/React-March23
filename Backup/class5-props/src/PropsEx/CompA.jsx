import CompB from './CompB'
let CompA = () => {
    let eid = 101;
    let ename = "Rahul Gandhi"
    return <div>
        <h2>Component A</h2>
        <hr />
        {/*  <CompB props1={"Good M"} props2={"G Night"} /> */}
        {/*     <CompB id={eid} name={ename} /> */}
        <CompB hero_Name={"RajniKanthi"} hero_In={"Nayana"} />
    </div>
}
export default CompA