import { useEffect, useState } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className='campo'>
          <label>Filtrar Campos</label>
          <select
            value={filtro}
            onChange={ e => setFiltro(e.target.value)}
          >
          <option value="">--Todas las categorías--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    
    </div>
  )
}

export default Filtros