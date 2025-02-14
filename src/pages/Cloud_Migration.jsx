import React from 'react'
import Migration_hero from '../container/Services/Cloud/Cloud_migra/Migration_hero'
import Migration_intro from '../container/Services/Cloud/Cloud_migra/Migration_intro'
import Migration_Legacy from '../container/Services/Cloud/Cloud_migra/Migration_Legacy'
import Migration_type from '../container/Services/Cloud/Cloud_migra/Migration_type'
import Migration_Legacy_Systems from '../container/Services/Cloud/Cloud_migra/Migration_Legacy_Systems'
import Migration_service from '../container/Services/Cloud/Cloud_migra/Migration_service '

function Cloud_Migration() {
  return (
   <>
    <Migration_hero/>
    <Migration_intro/>
    <Migration_Legacy/>
    <Migration_type/>
    <Migration_Legacy_Systems/>
    <Migration_service/>
   </>
  )
}

export default Cloud_Migration