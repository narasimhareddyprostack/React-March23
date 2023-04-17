import React from 'react'

const Registration = () => {
    let [state, setState] = React.useState(true)
    let btn_Ref = React.useRef()
    let termsConditions = (event) => {
        //console.log(btn_Ref.current)
        btn_Ref.current.disabled = !event.target.checked
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-md-6">
                    <form>
                        <div className='form-group'>
                            <input className='form-control' type="text" placeholder='User Name' />
                        </div>
                        <div className='form-group'>
                            <input className='form-control' type="text" placeholder='Password' />
                        </div>
                        <div>
                            <input type="checkbox" onClick={termsConditions} /> Please Accept Terms & Conditions
                        </div>
                        <input className='btn btn-success' type="submit" value="Registration" disabled ref={btn_Ref} />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Registration