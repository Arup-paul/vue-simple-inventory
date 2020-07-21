
import Test from '../components/views/Test'
import Items from '../components/views/ItemDetails'
import Inventory from '../components/views/Inventory'

export const routes = [
  {
     path: '',
    component: Inventory
  },
   {
     path: '/item/:id',
     component: Items
   },

 ]
