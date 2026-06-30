---
title: Số dư đầu kỳ
---

# Số dư đầu kỳ

**Số dư đầu kỳ (Opening Balance)** là số dư của các tài khoản kế toán tại thời điểm bắt đầu sử dụng ABNERP hoặc đầu năm tài chính. Thiết lập số dư đầu kỳ chính xác là nền tảng để hệ thống kế toán vận hành đúng đắn và báo cáo tài chính phản ánh trung thực tình hình doanh nghiệp.

## Khi nào cần thiết lập?

- **Triển khai ABNERP lần đầu**: chuyển đổi dữ liệu kế toán từ hệ thống hoặc phần mềm cũ
- **Đầu năm tài chính**: nhập số dư của các tài khoản cho năm tài chính mới
- **Công ty mới**: thiết lập số dư ban đầu khi thành lập công ty

## Quy trình thiết lập

### Bước 1: Chuẩn bị bảng cân đối thử

Trước khi nhập, cần chuẩn bị **Bảng cân đối thử (Trial Balance)** tại thời điểm chốt — với số dư Nợ và số dư Có của tất cả tài khoản kế toán. Đảm bảo tổng số dư Nợ bằng tổng số dư Có trước khi nhập vào ABNERP.

### Bước 2: Nhập số dư đầu kỳ

Vào **Kế toán > Công cụ > Nhập số dư đầu kỳ**. Các bước thực hiện:

1. **Chọn năm tài chính**: chọn năm tài chính áp dụng cho số dư đầu kỳ
2. **Nhập số dư cho từng tài khoản**: có thể nhập thủ công hoặc nhập từ tệp Excel
3. **Xác nhận cân đối**: hệ thống tự động kiểm tra tổng Nợ = tổng Có

### Bước 3: Kiểm tra và xác nhận

Sau khi nhập, kiểm tra lại số dư các tài khoản trong **Sơ đồ tài khoản (Chart of Accounts)**. Các tài khoản sẽ hiển thị số dư đầu kỳ trong các báo cáo kế toán.

## Tài khoản cần thiết lập

Các tài khoản thường cần nhập số dư đầu kỳ bao gồm:

| Loại tài khoản | Ví dụ |
|---|---|
| **Tài sản ngắn hạn** | Tiền mặt, Tiền gửi ngân hàng, Khoản phải thu khách hàng, Hàng tồn kho |
| **Tài sản dài hạn** | Tài sản cố định, Khấu hao lũy kế, Đầu tư tài chính |
| **Nợ phải trả** | Khoản phải trả người bán, Thuế phải nộp, Vay ngắn hạn |
| **Vốn chủ sở hữu** | Vốn góp, Lợi nhuận chưa phân phối |
| **Doanh thu/Chi phí** | Các tài khoản doanh thu và chi phí (nếu có số dư lũy kế) |

### Lưu ý quan trọng

- **Cân đối bắt buộc**: Tổng số dư Nợ phải bằng tổng số dư Có, nếu không hệ thống sẽ không cho phép lưu
- **Tài khoản con**: Nếu nhập số dư cho tài khoản cha, số dư sẽ tự động phân bổ cho các tài khoản con
- **Không thay đổi sau khi duyệt**: Sau khi đã duyệt và có giao dịch phát sinh, không nên sửa số dư đầu kỳ — hãy điều chỉnh bằng bút toán điều chỉnh
- **Sao lưu dữ liệu**: Luôn sao lưu cơ sở dữ liệu trước khi thực hiện nhập số dư đầu kỳ hàng loạt
