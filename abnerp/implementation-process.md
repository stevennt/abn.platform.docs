---
title: Quy trình Triển khai
---

# Quy trình Triển khai ABNERP

Việc triển khai một hệ thống ERP có thể được hiểu theo hai nghĩa:

1. **Triển khai cho một tổ chức khách hàng** — cài đặt và cấu hình ERP cho doanh nghiệp.
2. **Tạo một hồ sơ Khách hàng** trong mô-đun CRM/Bán hàng của ERP.

Tài liệu này hướng dẫn quy trình triển khai ABNERP chuyên nghiệp cho một tổ chức khách hàng.

```
Bán hàng
  ↓
Khám phá
  ↓
Phân tích nghiệp vụ
  ↓
Phân tích Fit-Gap
  ↓
Thiết kế giải pháp
  ↓
Cấu hình ERP
  ↓
Di chuyển dữ liệu
  ↓
Kiểm thử
  ↓
Đào tạo
  ↓
Kiểm thử chấp nhận người dùng (UAT)
  ↓
Vận hành chính thức
  ↓
Hypercare
  ↓
Hỗ trợ liên tục
```

## Giai đoạn 1 — Khám phá (Discovery)

Mục tiêu là hiểu rõ doanh nghiệp của khách hàng trước khi chạm vào hệ thống.

Các hoạt động điển hình:

- Họp khởi động dự án
- Xác định phạm vi dự án
- Nhận diện các bên liên quan
- Tìm hiểu mục tiêu kinh doanh
- Xác định tiêu chí thành công
- Xác định lộ trình triển khai

Kết quả bàn giao:

- Điều lệ dự án (Project Charter)
- Tài liệu phạm vi
- Lịch trình tổng thể

---

## Giai đoạn 2 — Phân tích quy trình nghiệp vụ

Nhóm triển khai phỏng vấn từng phòng ban.

**Bán hàng:**

- Báo giá được phê duyệt thế nào?
- Giá cả được quản lý ra sao?
- Hoa hồng được tính thế nào?

**Mua hàng:**

- Quy trình phê duyệt nhà cung cấp
- Phê duyệt đơn mua hàng
- Quy trình nhận hàng

**Kho:**

- Cấu trúc kho hàng
- Cách đặt mã mặt hàng
- Theo dõi lô hàng
- Số seri

**Kế toán:**

- Sơ đồ tài khoản
- Quy tắc thuế
- Trung tâm chi phí
- Năm tài chính

**Nhân sự:**

- Nghỉ phép
- Bảng lương
- Chấm công

Đây thường được gọi là phân tích **AS-IS** (thực trạng), sau đó thiết kế quy trình **TO-BE** (mục tiêu).

---

## Giai đoạn 3 — Phân tích Fit-Gap

Với mỗi yêu cầu nghiệp vụ, xác định ERP đã hỗ trợ sẵn hay cần tùy chỉnh.

| Yêu cầu | ERP Chuẩn | Tùy chỉnh |
|---|---|---|
| Đơn bán hàng | ✓ | |
| Quy trình phê duyệt | ✓ | |
| Thuế VAT | ✓ | |
| Chứng từ tùy chỉnh | | ✓ |
| Logic định giá đặc biệt | | ✓ |
| Tích hợp hệ thống khác | | ✓ |

Nguyên tắc: sử dụng tính năng chuẩn của ERP tối đa có thể, hạn chế tùy chỉnh để dễ nâng cấp.

---

## Giai đoạn 4 — Thiết kế giải pháp

Thiết kế cấu hình ERP:

- Công ty
- Chi nhánh
- Kho hàng
- Trung tâm chi phí
- Phòng ban
- Người dùng
- Vai trò
- Phân quyền
- Chuỗi đặt tên
- Sơ đồ đánh số
- Quy trình phê duyệt

Đồng thời xác định:

- Trường tùy chỉnh
- Định dạng in
- Báo cáo
- Bảng điều khiển
- Tích hợp

---

## Giai đoạn 5 — Cấu hình ERP

Cấu hình ERP mà không cần viết code nếu có thể:

- Công ty
- Tiền tệ
- Năm tài chính
- Thuế
- Nhóm mặt hàng
- Nhóm khách hàng
- Nhóm nhà cung cấp
- Bảng giá
- Quy trình làm việc
- Vai trò
- Email
- Thông báo

---

## Giai đoạn 6 — Phát triển tùy chỉnh (nếu cần)

Chỉ bắt đầu phát triển tùy chỉnh sau khi cấu hình chuẩn hoàn tất.

Ví dụ:

- Loại chứng từ tùy chỉnh
- Client Scripts
- Server Scripts
- Ứng dụng tùy chỉnh
- Tích hợp API
- Báo cáo và bảng điều khiển

---

## Giai đoạn 7 — Di chuyển dữ liệu

Nhập dữ liệu kinh doanh hiện tại vào hệ thống.

**Dữ liệu danh mục:**

- Khách hàng
- Nhà cung cấp
- Mặt hàng
- Nhân viên
- Tài sản

**Số dư đầu kỳ:**

- Tồn kho
- Khoản phải thu
- Khoản phải trả
- Sổ cái

**Giao dịch (nếu cần):**

- Đơn bán hàng
- Đơn mua hàng
- Tồn kho
- Sản xuất

Dữ liệu thường được làm sạch và kiểm tra trước khi nhập để giảm thiểu vấn đề sau vận hành.

---

## Giai đoạn 8 — Kiểm thử

Kiểm thử bao gồm:

- Kiểm thử đơn vị
- Kiểm thử tích hợp
- Kiểm thử quy trình nghiệp vụ
- Kiểm thử bảo mật
- Kiểm thử hiệu năng

Các phòng ban thực hiện các kịch bản thực tế:

```
Khách hàng tiềm năng
 ↓
Báo giá
 ↓
Đơn bán hàng
 ↓
Giao hàng
 ↓
Hóa đơn
 ↓
Thu tiền
```

---

## Giai đoạn 9 — Đào tạo

Đào tạo riêng từng nhóm người dùng:

- Bán hàng
- Mua hàng
- Kho
- Kế toán
- Nhân sự
- Quản lý
- Quản trị hệ thống

---

## Giai đoạn 10 — Kiểm thử chấp nhận người dùng (UAT)

Người dùng thực tế xác nhận:

- Quy trình hoạt động đúng
- Báo cáo đáp ứng yêu cầu
- Chứng từ chính xác
- Phân quyền đúng
- Dữ liệu đầy đủ

Chỉ khi được phê duyệt chính thức mới chuyển sang vận hành thực tế.

---

## Giai đoạn 11 — Vận hành chính thức (Go Live)

Các hoạt động chuyển đổi điển hình:

- Đóng băng hệ thống cũ
- Di chuyển dữ liệu lần cuối
- Xác minh số dư đầu kỳ
- Kích hoạt người dùng sản xuất
- Giám sát giao dịch quan trọng

---

## Giai đoạn 12 — Hypercare

Trong vài tuần đầu sau khi ra mắt:

- Hỗ trợ hàng ngày
- Sửa lỗi
- Trợ giúp người dùng
- Giám sát hiệu năng
- Đào tạo bổ sung

---

## Giai đoạn 13 — Cải tiến liên tục

Sau khi ổn định, doanh nghiệp thường bổ sung:

- Mô-đun mới
- Cải tiến quy trình
- Tự động hóa
- Tích hợp
- Bảng điều khiển BI
- Truy cập di động

---

## Phương pháp luận triển khai chuẩn

Để chuyên nghiệp hóa quy trình triển khai, có thể xây dựng một phương pháp luận chuẩn gồm 14 bước:

1. Khám phá và đánh giá
2. Đánh giá kiến trúc doanh nghiệp
3. Đánh giá mức độ sẵn sàng số hóa
4. Phân tích Fit-Gap
5. Bản thiết kế giải pháp
6. Cấu hình ERP
7. Phát triển tùy chỉnh
8. Di chuyển dữ liệu
9. Kiểm thử và đảm bảo chất lượng
10. Đào tạo và quản lý thay đổi
11. Chuyển đổi sản xuất
12. Hypercare
13. Dịch vụ quản lý
14. Tối ưu hóa liên tục

Đây là khung tư vấn có thể tái sử dụng cho các dự án chuyển đổi số trong tương lai, với ABNERP là một trong những nền tảng triển khai.
