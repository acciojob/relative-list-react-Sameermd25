import React from 'react'

const App = () => {
  let relativelist=["father","mother","sister","brother"]
  return (
    <div id="main">
               {/* Do not remove the main div */}
        <ol>
          relativelist.map((relative,index)=>{
            return <li key=`relativeListItem${index+1}`>{relative}</li>
          })
        </ol>
    </div>
  )
}

export default App
