import { EVENTS } from '../const';
import React from 'react';

export function navigation (url) {
  window.history.pushState({}, '', url);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);

  window.dispatchEvent(navigationEvent);
}

export function Link ({ to, target, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0;
    const isManageableEvent = target === undefined || target === '_self';
    const eventModified = e.shiftKey || e.metaKey || e.ctrlKey || e.altKey;

    if (isMainEvent && isManageableEvent && !eventModified) {
      e.preventDefault();
      navigation(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  );
}
