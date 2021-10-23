import React, { useState, useCallback, useRef, useEffect } from 'react';
import { handleClickOutsideComponent } from 'helpers/handleClickOutsideComponent';
import NavBar from 'components/molecules/NavBar/NavBar';
import { StyledNav } from './Navigation.styles';
import NavList from 'components/molecules/NavList/NavList';

const Navigation = () => {
  const [isOpen, _setIsOpen] = useState(false);

  const setIsOpen = useCallback((data) => {
    isMenuOpen.current = data;
    _setIsOpen(data);
  }, []);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    [setIsOpen]
  );

  const isMenuOpen = useRef(isOpen);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    document.addEventListener('click', (e) => {
      handleClickOutsideComponent(e, [navRef], () => setIsOpen(false));
    });

    document.addEventListener('keyup', (e) => {
      if (isMenuOpen.current && (e.key === 'Escape' || e.key === 'Esc')) {
        setIsOpen(false);
        hamburger.focus();
      }
    });

    return () => {
      document.removeEventListener('click', (e) => {
        handleClickOutsideComponent(e, [navRef], () => setIsOpen(false));
      });

      document.removeEventListener('keyup', (e) => {
        if (isMenuOpen.current && (e.key === 'Escape' || e.key === 'Esc')) {
          setIsOpen(false);
          hamburger.focus();
        }
      });
    };
  }, [isOpen, setIsOpen]);

  return (
    <StyledNav ref={navRef}>
      <NavBar
        handleClick={toggleIsOpen}
        isOpen={isOpen}
        hamburgerRef={hamburgerRef}
      />
      <NavList isOpen={isOpen} closeNav={() => setIsOpen(false)} />
    </StyledNav>
  );
};

export default Navigation;
