import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  celular: celularOriginal,
  mail: mailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [celular, setCelular] = useState('')
  const [mail, setMail] = useState('')

  useEffect(() => {
    if (celularOriginal.length > 0) {
      setCelular(celularOriginal)
    }
  }, [celularOriginal])

  useEffect(() => {
    if (mailOriginal.length > 0) {
      setMail(mailOriginal)
    }
  }, [mailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setCelular(celularOriginal)
    setMail(mailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Contact
        disabled={!estaEditando}
        value={celular}
        onChange={(evento) => setCelular(evento.target.value)}
      />
      <S.Contact
        disabled={!estaEditando}
        value={mail}
        onChange={(evento) => setMail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    celular,
                    mail,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
