"use client"
import React, { useState } from 'react'
import facilitiesData from './Facilities.JSON'

function EmailFormat() {
    const [pastedString, setPastedString] = useState('');
    let parsedString

    const parseAndFormatString = (text) => {
        const facilities = facilitiesData;
        const matches = facilities.filter(f => text === f.Number);

        if (matches.length > 0) {
            setPastedString(JSON.stringify(matches));
        } else {
            setPastedString('No matching facilities found.');
        }
    };

    const handleParse = () => {
        parseAndFormatString(pastedString);
    };

    return (
        <div>
            <textarea className='text-black' value={pastedString} onChange={(e) => setPastedString(e.target.value)} placeholder="Paste your text here"></textarea>
            <button onClick={handleParse}>Parse Text</button>
            <div>
                <h2>Parsed Information:</h2>
                <p>{parsedString}</p>
            </div>
        </div>
    );
}

export default EmailFormat