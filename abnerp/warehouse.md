---
title: Kho hàng
---

# Kho hàng

## Giới thiệu

Kho hàng (Warehouse) là nơi lưu trữ hàng hóa, nguyên vật liệu và thành phẩm trong doanh nghiệp. ABNERP cho phép quản lý nhiều kho hàng với cấu trúc phân cấp linh hoạt, phù hợp với mọi mô hình kinh doanh từ kho trung tâm đến các điểm bán lẻ.

## Cấu trúc kho hàng

### Kho hàng phân cấp

Kho hàng trong ABNERP có thể được tổ chức theo cấu trúc cây:

```
Công ty ABC
├── Kho Trung tâm
│   ├── Khu A — Hàng điện tử
│   ├── Khu B — Hàng thời trang
│   └── Khu C — Hàng tồn kho lâu
├── Kho Chi nhánh Hà Nội
├── Kho Chi nhánh Đà Nẵng
├── Kho Chi nhánh TP. HCM
└── Cửa hàng Bán lẻ
    ├── Cửa hàng Quận 1
    └── Cửa hàng Quận 7
```

### Các loại kho

| Loại kho | Mô tả | Ví dụ |
|----------|-------|-------|
| Kho chính | Kho trung tâm, dung lượng lớn | Kho tổng, Kho trung tâm |
| Kho trung chuyển | Hàng tạm thời, chờ chuyển tiếp | Kho cross-docking, bến cảng |
| Kho điểm bán | Hàng tại cửa hàng bán lẻ | Quầy thu ngân, kho cửa hàng |
| Kho sản xuất | Nguyên vật liệu/bán thành phẩm | Kho NVL, kho WIP |
| Kho hỏng/hủy | Hàng lỗi, hư hỏng chờ xử lý | Kho hàng lỗi, kho trả bảo hành |

## Tạo và quản lý kho hàng

### Tạo kho hàng mới

1. Truy cập: **Kho > Kho hàng > Thêm mới**
2. Nhập thông tin:
   - **Tên kho hàng**: Tên hiển thị
   - **Kho cha**: Chọn kho cấp trên (nếu có)
   - **Địa chỉ**: Địa chỉ kho hàng
   - **Người phụ trách**: Nhân viên quản lý kho
   - **Trạng thái**: Đang hoạt động / Ngừng hoạt động

### Chỉnh sửa và vô hiệu hóa

- Có thể chỉnh sửa thông tin kho hàng bất kỳ lúc nào
- Kho hàng có tồn kho không thể xóa được — hãy vô hiệu hóa (Disable) thay thế
- Khi vô hiệu hóa, kho sẽ không hiển thị trong danh sách chọn trên giao dịch mới

## Quản lý tồn kho theo kho

### Tồn kho theo từng kho

ABNERP theo dõi tồn kho riêng biệt cho từng kho hàng. Cùng một mặt hàng có thể có số lượng và giá trị tồn khác nhau ở mỗi kho.

### Chuyển kho

Khi cần điều chuyển hàng giữa các kho, sử dụng giao dịch **Chuyển kho** (Material Transfer):
- Chuyển từ kho A sang kho B
- Hệ thống tự động ghi nhận giảm tồn kho nguồn và tăng tồn kho đích
- Giá trị chuyển kho có thể tính theo giá bình quân hoặc giá nhập

### Báo cáo tồn kho theo kho

| Báo cáo | Mô tả |
|---------|-------|
| Số dư kho | Số lượng và giá trị tồn kho hiện tại |
| Nhập xuất tồn | Biến động tồn kho theo thời gian |
| Nhập xuất tồn theo kho | Biến động chi tiết của từng kho |
| Hàng tồn chậm luân chuyển | Hàng lưu kho lâu ngày |

## Tích hợp

Kho hàng được tích hợp chặt chẽ với các mô-đun khác:

- **Mua hàng**: Chọn kho nhập trên chứng từ mua hàng
- **Bán hàng**: Chọn kho xuất trên đơn bán hàng, hóa đơn
- **Sản xuất**: Kho nguyên vật liệu và kho thành phẩm
- **Bán lẻ (POS)**: Kho của từng điểm bán

## Mẹo quản lý kho hiệu quả

- Sử dụng cấu trúc kho phân cấp để quản lý rõ ràng
- Đặt tên kho theo quy tắc nhất quán
- Kiểm kê định kỳ để đảm bảo khớp đúng giữa hệ thống và thực tế
- Thiết lập tồn kho tối thiểu để nhận cảnh báo tái đặt hàng
- Phân quyền người dùng chỉ truy cập được kho được phân công
- Sử dụng báo cáo hàng tồn chậm luân chuyển để tối ưu vốn lưu động
