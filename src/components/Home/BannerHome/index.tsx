import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import banner from '../../../assets/banner.png'
import background from '../../../assets/background.png'

import { BannerContainer } from "./styles";

export function BannerHome() {
  return (
    <BannerContainer className="container" style={{
      backgroundImage: `url(${background})`
    }}>
      <div>
        <h1>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>

        <div className="icon-list">
          <div>
            <span>
              <ShoppingCart size={32} weight="fill" />
            </span>
            <p>
              Compra simples e segura
            </p>
          </div>

          <div>
            <span>
              <Package size={32} weight="fill" />
            </span>
            <p>
              Compra simples e segura
            </p>
          </div>

          <div>
            <span>
              <Timer size={32} weight="fill" />
            </span>
            <p>
              Compra simples e segura
            </p>
          </div>

          <div>
            <span>
              <Coffee size={32} weight="fill" />
            </span>
            <p>
              Compra simples e segura
            </p>
          </div>
        </div>
      </div>

      <div className="col-img">
        <img src={banner} width={476} height={360} />
      </div>
    </BannerContainer >
  )
}