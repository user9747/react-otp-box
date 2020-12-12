import React from 'react'

import ReactOtp from 'react-otp-box'
import 'react-otp-box/dist/index.css'

const App = () => {
  return <ReactOtp
    autoFocus
    n={6}
    onChange={(e) => console.log(e)}
    inputStyle={(n) => {
      console.log(n)
      if (n === 0)
        return { background: "red" }
      else
        return { background: "green" }
    }}
  />
}

export default App
