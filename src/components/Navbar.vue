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
	        </v-list>
		</v-navigation-drawer>
	
		<v-toolbar app>
			<v-toolbar-side-icon 
				class="hidden-md-and-up" 
				@click='sideNav = !sideNav'></v-toolbar-side-icon>
		    <v-toolbar-title>TSL</v-toolbar-title>
		    <v-spacer></v-spacer>
		    <v-toolbar-items class="hidden-sm-and-down">
		      <v-btn flat v-for="(link, index) in links" 
		      			  :key='index' 
		      			  :to='link.url'>
		      	{{link.title}}
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
	      links: [
	      	{title: 'Login', icon: 'account_box', url: '/login'},
	      	{title: 'Register', icon: 'face', url: '/register'},
	      	{title: 'Cart', icon: 'shopping_cart', url: '/checkout'},
	      	{title: 'New Product', icon: 'add', url: '/new'},
	      	{title: 'My Product', icon: 'list', url: '/list'},
	      ]
	    }
	}
}
</script>