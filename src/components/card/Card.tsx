import React from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    {children}
  </div>
);