import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'

import Product from '@/components/product/Product'
import NewProduct from '@/components/product/NewProduct'
import ProductList from '@/components/product/ProductList'

import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

import Checkout from '@/components/user/Checkout'



Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '',
			name: 'home',
			component: Home,
		},
		{
			path: '/product/:id',
			props: true,
			name: 'product',
			component: Product,
		},
		{
			path: '/new',
			name: 'new',
			component: NewProduct,
		},
		{
			path: '/list',
			name: 'list',
			component: ProductList,
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: Checkout,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
	],
	mode: 'history'
})