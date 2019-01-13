<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12><h1 class="mb-3">{{product.title}}</h1></v-flex>
			<v-flex xs12 sm6>
				<v-img
		          :src="product.imageSrc"
		          aspect-ratio="2.75"
		          height='400'
		        ></v-img>
			</v-flex>
			<v-flex xs12 sm6>
				<v-card-title primary-title>
		          <div>
		          	<p class="subheading card_price"><span class="title">Price: </span>${{product.price}}</p>
		            <div class="card_describe">
	                  <p class="subheading">{{product.description}}</p>
	                </div>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		        	<v-spacer></v-spacer>
		          <v-btn dark color="light-green darken-3" 
				  	>Buy</v-btn>

		        </v-card-actions>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: ['id'],
	data () {
		return {

		}
	},
	computed: {
		product(){
			const id = this.id
			return this.$store.getters.productById(id)
		}
}
}
</script>

<style lang="css" scoped>
</style>