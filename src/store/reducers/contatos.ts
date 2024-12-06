import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Lucas',
      celular: '(11) 94002-8922',
      mail: 'lucas.82@gmail.com'
    },
    {
      id: 2,
      nome: 'Rafael ',
      celular: '(11) 94002-8922',
      mail: 'rafael.82@gmail.com'
    },
    {
      id: 3,
      nome: 'Felipe',
      celular: '(11) 94002-8922',
      mail: 'felipe.82@gmail.com'
    },
    {
      id: 4,
      nome: 'Gabriel',
      celular: '(11) 94002-8922',
      mail: 'gabriel.82@gmail.com'
    },
    {
      id: 5,
      nome: 'Hugo',
      celular: '(11) 94002-8922',
      mail: 'hugo.82@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Ja existe um contato com este nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
