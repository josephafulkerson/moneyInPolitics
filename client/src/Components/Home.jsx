import React, {useEffect, useState} from 'react'
import LegislatorContainer from './LegislatorContainer'
import Button from '@mui/material/Button';


const Home = ({legislators}) => {
    const [searchTerm, setSearch] = useState("")
    const [searchParty, setParty] = useState("")

    const filteredLegislators = legislators.filter((legislatorObj) => legislatorObj.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const filteredParty = legislators.filter((legislatorObj) => legislatorObj.party.includes(searchParty))

    
    console.log(legislators)
const [ showList, setShowList ] = useState(false)

    return (
        <div>
            <form>
            <label>Search For legislators</label>
            <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            <form>
                <label>Filter by Party</label>
                <select onChange={(e) => setParty(e.target.value)}>
                    <option value="republican">Republican</option>
                    <option value="democrat">Democrat</option>
                    <option value="independent">Independent</option>
                </select>
            </form>
            <Button variant="contained" onClick={() => setShowList(!showList)}>See All Legislators</Button>
            {showList ? <LegislatorContainer legislators={filteredParty} /> : null}
        </div>
    )
}

export default Home
