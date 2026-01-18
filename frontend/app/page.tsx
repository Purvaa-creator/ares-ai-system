export default async function Home() {
  const res = await fetch("http://127.0.0.1:8000/");
  const data = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">ARES AI System</h1>
      <p className="mt-4 text-green-600">Backend Response:</p>
      <pre className="mt-2 bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
