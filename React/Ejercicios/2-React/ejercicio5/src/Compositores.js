function Compositores(props) {
    return (
      <ul>
      {props.compositores.map((compositor, index) => (<li key={index}>{compositor.nombre}</li>))}
      </ul>
    )
  }

  export default Compositores