import React from 'react'
import { useState } from 'react'

const Welcome = () => {

    const [state, setState] = useState("This is the inner comp content")

  return <>
    <h4>Welcome Comp</h4>
    <p>{state}</p>
  </>
}

export default Welcome
