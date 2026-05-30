import React, { useState } from 'react';

const CURRENCIES = [
  { code: 'USD', label: 'US Dollar' },
  { code: 'EUR', label: 'Euro' },
  { code: 'GBP', label: 'British Pound' },
  { code: 'INR', label: 'Indian Rupee' },
  { code: 'AED', label: 'UAE Dirham' },
  { code: 'AUD', label: 'Australian Dollar' },
  { code: 'CAD', label: 'Canadian Dollar' },
  { code: 'ZAR', label: 'South African Rand' },
  { code: 'NGN', label: 'Nigerian Naira' },
];

export default function Estimator() {
  const [items, setItems] = useState([
    { id: 1, name: 'Bricks', unit: 'per 1000', cost: 450, qty: 1 },
    { id: 2, name: 'Cement (bag)', unit: 'bag', cost: 8, qty: 10 },
    { id: 3, name: 'Steel (ton)', unit: 'ton', cost: 600, qty: 0.5 },
  ]);
  const [labor, setLabor] = useState(0);
  const [contingency, setContingency] = useState(5); // percent
  const [currency, setCurrency] = useState('USD');

  const addItem = () => {
    const id = Date.now();
    setItems([...items, { id, name: '', unit: 'unit', cost: 0, qty: 0 }]);
  };

  const updateItem = (id, key, value) => {
    setItems(items.map(it => (it.id === id ? { ...it, [key]: value } : it)));
  };

  const removeItem = (id) => {
    setItems(items.filter(it => it.id !== id));
  };

  const subtotal = items.reduce((s, it) => s + Number(it.cost || 0) * Number(it.qty || 0), 0);
  const laborTotal = Number(labor || 0);
  const contingencyTotal = ((subtotal + laborTotal) * Number(contingency || 0)) / 100;
  const total = subtotal + laborTotal + contingencyTotal;

  const formatter = (value) => {
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);
    } catch (e) {
      return `${value.toFixed(2)} ${currency}`;
    }
  };

  const exportCSV = () => {
    const header = ['Name', 'Unit', 'Unit Cost', 'Quantity', 'Subtotal'];
    const rows = items.map(it => [it.name || '-', it.unit, `${it.cost}`, `${it.qty}`, (it.cost * it.qty).toFixed(2)]);
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `estimate_${currency.toLowerCase()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const payload = { items, labor: laborTotal, contingency, subtotal, total, currency };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `estimate_${currency.toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setItems([]);
    setLabor(0);
    setContingency(5);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Material & Cost Inputs</h3>
          <p className="text-sm text-gray-600">Add materials, unit costs and quantities to build an estimate.</p>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-sm text-gray-600">Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="border rounded-md p-2">
            {CURRENCIES.map(c => (
              <option key={c.code} value={c.code}>{c.code} — {c.label}</option>
            ))}
          </select>
          <button onClick={exportCSV} className="bg-green-600 text-white px-3 py-2 rounded-md">Export CSV</button>
          <button onClick={exportJSON} className="bg-blue-600 text-white px-3 py-2 rounded-md">Export JSON</button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.id} className="grid grid-cols-12 gap-2 items-center bg-white p-3 rounded-md">
            <input
              className="col-span-3 border p-2 rounded-md"
              placeholder="Item name"
              value={it.name}
              onChange={(e) => updateItem(it.id, 'name', e.target.value)}
            />
            <input
              className="col-span-2 border p-2 rounded-md"
              placeholder="Unit"
              value={it.unit}
              onChange={(e) => updateItem(it.id, 'unit', e.target.value)}
            />
            <input
              type="number"
              step="0.01"
              className="col-span-2 border p-2 rounded-md"
              placeholder="Unit cost"
              value={it.cost}
              onChange={(e) => updateItem(it.id, 'cost', Number(e.target.value) || 0)}
            />
            <input
              type="number"
              step="0.01"
              className="col-span-2 border p-2 rounded-md"
              placeholder="Quantity"
              value={it.qty}
              onChange={(e) => updateItem(it.id, 'qty', Number(e.target.value) || 0)}
            />
            <div className="col-span-2 text-right font-semibold">{formatter(it.cost * it.qty)}</div>
            <button onClick={() => removeItem(it.id)} className="col-span-1 bg-red-500 text-white rounded-md px-2 py-1">Delete</button>
          </div>
        ))}

        <div className="flex justify-between">
          <button onClick={addItem} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Add Item</button>
          <button onClick={reset} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Reset</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm">Labor Cost</label>
              <input type="number" className="border p-2 rounded-md flex-1" value={labor} onChange={(e) => setLabor(Number(e.target.value) || 0)} />
            </div>
            <div className="flex items-center gap-4 mt-3">
              <label className="w-32 text-sm">Contingency (%)</label>
              <input type="number" className="border p-2 rounded-md w-24" value={contingency} onChange={(e) => setContingency(Number(e.target.value) || 0)} />
            </div>
            <div className="mt-4 text-sm text-gray-600">Tip: Use contingency to cover waste, transport and minor price fluctuations.</div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="text-sm text-gray-600">Subtotal</div>
            <div className="text-2xl font-bold text-gray-900">{formatter(subtotal)}</div>

            <div className="text-sm text-gray-600 mt-3">Labor</div>
            <div className="font-semibold">{formatter(laborTotal)}</div>

            <div className="text-sm text-gray-600 mt-3">Contingency</div>
            <div className="font-semibold">{formatter(contingencyTotal)}</div>

            <div className="border-t mt-3 pt-3">
              <div className="text-sm text-gray-600">Total Estimate</div>
              <div className="text-2xl font-bold text-green-600">{formatter(total)}</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
