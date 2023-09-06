import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
    return (
        <div className='Notifications'>
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <li data-priority='default'>
                    New course available
                </li>
                <li data-priority='urgent'>
                    New resume available
                </li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
                </li>
            </ul>
            <button
                style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                }}
                aria-label="Close"
                logButtonClick={() =>
                    console.log("Close button has been clicked")
                }
            >
                <img src={closeIcon} alt='close icon'/>
            </button>
        </div>
    )
};
