import React, {useEffect, useState} from 'react'
import LegislatorContainer from './LegislatorContainer'
import Button from '@mui/material/Button';


const Home = () => {

const [ showList, setShowList ] = useState(false)
    return (
        <div>
            <form>
            <label>Search For legislators</label>
            <textarea type="text"></textarea>
            </form>
            <form>
                <label>Filter by Party</label>
                <select>
                    <option value="R">Republican</option>
                    <option value="D">Democrat</option>
                    <option value="I">Independent</option>
                </select>
            </form>
            <Button variant="contained" onClick={() => setShowList(!showList)}>See All Legislators</Button>
            {showList ? <LegislatorContainer /> : null}
        </div>
    )
}

export default Home
