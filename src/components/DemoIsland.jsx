import { useState } from 'react';

export default function DemoIsland() {
const [query, setQuery] = useState('Best cleanser for combination skin');
const [loading, setLoading] = useState(false);
const [answer, setAnswer] = useState('');

async function runDemo(e) {
e.preventDefault();
setLoading(true);
// Placeholder demo: mimic a concierge response
await new Promise((r) => setTimeout(r, 700));
setAnswer('We’d recommend a gentle gel cleanser with BHA to balance oil and calm congestion.');
setLoading(false);
}

return (
<div className="card">
<form onSubmit={runDemo} className="flex flex-col gap-3">
<label className="font-semibold">Ask Refina</label>
<input
className="rounded-xl border px-4 py-3"
value={query}
onChange={(e) => setQuery(e.target.value)}
aria-label="Demo query"
/>
<button className="btn-primary" disabled={loading}>
{loading ? 'Thinking…' : 'Get a suggestion'}
</button>
</form>
{answer && <p className="p mt-4">{answer}</p>}
</div>
);
}