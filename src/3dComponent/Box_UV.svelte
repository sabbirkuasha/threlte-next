<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@1.0.0-next.13 ./Box_UV.glb
-->

<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf, useTexture } from '@threlte/extras';

	export const ref = new Group();

	const gltf = useGltf('/Box_UV.glb');

	const component = forwardEventHandlers();

	// --------------------------------------------------------Custom code
	const cloth_baseColor = useTexture('/export/Untitled material_BaseColor.jpg');
	// cloth_baseColor.wrapS = cloth_baseColor.wrapT = THREE.RepeatWrapping;
	// cloth_baseColor.repeat.set(4, 4); // repeat 4 times horizontally and vertically
	const cloth_normal = useTexture('/export/Untitled material_Normal.jpg');
	const cloth_roughnessMap = useTexture('/export/Untitled material_Roughness.jpg');
	const cloth_opacity = useTexture('/export/Untitled material_Opacity.jpg');
	const cloth_height = useTexture('/export/Untitled material_Height.jpg');

	$: $cloth_height ? console.log($cloth_height) : 'false';

	$: $gltf ? addItem() : 'false';

	function addItem() {
		// console.log($gltf);
	}
	// --------------------------------------------------------Custom code
</script>

<input class="input input-bordered" type="number" />
<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<!-- <T.Mesh
			geometry={gltf.nodes.Cloth.geometry}
			material={gltf.materials.ClothM}
			position={[0, 0.4, 0]}
			scale={0.01}
		/> -->
		<T.Mesh geometry={gltf.nodes.Cube.geometry} material={gltf.materials.ClothM}>
			<T.MeshPhysicalMaterial
				color={'#ffffff'}
				roughness={1}
				metalness={1}
				map={$cloth_baseColor}
				normalMap={$cloth_normal}
				roughnessMap={$cloth_roughnessMap}
				alphaMap={$cloth_opacity}
				transparent={true}
				displacementMap={$cloth_height}
				displacementScale={0.3}
				wireframe={true}
			/>
		</T.Mesh>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
