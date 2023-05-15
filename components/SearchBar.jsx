export default function SearchBar({onSearch}) {
   return (
      <div>
         <input 
         type='search' 
         name='search'
         id='search'
         />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
