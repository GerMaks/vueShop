<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text-secondary mb-3">My Product</h1>
				
				<v-card class='elevation-4 mb-3'
					v-for="(product, i) in MyProducts"
					:key='i'
					>
					<v-layout row >
						<v-flex xs4>
						<v-img
				          class="white--text"
				          height="200px"
				          :src="product.imageSrc"
				        >
				    	</v-img>
						</v-flex>
						<v-flex xs8>
							<v-card-text>
								<h2 class="mb-1">{{product.title}}</h2>
								<p>
									{{product.description}}
								</p>
							</v-card-text>	
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn class="info"
									:to="'product/'+ product.id"
								>Open</v-btn>
							</v-card-actions>
						</v-flex>
					</v-layout>
					
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {

  data () {
    return {
		
    }
  },
  computed: {
  	MyProducts(){
  		return this.$store.getters.MyProducts
  	}
  }

}
</script>

<style lang="css" scoped>
</style>