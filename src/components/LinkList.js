import React from 'react';

function LinkList(props) {
    console.log(props)
    return (
        <div className="links">
            <ul style={{listStyle:"none"}}>
            {props.links.map((link) => {
                return <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{link.name} (<i>{link.tags}</i>)</a></li>
                })}
            </ul>
        </div>
    )
}

export default LinkList;