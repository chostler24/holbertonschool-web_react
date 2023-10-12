import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { connect } from 'react-redux'; // Import connect from Redux
import { fetchNotifications } from '../actions/notificationActionCreators'; // Import the fetchNotifications action
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  // Determine if the component should update based on prop changes
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.messages.length > this.props.messages.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  componentDidUpdate() {
    console.log('Component has updated');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, messages, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div id='container' className={css(styles.container)}>
        <div
          className={`menuItem ${css(styles.menuItem)} ${css(styles.fadeBounce)}`}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>

        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}}`}>
            <img
              src={closeIcon}
              alt='close icon'
              style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
              aria-label='Close'
              onClick={handleHideDrawer}
            />

            {messages.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.list)}>
              {messages.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                messages.map(({ type, html, value, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                    markAsRead={this.markAsRead}
                    className={`notification-item ${css(
                      type === 'default' ? styles.defaultNotification : styles.urgentNotification
                    )}`}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  messages: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func, // Map fetchNotifications action to the component
};

Notifications.defaultProps = {
  displayDrawer: false,
  messages: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const mapStateToProps = (state) => ({
  messages: state.notifications.notifications,
});

// Connect the component to Redux, mapping the messages and fetchNotifications
export default connect(mapStateToProps, { fetchNotifications })(Notifications);

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed rgb(224,53,75)',
    padding: '1%',
    position: 'relative',
    '@media screen and (max-width: 900px)': {
      fontSize: 20,
      padding: 0,
      border: 'none',
    },
  },

  defaultNotification: {
    color: 'blue',
  },

  urgentNotification: {
    color: 'red',
  },

  container: {
    float: 'right',
    '@media screen and (max-width: 900px)': {
      float: 'unset',
    },
  },

  menuItem: {
    textAlign: 'end',
    marginRight: 25,
    '@media screen and (max-width: 900px)': {
      display: 'none',
    },
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  fadeBounce: {
    ':hover': {
      animationName: [
        {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(5px)' },
        },
      ],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: ['infinite', '3'],
    },
  },
});

