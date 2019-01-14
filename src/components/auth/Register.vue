<template>
	 <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-5">
              <v-toolbar dark>
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                	ref="form"
                	v-model="valid"
    				lazy-validation>
                  
                  <v-text-field 
                  	prepend-icon="person"
                  	name="Email" 
                  	label="Email" 
                  	type="email" 
                  	:rules="emailRules"
                  	v-model='email'>
                  		
                  	</v-text-field>
                  
                  <v-text-field 
                  	prepend-icon="lock" 
                  	name="password" 
                  	label="Password" 
                  	id="newPassword" 
                  	type="password" 
                  	:rules="passwordRules"
                  	v-model='password'>
                  		
                  	</v-text-field>

                  	<v-text-field 
                  	prepend-icon="repeat" 
                  	name="confirm-password" 
                  	label="Confirm password" 
                  	id="password" 
                  	type="password" 
                  	:rules="confirmPasswordRules"
                  	v-model='confirmPassword'>
                  		
                  	</v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
				    @click="validate()"
						:loading="loading"
						:disabled="!valid || loading"
                >Create Account</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {

  data () {
    return {
    	email: '',
    	password: '',
    	confirmPassword: '',
    	valid: false,
    	emailRules: [
    		v => !!v || 'E-mail is required',
        	v => /.+@.+/.test(v) || 'E-mail must be valid'
    	],
    	passwordRules: [
    		v => !!v || 'Password is required',
        	v => (v && v.length >= 6) || 'Password must be less than 6 characters'
    	],
    	confirmPasswordRules: [
    		v => !!v || 'Password is required',
        	v => v === this.password || 'Password must be should math'
    	],
    	

    }
  },
  methods: {
  	validate () {
        if (this.$refs.form.validate()) {
          const user = {
          	email: this.email,
          	password: this.password,
          }
					this.$store.dispatch('registerUser', user)
					.then(() => {
						this.$router.push('/')
					})
					.catch(() => {})
        }
      },
	},
	computed: {
		loading () {
			return this.$store.getters.loading
		}
	}
}
</script>

<style lang="css" scoped>
</style>