import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CoffeeContext } from '../../contexts/CoffeeContext'

import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  const { coffeesCart } = useContext(CoffeeContext)
  console.log(coffeesCart)
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
          {coffeesCart?.length && coffeesCart?.length > 0 && (
            <div className='countItemCart'>
              <span>
                {coffeesCart?.length}
              </span>
            </div>

          )
          }
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
