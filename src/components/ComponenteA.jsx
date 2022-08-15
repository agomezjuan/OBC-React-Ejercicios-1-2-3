import React from 'react'
import { Contacto } from '../models/contacto.class'
import ComponenteB from './ComponenteB'

const ComponenteA = () => {
  return (
    <div>
        <ComponenteB props={new Contacto("Alberto", "Gomez Juan", "agomezjuan@hotmail.com", true)} />
    </div>
  )
}

export default ComponenteA