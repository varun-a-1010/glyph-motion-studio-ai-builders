import type { Scene } from '$lib/types';

// Authored through Glyph's scene tools for the AI Builders demo.
// Keep the vector primitives and semantic timeline editable; never flatten to video.
const template: Scene = {
	id: 'signal-foundry-scene',
	name: 'Signal Foundry',
	settings: {
		width: 1280,
		height: 720,
		backgroundColor: '#07101d',
		fps: 60
	},
	elements: [
		{
			height: 720,
			id: 'playground',
			locked: false,
			name: 'Agent vector layer',
			nodes: [
				{
					fill: '#e2e8f0',
					fontSize: 38,
					fontWeight: 700,
					group: 'titles',
					id: 'title',
					label: 'title',
					name: 'title',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'text',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0,
					text: 'SIGNAL FOUNDRY',
					textAnchor: 'start',
					x: 90,
					y: 100
				},
				{
					fill: '#94a3b8',
					fontSize: 15,
					fontWeight: 600,
					group: 'titles',
					id: 'subtitle',
					label: 'subtitle',
					name: 'subtitle',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'text',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0,
					text: 'SIX INPUTS. ONE CLEAR DECISION.',
					textAnchor: 'start',
					x: 92,
					y: 136
				},
				{
					d: 'M 255 235 C 390 235 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire0',
					label: 'wire0',
					name: 'wire0',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 235,
					fill: '#38bdf8',
					group: 'packets',
					id: 'packet0',
					label: 'packet0',
					name: 'packet0',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input0',
					label: 'input0',
					name: 'input0',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 222
				},
				{
					d: 'M 255 284 C 390 284 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire1',
					label: 'wire1',
					name: 'wire1',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 284,
					fill: '#a78bfa',
					group: 'packets',
					id: 'packet1',
					label: 'packet1',
					name: 'packet1',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input1',
					label: 'input1',
					name: 'input1',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 271
				},
				{
					d: 'M 255 333 C 390 333 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire2',
					label: 'wire2',
					name: 'wire2',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 333,
					fill: '#38bdf8',
					group: 'packets',
					id: 'packet2',
					label: 'packet2',
					name: 'packet2',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input2',
					label: 'input2',
					name: 'input2',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 320
				},
				{
					d: 'M 255 382 C 390 382 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire3',
					label: 'wire3',
					name: 'wire3',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 382,
					fill: '#a78bfa',
					group: 'packets',
					id: 'packet3',
					label: 'packet3',
					name: 'packet3',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input3',
					label: 'input3',
					name: 'input3',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 369
				},
				{
					d: 'M 255 431 C 390 431 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire4',
					label: 'wire4',
					name: 'wire4',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 431,
					fill: '#38bdf8',
					group: 'packets',
					id: 'packet4',
					label: 'packet4',
					name: 'packet4',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input4',
					label: 'input4',
					name: 'input4',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 418
				},
				{
					d: 'M 255 480 C 390 480 410 360 600 360',
					fill: 'none',
					group: 'wires',
					id: 'wire5',
					label: 'wire5',
					name: 'wire5',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'path',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#24465a',
					strokeWidth: 2
				},
				{
					cx: 255,
					cy: 480,
					fill: '#a78bfa',
					group: 'packets',
					id: 'packet5',
					label: 'packet5',
					name: 'packet5',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 6,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#112b3d',
					group: 'inputs',
					height: 26,
					id: 'input5',
					label: 'input5',
					name: 'input5',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 6,
					ry: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 1,
					width: 75,
					x: 160,
					y: 467
				},
				{
					cx: 640,
					cy: 360,
					fill: 'none',
					group: 'rings',
					id: 'ring1',
					label: 'ring1',
					name: 'ring1',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 86,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 2
				},
				{
					cx: 640,
					cy: 360,
					fill: 'none',
					group: 'rings',
					id: 'ring2',
					label: 'ring2',
					name: 'ring2',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 65,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#a78bfa',
					strokeWidth: 3
				},
				{
					fill: '#17394c',
					group: 'core',
					id: 'core',
					label: 'core',
					name: 'core',
					opacity: 1,
					pivot: {
						x: 640,
						y: 360
					},
					points: [
						{
							x: 640,
							y: 321
						},
						{
							x: 674,
							y: 340
						},
						{
							x: 674,
							y: 380
						},
						{
							x: 640,
							y: 399
						},
						{
							x: 606,
							y: 380
						},
						{
							x: 606,
							y: 340
						}
					],
					position: {
						x: 0,
						y: 0
					},
					primitive: 'polygon',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#67e8f9',
					strokeWidth: 3
				},
				{
					fill: 'none',
					group: 'output',
					id: 'outwire',
					label: 'outwire',
					name: 'outwire',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'line',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: '#38bdf8',
					strokeWidth: 3,
					x1: 726,
					x2: 1000,
					y1: 360,
					y2: 360
				},
				{
					cx: 735,
					cy: 360,
					fill: '#6ee7b7',
					group: 'outpacket',
					id: 'outpacket',
					label: 'outpacket',
					name: 'outpacket',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'circle',
					radius: 8,
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0
				},
				{
					fill: '#102f2e',
					group: 'panel',
					height: 100,
					id: 'panel',
					label: 'panel',
					name: 'panel',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'rect',
					role: 'secondary',
					rotation: 0,
					rx: 18,
					ry: 0,
					scale: 1,
					stroke: '#6ee7b7',
					strokeWidth: 2,
					width: 220,
					x: 960,
					y: 310
				},
				{
					fill: '#6ee7b7',
					fontSize: 26,
					fontWeight: 700,
					group: 'result',
					id: 'result',
					label: 'result',
					name: 'result',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'text',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0,
					text: 'VERIFIED',
					textAnchor: 'middle',
					x: 1070,
					y: 366
				},
				{
					fill: '#94a3b8',
					fontSize: 17,
					fontWeight: 600,
					group: 'footer',
					id: 'footer',
					label: 'footer',
					name: 'footer',
					opacity: 1,
					position: {
						x: 0,
						y: 0
					},
					primitive: 'text',
					role: 'secondary',
					rotation: 0,
					scale: 1,
					stroke: 'none',
					strokeWidth: 0,
					text: 'INGEST  /  RECONCILE  /  VERIFY  /  DELIVER',
					textAnchor: 'middle',
					x: 640,
					y: 585
				}
			],
			width: 1280,
			type: 'vector',
			position: {
				x: 640,
				y: 360
			},
			scale: 1,
			rotation: 0,
			opacity: 1,
			order: 0,
			visible: true
		}
	],
	timeline: {
		totalDuration: 8.5,
		defaults: {
			duration: 0.5,
			ease: 'power2.out'
		},
		steps: [
			{
				duration: 0.7,
				ease: 'power2.out',
				id: 'title-reveal',
				label: 'title reveal',
				position: 0,
				props: {
					opacity: 0,
					y: 18
				},
				stagger: 0.15,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'titles'
				},
				tweenType: 'from'
			},
			{
				duration: 0.6,
				ease: 'power2.out',
				id: 'inputs-arrive',
				label: 'inputs arrive',
				position: 0.35,
				props: {
					opacity: 0,
					x: -55
				},
				stagger: 0.12,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'inputs'
				},
				tweenType: 'from'
			},
			{
				duration: 1.4,
				ease: 'power2.out',
				id: 'wires-draw',
				label: 'wires draw',
				position: 0.8,
				props: {
					drawSVG: '0%'
				},
				stagger: 0.1,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'wires'
				},
				tweenType: 'drawSVG'
			},
			{
				duration: 0.3,
				ease: 'power2.out',
				id: 'packets-light',
				label: 'packets light',
				position: 1.6,
				props: {
					opacity: 0,
					scale: 0,
					transformOrigin: '50% 50%'
				},
				stagger: 0.12,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'packets'
				},
				tweenType: 'from'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-0',
				label: 'signal 0',
				position: 2,
				props: {
					x: 385,
					y: 125
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet0'
				},
				tweenType: 'to'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-1',
				label: 'signal 1',
				position: 2.15,
				props: {
					x: 385,
					y: 76
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet1'
				},
				tweenType: 'to'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-2',
				label: 'signal 2',
				position: 2.3,
				props: {
					x: 385,
					y: 27
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet2'
				},
				tweenType: 'to'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-3',
				label: 'signal 3',
				position: 2.45,
				props: {
					x: 385,
					y: -22
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet3'
				},
				tweenType: 'to'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-4',
				label: 'signal 4',
				position: 2.6,
				props: {
					x: 385,
					y: -71
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet4'
				},
				tweenType: 'to'
			},
			{
				duration: 1.5,
				ease: 'power2.inOut',
				id: 'signal-5',
				label: 'signal 5',
				position: 2.75,
				props: {
					x: 385,
					y: -120
				},
				target: {
					scopeToId: 'playground',
					type: 'id',
					value: 'packet5'
				},
				tweenType: 'to'
			},
			{
				duration: 0.8,
				ease: 'power2.out',
				id: 'core-assemble',
				label: 'core assemble',
				position: 2.8,
				props: {
					opacity: 0,
					rotation: -120,
					scale: 0.3,
					svgOrigin: '640 360'
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'core'
				},
				tweenType: 'from'
			},
			{
				duration: 1.1,
				ease: 'power2.out',
				id: 'rings-trace',
				label: 'rings trace',
				position: 3.1,
				props: {
					drawSVG: '0%'
				},
				stagger: 0.2,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'rings'
				},
				tweenType: 'drawSVG'
			},
			{
				duration: 0.3,
				ease: 'power2.out',
				id: 'packets-absorb',
				label: 'packets absorb',
				position: 4.3,
				props: {
					opacity: 0
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'packets'
				},
				tweenType: 'to'
			},
			{
				duration: 1.3,
				ease: 'power2.inOut',
				id: 'core-process',
				label: 'core process',
				position: 4.4,
				props: {
					fill: '#155e75',
					rotation: 180,
					svgOrigin: '640 360'
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'core'
				},
				tweenType: 'to'
			},
			{
				duration: 0.4,
				ease: 'power2.out',
				id: 'rings-charge',
				label: 'rings charge',
				position: 5.3,
				props: {
					scale: 1.13,
					stroke: '#6ee7b7',
					transformOrigin: '50% 50%'
				},
				stagger: 0.12,
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'rings'
				},
				tweenType: 'to'
			},
			{
				duration: 0.5,
				ease: 'power2.out',
				id: 'rings-settle',
				label: 'rings settle',
				position: 5.9,
				props: {
					scale: 1
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'rings'
				},
				tweenType: 'to'
			},
			{
				duration: 0.65,
				ease: 'power2.out',
				id: 'output-draw',
				label: 'output draw',
				position: 5.7,
				props: {
					drawSVG: '0%'
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'output'
				},
				tweenType: 'drawSVG'
			},
			{
				duration: 0.15,
				ease: 'power2.out',
				id: 'output-light',
				label: 'output light',
				position: 5.8,
				props: {
					opacity: 0
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'outpacket'
				},
				tweenType: 'from'
			},
			{
				duration: 0.9,
				ease: 'power2.inOut',
				id: 'output-deliver',
				label: 'output deliver',
				position: 6,
				props: {
					x: 320
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'outpacket'
				},
				tweenType: 'to'
			},
			{
				duration: 0.5,
				ease: 'power2.out',
				id: 'panel-reveal',
				label: 'panel reveal',
				position: 6.65,
				props: {
					opacity: 0,
					scale: 0.85,
					transformOrigin: '50% 50%'
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'panel'
				},
				tweenType: 'from'
			},
			{
				duration: 0.5,
				ease: 'power2.out',
				id: 'verified-reveal',
				label: 'verified reveal',
				position: 7,
				props: {
					opacity: 0,
					y: 12
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'result'
				},
				tweenType: 'from'
			},
			{
				duration: 0.8,
				ease: 'power2.out',
				id: 'footer-reveal',
				label: 'footer reveal',
				position: 7.2,
				props: {
					opacity: 0
				},
				target: {
					scopeToId: 'playground',
					type: 'group',
					value: 'footer'
				},
				tweenType: 'from'
			}
		]
	},
	duration: 8.5,
	createdAt: '2026-09-15T23:12:37.710Z',
	updatedAt: '2026-09-15T23:12:37.710Z'
};

export function buildSignalFoundry(): Scene {
	const scene = structuredClone(template);
	scene.createdAt = scene.updatedAt = new Date().toISOString();
	return scene;
}
