import React from 'react'
import Aws_hero from '../container/Services/Cloud/AWS/Aws_hero'
import Aws_intro from '../container/Services/Cloud/AWS/Aws_intro'
import Aws_busines from '../container/Services/Cloud/AWS/Aws_busines'
import AWS_services from '../container/Services/Cloud/AWS/AWS_services'
import Aws_deploy from '../container/Services/Cloud/AWS/Aws_deploy'


function AWS() {
  return (
    <>
        <Aws_hero/>
  <Aws_intro/>
  <Aws_busines/>
  <AWS_services/>
  <Aws_deploy/>
    </>
  )
}

export default AWS