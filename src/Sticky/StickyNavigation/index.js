import React from 'react'
import PropTypes from 'prop-types'

import StickyElement from '../StickyElement'

import './styles.css'

export const STICKY_NAVIGATION_POSIITON = {
  BOTTOM: 'bottom',
  TOP: 'top'
}

const StickyNavigation = ({
  className = 'sticky-navigation',
  position = STICKY_NAVIGATION_POSIITON.BOTTOM,
  menu = []
}) => {
  return (
    <StickyElement
      style={{
        top: position === STICKY_NAVIGATION_POSIITON.TOP ? 0 : null,
        bottom: position === STICKY_NAVIGATION_POSIITON.BOTTOM ? 0 : null,
        left: 0,
        right: 0,
      }}>
      <div className={className}>
          {menu.map(itemProps => (
            <StickyNavigationItem
              {...itemProps}
              className={className} />
          ))}
      </div>
    </StickyElement>
  )
}

const StickyNavigationItem = ({
  component: Component,
  link,
  label,
  icon,
  className,
  activeClassName,
}) => {
  return (
    <div className={`${className}__item`}>
      <Component
        link={link}
        activeClassName={`${className}__item-link--active ${activeClassName}`}
        className={`${className}__item-link`}
        icon={icon}
        label={label} />
    </div>
  )
}

StickyNavigation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      activeClassName: PropTypes.string,
      className: PropTypes.string,
      icon: PropTypes.node,
    })
  )
}

export default StickyNavigation