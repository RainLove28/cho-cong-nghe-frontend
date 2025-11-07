export default function ClientFooter() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 ChocongNghe Client. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/client/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/blogs/CompanyIntroduction" className="hover:underline">
            Về công ty chúng tôi
          </a>
        </div>
      </div>
    </footer>
  );
}
