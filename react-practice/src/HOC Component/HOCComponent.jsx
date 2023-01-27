import React from 'react'
import Wrapper from './Wrapper'
import Welcome from './Welcome'

const HOCComponent = () => {

    let AppComponent = Wrapper(Welcome)
  return <>
    <h1>HOC Comp</h1>
    <AppComponent />
  </>
}

export default HOCComponent
