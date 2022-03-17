import React from 'react'
import PropTypes from 'prop-types'
import '../scss/components/Section.scss';

const Section = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export const SectionTitle = props => {
  return (
    <div className={'sectionTitle'}>
      <h1>
        {props.children}
      </h1>
    </div>
  )
}

export const SectionBody = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Section