---
title: Thiết lập Kho
---

# Thiết lập Kho

## Tổng quan

Thiết lập Kho (Stock Settings) cho phép bạn cấu hình các hành vi mặc định cho mô-đun Kho trong ABNERP. Các thiết lập này ảnh hưởng trực tiếp đến cách hệ thống xử lý nhập xuất tồn, tính giá vốn và kiểm soát hàng tồn kho.

## Cách truy cập

Vào **Kho > Thiết lập > Thiết lập Kho**, hoặc tìm kiếm "Thiết lập Kho" từ thanh tìm kiếm toàn cầu.

## Các thiết lập chính

### Phương pháp tính giá xuất kho

ABNERP hỗ trợ các phương pháp tính giá xuất kho sau:

| Phương pháp | Mô tả | Phù hợp |
|-------------|-------|---------|
| FIFO (First In, First Out) | Hàng nhập trước xuất trước | Hàng hóa có hạn sử dụng, thời trang |
| Bình quân gia quyền (Moving Average) | Giá trị bình quân sau mỗi lần nhập | Hàng hóa thông thường |

Việc chọn phương pháp ảnh hưởng trực tiếp đến giá vốn hàng bán và giá trị tồn kho.

### Tồn kho âm

- **Cho phép tồn kho âm**: Khi bật, hệ thống cho phép xuất hàng ngay cả khi tồn kho không đủ. Chỉ nên bật trong một số trường hợp đặc biệt.
- **Cảnh báo tồn kho âm**: Hiển thị cảnh báo khi cố gắng xuất vượt quá tồn kho hiện có.

### Cập nhật tồn kho

- **Cập nhật tồn kho tự động**: Tự động cập nhật số lượng tồn kho khi lưu giao dịch.
- **Tồn kho theo thời gian thực**: Đảm bảo số liệu tồn kho luôn chính xác theo thời gian thực.
- **Cập nhật hàng loạt**: Cho phép cập nhật giá và tồn kho hàng loạt cho nhiều mặt hàng.

### Thiết lập kho mặc định

| Thiết lập | Mô tả |
|------------|-------|
| Kho nhập mặc định | Kho được chọn tự động khi nhập hàng |
| Kho xuất mặc định | Kho được chọn tự động khi xuất hàng |
| Kho trung chuyển | Kho dùng trong giao dịch chuyển kho |

### Đơn vị tính

- **Đơn vị tính mặc định**: Đơn vị tính được chọn tự động khi tạo mặt hàng mới.
- **Chuyển đổi đơn vị**: Cho phép nhập/xuất hàng ở đơn vị tính khác với đơn vị cơ bản.

### Kiểm soát chất lượng

- **Kiểm tra chất lượng khi nhập kho**: Yêu cầu thực hiện kiểm tra chất lượng trước khi nhập.
- **Kiểm tra chất lượng khi xuất kho**: Yêu cầu kiểm tra chất lượng trước khi xuất.
- **Mẫu kiểm tra mặc định**: Mẫu kiểm tra chất lượng được áp dụng tự động.

### Lô và Serial Number

- **Tự động tạo số lô**: Tự động sinh số lô dựa trên mẫu định trước.
- **Bắt buộc Serial Number**: Yêu cầu nhập serial number cho mặt hàng có quản lý serial.
- **Kiểm tra trùng lặp Serial**: Ngăn nhập serial number đã tồn tại.

### Sản xuất và Lắp ráp

- **Tự động tạo phiếu xuất nguyên vật liệu**: Khi tạo lệnh sản xuất, hệ thống tự động tạo phiếu xuất NVL.
- **Tự động tạo phiếu nhập thành phẩm**: Khi hoàn thành sản xuất, hệ thống tự động nhập kho thành phẩm.

### Báo cáo và hiển thị

- **Định dạng báo cáo**: Chọn định dạng hiển thị cho các báo cáo kho (số lượng, giá trị, cả hai).
- **Số thập phân**: Số chữ số thập phân hiển thị cho số lượng và đơn giá.

## Lưu ý quan trọng

- Phương pháp tính giá xuất kho KHÔNG thể thay đổi sau khi đã phát sinh giao dịch
- Cho phép tồn kho âm tiềm ẩn rủi ro sai lệch số liệu — nên tắt trừ trường hợp thực sự cần
- Nên kiểm tra kỹ các thiết lập trước khi đưa hệ thống vào sử dụng chính thức
- Thay đổi kho mặc định chỉ ảnh hưởng đến giao dịch mới tạo sau khi thay đổi
