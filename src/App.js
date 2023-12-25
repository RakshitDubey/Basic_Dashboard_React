import React from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className='w-full flex'>
      <Navigation/>
      <main>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App