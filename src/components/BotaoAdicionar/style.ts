import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Botao = styled(Link)`
  height: 36px;
  width: 180px;
  background-color: #40739e;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #b5c0c9;
    color: #000;
    font-weight: bold;
  }
`
