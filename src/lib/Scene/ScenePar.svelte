<script>
	import { T } from '@threlte/core';

	import {
		Environment,
		OrbitControls,
		TransformControls,
		useGltf,
		useTexture
	} from '@threlte/extras';
	import {
		BoxGeometry,
		DirectionalLightHelper,
		MeshStandardMaterial,
		ShaderMaterial,
		UniformsUtils
	} from 'three';

	// import { ParallaxShader } from './path/to/ParallaxShader.js';

	// --------------------------------------------------------Custom code
	const cloth_baseColor = useTexture('/export/Untitled material_BaseColor.jpg');
	const cloth_normal = useTexture('/export/Untitled material_Normal.jpg');
	const cloth_roughnessMap = useTexture('/export/Untitled material_Roughness.jpg');
	const cloth_opacity = useTexture('/export/Untitled material_Opacity.jpg');
	const cloth_height = useTexture('/export/Untitled material_Height.jpg');
	const cloth_AO = useTexture('/export/Untitled material_AmbientOcclusion.jpg');

	const vertexShader = `
	  varying vec2 vUv;

	  void main() {
	    vUv = uv;
	    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	  }
	`;

	const fragmentShader = `
	  uniform sampler2D baseTexture;
	  uniform sampler2D heightTexture;
	  varying vec2 vUv;

	  void main() {
	    float height = texture2D(heightTexture, vUv).r;
	    vec2 uv = vUv + (vec2(0.5) - vUv) * height * 0.04;
	    vec4 outColor = texture2D(baseTexture, uv);
	    gl_FragColor = outColor;
	  }
	`;

	let materialz;

	$: if (cloth_baseColor && cloth_height) {
		materialz = new ShaderMaterial({
			uniforms: {
				baseTexture: { value: cloth_baseColor },
				heightTexture: { value: cloth_height }
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader
		});
	}
</script>

<Environment path="/hdr/" files="stadium_01_2k.hdr" />

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.0}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position.y={10} position.z={10} />
<T.AmbientLight position.z={10} intensity={1} />

<T.GridHelper args={[10, 10]} />

<!-- <T.Mesh position={[0, 1, 0]} material={materialz} geometry={new BoxGeometry(2, 2, 2)} scale={1}>
	<T.MeshStandardMaterial
		map={$cloth_baseColor}
		roughnessMap={$cloth_roughnessMap}
		normalMap={$cloth_normal}
	/>
</T.Mesh> -->

<!-- Use ShaderMaterial in Mesh -->
<T.Mesh position={[0, 1, 0]} geometry={new BoxGeometry(2, 2, 2)} scale={1}>
	<T.ShaderMaterial {...materialz} />
</T.Mesh>
