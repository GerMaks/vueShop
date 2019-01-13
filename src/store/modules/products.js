export default {
	state: {
		products: [
          {
          	id: '1',
			title: 'Амфетамин ',
			vendor: 'Амфетамин ',
			color: 'white',
			material: 'metal/plastic',
			description: 'Амфетамин (сокр. от α-метилфенилэтиламин) — стимулятор центральной нервной системы и анорексигенное средство, производное фенилэтиламина. Механизм действия основан на выбросе нейромедиаторов (дофамина, норадреналина и серотонина).',
			price: 15,
			promo: false,
			imageSrc: 'https://1tulatv.ru/sites/default/files/i_39.jpg',
          },
          {
            id: '2',
			title: 'Кокаин',
			vendor: 'Кокаин',
			color: 'white',
			material: 'plastic',
			description: 'В определённый момент времени не было никого, кто не знал кого-то, кто использовал кокаин (ещё один стимулятор), по крайней мере, один раз, это был дизайнерский наркотик поздних 1970-х и 1980-х годов. Несмотря на то, что кокаин по-прежнему очень распространён сегодня, он возможно менее романтизирован, хотя это не делает его менее затягивающим в омут зависимости. ',
			price: 150,
			promo: true,
			imageSrc: 'https://archive.li/HWeHk/d1563356f592aa0e9aa8d02e4ac0bc0c09551131.jpg',
          },
          {
            id: '3',
			title: 'Метамфетамин',
			vendor: 'Метамфетамин',
			color: 'white',
			material: 'metal/plastic',
			description: 'Метамфетамин похож на кокаин в том плане, в каком наркотик действует на дофамин в мозгу, однако метамфетамин действует на совершенно другом уровне.',
			price: 30,
			promo: true,
			imageSrc: 'https://archive.li/HWeHk/21ab5aeab2e73a3a2bd2cc293017059f3cc46ec7.jpg',
          },
          {
            id: '4',
			title: 'Мефедрон',
			vendor: 'Мефедрон',
			color: 'silver',
			material: 'metal',
			description: 'Мефедро́н, также известный как 4-метилметкатинон (сокращённо 4-MMC, от англ. 4-methylmethcathinone) или N-метилэфедро́н — химическое соединение класса замещённых амфетаминов и катинонов, психостимулятор и эмпатоген.',
			price: 15,
			promo: false,
			imageSrc: 'https://www.focus.pl/media/cache/default_view/uploads/media/default/0001/29/wycienczenie-organizmu-niekiedy-psychozy-a-nawet-smierc_1.jpeg',
          },
          {
			id: '5',
			title: 'MDMA',
			vendor: 'MDMA',
			color: 'color',
			material: 'metal',
			description: 'Метиле́ндио́ксиметамфетами́н, MDMA, МДМА, 3,4-метилендиокси-N-метамфетамин — полусинтетическое психоактивное соединение амфетаминового ряда, относящееся к группе фенилэтиламинов, широко известное под сленговым названием таблетированной формы э́кстази',
			price: 20,
			promo: true,
			imageSrc: 'https://preview.redd.it/xh822n2b2mly.jpg?width=640&crop=smart&auto=webp&s=3aa9a9adbfef573a8530007fe48d25798802ee5c',
		},
		
        ]
	},

	mutations: {

	},

	actions: {

	},

	getters: {
		products(state){
			return state.products
		},

		promoProducts(state){
			return state.products.filter(product => product.promo)
		},

		MyProducts(state){
			return state.products
		},

		productById(state){
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		}

	}
}