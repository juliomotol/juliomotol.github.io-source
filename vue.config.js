module.exports = {
	pages: {
		index: {
			entry: 'src/pages/index/main.js',
			// output as dist/index.html
			// filename: 'index.html',
			title: 'Julio Motol | Full Stack Developer',
			chunks: [
				'chunk-vendors',
				'chunk-common',
				'index',
				'about',
				'works',
				'contact'
			],
			meta: {
				description: 'An aspiring full-stack developer from the Philippines with the constant passion (addiction) for creating things.'
			}
		},
		admin: {
			entry: 'src/pages/admin/main.js',
			// output as dist/index.html
			// filename: 'index.html',
			title: 'Julio Motol | Admin',
			chunks: [
				'chunk-vendors',
				'chunk-common',
				'admin'
			],
		},
	},
	pwa: {
		name: 'Julio Motol - Full Stack Developer',
		themeColor: '#FFFFFF',
		msTileColor: '#FFFFFF',
		manifestOptions: { short_name: 'Julio Motol' }
	}
};
