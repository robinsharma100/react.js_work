import React from 'react'

function Head({data}){
    return (
        <>
            values={data.map(item => (
                <h1>{item}</h1>
            ))}
        </>
    );
}

export default Head;