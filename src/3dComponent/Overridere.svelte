<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@1.0.1 .\static\GLTF\OverRide\overridere.gltf
-->

<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf, useGltfAnimations } from '@threlte/extras';

	export const ref = new Group();

	const gltf = useGltf('/GLTF/OverRide/overridere.gltf');
	export const { actions, mixer } = useGltfAnimations(gltf, ref);

	const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Group name="Scene">
			<T.Group name="Armature" position={[0, 0.52, 0]}>
				<T is={gltf.nodes.Bone} />
				<T.SkinnedMesh
					name="Overrider"
					geometry={gltf.nodes.Overrider.geometry}
					material={gltf.materials.OverRider_Mat_4k}
					skeleton={gltf.nodes.Overrider.skeleton}
				/>
			</T.Group>
		</T.Group>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
