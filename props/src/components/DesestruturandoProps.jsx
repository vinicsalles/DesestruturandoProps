const DesestruturandoProps = ({nome, idade, cor, altura}) => {
  return (
    <div>
        <ul>
            <li>{nome}</li>
            <li>{idade}</li>
            <li>{cor}</li>
            <li>{altura}</li> 
        </ul>
        </div>
  )
}

export default DesestruturandoProps