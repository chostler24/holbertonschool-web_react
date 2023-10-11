import React from 'react';
import { normalize, schema } from 'normalizr';
import * as notifications from '../../../../notifications.json'; // Importing the JSON data

// Define a users schema
const user = new schema.Entity('users');

// Define comments schema
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notifications schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the JSON data using the defined schemas
const normalizedData = normalize(notifications.default, [notification]);

// Getter function to retrieve user notifications by user ID
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  return Object.values(notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => messages[notification.context]);
};

// Function to normalize data using the defined schema
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};
