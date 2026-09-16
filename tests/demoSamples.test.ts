import { describe, expect, it } from 'vitest';
import { getSampleScene } from '../src/lib/samples';
import { validateVectorNode } from '../src/lib/actions/scenePatch';
import { LIMITS, validateStep } from '../src/lib/actions/schema';
import { assembleSceneElement, buildSceneRegistry } from '../src/lib/studio/sceneAssembly';
import { resolveTargetIds } from '../src/lib/studio/targetResolver';

describe('editable AI Builders demo samples', () => {
	it.each([
		['order-to-door-scene', 29, 23, 10],
		['signal-foundry-scene', 28, 22, 8.5]
	] as const)(
		'ships %s with valid editable vectors and a complete timeline',
		(id, nodes, steps, duration) => {
			const scene = getSampleScene(id)!.build();
			expect(scene.timeline.totalDuration).toBe(duration);
			expect(scene.timeline.steps).toHaveLength(steps);
			expect(steps).toBeLessThanOrEqual(LIMITS.maxSteps);
			const layer = scene.elements[0];
			if (layer.type !== 'vector') throw new Error('Demo must remain vector-editable');
			expect(layer.locked).toBe(false);
			expect(layer.nodes).toHaveLength(nodes);
			expect(new Set(layer.nodes.map((node) => node.id)).size).toBe(nodes);
			for (const node of layer.nodes) expect(validateVectorNode(node)).toEqual(node);
			const rendered = assembleSceneElement(layer)!;
			expect(rendered.element.renderedSvg).not.toMatch(/NaN|undefined|<image/);
			const registry = buildSceneRegistry(scene.elements);
			const ctx = { registry, elementIds: scene.elements.map((element) => element.id) };
			for (const step of scene.timeline.steps) {
				expect(validateStep(step, step.id, ctx)).toEqual(step);
				const targets = resolveTargetIds(step.target, registry);
				expect(targets.length).toBeGreaterThan(0);
				const stagger = typeof step.stagger === 'number' ? step.stagger * (targets.length - 1) : 0;
				expect(Number(step.position) + step.duration + stagger).toBeLessThanOrEqual(duration);
			}
		}
	);

	it('keeps one continuous parcel and synchronized truck parts, then holds the result', () => {
		const scene = getSampleScene('order-to-door-scene')!.build();
		const layer = scene.elements[0];
		if (layer.type !== 'vector') throw new Error('Expected vector layer');
		expect(layer.nodes.filter((node) => node.group === 'od-package')).toHaveLength(1);
		for (const [id, x] of [
			['od-wheel-rear', 709],
			['od-rear-spokes', 709],
			['od-wheel-front', 850],
			['od-front-spokes', 850]
		] as const) {
			expect(layer.nodes.find((node) => node.id === id)?.pivot).toEqual({ x, y: 439 });
		}
		const steps = scene.timeline.steps;
		for (const group of ['od-truck-body', 'od-wheels', 'od-wheel-spokes']) {
			expect(steps.find((step) => step.target.value === group)).toMatchObject({
				position: 4.8,
				duration: 2.2,
				ease: 'power2.inOut',
				props: { x: 155 }
			});
		}
		const journey = steps.filter(
			(step) => step.target.value === 'od-package' && step.tweenType === 'to'
		);
		expect(journey.map((step) => step.props.x)).toEqual([190, 345, 464, 616]);
		const arrival = journey.at(-1)!;
		const reveal = steps.find(
			(step) => step.target.value === 'od-delivered' && step.tweenType === 'fromTo'
		)!;
		expect(Number(reveal.position)).toBeGreaterThan(Number(arrival.position) + arrival.duration);
		expect(
			steps.find((step) => step.label === 'Hold the delivered result for one second')
		).toMatchObject({ position: 9, duration: 1 });
	});

	it.each(['order-to-door-scene', 'signal-foundry-scene'])(
		'builds independent copies of %s',
		(id) => {
			const sample = getSampleScene(id)!;
			const first = sample.build();
			const second = sample.build();
			first.elements[0].position.x = -999;
			first.timeline.steps[0].props.opacity = 0.123;
			expect(second.elements[0].position.x).toBe(640);
			expect(second.timeline.steps[0].props.opacity).toBe(0);
			expect(sample.build().elements).toEqual(second.elements);
		}
	);
});
