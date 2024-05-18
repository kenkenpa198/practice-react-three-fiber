"use client";

import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      {/**
       * Canvas: レンダリングを行うためのセットアップを行う
       *
       * - レンダリングに必要な基本的な構成要素であるシーンとカメラをセットアップする
       * - フレームごとにシーンをレンダリングするため、従来のレンダリングループ (animate 関数のことかな) は不要
       *
       * Canvas は親ノードに合わせて応答するため、親の幅と高さを変更することでサイズを制御できる
       * この場合は #canvas-container に合わせる
       * */}
      <Canvas>
        {/**
         * Fiber コンポーネント (キャメルケースのもの) にプロパティを設定すると
         * three.js インスタンスに同じ名前のプロパティが設定される
         *
         * つまり下記の記述は……
         *
         * ```ts
         * <ambientLight intensity={0.1} />
         * ```
         *
         * バニラな three.js でいう次のインスタンスへ値を設定したものと同等。
         *
         * ```js
         * const light = new THREE.AmbientLight()
         * light.intensity = 0.1
         * ```
         *
         * .set() を元の three.js で使用していた場合は短く書けるらしい
         * https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#shortcuts
         *
         */}
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {/**
         * mesh: three.js の基本的なシーンオブジェクト
         *
         * 3D 空間で計上を表現するために必要なジオメトリ (形状) とマテリアル (素材) を保持するために使用される。
         * BoxGeometry と MeshStandardmaterial を使用して、親に自動的にアタッチされる新しいメッシュを作成する。
         */}
        <mesh>
          {/**
           * boxGeometry: 形状を定義する
           *
           * バニラな three.js でいう次の記述と等価。
           *
           * ```js
           * const geometory = new THREE.BoxGeometry(1, 1, 1);
           * ```
           *
           * 引数を変更する度にオブジェクトを再構築する必要がある。
           */}
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
