---
title: Kho
---

# Kho

## Tổng quan

Quản lý tồn kho là cốt lõi của mọi doanh nghiệp sản xuất và thương mại. Mô-đun Kho (Stock) trong ABNERP cung cấp các công cụ toàn diện để theo dõi, kiểm soát và tối ưu hóa hàng tồn kho theo thời gian thực. Từ nhập xuất hàng ngày đến kiểm kê cuối kỳ, hệ thống đảm bảo tính chính xác và minh bạch của mọi giao dịch kho.

## Các giao dịch chính

### 1. Nhập kho (Stock Entry — Material Receipt)

Ghi nhận hàng hóa, nguyên vật liệu đi vào kho:
- Mua hàng từ nhà cung cấp
- Nhập kho thành phẩm từ sản xuất
- Nhập kho trả lại từ khách hàng
- Nhập kho điều chỉnh tăng

### 2. Xuất kho (Stock Entry — Material Issue)

Ghi nhận hàng hóa, nguyên vật liệu đi ra khỏi kho:
- Xuất nguyên vật liệu cho sản xuất
- Xuất bán cho khách hàng
- Xuất trả lại nhà cung cấp
- Xuất hủy, xuất điều chỉnh giảm

### 3. Chuyển kho (Stock Entry — Material Transfer)

Chuyển hàng giữa các kho hoặc giữa các vị trí trong cùng một kho:
- Chuyển kho nội bộ
- Chuyển hàng đến điểm bán lẻ
- Chuyển hàng giữa các chi nhánh

### 4. Kiểm kê (Stock Reconciliation)

Kiểm kê giúp đối chiếu số lượng hàng tồn kho thực tế với số liệu trên hệ thống:
- **Kiểm kê định kỳ**: Cuối tháng/quý/năm
- **Kiểm kê luân chuyển**: Kiểm tra từng nhóm hàng theo lịch
- Điều chỉnh chênh lệch tồn kho sau kiểm kê

## Các chủ đề liên quan

### Thiết lập Kho

Cấu hình các tham số mặc định cho toàn bộ mô-đun Kho như phương pháp tính giá xuất kho (FIFO, bình quân gia quyền), đơn vị tính mặc định, kiểm tra tồn kho âm, v.v. Xem chi tiết tại [Thiết lập Kho](/abnerp/stock-settings).

### Kho hàng

Danh sách các kho hàng trong doanh nghiệp. Mỗi kho có thể được phân loại theo:
- **Loại kho**: Kho chính, kho trung chuyển, kho điểm bán
- **Địa điểm**: Kho A, kho B, kho C
- **Trạng thái**: Đang hoạt động, tạm ngừng

Xem thêm tại [Kho hàng](/abnerp/warehouse).

### Mặt hàng

Danh mục tất cả hàng hóa, nguyên vật liệu, thành phẩm, dịch vụ. Mỗi mặt hàng có thể được quản lý với:
- Mã hàng, tên hàng, mô tả
- Đơn vị tính cơ bản và các đơn vị tính thay thế
- Giá nhập, giá bán, tồn kho tối thiểu/tối đa
- Hình ảnh, mã vạch, thuế suất
- Tài khoản kế toán mặc định (tồn kho, doanh thu, chi phí)

### Nhóm mặt hàng

Phân nhóm mặt hàng theo chủng loại để thuận tiện trong quản lý và báo cáo:
- Ví dụ: Điện tử, Thời trang, Thực phẩm, Văn phòng phẩm
- Mỗi nhóm có thể có thuế suất, tài khoản kế toán mặc định riêng

### Đơn vị tính (UOM)

Quản lý các đơn vị tính và tỷ lệ quy đổi giữa chúng:
- Cái, hộp, thùng, kg, mét, lít
- Chuyển đổi giữa các đơn vị: 1 thùng = 12 cái
- Đơn vị tính cơ bản và đơn vị tính báo cáo

### Lô và Serial Number

- **Quản lý theo lô**: Theo dõi hàng hóa theo lô sản xuất, hạn sử dụng
- **Serial Number**: Quản lý từng đơn vị sản phẩm riêng lẻ (IMSI, số khung, số máy)

## Video hướng dẫn

- [Quản lý kho trên ABNERP](https://www.youtube.com/watch?v=example5)
- [Hướng dẫn nhập xuất kho](https://www.youtube.com/watch?v=example6)
- [Kiểm kê và điều chỉnh tồn kho](https://www.youtube.com/watch?v=example7)
- [Quản lý lô và serial number](https://www.youtube.com/watch?v=example8)
