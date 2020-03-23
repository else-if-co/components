import React from 'react'
//import PropTypes from 'prop-types'
import './styles.css'

const StickyNavigation = ({
  menu = []
}) => {
  return (
    <div className="sticky-navigation">
      {menu.map(({
        component: Component,
        label,
        link,
        activeClassName,
        className
      }) => (
        <Component
          link={link}
          activeClassName={activeClassName}
          className={className}>
          {label}
        </Component>
      ))}
    </div>
  )
}

StickyNavigation.propTypes = {}

export default StickyNavigation