// Import necessary modules and data from files
import * as data from '../../notifications.json'; // Import notifications data
import { schema, normalize } from 'normalizr'; // Import normalizr for data normalization

// Define the schema for data normalization using normalizr
const user = new schema.Entity('users'); // Define a user schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid', // Use 'guid' as the unique identifier for messages
});
const notification = new schema.Entity('notifications', {
  author: user, // Define a relationship between notifications and users
  context: message, // Define a relationship between notifications and messages
});

// Normalize the data using the defined schema
export const normalizedData = normalize(data.default, [notification]);

// Define a function to get all notifications for a given user ID
function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities; // Extract normalized entities
  const userNotifications = Object.values(notifications).filter(notification => notification.author === userId); // Filter notifications by the specified user
  const userContexts = userNotifications.map(notification => messages[notification.context]); // Map notification contexts to actual message data
  return userContexts; // Return the user's notification contexts
}

// Export the getAllNotificationsByUser function to make it accessible to other modules
export default getAllNotificationsByUser;
