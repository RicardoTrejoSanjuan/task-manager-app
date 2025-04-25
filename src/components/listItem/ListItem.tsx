import React from 'react';
import './ListItem.css';

export interface ListItemProps {
  icon: string;
  text: string;
  iconColor: string;
}

export const ListItem: React.FC<ListItemProps> = ({ icon, text, iconColor }) => (
  <li className="list-item">
    <span className={`list-item-icon ${iconColor}`} aria-hidden="true">
      {icon}
    </span>
    <span className="list-item-text">{text}</span>
  </li>
);