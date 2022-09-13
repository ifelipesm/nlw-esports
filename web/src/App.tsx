//JSX = JS + XML

interface BotaoPropriedades{
  titulo: string;
}

function Botao(props: BotaoPropriedades){
  return(
    <button>
      {props.titulo}
    </button>
  )
}

function App() {
  return (
  <div>
  <Botao titulo="Vamos"/>
  <Botao titulo="Enviar"/>
  <Botao titulo="Isso aqui"/>
  </div>)
}

export default App
