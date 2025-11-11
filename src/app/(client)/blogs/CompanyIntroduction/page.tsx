import NavigationMenuBlogs from "@/components/client/blog/NavigationMenuBlogs";
import Breadcrumb from "@/components/client/Breadcrumb";

export default function CompanyIntroDuction() {
  return (
    <main className="w-[90%] m-auto">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Về công ty chúng tôi" },
        ]}
      />

      <div className="mt-15 flex gap-10">
        <NavigationMenuBlogs />
        <div className="flex-4">
          <h4 className="text-3xl font-bold mb-4 ">
            Giới thiệu về ChoCongNghe Shop
          </h4>
          <h4 className="text-xl font-bold mb-3">1. Về chúng tôi</h4>
          <p className="text-[16px] mb-6">
            ChoCongNghe Shop là chuỗi chuyên bán lẻ các sản phẩm kỹ thuật số di
            động bao gồm điện thoại di động, máy tính bảng, laptop, phụ kiện và
            dịch vụ công nghệ… cùng các mặt hàng gia dụng, điện máy chính hãng,
            chất lượng cao đến từ các thương hiệu lớn, với mẫu mã đa dạng và mức
            giá tối ưu nhất cho khách hàng.
          </p>
          <p className="text-[16px] mb-6">
            ChoCongNghe Shop là hệ thống bán lẻ đầu tiên ở Việt Nam được cấp
            chứng chỉ ISO 9001:2000 về quản lý chất lượng theo tiêu chuẩn quốc
            tế. Hiện nay, ChoCongNghe Shop là chuỗi bán lẻ lớn thứ 2 trên thị
            trường bán lẻ hàng công nghệ.
          </p>
          <h4 className="text-xl font-bold mb-3">2. Sứ mệnh</h4>
          <p className="text-[16px] mb-6">
            Hệ thống ChoCongNghe Shop kỳ vọng mang đến cho khách hàng những trải
            nghiệm mua sắm tốt nhất thông qua việc cung cấp các sản phẩm chính
            hãng, dịch vụ chuyên nghiệp cùng chính sách hậu mãi chu đáo.
            ChoCongNghe Shop không ngừng cải tiến và phát triển, hướng tới việc
            trở thành nhà bán lẻ công nghệ hàng đầu Việt Nam, đồng thời mang lại
            giá trị thiết thực cho cộng đồng.
          </p>
          <h4 className="text-xl font-bold mb-3">3. Giá trị cốt lỗi</h4>
          <p className="text-[16px] mb-6">
            - Chất lượng và Uy tín: ChoCongNghe Shop cam kết cung cấp các sản
            phẩm chính hãng, chất lượng cao với chính sách bảo hành uy tín và
            dịch vụ chăm sóc khách hàng chu đáo, nhằm đem đến cho khách hàng sự
            an tâm tuyệt đối khi mua sắm các sản phẩm công nghệ, điện máy - gia
            dụng.
          </p>
          <p className="text-[16px] mb-6">
            - Khách hàng là trọng tâm: Phục vụ khách hàng luôn là ưu tiên số 1.
            ChoCongNghe Shop luôn chú trọng hoàn thiện chất lượng dịch vụ, bồi
            dưỡng đội ngũ nhân viên nhiệt tình, trung thực, chân thành, mang lại
            lợi ích và sự hài lòng tối đa cho khách hàng.
          </p>
          <p className="text-[16px] mb-6">
            - Đổi mới và phát triển: ChoCongNghe Shop luôn cập nhật và đổi mới
            sản phẩm, công nghệ cũng như dịch vụ để đáp ứng nhu cầu thay đổi
            liên tục của thị trường và khách hàng.
          </p>
          <p className="text-[16px] mb-6">
            - Đồng hành cùng cộng đồng: ChoCongNghe Shop không chỉ tập trung vào
            phát triển kinh doanh mà còn chú trọng đến các hoạt động xã hội,
            đóng góp tích cực cho sự phát triển của cộng đồng và xã hội.
          </p>
          <h4 className="text-xl font-bold mb-3">4. Định hướng phát triển</h4>
          <p className="text-[16px] mb-6">
            Với mục tiêu “Tạo trải nghiệm xuất sắc cho khách hàng”, ChoCongNghe
            Shop tiếp tục đẩy mạnh chuyển đổi số để ứng dụng vào công tác bán
            hàng, quản lý và đào tạo nhân sự... theo chiến lược tận tâm phục vụ
            nhằm gia tăng trải nghiệm khách hàng. Đầu tư mạnh mẽ kinh doanh trực
            tuyến đa nền tảng, khai thác và ứng dụng công nghệ để thấu hiểu và
            tiếp cận khách hàng một cách linh hoạt và hiệu quả nhất, không ngừng
            khẳng định vị thế là một trong những thương hiệu bán lẻ uy tín tại
            Việt Nam.
          </p>
          <h4 className="text-xl font-bold mb-3">5. Cột mốc phát triên</h4>
          <p className="text-[16px] mb-6">
            - <b>2013</b>: ChoCongNghe Shop chính thức đạt mốc 100 cửa hàng.
          </p>
          <p className="text-[16px] mb-6">
            - <b>2014</b>: Trở thành nhà nhập khẩu trực tiếp của iPhone chính
            hãng.
          </p>
          <p className="text-[16px] mb-6">
            - <b>2015</b>: Đạt mức tăng trưởng nhanh nhất so với các công ty
            trực thuộc cùng Công ty Cổ phần ChoCongNghe.
          </p>
          <p className="text-[16px] mb-6">
            - <b>2016</b>: Doanh thu online tăng gấp đôi. Khai trương 80 khu
            trải nghiệm Apple corner trên toàn quốc.
          </p>
          <p className="text-[16px] mb-6">
            - <b>08/2024</b>: Đồng loạt khai trương 10 cửa hàng điện máy trên
            toàn quốc, đánh dấu việc mở rộng lĩnh vực kinh doanh sang điện máy,
            gia dụng.
          </p>
        </div>
      </div>
    </main>
  );
}
