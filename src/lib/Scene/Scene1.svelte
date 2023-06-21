<script>
	import { T } from '@threlte/core';
	import { OrbitControls, TransformControls } from '@threlte/extras';
	import { BoxGeometry, MeshStandardMaterial } from 'three';
	import Cloth from '../../3dComponent/Cloth.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position.y={10} position.z={10} />
<T.AmbientLight intensity={0.3} />

<T.GridHelper args={[10, 10]} />
<Cloth scale={5} />
<!-- <T.Mesh
	position={[0, 1, 0]}
	geometry={new BoxGeometry(2, 2, 2)}
	material={new MeshStandardMaterial()}
/> -->
