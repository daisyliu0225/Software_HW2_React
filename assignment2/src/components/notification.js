import React, { useState, useEffect } from 'react';

const NotificationComponent = () => {
    const [permission, setPermission] = useState(Notification.permission);
    useEffect(() => {
        requestNotificationPermission();
      }, []);
    
      const requestNotificationPermission = () => {
        Notification.requestPermission().then((permission) => {
          setPermission(permission);
        });
      };
    
      const observeChanges = () => {
        const observer = new MutationObserver((mutationsList) => {
          for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
              showNotification();
              break;
            }
          }
        });
    
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      };
    
      const showNotification = () => {
        if (permission === 'granted') {
          new Notification('Page Updated!', {
            body: 'There are new changes on the webpage.',
          });
        } else if (permission === 'default') {
          requestNotificationPermission();
        }
    };

    return (
        <button onClick={observeChanges}>Send</button>
    );
};

export default NotificationComponent;