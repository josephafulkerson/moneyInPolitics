import React, {useEffect, useState} from 'react'
import Legislators from './Legislators'

const LegislatorContainer = ({legislators}) => {


    
    return (
        <div>
          {legislators.map(l => <Legislators legislators={l} />)}
        </div>
    )
}

export default LegislatorContainer
