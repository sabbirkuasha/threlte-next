<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@1.0.1 .\static\GLTF\WovenElastic\WovenElastic.gltf
-->

<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	export const ref = new Group();

	const gltf = useGltf('/GLTF/WovenElastic/WovenElastic.gltf');

	const component = forwardEventHandlers();

	// import { Theatre } from '@threlte/theatre';
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Mesh geometry={gltf.nodes.Plane.geometry} material={gltf.materials.Front_Mat_1k} />
		<T.Mesh geometry={gltf.nodes.Plane_1.geometry} material={gltf.materials.Back_Mat_1k} />
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
