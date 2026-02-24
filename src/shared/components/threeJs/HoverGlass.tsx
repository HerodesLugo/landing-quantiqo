import * as THREE from "three";
import { useEffect, useRef } from "react";
// import GUI from "lil-gui";

// --- SHADERS ---

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform sampler2D uTexture;
    uniform vec2 uMouse;
    uniform float uVelo;
    uniform vec2 uResolution;
    uniform vec2 uImageSize;
    uniform float uAberrationIntensity;
    uniform float uScale; // <--- 1. NUEVO PARAMETRO

    varying vec2 vUv;

    vec2 getCoverUv(vec2 uv, vec2 resolution, vec2 texResolution) {
        vec2 s = resolution;
        vec2 i = texResolution;
        float rs = s.x / s.y;
        float ri = i.x / i.y;
        vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, s.y * i.x / s.x);
        vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
        vec2 uvCover = uv * s / new + offset;
        return uvCover;
    }

    void main() {
        vec2 uv = vUv;
        
        // 2. APLICAMOS LA LÓGICA DE COVER
        vec2 coverUv = getCoverUv(uv, uResolution, uImageSize);

        // 3. APLICAMOS EL ZOOM (Desde el centro)
        // Restamos 0.5 para ir al centro, dividimos por escala, y sumamos 0.5 para volver
        vec2 center = vec2(0.5);
        coverUv = (coverUv - center) * (1.0 / uScale) + center;

        // Lógica de distorsión (Aberración)
        vec2 mouse = uMouse;
        float aspectRatio = uResolution.x / uResolution.y;
        vec2 aspectUV = vUv; 
        aspectUV.x *= aspectRatio; 
        mouse.x *= aspectRatio;

        float dist = distance(aspectUV, mouse);
        float decay = smoothstep(0.5, 0.0, dist);
        float strength = uAberrationIntensity * uVelo * decay;

        vec2 distortedUV = coverUv - (aspectUV - mouse) * strength;

        // RGB Split
        float r = texture2D(uTexture, distortedUV + vec2(strength * 0.9, 0.0)).r;
        float g = texture2D(uTexture, distortedUV).g;
        float b = texture2D(uTexture, distortedUV - vec2(strength * 0.9, 0.0)).b;

        gl_FragColor = vec4(r, g, b, 1.0);
    }
`;

const settings = {
  aberrationIntensity: 0.05,
  scale: 1.0, // <--- Valor inicial (1.0 = Cover perfecto)
};

const HoverGlass = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const veloRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // const gui = new GUI({ title: "Image Settings" });

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTexture: { value: null },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uVelo: { value: 0.0 },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uImageSize: { value: new THREE.Vector2(1, 1) },
        uAberrationIntensity: { value: settings.aberrationIntensity },
        uScale: { value: settings.scale }, // <--- Conectamos al shader
      },
    });

    // --- CONTROLES GUI PARA ASPECTO ---
    // const folderImage = gui.addFolder("Configuración Imagen");

    // folderImage.add(settings, 'scale', 0.5, 3.0)
    //    .name('Zoom / Escala')
    //    .onChange((v: number) => material.uniforms.uScale.value = v);

    // folderImage.add(settings, 'aberrationIntensity', 0.0, 0.2)
    //    .name('Intensidad Efecto')
    //    .onChange((v: number) => material.uniforms.uAberrationIntensity.value = v);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const loader = new THREE.TextureLoader();
    let isMounted = true;

    loader.load("/images/footer/background-footer.png", (texture) => {
      if (!isMounted) return;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      material.uniforms.uTexture.value = texture;
      // IMPORTANTE: Aquí se define la proporción nativa de la imagen
      material.uniforms.uImageSize.value.set(
        texture.image.width,
        texture.image.height,
      );
      material.needsUpdate = true;
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      targetMouseRef.current.set(x, y);
      veloRef.current.target = 1.0;
    };

    const handleResize = () => {
      if (!isMounted) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      // IMPORTANTE: Aquí se actualiza la proporción de la pantalla
      material.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      mouseRef.current.lerp(targetMouseRef.current, 0.08);
      veloRef.current.target *= 0.96;
      veloRef.current.current +=
        (veloRef.current.target - veloRef.current.current) * 0.1;

      material.uniforms.uMouse.value.copy(mouseRef.current);
      material.uniforms.uVelo.value = veloRef.current.current;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      isMounted = false;
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      // gui.destroy();
      scene.remove(plane);
      geometry.dispose();
      material.dispose();
      if (material.uniforms.uTexture.value)
        material.uniforms.uTexture.value.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 size-full object-cover pointer-events-none "
      />
      <div className="sm:bg-base-900/50 absolute z-10 mix-blend-overlay inset-0 max-sm:bg-base-900/10"></div>
    </>
  );
};

export default HoverGlass;
