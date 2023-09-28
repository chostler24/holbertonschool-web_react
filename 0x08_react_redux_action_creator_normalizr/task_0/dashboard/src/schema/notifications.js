// Import the notifications data from a JSON file (assumed to be in a relative path)
import notifications from '../../notifications.json';

// Define a function to filter and extract notifications by user ID
function getAllNotificationsByUser(userId) {
  // Filter the notifications to get those authored by the specified user
  const userNotifications = notifications.filter(notification => notification.author.id === userId);

  // Extract the context of each user notification
  const userContexts = userNotifications.map(notification => notification.context);

  // Return the array of user contexts
  return userContexts;
}

// Export the getAllNotificationsByUser function to make it accessible to other modules
export default getAllNotificationsByUser;
