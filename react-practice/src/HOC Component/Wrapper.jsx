import React from 'react'

const Wrapper = () => {

    function NewComponent(Component) {
        return <>
            <h3>Wrapper Comp</h3>
            <Component />
        </>
    }

    return NewComponent
}

export default Wrapper
