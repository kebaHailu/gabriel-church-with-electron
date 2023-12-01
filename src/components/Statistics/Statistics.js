import React from 'react'
import FirewochSt from './FirewochSt'
import MeakelawianSt from './MeakelawianSt'
import WetatochSt from './WetatochSt'
import DekikanSt from './DekikanSt'

function Statistics() {
  return (
    <div className='bgg-adjust'>

      <h1>
        የአባላት ስታቲክስ ቻርት በየዘርፉ <i className="fas fa-user"></i>{" "}
      </h1>
      <FirewochSt  />
      <hr className='hradj'/>
      <WetatochSt/>
      <MeakelawianSt/>
      <DekikanSt/>
      
    </div>
  )
}

export default Statistics