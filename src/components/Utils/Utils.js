import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const notifications = (type, message) => {
	switch (type) {
		case 'info':
			return NotificationManager.info(message, null, 3000);
		case 'success':
			return NotificationManager.success(message, null, 3000);
		case 'warning':
			return NotificationManager.warning(message, null, 3000);
		case 'error':
			return NotificationManager.error(message, null, 5000);
		default:
			return '';
	}
};
