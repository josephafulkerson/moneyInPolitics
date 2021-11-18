import React, {useEffect} from 'react'


const Home = () => {

    useEffect(() => {
        fetch('/legislators')
        .then(r => r.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Home
