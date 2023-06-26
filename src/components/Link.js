import {useState} from 'react';

const linkDesign = {
  hovered: 'hovered',
  normal: 'normal',
};

function Link({page, children}) {
  const [status, setStatus] = useState(linkDesign.normal);

  const onMouseEnter = () => {
    setStatus(linkDesign.hovered);
  };

  const onMouseLeave = () => {
    setStatus(linkDesign.normal);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}export default Link;