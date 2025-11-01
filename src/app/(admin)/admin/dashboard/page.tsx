export default function AdminHome() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">Users Management</div>
        <div className="bg-white p-4 rounded shadow">Products Stats</div>
      </div>
    </>
  );
}
