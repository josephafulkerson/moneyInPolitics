import React, {useEffect, useState} from 'react'
import Legislators from './Legislators'

const LegislatorContainer = () => {


    const [ legislators, setLegislators ] = useState([])

    useEffect(() => {
        fetch('/legislators')
        .then(r => r.json())
        .then(data => setLegislators(data))
    }, [])
    console.log(legislators)
    return (
        <div>
          {legislators.map(l => <Legislators legislators={l} />)}
        </div>
    )
}

export default LegislatorContainer
