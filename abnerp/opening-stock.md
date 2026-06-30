---
title: Tồn kho đầu kỳ
---

# Tồn kho đầu kỳ

**Tồn kho đầu kỳ (Opening Stock)** là số lượng hàng tồn kho thực tế tại thời điểm bắt đầu sử dụng ABNERP. Việc thiết lập chính xác số dư tồn kho đầu kỳ là bước quan trọng để đảm bảo số liệu kế toán và quản lý kho chính xác ngay từ đầu.

## Khi nào cần thiết lập?

Thiết lập tồn kho đầu kỳ cần thực hiện trong các trường hợp sau:

- **Triển khai ABNERP lần đầu**: chuyển đổi từ hệ thống cũ hoặc từ quản lý thủ công sang ABNERP
- **Đầu năm tài chính mới**: nhập số dư tồn kho đầu kỳ cho năm tài chính
- **Thêm kho mới**: khi mở thêm kho hoặc chi nhánh mới
- **Sau kiểm kê**: cập nhật số dư thực tế sau khi kiểm kê kho

## Quy trình thiết lập

### Bước 1: Chuẩn bị dữ liệu

Lập danh sách tất cả mặt hàng hiện có trong kho với các thông tin:
- Mã mặt hàng và tên mặt hàng (khớp với mã hàng trong hệ thống)
- Số lượng tồn thực tế
- Đơn vị tính
- Giá vốn bình quân hoặc giá nhập cuối
- Kho chứa hàng

### Bước 2: Sử dụng công cụ Nhập kho đầu kỳ

Vào **Kho > Công cụ > Nhập số dư đầu kỳ** và chọn **Nhập tồn kho đầu kỳ (Opening Stock Entry)**. Có hai cách thực hiện:

- **Nhập thủ công**: thêm từng mặt hàng, số lượng và giá trị vào bảng
- **Nhập từ tệp**: tải mẫu Excel, điền dữ liệu và nhập hàng loạt

### Bước 3: Xác nhận và hạch toán

Sau khi nhập đầy đủ thông tin, hệ thống sẽ tạo một **Phiếu nhập kho (Stock Entry)** với loại "Nhập kho đầu kỳ". Phiếu này sẽ:

- Cập nhật số dư tồn kho cho từng mặt hàng và từng kho
- Hạch toán giá trị tồn kho tương ứng vào tài khoản kế toán hàng tồn kho
- Ghi nhận bút toán đối ứng vào tài khoản "Chênh lệch tồn kho đầu kỳ"

### Xác minh số dư

Sau khi nhập, kiểm tra lại bằng cách:

1. Vào **Kho > Báo cáo > Số dư kho (Stock Balance Report)**
2. So sánh số lượng và giá trị hiển thị với số liệu thực tế
3. Kiểm tra bút toán kế toán trong **Sổ cái (General Ledger)**

> **Lưu ý**: Nếu phát hiện sai sót, có thể hủy bỏ (Cancel) phiếu nhập tồn kho đầu kỳ và tạo lại. Không nên sửa trực tiếp số dư tồn kho — hãy dùng công cụ này để đảm bảo tính nhất quán và kiểm toán được.
