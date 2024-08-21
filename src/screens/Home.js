import React from 'react'
import '../components/CSS/bg.css';
import SearchForm from '../components/First/SearchForm'
import IdolList from '../components/First/IdolList'
import Map from '../components/First/Map';

function Home() {
    return (
        <div className="body">
            <Map />
            <SearchForm />
            <IdolList />
        </div>
    )
}

export default Home
