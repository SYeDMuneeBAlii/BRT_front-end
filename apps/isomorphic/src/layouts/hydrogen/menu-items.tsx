import { routes } from '@/config/routes';
import {
  PiCalendarPlusDuotone,
  PiFolderDuotone,
  PiFolderLockDuotone,
  PiFoldersDuotone,
  PiNewspaperClippingDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Overview',
  },
  // label end
  {
    name: 'File Manager',
    href: '/',
    icon: <PiFolderDuotone />,
  },
  // label start
  {
    name: 'Apps Kit',
  },
  {
    name: 'File Manager',
    href: routes.file.manager,
    icon: <PiFoldersDuotone />,
  },
  {
    name: 'Event Calendar',
    href: routes.eventCalendar,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLockDuotone />,
  },
  // {
  //   name: 'Point of Sale',
  //   href: routes.pos.index,
  //   icon: <PiCreditCardDuotone />,
  // },
  {
    name: 'Invoice Builder',
    href: routes.invoice.builder,
    icon: <PiNewspaperClippingDuotone />,
  },
  
];
