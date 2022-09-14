import React from 'react'
import "./Section.css"

function Section({ title, Icon, selected }) {
  return (
    <div className={`Section ${selected && "section__selected"}`}>
      <Icon fontSize="small" />
      <h2 className='section__title'>{title}</h2>
    </div>
  )
}

export default Section
