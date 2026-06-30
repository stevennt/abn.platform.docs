---
title: Thiết lập Kế toán
---

# Thiết lập Kế toán

## Tổng quan

Thiết lập Kế toán (Accounts Settings) là nơi bạn cấu hình các hành vi mặc định cho toàn bộ mô-đun Kế toán trong ABNERP. Việc cấu hình đúng đắn ngay từ đầu sẽ giúp hệ thống vận hành trơn tru và đảm bảo tính chính xác của số liệu tài chính.

## Cách truy cập

Vào **Kế toán > Thiết lập > Thiết lập Kế toán**, hoặc tìm kiếm "Thiết lập Kế toán" từ thanh công cụ toàn cầu.

## Các thiết lập chính

### Thiết lập Số dư Đầu kỳ

| Trường | Mô tả |
|--------|-------|
| Cho phép nhập số dư đầu kỳ | Bật để cho phép nhập số dư ban đầu |
| Ngày bắt đầu | Ngày mở sổ kế toán trên hệ thống |
| Tài khoản lũy kế | Tài khoản đối ứng khi nhập số dư đầu kỳ |

Khi nhập số dư đầu kỳ, hệ thống tạo một bút toán tổng hợp để cân đối giữa tổng tài sản và tổng nguồn vốn.

### Tự động ghi sổ

Các thiết lập liên quan đến tự động hóa hạch toán:

- **Tự động ghi sổ bút toán**: Khi được bật, bút toán sẽ được tự động ghi nhận (posted) ngay khi được tạo, thay vì ở trạng thái nháp (draft).
- **Tự động ghi sổ hóa đơn bán hàng**: Hóa đơn bán hàng sẽ tự động được ghi sổ và cập nhật công nợ sau khi lưu.
- **Tự động ghi sổ hóa đơn mua hàng**: Tương tự cho hóa đơn mua hàng.

### Thuế mặc định

- **Thuế bán hàng mặc định**: Loại thuế được áp dụng tự động khi tạo hóa đơn bán hàng.
- **Thuế mua hàng mặc định**: Loại thuế được áp dụng tự động khi tạo hóa đơn mua hàng.
- **Tài khoản thuế đầu ra**: Tài khoản mặc định để hạch toán thuế GTGT đầu ra.
- **Tài khoản thuế đầu vào**: Tài khoản mặc định để hạch toán thuế GTGT đầu vào.

### Các thiết lập khác

| Thiết lập | Mô tả |
|------------|-------|
| Tài khoản tồn kho mặc định | Tài khoản sử dụng cho hàng tồn kho |
| Tài khoản chi phí mặc định | Tài khoản sử dụng khi không chỉ định tài khoản chi phí cụ thể |
| Tài khoản doanh thu mặc định | Tài khoản sử dụng khi không chỉ định tài khoản doanh thu cụ thể |
| Làm tròn số | Làm tròn số tiền trên hóa đơn và bút toán |
| Số thập phân | Số chữ số thập phân cho các giao dịch kế toán |
| Mẫu báo cáo tài chính | Báo cáo tài chính mặc định cho công ty |

### Thiết lập về công nợ

- **Tuổi nợ công nợ**: Cấu hình các khoảng thời gian để phân tích tuổi nợ công nợ phải thu và phải trả.
- **Giới hạn tín dụng**: Cho phép thiết lập và kiểm tra hạn mức tín dụng cho từng khách hàng.
- **Cảnh báo quá hạn**: Bật/tắt cảnh báo khi hóa đơn đến hạn thanh toán.

### Thiết lập thanh toán

- **Phương thức thanh toán mặc định**: Phương thức thanh toán được chọn tự động.
- **Cho phép thanh toán một phần**: Cho phép thanh toán từng phần trên một hóa đơn.
- **Đối trừ tự động**: Tự động gợi ý các hóa đơn cần đối trừ khi nhận thanh toán.

### Kiểm soát truy cập

- **Chỉ cho phép kế toán trưởng duyệt**: Giới hạn quyền duyệt và ghi sổ cho người dùng có vai trò cụ thể.
- **Yêu cầu mật khẩu khi duyệt**: Tăng cường bảo mật khi thực hiện các thao tác quan trọng.

## Lưu ý quan trọng

- Một số thiết lập chỉ có hiệu lực với giao dịch mới, không ảnh hưởng đến giao dịch đã tạo
- Thay đổi tài khoản mặc định có thể ảnh hưởng đến các báo cáo hiện tại
- Nên kiểm tra và cấu hình đầy đủ trước khi đưa hệ thống vào vận hành chính thức
- Tham khảo ý kiến chuyên gia kế toán để đảm bảo tuân thủ chế độ kế toán hiện hành
