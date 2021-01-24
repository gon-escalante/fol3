import React from 'react';
import styles from './styles.scss';

interface NavBarProps {

}

const options = [
  {
    title: 'e'
  },
  {
    title: 'o'
  }
]

export const NavBar: React.FC<NavBarProps> = (props) => {
  return <div className={styles.navBarContainer}>
    {options.map(option => <h1>{option.title}</h1>)}
  </div>;
}