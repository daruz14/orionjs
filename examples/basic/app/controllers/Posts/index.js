import {Controller} from '@orion-js/app'
import list from './list'

export default new Controller({
  name: 'Posts',
  resolvers: {
    list
  }
})