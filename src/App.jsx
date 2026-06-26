import React from 'react'
import { Bookmark } from 'lucide-react' 

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://up.yimg.com/ib/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?pid=Api&rs=1&c=1&qlt=95&w=205&h=107" alt="" />
          <button>save<Bookmark size={10}/></button>
        </div>
       <div className="centre">
        <h3>Amaazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX designer</h2>
        <h4>part-time</h4>
        <h4>senior level</h4>
       </div>
      <div className="bottom">
          <div>
            <h3>$120/hr</h3> 
            <p>Mumbai,India</p>
          </div>
          <div>
          <button>Apply Now</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default App;
