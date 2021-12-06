import { createContext } from 'react';
import { NotificationsContextProps } from './types';

export const NotificationsContext = createContext<NotificationsContextProps>({} as any);
NotificationsContext.displayName = '@mantine/notifications/NotificationsContext';
