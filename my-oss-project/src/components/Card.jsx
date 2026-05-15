export const Card = ({ title, desc }) => (
  <div className="p-4 border rounded shadow hover:shadow-lg transition">
    <h3 className="font-bold text-blue-600">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);