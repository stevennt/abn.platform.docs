---
title: Nhập dữ liệu
---

# Nhập dữ liệu

**Nhập dữ liệu (Data Import)** trong ABNERP cho phép nhập hàng loạt dữ liệu từ các nguồn bên ngoài vào hệ thống một cách nhanh chóng và chính xác. Công cụ này đặc biệt hữu ích trong giai đoạn triển khai ban đầu hoặc khi cần đồng bộ dữ liệu từ hệ thống cũ.

## Chuẩn bị dữ liệu

Trước khi nhập, hãy đảm bảo dữ liệu nguồn đã được làm sạch và đúng định dạng:

- **Định dạng tệp hỗ trợ**: Excel (.xlsx) và CSV (.csv)
- **Mã hóa (Encoding)**: UTF-8 (khuyến nghị) hoặc các mã hóa phổ biến khác
- **Cấu trúc dữ liệu**: mỗi dòng là một bản ghi, mỗi cột là một trường dữ liệu
- **Loại bỏ trùng lặp**: kiểm tra và loại bỏ dữ liệu trùng trước khi nhập

## Tải mẫu nhập

ABNERP tự động tạo **Mẫu nhập (Template)** cho từng loại dữ liệu:

1. Vào công cụ **Nhập dữ liệu (Data Import Tool)**
2. Chọn loại **Tài liệu (Document Type)** muốn nhập (Khách hàng, Mặt hàng, Đơn hàng, v.v.)
3. Nhấn **Tải mẫu (Download Template)**
4. Mẫu Excel được tải về với đầy đủ tên cột và hướng dẫn bằng tiếng Việt

Mẫu bao gồm: cột dữ liệu, cột bắt buộc (có đánh dấu *), và ví dụ minh họa ở dòng đầu tiên.

## Ánh xạ trường

Sau khi điền dữ liệu vào mẫu, quá trình nhập sẽ tự động phát hiện và ánh xạ các cột trong tệp với các trường trong hệ thống. Người dùng có thể can thiệp thủ công để:

- **Khớp tên cột**: ánh xạ cột trong tệp với trường hệ thống nếu tên khác nhau
- **Bỏ qua cột**: chọn không nhập một số cột nhất định
- **Giá trị mặc định**: thiết lập giá trị mặc định cho trường không có trong tệp
- **Chuyển đổi dữ liệu**: định dạng lại dữ liệu (ví dụ: ngày tháng, số)

## Quy trình nhập

Sau khi thiết lập ánh xạ, nhấn **Bắt đầu nhập (Start Import)**. Hệ thống sẽ:

1. **Xác thực**: kiểm tra từng dòng dữ liệu — xác nhận các trường bắt buộc, định dạng hợp lệ
2. **Tạo bản ghi**: tạo bản ghi trong hệ thống cho các dòng hợp lệ
3. **Báo cáo kết quả**: hiển thị số bản ghi thành công, số lỗi và chi tiết từng lỗi

### Nhật ký nhập

Sau khi nhập, hệ thống lưu lại **Nhật ký nhập (Import Log)** với đầy đủ thông tin:

- Tổng số dòng đã nhập
- Số dòng thành công và thất bại
- Danh sách lỗi chi tiết cho từng dòng (dòng số, tên cột, giá trị lỗi, nguyên nhân)
- Liên kết đến các bản ghi đã được tạo thành công

Người dùng có thể xuất báo cáo lỗi để sửa lại dữ liệu và nhập lại mà không cần bắt đầu từ đầu.

### Mẹo nhập dữ liệu hiệu quả

- Nhập tối đa 5000 dòng mỗi lần để đảm bảo hiệu suất
- Nhập dữ liệu tham chiếu trước (Khách hàng, Nhà cung cấp, Mặt hàng) trước khi nhập dữ liệu giao dịch (Đơn hàng, Hóa đơn)
- Sử dụng tính năng **Xem trước (Preview)** để kiểm tra dữ liệu trước khi nhập chính thức
- Luôn sao lưu dữ liệu trước khi thực hiện nhập hàng loạt
