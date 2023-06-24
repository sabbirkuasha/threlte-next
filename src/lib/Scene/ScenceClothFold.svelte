<script>
	import { T } from '@threlte/core';
	import { Environment, OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, DirectionalLightHelper, MeshStandardMaterial } from 'three';
	import ClothFolded from '../../3dComponent/ClothFolded.svelte';
</script>

<Environment path="/hdr/" files="stadium_01_2k.hdr" />

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.GridHelper args={[10, 10]} />
<ClothFolded scale={3} />
