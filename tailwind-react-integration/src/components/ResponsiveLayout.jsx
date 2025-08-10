function ResponsiveLayout() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Responsive Layout</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">Column 1</div>
        <div className="bg-white p-6 rounded-lg shadow text-center">Column 2</div>
        <div className="bg-white p-6 rounded-lg shadow text-center">Column 3</div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
