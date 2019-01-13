<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text-secondary mb-3">New Product</h1>
				<v-form
					class='mb-3'
                	ref="form"
                	v-model="valid"
    				lazy-validation>
                  <v-text-field 
                  	name="Title" 
                  	label="Title" 
                  	type="text" 
                  	required
                  	:rules="[v => !!v == 'Title is require']"
                  	v-model='title'>
                  	</v-text-field>
                  
                  <v-text-field 
                  	name="vendor" 
                  	label="Vendor" 
                  	type="text" 
                  	v-model='vendor'>
                  		
                  	</v-text-field>

                  	 <v-text-field 
                  	name="color" 
                  	label="Color product" 
                  	type="text" 
                  	v-model='color'>
                  		
                  	</v-text-field>

                  	 <v-text-field 
                  	name="material" 
                  	label="Material Product" 
                  	type="text" 
                  	v-model='material'>
                  		
                  	</v-text-field>

                  	<v-text-field 
                  	name="price" 
                  	label="Price Product" 
                  	type="text" 
                  	required 
                  	:rules="[v => !!v == 'Price is require']"
                  	v-model='price'>
                  		
                  	</v-text-field>

                  	<v-textarea
                  	name="desc" 
                  	label="Desc Product" 
                  	type="text" 
                  	v-model='desc'>
                  		
                  	</v-textarea>
                </v-form>
			</v-flex>
		</v-layout>

		<v-layout>
			<v-flex sm6 offset-sm3>
				<v-btn class='info'>Upload</v-btn>
			</v-flex>
		</v-layout>

		<v-layout>
			<v-flex sm6 offset-sm3>
				<v-img
		          src="https://archive.li/HWeHk/d1563356f592aa0e9aa8d02e4ac0bc0c09551131.jpg"
		          aspect-ratio="2.75"
		           height='200'
		        ></v-img>
			</v-flex>
		</v-layout>
		
		<v-layout>
			<v-flex sm6 offset-sm3>
				<v-switch
			      v-model="promo"
			      label="Add to promo"
			    ></v-switch>
			</v-flex>
		</v-layout>

		<v-layout>
			<v-flex sm6 offset-sm3>
				<v-btn class='success'
						:disabled="!valid"
						@click='createProduct'
						
				>Greate product</v-btn>
			</v-flex>
		</v-layout>

	</v-container>
</template>

<script>
export default {

  data () {
    return {
		title: '',
  		vendor: '',
  		color: '',
  		material: '',
  		price: '',
  		desc: '',
  		promo: false,
  		valid: false
    }
  },
  methods: {
  	createProduct(){
  		if(this.$refs.form.validate()){
  			const product = {
  				title: this.title,
  				vendor: this.vendor,
		  		color: this.color,
		  		material: this.material,
		  		price: this.price,
		  		desc: this.desc,
		  		promo: this.promo
  			}
  			console.log(product)
  		}
  		
  	}
  }
}
</script>

<style lang="css" scoped>
</style>