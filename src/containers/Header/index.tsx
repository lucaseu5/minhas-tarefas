import BotaoAdicionar from '../../components/BotaoAdicionar'
import { Botao } from '../../components/BotaoAdicionar/style'
import { Cabeca, Titulo } from './style'

type Props = {
  adicionar: boolean
}

const Header = ({ adicionar }: Props) => {
  return (
    <Cabeca>
      <Titulo>Lista de contatos</Titulo>
      {adicionar ? (
        <BotaoAdicionar />
      ) : (
        <Botao to="/" type="button">
          Voltar nos Contatos
        </Botao>
      )}
    </Cabeca>
  )
}

export default Header
