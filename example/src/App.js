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
      if (n % 2)
        return { border: "1px solid red" }
      else
        return { border: "1px solid green" }
    }}
    gap="30px"
  />
}

export default App
