---
title: Mặt hàng
---

# Mặt hàng

## Mặt hàng là gì?

**Mặt hàng** (Item) là sản phẩm hoặc dịch vụ mà doanh nghiệp của bạn mua, bán, hoặc sản xuất. Đây là một trong những danh mục dữ liệu quan trọng nhất trong ABNERP — hầu hết các giao dịch nghiệp vụ (bán hàng, mua hàng, sản xuất, kho vận) đều liên quan đến mặt hàng.

## Phân loại mặt hàng

ABNERP hỗ trợ các loại mặt hàng sau:

| Loại mặt hàng | Mô tả | Ví dụ |
|---|---|---|
| **Nguyên vật liệu** | Vật liệu thô dùng trong quá trình sản xuất | Vải, thép, nhựa, linh kiện điện tử |
| **Bán thành phẩm** | Sản phẩm đã qua một công đoạn sản xuất, cần gia công thêm | Vỏ điện thoại chưa lắp ráp, bánh đã nướng sẵn |
| **Thành phẩm** | Sản phẩm hoàn chỉnh sẵn sàng bán ra thị trường | Điện thoại, máy tính, bàn ghế |
| **Biến thể** | Các phiên bản khác nhau của cùng một mặt hàng gốc (kích thước, màu sắc) | Áo thun màu đỏ size XL, Áo thun màu xanh size M |
| **Dịch vụ** | Các dịch vụ cung cấp cho khách hàng | Tư vấn, bảo trì, vận chuyển, lắp đặt |
| **Bộ sản phẩm** | Nhóm sản phẩm được bán kèm với nhau | Combo văn phòng phẩm, giỏ quà tết |

## Tạo mặt hàng mới

### Các bước thực hiện

1. Truy cập **Trang chủ > Kho > Mặt hàng** (hoặc tìm kiếm "Mặt hàng" trên thanh tìm kiếm)
2. Nhấn **+ Thêm Mặt hàng**
3. Điền thông tin chi tiết
4. Nhấn **Lưu**

### Các trường thông tin chính

| Trường | Bắt buộc | Mô tả |
|---|---|---|
| **Mã mặt hàng** | Có | Mã định danh duy nhất của mặt hàng (tự động sinh hoặc nhập thủ công) |
| **Tên mặt hàng** | Có | Tên hiển thị của mặt hàng |
| **Loại mặt hàng** | Có | Phân loại: Nguyên vật liệu, Bán thành phẩm, Thành phẩm, Dịch vụ, v.v. |
| **Đơn vị đo lường (UOM)** | Có | Đơn vị tính mặc định: cái, kg, mét, giờ, v.v. |
| **Nhóm mặt hàng** | Không | Phân nhóm để lọc và báo cáo (ví dụ: Điện tử, Thời trang) |
| **Giá bán mặc định** | Không | Giá niêm yết mặc định |
| **Giá mua mặc định** | Không | Giá nhập kho mặc định |
| **Mô tả** | Không | Mô tả chi tiết về mặt hàng |
| **Thuế** | Không | Thuế suất VAT áp dụng cho mặt hàng |
| **Hình ảnh** | Không | Hình ảnh minh họa cho mặt hàng |

## Nhóm mặt hàng

**Nhóm mặt hàng** (Item Group) giúp bạn phân loại và tổ chức danh mục mặt hàng theo cấu trúc cây. Ví dụ:

```
Tất cả nhóm mặt hàng
├── Điện tử
│   ├── Điện thoại
│   ├── Máy tính
│   └── Phụ kiện
├── Thời trang
│   ├── Quần áo
│   └── Giày dép
└── Văn phòng phẩm
    ├── Giấy in
    ├── Bút viết
    └── Bàn ghế
```

Bạn có thể tạo nhóm mặt hàng mới tại **Trang chủ > Kho > Nhóm mặt hàng**.

## Đơn vị tính

**Đơn vị đo lường** (Unit of Measure - UOM) xác định cách tính số lượng của mặt hàng. Một mặt hàng có thể có nhiều đơn vị tính chuyển đổi qua lại. Ví dụ:

| Mặt hàng | Đơn vị cơ bản | Đơn vị chuyển đổi | Tỷ lệ |
|---|---|---|---|
| Gạo | kg | tạ | 1 tạ = 100 kg |
| Nước ngọt | lon | thùng | 1 thùng = 24 lon |
| Vải | mét | cuộn | 1 cuộn = 50 mét |

Để thiết lập chuyển đổi đơn vị tính, vào **Trang chủ > Kho > Chuyển đổi đơn vị tính** hoặc cấu hình trực tiếp trong form mặt hàng.

## Biến thể mặt hàng

Biến thể (Item Variant) cho phép bạn tạo nhiều phiên bản của cùng một mặt hàng gốc dựa trên các thuộc tính. Ví dụ:

- **Áo sơ mi**: Màu sắc (trắng, xanh, đen), Kích cỡ (S, M, L, XL)
- **Bàn gỗ**: Chất liệu (gỗ sồi, gỗ óc chó), Kích thước (1.2m, 1.6m, 2m)

Cách tạo biến thể:
1. Tạo mặt hàng gốc (Template Item)
2. Đánh dấu **Có biến thể** (Has Variants)
3. Định nghĩa các thuộc tính biến thể (Item Attributes)
4. Hệ thống tự động tạo các biến thể dựa trên tổ hợp thuộc tính

## Quản lý tồn kho theo mặt hàng

Sau khi tạo mặt hàng, bạn có thể:

- **Nhập kho**: Tăng số lượng tồn kho
- **Xuất kho**: Giảm số lượng tồn kho
- **Chuyển kho**: Di chuyển hàng giữa các kho
- **Kiểm kê**: Điều chỉnh số lượng thực tế
- **Theo dõi lịch sử**: Xem nhật ký nhập xuất của từng mặt hàng

## Mẹo và lưu ý

- Sử dụng mã mặt hàng có cấu trúc (ví dụ: SP-001, NVL-002) để dễ quản lý
- Thiết lập nhóm mặt hàng ngay từ đầu để dễ dàng lọc và báo cáo sau này
- Với mặt hàng có nhiều đơn vị tính, hãy thiết lập chuyển đổi để hệ thống tự động quy đổi khi nhập xuất
- Kích hoạt tính năng **Theo dõi số lô** (Serial Number) hoặc **Theo dõi lô** (Batch) cho mặt hàng cần quản lý đặc biệt
