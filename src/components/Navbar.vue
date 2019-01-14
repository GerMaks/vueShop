<template>
	<div>
		<v-navigation-drawer 
			app 
			temporary 
			v-model='sideNav'>
			<v-list>
	          <v-list-tile 
	          	v-for="(link, index) in links" 
	          	:key='index' 
	          	:to='link.url'>

	            <v-list-tile-action>
	              <v-icon>{{ link.icon }}</v-icon>
	            </v-list-tile-action>

	            <v-list-tile-content>
	              <v-list-tile-title v-text="link.title"></v-list-tile-title>
	            </v-list-tile-content>
	           
	          </v-list-tile>

						<v-list-tile v-if="isUserLoggedIn"
	          	@click="onLogout"
							>

	            <v-list-tile-action>
	              <v-icon>exit_to_app</v-icon>
	            </v-list-tile-action>

	            <v-list-tile-content>
	              <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
	            </v-list-tile-content>
	           
	          </v-list-tile>
	        </v-list>
		</v-navigation-drawer>
	
		<v-toolbar app>
			<v-toolbar-side-icon 
				class="hidden-md-and-up" 
				@click='sideNav = !sideNav'></v-toolbar-side-icon>
				<router-link to='/' tag='span'>
					<v-toolbar-title>MDMax</v-toolbar-title>
				</router-link>
		    
		    <v-spacer></v-spacer>
		    <v-toolbar-items class="hidden-sm-and-down">
		      <v-btn flat v-for="(link, index) in links" 
		      			  :key='index' 
		      			  :to='link.url'>
		      	{{link.title}}
		  	  </v-btn>
					 <v-btn flat v-if="isUserLoggedIn"
		      			@click="onLogout"
								>
		      	Logout
		  	  </v-btn>
		    </v-toolbar-items>
		</v-toolbar>
		
		<v-content>
			<router-view></router-view>
		</v-content>
	</div>
</template>

<script>
export default{
	data () {
	    return {
	      sideNav: false,
	    }
	},
	methods: {
		onLogout () {
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	},
	computed: {
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn
		},
		links () {
			if(this.isUserLoggedIn){
				return [
					{title: 'Cart', icon: 'shopping_cart', url: '/checkout'},
	      	{title: 'New Product', icon: 'add', url: '/new'},
	      	{title: 'My Product', icon: 'list', url: '/list'},
				]
			}
			return [
					{title: 'Login', icon: 'account_box', url: '/login'},
	      	{title: 'Register', icon: 'face', url: '/register'},
			]
		}
	}
}
</script>