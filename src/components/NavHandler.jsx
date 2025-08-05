'use client';

import { useEffect } from 'react';

const NavHandler = () => {
  useEffect(() => {
    const pxShow = 360;
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-navigation');
    const goTopBtn = document.getElementById('go-top');
    const topBar = document.querySelector('header .top-bar');

    const handleToggle = (e) => {
      e.preventDefault();
      toggleBtn?.classList.toggle('is-clicked');
      nav?.classList.toggle('open');
    };

    const handleNavLinkClick = () => {
      toggleBtn?.classList.remove('is-clicked');
      nav?.classList.remove('open');
    };

    const handleScroll = () => {
      const show = window.scrollY >= pxShow;
      if (goTopBtn) goTopBtn.style.display = show ? 'block' : 'none';
      if (topBar) topBar.classList.toggle('selected-menu', show);
    };

    toggleBtn?.addEventListener('click', handleToggle);
    nav?.querySelectorAll('li a').forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      toggleBtn?.removeEventListener('click', handleToggle);
      nav?.querySelectorAll('li a').forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default NavHandler;
