const navigation = [
  { label: "T?ng quan", icon: "??", active: true },
  { label: "S?n ph?m", icon: "??" },
  { label: "Ðon hàng", icon: "??" },
  { label: "Khách hàng", icon: "??" },
  { label: "Báo cáo", icon: "??" },
];

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 shrink-0 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Menu</p>
        <h2 className="mt-3 text-xl font-semibold text-slate-900">Thanh di?u hu?ng</h2>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
              item.active
                ? "bg-sky-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200">
        <h3 className="font-semibold text-slate-900">G?i ý</h3>
        <p className="mt-2 leading-6">
          H?c cách xây layout phân vùng rõ ràng: header, sidebar, n?i dung chính, footer. M?i ph?n nên là m?t component riêng.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
