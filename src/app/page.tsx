import Link from "next/link";

function App() {
  return (
    <div>
      <h1>Practice - React Three Fiber</h1>
      <ul>
        <li>
          <Link href="/your-first-scene">Your first scene</Link>
        </li>
        <li>
          <Link href="/materials">Materials</Link>
        </li>
        <li>
          <Link href="/watataku">watataku</Link>
        </li>
      </ul>
      <h2>Reference</h2>
      <ul>
        <li>
          <a href="https://docs.pmnd.rs/react-three-fiber/">
            React Three Fiber Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
