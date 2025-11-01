export default function AdminFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-gray-600">
            &copy; 2025 <span className="font-semibold text-gray-800">ChocongNghe</span>. All rights
            reserved.
          </div>

          {/* Center - Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/admin/help" className="text-gray-600 hover:text-red-600 transition-colors">
              Trợ giúp
            </a>
            <a href="/admin/docs" className="text-gray-600 hover:text-red-600 transition-colors">
              Tài liệu
            </a>
            <a href="/admin/support" className="text-gray-600 hover:text-red-600 transition-colors">
              Hỗ trợ
            </a>
            <a href="/admin/privacy" className="text-gray-600 hover:text-red-600 transition-colors">
              Chính sách
            </a>
          </div>

          {/* Right - Version */}
          <div className="text-sm text-gray-500">
            Version <span className="font-medium">1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
