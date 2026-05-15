const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/80">Bài t?p Bu?i 2</p>
          <h1 className="mt-2 text-3xl font-semibold">Giao di?n c?a hàng ph? ki?n</h1>
          <p className="mt-2 max-w-2xl text-sm text-cyan-100/90">
            H?c cách thi?t k? layout React + Tailwind theo logic d? làm, d? hi?u.
          </p>
        </div>

        <div className="rounded-full bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/20">
          Template don gi?n, tr?c quan
        </div>
      </div>
    </header>
  );
};

export default Header;
