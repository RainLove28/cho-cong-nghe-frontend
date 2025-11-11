export default function NavigationMenuBlogs() {
  return (
    <div className="border border-gray-200 p-5  flex-1 rounded-lg shadow-lg h-[530px]">
      <h2 className="text-[16px] text-gray-500 py-2 border-b border-b-gray-300 font-bold">
        Danh mục chính sách
      </h2>
      <ul className="[&>li]:py-4 text-sm  [&>li]:border-b [&>li]:border-b-gray-300 [&>li]:hover:text-blue-500 [&>li:last-child]:border-none">
        <li>
          <a href="">Câu hỏi thường gặp</a>
        </li>
        <li>
          <a href="">Giới thiệu về ChoCongNghe Shop</a>
        </li>
        <li>
          <a href="">Đại lý uỷ quyền và TTBH uỷ quyền của Apple </a>
        </li>
        <li>
          <a href="">Chính sách mạng di động ChoCongNghe</a>
        </li>
        <li>
          <a href="">Chính sách gói cước di động ChoCongNghe</a>
        </li>
        <li>
          <a href="">Chính sách giao hàng & lắp đặt</a>
        </li>
        <li>
          <a href="">Chính sách giao hàng & lắp đặt Điện máy, Gia dụng</a>
        </li>
      </ul>
    </div>
  );
}
