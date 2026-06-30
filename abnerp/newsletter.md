---
title: Bản tin
---

# Bản tin

**Bản tin (Newsletter)** trong ABNERP là công cụ gửi email hàng loạt chuyên nghiệp đến khách hàng, đối tác và các bên liên quan. Tính năng này tích hợp trực tiếp với mô-đun Email và hệ thống quản lý khách hàng.

## Tạo bản tin

Để tạo bản tin mới, vào **Cài đặt > Email > Bản tin** và nhấn **Thêm**. Quy trình tạo bản tin gồm các bước:

1. **Thông tin cơ bản**: nhập tiêu đề bản tin và mô tả ngắn
2. **Nội dung email**:
   - Chọn **Mẫu email** có sẵn hoặc soạn nội dung mới
   - Sử dụng trình soạn thảo HTML hoặc văn bản phong phú
   - Chèn hình ảnh, bảng biểu, đường dẫn
   - Sử dụng các trường động như `{{ customer_name }}` để cá nhân hóa
3. **Người nhận**: chọn nhóm đối tượng nhận bản tin

## Chọn người nhận

Bản tin có thể được gửi đến các nhóm người nhận sau:

- **Khách hàng**: tất cả khách hàng hoặc lọc theo loại, khu vực
- **Nhà cung cấp**: tất cả nhà cung cấp hoặc theo điều kiện
- **Thành viên**: danh sách thành viên đã đăng ký
- **Nhóm email**: nhóm người nhận tùy chỉnh
- **Người dùng hệ thống**: nhân viên trong hệ thống

Hệ thống tự động loại bỏ các email trùng lặp và kiểm tra tình trạng đồng ý nhận tin.

## Gửi và theo dõi

Trước khi gửi, bạn có thể **Gửi thử (Test)** để kiểm tra nội dung hiển thị trên hộp thư đến của mình. Sau đó:

- **Gửi ngay**: bản tin được gửi đến tất cả người nhận ngay lập tức
- **Lên lịch**: chọn ngày giờ gửi trong tương lai
- **Lưu nháp**: lưu lại để hoàn thiện sau

Trạng thái gửi được theo dõi theo thời gian thực, hiển thị số email đã gửi thành công, thất bại và đang chờ xử lý.

### Lưu ý

- Đảm bảo danh sách người nhận đã đồng ý nhận email theo quy định GDPR và chống thư rác
- ABNERP giới hạn số lượng email gửi mỗi giờ để tránh bị chặn bởi máy chủ SMTP
- Người nhận có thể hủy đăng ký nhận bản tin qua đường dẫn trong email
