<script>
	import { T } from '@threlte/core';
	import { Environment, OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, DirectionalLightHelper, MeshStandardMaterial } from 'three';
	import ClothB from '../../3dComponent/ClothB.svelte';
	import ClothC from '../../3dComponent/ClothC.svelte';
	import ClothClip from '../../3dComponent/ClothClip.svelte';
	import ClothHashHash from '../../3dComponent/ClothHashHash.svelte';
	import BoxUv from '../../3dComponent/Box_UV.svelte';
	import SphereUv from '../../3dComponent/Sphere_UV.svelte';
</script>

<Environment path="/hdr/" files="stadium_01_2k.hdr" />

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position.y={10} position.z={10} />
<!-- <T.AmbientLight position.z={10} intensity={1} /> -->

<T.GridHelper args={[10, 10]} />

<!-- <T.Mesh position={[0, 1, 0]} geometry={new BoxGeometry(2, 2, 2)} scale={1}>
	<T.MeshStandardMaterial color={'#ffffff'} roughness={0} metalness={1} displacementScale={2} />
</T.Mesh> -->

<!-- <ClothC scale={3} />
<ClothB position={[5, 0, 0]} scale={3} />
<ClothClip position={[-5, 0, 0]} scale={3} /> -->

<ClothHashHash position={[0, 0, 0]} scale={10} />

<!-- it is working perfectly -->
<!-- <SphereUv position={[0, 0, 0]} scale={3} /> -->
