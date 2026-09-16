import type { Scene } from '$lib/types';

// Authored through Glyph's scene tools for the AI Builders demo.
// Keep the vector primitives and semantic timeline editable; never flatten to video.
const template: Scene = {
	id: 'order-to-door-scene',
	name: 'Order to Door',
	settings: {
		width: 1280,
		height: 720,
		backgroundColor: '#091522',
		fps: 60
	},
	elements: [
		{
			id: 'order-to-door',
			name: 'Order to Door — editable delivery explainer',
			type: 'vector',
			width: 1280,
			height: 720,
			position: {
				x: 640,
				y: 360
			},
			scale: 1,
			rotation: 0,
			opacity: 1,
			order: 0,
			visible: true,
			locked: false,
			nodes: [
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-title',
					name: 'od-title',
					label: 'od-title',
					primitive: 'text',
					group: 'od-titles',
					role: 'secondary',
					text: 'ORDER TO DOOR',
					x: 64,
					y: 90,
					fontSize: 42,
					fontWeight: 600,
					fill: '#e5f1fb',
					textAnchor: 'start'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-subtitle',
					name: 'od-subtitle',
					label: 'od-subtitle',
					primitive: 'text',
					group: 'od-titles',
					role: 'secondary',
					text: 'A SMALL PACKAGE. A COMPLETE JOURNEY.',
					x: 66,
					y: 127,
					fontSize: 16,
					fontWeight: 600,
					fill: '#8ca5bb',
					textAnchor: 'start'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 3,
					id: 'od-route',
					name: 'od-route',
					label: 'od-route',
					primitive: 'path',
					group: 'od-route',
					role: 'secondary',
					d: 'M 170 480 H 1125 M 320 472 L 330 480 L 320 488 M 608 472 L 618 480 L 608 488 M 955 472 L 965 480 L 955 488',
					fill: 'none'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-stage-0',
					name: 'od-stage-0',
					label: 'od-stage-0',
					primitive: 'text',
					group: 'od-labels',
					role: 'secondary',
					text: '01 / ORDER RECEIVED',
					x: 170,
					y: 222,
					fontSize: 18,
					fontWeight: 600,
					fill: '#53d8ef',
					textAnchor: 'middle'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-stage-1',
					name: 'od-stage-1',
					label: 'od-stage-1',
					primitive: 'text',
					group: 'od-labels',
					role: 'secondary',
					text: '02 / PACK & PREPARE',
					x: 445,
					y: 222,
					fontSize: 18,
					fontWeight: 600,
					fill: '#53d8ef',
					textAnchor: 'middle'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-stage-2',
					name: 'od-stage-2',
					label: 'od-stage-2',
					primitive: 'text',
					group: 'od-labels',
					role: 'secondary',
					text: '03 / ON THE WAY',
					x: 785,
					y: 222,
					fontSize: 18,
					fontWeight: 600,
					fill: '#53d8ef',
					textAnchor: 'middle'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-stage-3',
					name: 'od-stage-3',
					label: 'od-stage-3',
					primitive: 'text',
					group: 'od-labels',
					role: 'secondary',
					text: '04 / AT YOUR DOOR',
					x: 1120,
					y: 222,
					fontSize: 18,
					fontWeight: 600,
					fill: '#53d8ef',
					textAnchor: 'middle'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 2.5,
					id: 'od-receipt',
					name: 'od-receipt',
					label: 'od-receipt',
					primitive: 'path',
					group: 'od-receipt',
					role: 'secondary',
					d: 'M 108 275 H 232 V 422 L 220 414 L 207 422 L 195 414 L 182 422 L 170 414 L 157 422 L 145 414 L 132 422 L 120 414 L 108 422 Z',
					fill: '#11283b'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#8ca5bb',
					strokeWidth: 3,
					id: 'od-receipt-lines',
					name: 'od-receipt-lines',
					label: 'od-receipt-lines',
					primitive: 'path',
					group: 'od-receipt',
					role: 'secondary',
					d: 'M 127 302 H 211 M 127 326 H 187 M 127 350 H 203',
					fill: 'none'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#72e3b3',
					strokeWidth: 5,
					id: 'od-receipt-check',
					name: 'od-receipt-check',
					label: 'od-receipt-check',
					primitive: 'path',
					group: 'od-receipt',
					role: 'secondary',
					d: 'M 146 385 L 162 399 L 193 368',
					fill: 'none'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#8ca5bb',
					strokeWidth: 3,
					id: 'od-packing-table',
					name: 'od-packing-table',
					label: 'od-packing-table',
					primitive: 'path',
					group: 'od-packing-station',
					role: 'secondary',
					d: 'M 345 450 H 565 M 363 450 V 467 M 548 450 V 467',
					fill: 'none'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#f4b65c',
					strokeWidth: 2.5,
					id: 'od-box-body',
					name: 'od-box-body',
					label: 'od-box-body',
					primitive: 'path',
					group: 'od-box',
					role: 'secondary',
					d: 'M 405 375 L 445 353 L 493 375 V 426 L 445 447 L 405 426 Z M 405 375 L 445 397 L 493 375 M 445 397 V 447',
					fill: '#513c27'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#f4b65c',
					strokeWidth: 2.5,
					id: 'od-box-flaps',
					name: 'od-box-flaps',
					label: 'od-box-flaps',
					primitive: 'path',
					group: 'od-box',
					role: 'secondary',
					d: 'M 405 375 L 382 350 L 424 329 L 445 353 L 466 329 L 514 350 L 493 375 L 445 353 Z',
					fill: '#332b23'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 2,
					ry: 0,
					id: 'od-item-book',
					name: 'od-item-book',
					label: 'od-item-book',
					primitive: 'rect',
					group: 'od-items',
					role: 'secondary',
					x: 364,
					y: 276,
					width: 32,
					height: 46,
					rx: 4,
					fill: '#214a65'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#b9a1ef',
					strokeWidth: 2,
					id: 'od-item-bottle',
					name: 'od-item-bottle',
					label: 'od-item-bottle',
					primitive: 'path',
					group: 'od-items',
					role: 'secondary',
					d: 'M 429 270 H 443 V 282 L 450 291 V 319 H 422 V 291 L 429 282 Z',
					fill: '#3e345a'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#72e3b3',
					strokeWidth: 2,
					id: 'od-item-ball',
					name: 'od-item-ball',
					label: 'od-item-ball',
					primitive: 'circle',
					group: 'od-items',
					role: 'secondary',
					cx: 493,
					cy: 301,
					radius: 18,
					fill: '#224c40'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#f4b65c',
					strokeWidth: 2.5,
					id: 'od-package',
					name: 'od-package',
					label: 'od-package',
					primitive: 'path',
					group: 'od-package',
					role: 'secondary',
					d: 'M 529 382 L 553 369 L 579 382 V 412 L 553 426 L 529 412 Z M 529 382 L 553 397 L 579 382 M 553 397 V 426 M 542 376 L 567 390',
					fill: '#6c4824'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 3,
					ry: 0,
					id: 'od-truck-cargo',
					name: 'od-truck-cargo',
					label: 'od-truck-cargo',
					primitive: 'rect',
					group: 'od-truck-body',
					role: 'secondary',
					x: 679,
					y: 337,
					width: 130,
					height: 91,
					rx: 8,
					fill: '#133749'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 3,
					id: 'od-truck-cab',
					name: 'od-truck-cab',
					label: 'od-truck-cab',
					primitive: 'path',
					group: 'od-truck-body',
					role: 'secondary',
					d: 'M 809 359 H 848 L 880 392 V 431 H 809 Z',
					fill: '#1c4a60'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#8edbef',
					strokeWidth: 1,
					id: 'od-truck-window',
					name: 'od-truck-window',
					label: 'od-truck-window',
					primitive: 'path',
					group: 'od-truck-body',
					role: 'secondary',
					d: 'M 822 370 H 843 L 864 392 H 822 Z',
					fill: '#8edbef'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#8ca5bb',
					strokeWidth: 4,
					id: 'od-wheel-rear',
					name: 'od-wheel-rear',
					label: 'od-wheel-rear',
					primitive: 'circle',
					group: 'od-wheels',
					role: 'secondary',
					cx: 709,
					cy: 439,
					radius: 19,
					fill: '#091522',
					pivot: {
						x: 709,
						y: 439
					}
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#8ca5bb',
					strokeWidth: 4,
					id: 'od-wheel-front',
					name: 'od-wheel-front',
					label: 'od-wheel-front',
					primitive: 'circle',
					group: 'od-wheels',
					role: 'secondary',
					cx: 850,
					cy: 439,
					radius: 19,
					fill: '#091522',
					pivot: {
						x: 850,
						y: 439
					}
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 2,
					id: 'od-rear-spokes',
					name: 'od-rear-spokes',
					label: 'od-rear-spokes',
					primitive: 'path',
					group: 'od-wheel-spokes',
					role: 'secondary',
					d: 'M 709 426 V 452 M 696 439 H 722',
					fill: 'none',
					pivot: {
						x: 709,
						y: 439
					}
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#53d8ef',
					strokeWidth: 2,
					id: 'od-front-spokes',
					name: 'od-front-spokes',
					label: 'od-front-spokes',
					primitive: 'path',
					group: 'od-wheel-spokes',
					role: 'secondary',
					d: 'M 850 426 V 452 M 837 439 H 863',
					fill: 'none',
					pivot: {
						x: 850,
						y: 439
					}
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#72e3b3',
					strokeWidth: 3,
					id: 'od-house',
					name: 'od-house',
					label: 'od-house',
					primitive: 'path',
					group: 'od-destination',
					role: 'secondary',
					d: 'M 1049 337 L 1118 270 L 1187 337 V 439 H 1049 Z M 1038 340 L 1118 260 L 1198 340',
					fill: '#112e2d'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#72e3b3',
					strokeWidth: 2,
					id: 'od-door',
					name: 'od-door',
					label: 'od-door',
					primitive: 'path',
					group: 'od-door',
					role: 'secondary',
					d: 'M 1095 350 H 1140 V 439 H 1095 Z M 1127 390 H 1131',
					fill: '#0b1d2c'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: '#72e3b3',
					strokeWidth: 4,
					id: 'od-doorstep',
					name: 'od-doorstep',
					label: 'od-doorstep',
					primitive: 'path',
					group: 'od-doorstep',
					role: 'secondary',
					d: 'M 1038 442 H 1198 M 1048 453 H 1188',
					fill: 'none'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-delivered',
					name: 'od-delivered',
					label: 'od-delivered',
					primitive: 'text',
					group: 'od-status',
					role: 'secondary',
					text: 'DELIVERED',
					x: 1118,
					y: 524,
					fontSize: 23,
					fontWeight: 600,
					fill: '#72e3b3',
					textAnchor: 'middle'
				},
				{
					position: {
						x: 0,
						y: 0
					},
					scale: 1,
					rotation: 0,
					opacity: 1,
					stroke: 'none',
					strokeWidth: 0,
					id: 'od-footer',
					name: 'od-footer',
					label: 'od-footer',
					primitive: 'text',
					group: 'od-footer',
					role: 'secondary',
					text: 'ONE EDITABLE SCENE  /  FOUR CONNECTED MOMENTS',
					x: 64,
					y: 650,
					fontSize: 15,
					fontWeight: 600,
					fill: '#8ca5bb',
					textAnchor: 'start'
				}
			]
		}
	],
	timeline: {
		totalDuration: 10,
		defaults: {
			ease: 'power2.out',
			duration: 0.5
		},
		steps: [
			{
				label: 'Receipt enters',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-receipt'
				},
				tweenType: 'from',
				props: {
					opacity: 0,
					y: 16
				},
				position: 0,
				duration: 0.65,
				ease: 'power2.out',
				stagger: 0,
				id: 'receipt-enters'
			},
			{
				label: 'Three items appear',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-items'
				},
				tweenType: 'from',
				props: {
					opacity: 0,
					x: 0,
					y: -12
				},
				position: 0.65,
				duration: 0.35,
				ease: 'power2.out',
				stagger: 0.12,
				id: 'three-items-appear'
			},
			{
				label: 'Delivery route draws',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-route'
				},
				tweenType: 'drawSVG',
				props: {
					drawSVG: '0%'
				},
				position: 2.6,
				duration: 1.1,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'delivery-route-draws'
			},
			{
				label: 'Packed parcel settles at packing station',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'fromTo',
				props: {
					opacity: 1,
					x: -109,
					y: 0,
					scale: 1,
					transformOrigin: '50% 50%',
					fromProps: {
						opacity: 0,
						x: -109,
						y: -12,
						scale: 0.92
					}
				},
				position: 2.45,
				duration: 0.55,
				ease: 'back.out(1.08)',
				stagger: 0,
				id: 'packed-parcel-settles-at-packing-station'
			},
			{
				label: 'Book moves into box',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-item-book'
				},
				tweenType: 'to',
				props: {
					x: 65,
					y: 96
				},
				position: 1.1,
				duration: 0.5,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'book-moves-into-box'
			},
			{
				label: 'Bottle moves into box',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-item-bottle'
				},
				tweenType: 'to',
				props: {
					x: 9,
					y: 103
				},
				position: 1.3,
				duration: 0.5,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'bottle-moves-into-box'
			},
			{
				label: 'Ball moves into box',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-item-ball'
				},
				tweenType: 'to',
				props: {
					x: -48,
					y: 98
				},
				position: 1.5,
				duration: 0.5,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'ball-moves-into-box'
			},
			{
				label: 'Initialize the single parcel at the packing box',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'set',
				props: {
					x: -109,
					y: 0,
					opacity: 0
				},
				position: 0,
				duration: 0,
				ease: 'none',
				stagger: 0,
				id: 'initialize-the-single-parcel-at-the-packing-box'
			},
			{
				label: 'Parcel transfers continuously into truck cargo',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'to',
				props: {
					x: 190,
					y: -15
				},
				position: 3.2,
				duration: 1.2,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'parcel-transfers-continuously-into-truck-cargo'
			},
			{
				label: 'Parcel rides with truck',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'to',
				props: {
					x: 345,
					y: -15
				},
				position: 4.8,
				duration: 2.2,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'parcel-rides-with-truck'
			},
			{
				label: 'Open box gives way to sealed parcel',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-box'
				},
				tweenType: 'to',
				props: {
					opacity: 0,
					rotation: 0,
					scale: 1,
					svgOrigin: '445 400'
				},
				position: 2.35,
				duration: 0.25,
				ease: 'power2.out',
				stagger: 0,
				id: 'open-box-gives-way-to-sealed-parcel'
			},
			{
				label: 'Receipt confirmation draws',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-receipt-check'
				},
				tweenType: 'drawSVG',
				props: {
					drawSVG: '0%'
				},
				position: 0.4,
				duration: 0.5,
				ease: 'power2.out',
				stagger: 0,
				id: 'receipt-confirmation-draws'
			},
			{
				label: 'Packed items disappear inside the box',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-items'
				},
				tweenType: 'to',
				props: {
					opacity: 0
				},
				position: 1.8,
				duration: 0.2,
				ease: 'power2.out',
				stagger: 0.2,
				id: 'packed-items-disappear-inside-the-box'
			},
			{
				label: 'Delivered status appears only after landing',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-delivered'
				},
				tweenType: 'fromTo',
				props: {
					opacity: 1,
					y: 0,
					fill: '#72e3b3',
					rotation: 0,
					svgOrigin: '1118 524',
					fromProps: {
						opacity: 0,
						y: 10
					}
				},
				position: 8.55,
				duration: 0.45,
				ease: 'power2.out',
				stagger: 0,
				id: 'delivered-status-appears-only-after-landing'
			},
			{
				label: 'Wheels travel and rotate around their own centres',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-wheels'
				},
				tweenType: 'to',
				props: {
					x: 155,
					rotation: 467.4,
					scale: 1,
					stroke: '#8ca5bb',
					transformOrigin: '50% 50%'
				},
				position: 4.8,
				duration: 2.2,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'wheels-travel-and-rotate-around-their-own-centres'
			},
			{
				label: 'Truck drives toward doorstep',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-truck-body'
				},
				tweenType: 'to',
				props: {
					x: 155,
					scale: 1
				},
				position: 4.8,
				duration: 2.2,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'truck-drives-toward-doorstep'
			},
			{
				label: 'Receipt detail draws',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-receipt-lines'
				},
				tweenType: 'drawSVG',
				props: {
					drawSVG: '0%'
				},
				position: 0.15,
				duration: 0.6,
				ease: 'power2.out',
				stagger: 0,
				id: 'receipt-detail-draws'
			},
			{
				label: 'Closing caption appears',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-footer'
				},
				tweenType: 'from',
				props: {
					opacity: 0
				},
				position: 8.55,
				duration: 0.45,
				ease: 'power2.out',
				stagger: 0,
				id: 'closing-caption-appears'
			},
			{
				label: 'Wheel spokes roll with the truck',
				target: {
					scopeToId: 'order-to-door',
					type: 'group',
					value: 'od-wheel-spokes'
				},
				tweenType: 'to',
				props: {
					x: 155,
					rotation: 467.4,
					transformOrigin: '50% 50%'
				},
				position: 4.8,
				duration: 2.2,
				ease: 'power2.inOut',
				stagger: 0,
				id: 'wheel-spokes-roll-with-the-truck'
			},
			{
				label: 'Parcel lifts out toward the doorstep',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'to',
				props: {
					x: 464,
					y: -45,
					opacity: 1,
					scale: 1,
					transformOrigin: '50% 50%'
				},
				position: 7.1,
				duration: 0.55,
				ease: 'power2.out',
				stagger: 0,
				id: 'parcel-lifts-out-toward-the-doorstep'
			},
			{
				label: 'Parcel lands softly at the door',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-package'
				},
				tweenType: 'to',
				props: {
					x: 616,
					y: 25,
					opacity: 1
				},
				position: 7.65,
				duration: 0.75,
				ease: 'back.out(1.08)',
				stagger: 0,
				id: 'parcel-lands-softly-at-the-door'
			},
			{
				label: 'Hold the delivered result for one second',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-delivered'
				},
				tweenType: 'to',
				props: {
					opacity: 1
				},
				position: 9,
				duration: 1,
				ease: 'none',
				stagger: 0,
				id: 'hold-the-delivered-result-for-one-second'
			},
			{
				id: 'keep-parcel-readable-beside-the-door',
				label: 'Keep parcel readable beside the door',
				target: {
					scopeToId: 'order-to-door',
					type: 'id',
					value: 'od-house'
				},
				tweenType: 'to',
				props: {
					fill: 'rgba(17,46,45,0)'
				},
				duration: 0.3,
				position: 7.1,
				ease: 'power2.out'
			}
		]
	},
	duration: 10,
	createdAt: '2026-09-16T00:43:49.000Z',
	updatedAt: '2026-09-16T00:43:49.000Z'
};

export function buildOrderToDoor(): Scene {
	const scene = structuredClone(template);
	scene.createdAt = scene.updatedAt = new Date().toISOString();
	return scene;
}
