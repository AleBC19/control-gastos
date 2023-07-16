import { useState, useEffect } from 'react';
import CerrarBtn from  '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({setModal, 
              animarModal, 
              setAnimarModal, 
              guardarGasto, 
              gastosEditar, 
              setGastosEditar}) => {

  const [mensaje, setMensaje] = useState('');
  const  [nombre, setNombre ] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if( Object.keys(gastosEditar).length > 0){
      setNombre(gastosEditar.nombre)
      setCantidad(gastosEditar.cantidad)
      setCategoria(gastosEditar.categoria)
      setId(gastosEditar.id)
      setFecha(gastosEditar.fecha)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, cantidad, categoria].includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('');
      },2000)
      return;
    }
    guardarGasto({nombre, cantidad, categoria, id, fecha});

  }
  const ocultarModal = () => {
    setAnimarModal(false);
    setGastosEditar({})
    setTimeout(() => {
      setModal(false);
    },500)
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img 
          src={CerrarBtn} 
          alt="Cerrar Modal"
          onClick={ocultarModal} />
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
         <legend>{gastosEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
         {
          mensaje && <Mensaje
                        tipo='error'>{mensaje}</Mensaje>
        }
         <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto: </label>
          <input 
            id='nombre'
            type="text"
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
         </div>

         <div className='campo'>
          <label htmlFor="cantidad">Cantidad: </label>
          <input
            id='cantidad' 
            type="number"
            placeholder='Añade la cantidad del gasto: ej. 300'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))} />
         </div>

         <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
          <select  
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}>
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
         </div>

         <input 
          type="submit" 
          value={gastosEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
          />
      </form>
    </div>
  )
}

export default Modal