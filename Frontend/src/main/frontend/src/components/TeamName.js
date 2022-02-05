import React, { useState } from 'react';
import axios from 'axios';

function TeamName() {
    const [nameA, setNameA] = useState("");
    const [nameB, setNameB] = useState("");
    const [yearA, setYearA] = useState("");
    const [yearB, setYearB] = useState("");
    const [teamName, setTeamName] = useState("Nothing to show here!");
    const url = "http://pi.cs.oswego.edu:9080";

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nameA: nameA,
            nameB: nameB,
            yearA: yearA, 
            yearB: yearB
        }
        console.log(data);
        axios.post(url, data).then(res => {
            getTeamName()
        })
    }

    const getTeamName =  () => {
        axios.get(url)
        .then(res => {
            setTeamName("Your teamname: " + res.data.pop())
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>GUI and Engine Test App </h1>
            <label>Name A </label>
            <input 
            type="text"
            value={nameA}
            onChange={(e) => setNameA(e.target.value)}
            />
            <br/>

            <label>Name B</label>
            <input
             type="text"
             value={nameB}
             onChange={(e) => setNameB(e.target.value)}
            />
            <br/>

            <label>Year A</label>
            <input
             type="text"
             value={yearA}
             onChange={(e) => setYearA(e.target.value)}/>
            <br/>

            <label>Year B</label>
            <input
            type="text"
            value={yearB}
            onChange={(e) => setYearB(e.target.value)}
            />

            <br/>
            <button type="submit">Submit Team Name</button>
            <br/>

        </form>

        <textarea value={teamName} onChange={(e) => setTeamName(e.target.value)}/> 
        </>
    );
}

export default TeamName;