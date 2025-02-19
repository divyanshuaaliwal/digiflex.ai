import React from 'react'
import GameServices from './GameServices';
import UnrealBenefits from './UnrealBenefits';
import UnrealTeam from './UnrealTeam'
import UnrealGameFAQ from './UnrealGameFAQ'


const Body = () => {
    return (
        <div>
            <GameServices />
            <UnrealBenefits />
            <UnrealTeam />
            <UnrealGameFAQ />
        </div>
    )
}

export default Body
