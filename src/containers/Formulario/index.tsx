import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar } from '../../components/Contatos/styles'
import { Container, Titulo } from '../../styles'
import { Campo, Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const [mail, setMail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        celular,
        mail
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Campo
          value={celular}
          onChange={({ target }) => setCelular(target.value)}
          type="text"
          placeholder="Numero do contato"
        />
        <Campo
          value={mail}
          onChange={({ target }) => setMail(target.value)}
          type="email"
          placeholder="E-mail do contato"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </Container>
  )
}

export default Formulario
