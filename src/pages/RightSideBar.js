import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/link')
            .then(res => res.json())
            .then(data => setLinks(data));
    }, [])
    return (
        <div>
            <h2>link are here :{links.length}</h2>
            <div>
                {
                    links.map(link => <p key={link.id}>
                        <Link to={`/link/${link.id}`}>{link.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideBar;