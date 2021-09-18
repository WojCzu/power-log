import React, { useState, useCallback, useRef, useEffect } from 'react';
import { handleClickOutsideComponent } from 'helpers/handleClickOutsideComponent';
import NavBar from 'components/NavBar/NavBar';
import { StyledNav } from './Navigation.styles';
import NavList from 'components/NavList/NavList';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  const navRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      handleClickOutsideComponent(e, [navRef], () => setIsOpen(false));
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener('click', (e) => {
        handleClickOutsideComponent(e, [navRef], () => setIsOpen(false));
      });
    };
  }, []);

  return (
    <StyledNav ref={navRef}>
      <NavBar handleClick={toggleIsOpen} isOpen={isOpen} />
      <NavList isOpen={isOpen} />
    </StyledNav>
  );
};

export default Navigation;
