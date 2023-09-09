<script>
	import { T } from '@threlte/core';
	import { ContactShadows, Environment, OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, DirectionalLightHelper, MeshStandardMaterial } from 'three';
	import WovenElastic from '../../3dComponent/WovenElastic.svelte';
</script>

<Environment
	path="/hdr/"
	format="hdr"
	groundProjection={{ radius: 200, height: 5, scale: { x: 100, y: 100, z: 100 } }}
	isBackground={false}
	files="stadium_01_2k.hdr"
/>
<!-- <TransformControls> -->
<ContactShadows
	opacity={1}
	scale={30}
	blur={5}
	position={[0, -2.5, 0]}
	far={10}
	resolution={1024}
	color="#000000"
/>
<!-- </TransformControls> -->

<T.PerspectiveCamera makeDefault position={[0, 7, 20]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<!-- <T.GridHelper args={[20, 20]} /> -->

<WovenElastic scale={10} position={[0, -2.5, 0]} />
