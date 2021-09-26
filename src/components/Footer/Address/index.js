import React from 'react';

export default ({ title, details }) => <address>
    <h2>{title}</h2>
    {details.map(({ text }) => <p>{text}</p>)}
</address>