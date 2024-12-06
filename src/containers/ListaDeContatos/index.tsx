import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { Container, GridList } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <GridList>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              celular={t.celular}
              mail={t.mail}
            />
          </li>
        ))}
      </GridList>
    </Container>
  )
}

export default ListaDeContatos
