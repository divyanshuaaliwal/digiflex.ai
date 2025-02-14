import React from 'react'
import Google_hero from '../container/Services/Cloud/google_components/Google_hero';
import Google_info from '../container/Services/Cloud/google_components/Google_info';
import Google_Services from '../container/Services/Cloud/google_components/Google_Services'
import Google_Hosting from '../container/Services/Cloud/google_components/Google_Hosting'
import Google_Advantage from '../container/Services/Cloud/google_components/Google_Advantage'

function Google() {
  return (
    <>
        <Google_hero/>
        <Google_info/>
        <Google_Services/>
        <Google_Hosting/>
        <Google_Advantage/>
    </>
  )
}

export default Google