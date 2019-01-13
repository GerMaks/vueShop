<template>
	<div>
		<v-container fluid pa-0>
			<v-layout row>
				<v-flex xs12>
					<v-carousel hide-controls hide-delimiters dark height='300'>
					    <v-carousel-item
					      v-for="(product,i) in promoProducts"
					      :key="i"
					      :src="product.imageSrc"
					      height='200px'
					    ></v-carousel-item>
					  </v-carousel>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container>
			<v-layout row wrap>
				<v-flex xs12 sm6 md4
					class="pr-2 pl-2 mb-4"
				   v-for="(product,i) in products"
			      :key="i"
			      height='350'
			   >

					<v-card>	
						<router-link
				   			:aria-label='product.title'
				   			:to="'/product/' + product.id">
				   			<v-img
					          :src="product.imageSrc"
					          aspect-ratio="2.75"
					           height='200'
					        ></v-img>
			   			</router-link>
				        
				        <v-card-title primary-title>
				          <div>
				            <h3 class="card_heading heading">{{ product.title }}</h3>
			                <div class="card_describe">
			                  <p class="subheading">{{ product.description }}...</p>
			                  <p class="subheading card_price"><span class="title">Price: </span>${{ product.price }}</p>
			                </div>
				          </div>
				        </v-card-title>

				        <v-card-actions>
				        	<v-spacer></v-spacer>
				          <v-btn dark color="light-blue darken-3" 
							:to="'/product/' + product.id"
				          	>More</v-btn>

			          	  <v-btn dark color="light-green darken-3" 
							
				          	><v-icon>shopping_cart</v-icon></v-btn>

				        </v-card-actions>
      				</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {

  data () {
    return {
		
    }
  },

  computed: {
  	promoProducts(){
  		return this.$store.getters.promoProducts
  	},

  	products(){
  		return this.$store.getters.products
  	}
  }
}
</script>

<style lang="css" scoped>

	

 .card_heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price {
    color: #fff;
    font-size: 18px;
  }
</style>