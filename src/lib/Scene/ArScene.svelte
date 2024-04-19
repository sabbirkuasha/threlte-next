<script>
	import * as THREE from 'three';
	import { T } from '@threlte/core';
	import { XR, Controller, Hand, useHitTest } from '@threlte/xr';
	import { OrbitControls } from '@threlte/extras';
	import { degToRad } from 'three/src/math/MathUtils';
	import { spring } from 'svelte/motion';

	const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(0, 0.1, 0);
	const meshes = [];

	let reticle;

	const handleSelect = () => {
		if (!reticle.visible) return;

		const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() });
		const mesh = new THREE.Mesh(geometry, material);
		reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
		mesh.scale.y = Math.random() * 2 + 1;
		meshes.push(mesh);
	};

	useHitTest((hitMatrix, hit) => {
		if (hit) {
			reticle.visible = true;
			reticle.matrix.copy(hitMatrix);
			console.log(hitMatrix);
		} else {
			reticle.visible = false;
		}
	});

	const scale = spring(1);
</script>

<XR>
	<Controller left on:select={handleSelect} />
	<Controller right on:select={handleSelect} />
	<Hand left on:pinchend={handleSelect} />
	<Hand right on:pinchend={handleSelect} />
</XR>

<T.HemisphereLight args={[0xffffff, 0xbbbbff, 1]} position={[0.5, 1, 0.25]} />

<T.Mesh bind:ref={reticle} matrixAutoUpdate={false} visible={false}>
	<T.RingGeometry args={[0.15, 0.2, 32]} on:create={({ ref }) => ref.rotateX(-Math.PI / 2)} />
	<T.MeshBasicMaterial />
</T.Mesh>

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
	<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Cube -->
<T.Group scale={$scale}>
	<T.Mesh position.y={0.5} castShadow let:ref>
		<!-- Add interaction -->
		<!-- <InteractiveObject
			object={ref}
			interactive
			on:pointerenter={() => ($scale = 2)}
			on:pointerleave={() => ($scale = 1)}
		/> -->

		<T.BoxGeometry />
		<T.MeshStandardMaterial color="#333333" />
	</T.Mesh>
</T.Group>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
	<T.CircleGeometry args={[3, 72]} />
	<T.MeshStandardMaterial color="black" />
</T.Mesh>
