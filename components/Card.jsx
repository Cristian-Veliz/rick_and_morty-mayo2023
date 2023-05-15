export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>Nombre: {props.name}</h2>
         <h3>Estatus: {props.status}</h3>
         <h3>Especie: {props.species}</h3>
         <h3>Género: {props.gender}</h3>
         <h3>{props.origin.name}</h3>
         

         <img src={props.image} alt={props.name} />
      </div>
   );
}
