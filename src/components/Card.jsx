function Card(props) {
  return ( 
    <div>
      <h1>{props.titulo}</h1>
      <img src={props.imagem} width={props.width} />
    </div>
   );
}

export default Card;