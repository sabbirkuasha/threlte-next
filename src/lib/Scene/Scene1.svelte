<script>
	import { T } from '@threlte/core';
	import { Environment, OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, MeshStandardMaterial } from 'three';
	import Cloth from '../../3dComponent/Cloth.svelte';

	// const baseColor = '/export/Untitled material_BaseColor.jpg';
	// $: console.log(baseColor);

	import { useTexture } from '@threlte/extras';
	const cloth_baseColor = useTexture('/export/Untitled material_BaseColor.jpg');
	const cloth_normal = useTexture('/export/Untitled material_Normal.jpg');
	const cloth_roughnessMap = useTexture('/export/Untitled material_Roughness.jpg');
	const cloth_opacity = useTexture('/export/Untitled material_Opacity.jpg');
	const cloth_height = useTexture('/export/Untitled material_Height.jpg');
	$: console.log($cloth_height); // eventually THREE.Texture
</script>

<Environment path="/hdr/" files="stadium_01_2k.hdr" />
<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position.y={10} position.z={10} />
<T.AmbientLight intensity={0.3} />

<T.GridHelper args={[10, 10]} />

<Cloth scale={5} position={[-5, 0, 0]} />

<!-- <T.Mesh position={[0, 1, 0]} geometry={new BoxGeometry(2, 2, 2)} scale={1}>
	<T.MeshStandardMaterial
		color={'#ffffff'}
		roughness={1}
		metalness={1}
		map={$cloth_baseColor}
		normalMap={$cloth_normal}
		roughnessMap={$cloth_roughnessMap}
		alphaMap={$cloth_opacity}
		transparent={true}
		displacementMap={$cloth_height}
		displacementScale={2}
	/>
</T.Mesh> -->

<!-- <Cloth scale={5} position={[5, 0, 0]}>
	<T.MeshStandardMaterial color={'#ffffff'} roughness={0} metalness={0} />
</Cloth> -->

<!-- normalMap={$cloth_normal} -->

<!-- normalMap={'/export/Untitled material_BaseColor.jpg'} -->
<!-- roughnessMap={'roughness.png'}
	metalnessMap={'metalness.png'}
	displacementMap={'displacement.png'}
	alphaMap={"opacity.png"}
  transparent={true}
	displacementScale={0.1} -->
