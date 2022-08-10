import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tooltip.module.css';

const Tooltip = ({children, description}) => {

  const tooltipItem = React.useRef(null);
  
  React.useEffect(()=>{
    const tooltipBox = tooltipItem.current.nextElementSibling;
    const height = tooltipItem.current.getBoundingClientRect().height;
    tooltipBox.style.top = `${height + 16}px`;
  }, [tooltipItem]);

  return (
    <div className={styles.wrapperTooltip}>
      <div className={styles.tooltipItem} ref={tooltipItem}>
        {children}
      </div>
      <div className={styles.tooltipBox}>
        {description}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
}

export default Tooltip;
