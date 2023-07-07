<script>
	import { T } from '@threlte/core';
	import { Environment, OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, DirectionalLightHelper, MeshStandardMaterial } from 'three';

	import ClothFolded from '../../3dComponent/ClothFolded.svelte';
</script>

<Environment
	path="/hdr/"
	format="hdr"
	groundProjection={{ radius: 200, height: 5, scale: { x: 100, y: 100, z: 100 } }}
	isBackground
	files="stadium_01_2k.hdr"
/>

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.GridHelper args={[20, 20]} />

<!-- 3dModel -->
<ClothFolded scale={3} />
