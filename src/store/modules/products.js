export default {
  state: {
    products: []
  },

  mutations: {

  },

  actions: {

  },

  getters: {
    products (state) {
      return state.products
    },

    promoProducts (state) {
      return state.products.filter(product => product.promo)
    },

    MyProducts (state) {
      return state.products
    },

    productById (state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}
