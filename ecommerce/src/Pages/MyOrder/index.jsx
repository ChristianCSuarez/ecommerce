import { useContext } from 'react'
import {ShoppingCardContext} from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from "../../Components/Layout"

function MyOrder() {

  const context = useContext(ShoppingCardContext)
  
  return (
      <Layout>
        MyOrder
        <div className='flex flex-col w-80'>
            {context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        imageUrl = {product.images}
                        price = {product.price}
                    />
                ))
            }
          </div>
      </Layout>
    )
  }
  
export default MyOrder