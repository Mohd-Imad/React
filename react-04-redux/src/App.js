import React from 'react'
import Counter from './Components/Counter/Counter'
import { store } from './Components/redux/store'
import { Provider } from 'react-redux'

let App = () => {

  return <>
    <Provider store={store}>
      <Counter />
    </Provider>
  </>
}

export default App