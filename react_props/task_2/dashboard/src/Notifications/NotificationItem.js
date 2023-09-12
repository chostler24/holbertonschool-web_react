import React from 'react';
import 'Notifications.css';


const NotificationItem = ({ type, html, value }) => (
    <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
    >{value}</li>
);

export default NotificationItem;
