import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NevBar from './component/Nevigation-bar/Nevigation-bar'
import ShopeAll  from './component/shop/shop'

function App() {
  return(
    <div className='APP'>
         <NevBar></NevBar>
          <ShopeAll></ShopeAll>
    </div>
  )
} 




export default App;
