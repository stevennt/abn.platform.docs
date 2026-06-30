---
title: Phân quyền
---

# Phân quyền

Mô-đun **Phân quyền (Permissions)** trong ABNERP cung cấp hệ thống kiểm soát truy cập linh hoạt và chi tiết, cho phép quản trị viên xác định chính xác ai có thể xem, tạo, sửa, xóa hoặc phê duyệt từng loại dữ liệu trong hệ thống.

## Phân quyền dựa trên vai trò

**Phân quyền dựa trên vai trò (Role-Based Permissions)** là phương pháp quản lý quyền truy cập cốt lõi trong ABNERP. Mỗi người dùng được gán một hoặc nhiều **vai trò (Role)**, và mỗi vai trò có một bộ quyền hạn cụ thể. Hệ thống cung cấp sẵn các vai trò mặc định như:

- **Administrator**: toàn quyền trên toàn hệ thống
- **System Manager**: quản lý cài đặt hệ thống và người dùng
- **Accounts Manager**: quản lý các nghiệp vụ kế toán
- **Sales Manager**: quản lý hoạt động bán hàng
- **Purchase Manager**: quản lý hoạt động mua hàng
- **Employee**: quyền cơ bản cho nhân viên
- **Customer**: quyền cho khách hàng truy cập cổng thông tin

Người dùng có thể tạo vai trò mới và tùy chỉnh quyền cho từng vai trò một cách linh hoạt.

## Phân quyền người dùng

**Phân quyền người dùng (User Permissions)** cho phép kiểm soát ở mức chi tiết hơn ngoài quyền vai trò. Các loại quyền bao gồm:

- **Quyền Chi nhánh**: giới hạn người dùng chỉ được thao tác dữ liệu thuộc chi nhánh của mình
- **Quyền Tài liệu**: kiểm soát quyền truy cập đến từng tài liệu cụ thể
- **Quyền Trường**: kiểm soát quyền xem/sửa đến từng trường dữ liệu
- **Quyền Theo bản ghi**: cho phép hoặc từ chối truy cập đến các bản ghi riêng lẻ

Ví dụ: một nhân viên bán hàng có thể xem và tạo đơn hàng (quyền vai trò), nhưng chỉ được xem đơn hàng của riêng mình (quyền người dùng).

## Quản lý phân quyền

**Quản lý phân quyền (Permission Management)** bao gồm các công cụ và quy tắc để quản trị viên thiết lập, theo dõi và kiểm tra hệ thống phân quyền:

- **Công cụ cấp quyền trực quan**: giao diện dạng bảng cho phép thiết lập quyền nhanh chóng
- **Mức quyền (Permission Levels)**: quyền Read, Write, Create, Delete, Submit, Amend, Cancel, Share
- **Quy tắc kế thừa**: quyền có thể được kế thừa từ cha (ví dụ: quyền trên Báo giá được kế thừa từ Đơn hàng)
- **Kiểm tra quyền**: công cụ cho phép kiểm tra quyền của một người dùng trên một tài liệu cụ thể
- **Nhật ký thay đổi**: ghi nhận mọi thay đổi phân quyền trong hệ thống

Hệ thống phân quyền đảm bảo tính bảo mật và kiểm soát dữ liệu chặt chẽ, phù hợp với các doanh nghiệp có nhiều cấp độ quản lý và yêu cầu phân tách nhiệm vụ rõ ràng.
