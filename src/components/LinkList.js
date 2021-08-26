import React from 'react';

function LinkList(props) {
    console.log(props)
    return (
        <div className="links">
            <ul style={{listStyle:"none"}}>
            {props.links.map((link, i) => {
                return <li key={i}><a href={link.url} target="_blank" rel="noreferrer">{link.name} (
                    <i>
                        {link.tags && link.tags.length > 0 ? (link.tags.map((tag, h) => <span key={h}>#{tag.tag} </span>)) : ("n/a")}
                    </i>
                    )</a>
                </li>
                })}
            </ul>
        </div>
    )
}

export default LinkList;