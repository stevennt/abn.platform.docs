---
title: Sơ đồ Tài khoản
---

# Sơ đồ Tài khoản

## Giới thiệu

Sơ đồ Tài khoản (Chart of Accounts) là xương sống của hệ thống kế toán trong ABNERP. Đây là danh sách đầy đủ các tài khoản được sử dụng để ghi chép, phân loại và báo cáo các giao dịch tài chính của doanh nghiệp. Mỗi tài khoản đại diện cho một hạng mục cụ thể như tài sản, nợ phải trả, vốn chủ sở hữu, doanh thu hoặc chi phí.

## Cấu trúc Sơ đồ Tài khoản

Sơ đồ Tài khoản trong ABNERP được tổ chức theo cấu trúc phân cấp, bao gồm các nhóm và tài khoản con:

### Các nhóm tài khoản chính

| Nhóm | Mô tả | Ví dụ |
|------|-------|-------|
| Tài sản (Assets) | Nguồn lực của doanh nghiệp | Tiền mặt, Phải thu khách hàng, Hàng tồn kho |
| Nợ phải trả (Liabilities) | Nghĩa vụ tài chính | Phải trả nhà cung cấp, Vay ngân hàng |
| Vốn chủ sở hữu (Equity) | Vốn và lợi nhuận giữ lại | Vốn góp, Lợi nhuận giữ lại |
| Doanh thu (Revenue) | Thu nhập từ hoạt động | Doanh thu bán hàng, Doanh thu dịch vụ |
| Chi phí (Expenses) | Chi phí hoạt động | Tiền lương, Tiền thuê nhà, Nguyên vật liệu |

## Thiết lập Sơ đồ Tài khoản

### Tạo mới Công ty

Khi tạo một Công ty mới trong ABNERP, hệ thống tự động tạo Sơ đồ Tài khoản mặc định dựa trên quốc gia và ngành nghề của doanh nghiệp. Bạn có thể tùy chỉnh sơ đồ này sau đó.

### Thêm tài khoản mới

1. Truy cập: **Kế toán > Sơ đồ Tài khoản**
2. Nhấn **Thêm tài khoản mới**
3. Nhập thông tin:
   - **Mã tài khoản**: Mã định danh duy nhất
   - **Tên tài khoản**: Tên hiển thị
   - **Nhóm tài khoản cha**: Chọn nhóm hoặc tài khoản cha
   - **Loại tài khoản**: Xác định loại (Tài sản, Nợ, Vốn, Doanh thu, Chi phí)
   - **Báo cáo mặc định**: Chọn báo cáo tài chính mà tài khoản này thuộc về

### Chỉnh sửa tài khoản

Bạn có thể chỉnh sửa tài khoản bất kỳ lúc nào. Lưu ý rằng việc thay đổi nhóm cha có thể ảnh hưởng đến báo cáo tài chính.

### Vô hiệu hóa tài khoản

Tài khoản không còn sử dụng có thể bị vô hiệu hóa thay vì xóa để đảm bảo tính toàn vẹn của dữ liệu lịch sử.

## Các tài khoản tiêu chuẩn

ABNERP cung cấp Sơ đồ Tài khoản mặc định bao gồm:

- **1110 - Tiền mặt**: Ghi nhận tiền mặt tại quỹ
- **1120 - Tiền gửi ngân hàng**: Tài khoản ngân hàng
- **1310 - Phải thu khách hàng**: Công nợ phải thu
- **1560 - Hàng tồn kho**: Giá trị hàng tồn kho
- **2110 - Phải trả nhà cung cấp**: Công nợ phải trả
- **5110 - Doanh thu bán hàng**: Doanh thu từ bán hàng hóa
- **6210 - Giá vốn hàng bán**: Chi phí hàng bán
- **6410 - Chi phí bán hàng**: Chi phí liên quan đến bán hàng

## Tích hợp với các mô-đun khác

Sơ đồ Tài khoản được liên kết với các mô-đun khác trong ABNERP:

- **Kho**: Tài khoản hàng tồn kho mặc định cho từng mặt hàng
- **Mua hàng**: Tài khoản chi phí và công nợ phải trả
- **Bán hàng**: Tài khoản doanh thu và công nợ phải thu
- **Nhân sự**: Tài khoản lương và các khoản trích theo lương

## Mẹo và lưu ý

- Nên lập kế hoạch Sơ đồ Tài khoản trước khi triển khai
- Không xóa tài khoản đã phát sinh giao dịch — hãy vô hiệu hóa thay thế
- Sử dụng mã số tài khoản nhất quán để dễ dàng báo cáo hợp nhất
- Tham khảo ý kiến kế toán viên hoặc chuyên gia thuế khi thiết lập
