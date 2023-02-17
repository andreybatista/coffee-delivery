import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer className='container'>
      <img src={logo} alt="" />
      <nav>
        <div className='box'>
          <MapPin size={19} weight="fill" />
          <span>Goiânia, GO</span>
        </div>
        <NavLink className="cart" to="/history" title="Histórico">
          <ShoppingCart size={32} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
