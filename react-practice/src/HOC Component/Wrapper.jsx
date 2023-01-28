import React from 'react'

const Wrapper = (Component) => {

    const NewComponent= ()=> {
        return <>
            <h3>Wrapper Comp</h3>
            <Component />
        </>
    }
    return NewComponent
}

export default Wrapper
