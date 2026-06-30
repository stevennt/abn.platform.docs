---
title: Mua hàng
sidebar_position: 2
---

# Mua hàng

Mô-đun Mua hàng trong ABNERP quản lý toàn bộ quy trình thu mua từ khi xác định nhu cầu, tìm kiếm nhà cung cấp, đàm phán giá cả, cho đến khi nhập hàng và thanh toán. Mô-đun này tích hợp chặt chẽ với Kho, Kế toán và Sản xuất để đảm bảo chuỗi cung ứng vận hành liền mạch.

## Nhà cung cấp (Supplier)

Danh sách nhà cung cấp được quản lý tập trung với các thông tin: tên, mã số thuế, địa chỉ, thông tin liên hệ, điều khoản thanh toán, và lịch sử giao dịch. ABNERP cho phép đánh giá và xếp hạng nhà cung cấp dựa trên chất lượng hàng hóa, thời gian giao hàng và giá cả. Thông tin nhà cung cấp có thể được nhập khẩu từ file Excel hoặc đồng bộ từ các hệ thống khác.

## Yêu cầu báo giá (Request for Quotation — RFQ)

Khi có nhu cầu mua hàng, bạn có thể gửi RFQ đến nhiều nhà cung cấp cùng lúc. Hệ thống cho phép tạo RFQ từ yêu cầu mua hàng nội bộ hoặc từ mức tồn kho tối thiểu. Bạn có thể theo dõi trạng thái RFQ, so sánh giá giữa các nhà cung cấp và chọn ra phương án tốt nhất. Các RFQ có thể được gửi qua email trực tiếp từ hệ thống.

## Báo giá nhà cung cấp (Supplier Quotation)

Khi nhà cung cấp phản hồi RFQ, bạn nhập báo giá của họ vào hệ thống. ABNERP hỗ trợ so sánh báo giá giữa nhiều nhà cung cấp dựa trên giá, thời gian giao hàng và điều khoản thanh toán. Báo giá được chấp nhận có thể chuyển đổi thành đơn mua hàng chỉ với một thao tác.

## Đơn mua hàng (Purchase Order)

Đơn mua hàng là văn bản pháp lý xác nhận việc đặt hàng với nhà cung cấp. Khi đơn mua hàng được tạo, hệ thống tự động cập nhật trạng thái và cho phép theo dõi toàn bộ quy trình: Chờ xác nhận, Đã xác nhận, Đang giao hàng, Đã nhập kho một phần, Đã nhập kho đủ, và Hoàn thành. Đơn mua hàng cũng kích hoạt quy trình kiểm tra ngân sách nếu được cấu hình.

## Hóa đơn mua hàng (Purchase Invoice)

Hóa đơn mua hàng được tạo từ đơn mua hàng đã nhập kho. Hệ thống đối chiếu hóa đơn với phiếu nhập kho để phát hiện sai lệch về số lượng và giá cả. ABNERP hỗ trợ quy trình 3-way matching: đối chiếu giữa đơn mua hàng, phiếu nhập kho và hóa đơn mua hàng, giúp ngăn ngừa gian lận và sai sót. Hóa đơn mua hàng ghi nhận công nợ phải trả và cập nhật sổ kế toán tương ứng.

## Tích hợp liên mô-đun

Mô-đun Mua hàng tích hợp với mô-đun Kho để tự động tạo phiếu nhập kho khi hàng về, với mô-đun Kế toán để ghi nhận công nợ và thanh toán, và với mô-đun Sản xuất để đặt mua nguyên vật liệu dựa trên định mức sản xuất. Báo cáo mua hàng cung cấp cái nhìn tổng quan về chi tiêu theo nhà cung cấp, theo sản phẩm và theo thời gian, hỗ trợ doanh nghiệp tối ưu hóa chi phí thu mua.
