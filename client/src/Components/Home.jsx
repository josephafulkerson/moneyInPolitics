import React, {useEffect, useState} from 'react'


const Home = () => {


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
            <button>See All Legislators</button>
        </div>
    )
}

export default Home
