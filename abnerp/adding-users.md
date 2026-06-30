---
title: Thêm người dùng
---

# Thêm người dùng

Việc thêm người dùng mới vào ABNERP được thực hiện thông qua giao diện **Người dùng (User)**. Quản trị viên có thể tạo, cấu hình và phân quyền cho từng tài khoản người dùng một cách chi tiết.

## Quản lý người dùng

Để thêm người dùng mới, vào **Cài đặt > Người dùng** và nhấn **Thêm Người dùng**. Các thông tin cần nhập bao gồm:

- **Email**: địa chỉ email của người dùng (dùng để đăng nhập)
- **Tên đầy đủ**: họ và tên của người dùng
- **Tên người dùng**: tên đăng nhập (nếu khác email)
- **Mật khẩu**: mật khẩu đăng nhập ban đầu
- **Trạng thái**: Kích hoạt hoặc Vô hiệu hóa tài khoản
- **Chi nhánh**: chi nhánh mặc định của người dùng

Sau khi tạo, hệ thống sẽ gửi email kích hoạt tài khoản đến người dùng. Nếu muốn, quản trị viên có thể tạo tài khoản và đặt mật khẩu thủ công cho người dùng.

## Vai trò

**Vai trò (Role)** xác định quyền hạn của người dùng trong hệ thống. Mỗi người dùng có thể được gán một hoặc nhiều vai trò. Để gán vai trò:

1. Mở hồ sơ người dùng
2. Chuyển đến phần **Vai trò**
3. Thêm vai trò phù hợp với trách nhiệm của người dùng

Các vai trò phổ biến:
- **System Manager**: quản lý hệ thống và cấu hình
- **Accounts User / Accounts Manager**: nhân viên kế toán
- **Sales User / Sales Manager**: nhân viên bán hàng
- **Purchase User / Purchase Manager**: nhân viên mua hàng
- **HR User / HR Manager**: nhân viên nhân sự
- **Stock User / Stock Manager**: thủ kho và quản lý kho
- **Employee**: vai trò cơ bản cho tất cả nhân viên
- **Customer**: khách hàng truy cập cổng thông tin

> **Lưu ý**: Việc gán vai trò cần tuân thủ nguyên tắc phân tách nhiệm vụ — tránh giao vai trò mâu thuẫn cho cùng một người dùng (ví dụ: vừa được duyệt vừa được tạo mua hàng).

## Cài đặt bảo mật

Các thiết lập bảo mật bổ sung cho từng người dùng:

- **Xác thực hai yếu tố**: bắt buộc hoặc tùy chọn
- **API Access**: cấp quyền truy cập API cho người dùng
- **Desktop Access**: hiển thị người dùng trên trình quản lý desktop
- **Giới hạn đăng nhập**: thiết lập thời gian cho phép đăng nhập

## API Access

Để cho phép người dùng tương tác với ABNERP qua API, bật tùy chọn **API Access** trong hồ sơ người dùng. Người dùng có API Access có thể:

- Tạo **API Key** và **API Secret** trong hồ sơ của họ
- Sử dụng API Key để xác thực các yêu cầu API REST
- Gọi các endpoint API tương ứng với quyền của vai trò được gán

Sau khi thêm người dùng, hãy kiểm tra quyền truy cập bằng cách đăng nhập thử bằng tài khoản mới và xác nhận rằng tất cả chức năng cần thiết đều hoạt động đúng theo phân quyền đã thiết lập.
