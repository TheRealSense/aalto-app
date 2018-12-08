const tools = {
	0: {
		name: 'Ultimaker 3',
		type: '3d-printer',
		img:
			'https://images.unsplash.com/photo-1514063364532-5abd25e38290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'Asennus ja käyttöopas (FI)',
				url:
					'https://ultimaker.com/download/21893/Ultimaker%203%20manual%20%28FI%29.pdf'
			},
			{
				desc: 'Control and display',
				url:
					'https://ultimaker.com/en/resources/23118-control-and-display'
			},
			{
				desc: 'Starting a print',
				url: 'https://ultimaker.com/en/resources/23120-starting-a-print'
			},
			{
				desc: 'Changing materials and print cores',
				url:
					'https://ultimaker.com/en/resources/39659-changing-materials-and-print-cores'
			}
		]
	},
	1: {
		name: 'Ultimaker 2',
		type: '3d-printer',
		img:
			'https://images.unsplash.com/photo-1514063364532-5abd25e38290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'Printing',
				url: 'https://ultimaker.com/en/resources/144-printing'
			},
			{
				desc: 'Changing filament',
				url:
					'https://ultimaker.com/en/resources/16955-changing-filament'
			},
			{
				desc: 'Display and controller',
				url:
					'https://ultimaker.com/en/resources/147-display-and-controller'
			}
		]
	},
	2: {
		name: 'Sibelius',
		type: 'Music software',
		img:
			'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
		info: [
			{
				desc: 'Get Started Fast with Sibelius',
				url:
					'https://www.youtube.com/playlist?list=PLhCR_8aS9jOPvy871jRUESB0EdgOCD8s1'
			},
			{
				desc: 'Sibelius documentation',
				url:
					'http://avid.force.com/pkb/articles/en_US/User_Guide/Sibelius-Documentation-All'
			}
		]
	},
	3: {
		name: 'Photoshop',
		type: 'Adobe CC Software',
		img:
			'https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Get started with Photoshop',
				url: 'https://helpx.adobe.com/photoshop/tutorials.html'
			}
		]
	},
	4: {
		name: 'Illustrator',
		type: 'Adobe CC Software',
		img:
			'https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Get Started',
				url: 'https://helpx.adobe.com/illustrator/get-started.html'
			}
		]
	},
	5: {
		name: 'InDesign',
		type: 'Adobe CC Software',
		img:
			'https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Get Started',
				url: 'https://helpx.adobe.com/indesign/get-started.html'
			}
		]
	},
	6: {
		name: 'Premiere Pro',
		type: 'Adobe CC Software',
		img:
			'https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Get Started',
				url: 'https://helpx.adobe.com/premiere-pro/get-started.html'
			}
		]
	},
	7: {
		name: 'After Effects',
		type: 'Adobe CC Software',
		img:
			'https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Get Started',
				url: 'https://helpx.adobe.com/after-effects/get-started.html'
			}
		]
	},
	8: {
		name: 'EPSON STYLUS PRO 4900',
		type: 'Large format printer',
		img:
			'https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
		info: [
			{
				desc: 'Epson Stylus Pro Help',
				url:
					'https://www.epson.fi/products/printers/large-format-printers/epson-stylus-pro-4900#downloads'
			},
			{
				desc: 'User Manual',
				url:
					'ftp://download.epson-europe.com/pub/download/3740/epson374063eu.pdf'
			}
		]
	},
	9: {
		name: 'Berina 1008',
		type: 'Sewing machine',
		img:
			'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'User Manual (EN)',
				url:
					'https://www.bernina.com/BERNINA/media/Support/Sewing_Quilting_Embroidery/classic/1008/Documents/EN/B1008_EN.pdf'
			}
		]
	},
	10: {
		name: 'Husqvarna Viking Opal 650',
		type: 'Sewing machine',
		img:
			'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'User Manual (EN)',
				url:
					'http://www.husqvarnaviking.com/getattachment/Machines/OPAL-650/Opal-650_670_FI.pdf.aspx'
			}
		]
	},
	11: {
		name: 'Roland CAMM-1 Pro Series GX-300',
		type: 'Vinyl Cutter',
		img:
			'https://images.unsplash.com/photo-1521249664898-864e6c1b6d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'Official website',
				url:
					'https://www.rolanddga.com/support/products/cutting/camm-1-pro-series-gx-300-30-vinyl-cutter'
			}
		]
	},
	12: {
		name: 'Formlabs Form 2',
		type: '3d-printer',
		img:
			'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc:
					'The Ultimate Guide to Stereolithography (SLA) 3D Printing',
				url:
					'https://formlabs.com/blog/ultimate-guide-to-stereolithography-sla-3d-printing/'
			},
			{
				desc: 'Form 2 Support',
				url:
					'https://support.formlabs.com/s/topic/0TO1Y000006mfMbWAI?language=en_US'
			}
		]
	},
	13: {
		name: 'Roland CAMM-1 Pro Series GX-300',
		type: 'Vinyl Cutter',
		img:
			'https://images.unsplash.com/photo-1521249664898-864e6c1b6d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
		info: [
			{
				desc: 'User Manual',
				url:
					'http://support.rolanddga.com/Docs/Documents/departments/Technical%20Services/Manuals%20and%20Guides/BN-20_USE_EN_R2.pdf'
			}
		]
	},
	14: {
		name: 'Epilog Fusion 32',
		type: 'Laser Cutter',
		img:
			'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3823&q=80',
		info: [
			{
				desc: 'Demo of Epilog Mac Driver',
				url:
					'https://www.youtube.com/watch?time_continue=11&v=bTy5Z3teM-U'
			}
		]
	},
	15: {
		name: 'Husqvarna Viking EMERALD™ 118',
		type: 'Sewing machine',
		img:
			'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'User Manual (FI)',
				url:
					'http://www.husqvarnaviking.com/getattachment/Machines/EMERALD-trade;-118/Emerald_116_118_122_manual_FI.pdf.aspx'
			}
		]
	},
	16: {
		name: 'Pfaff hobbylock 2.0',
		type: 'Overlock Machine',
		img:
			'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
		info: [
			{
				desc: 'User Manual',
				url:
					'http://www.pfaff.com/SiteMedia/PFAFF/Products/Machines/overlock-line/hobbylock2_0/Manual/Hobbylock_2_0-manual-EN.pdf'
			},
			{
				desc: 'Threading Guide',
				url:
					'http://www.pfaff.com/mediafiles/Overlock%20line%202009/Threading%20guide/Pfaff/index_en.html'
			}
		]
	}
}

export default tools
