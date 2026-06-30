import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  title: 'ABNERP',
  description: 'Tài liệu hướng dẫn sử dụng ABNERP - Hệ thống Hoạch định Nguồn lực Doanh nghiệp',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'ABNERP',
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Giới thiệu', link: '/introduction' },
    ],
    sidebar: [
      {
        text: 'Bắt đầu',
        items: [
          { text: 'Giới thiệu', link: '/introduction' },
          { text: 'Thiết lập', link: '/setting-up' },
          { text: 'Công ty', link: '/company-setup' },
          { text: 'Mặt hàng', link: '/item' },
          { text: 'Khách hàng', link: '/customer' },
          { text: 'Nhà cung cấp', link: '/supplier' },
          { text: 'Hệ thống tài khoản', link: '/chart-of-accounts' },
          { text: 'Nhập dữ liệu', link: '/data-import' },
          { text: 'Tồn kho đầu kỳ', link: '/opening-stock' },
          { text: 'Số dư đầu kỳ', link: '/opening-balance' },
        ],
      },
      {
        text: 'Kế toán',
        items: [
          { text: 'Tổng quan', link: '/accounts' },
          { text: 'Thiết lập kế toán', link: '/accounts-settings' },
        ],
      },
      {
        text: 'Kho',
        items: [
          { text: 'Tổng quan', link: '/stock' },
          { text: 'Thiết lập kho', link: '/stock-settings' },
          { text: 'Kho hàng', link: '/warehouse' },
        ],
      },
      {
        text: 'CRM',
        items: [
          { text: 'Tổng quan', link: '/crm' },
        ],
      },
      {
        text: 'Bán hàng',
        items: [
          { text: 'Tổng quan', link: '/selling' },
        ],
      },
      {
        text: 'Mua hàng',
        items: [
          { text: 'Tổng quan', link: '/buying' },
        ],
      },
      {
        text: 'Sản xuất',
        items: [
          { text: 'Tổng quan', link: '/manufacturing' },
        ],
      },
      {
        text: 'Hỗ trợ',
        items: [
          { text: 'Tổng quan', link: '/support' },
        ],
      },
      {
        text: 'Tài sản',
        items: [
          { text: 'Tổng quan', link: '/asset' },
        ],
      },
      {
        text: 'Website',
        items: [
          { text: 'Tổng quan', link: '/website' },
        ],
      },
      {
        text: 'Tự động hóa',
        items: [
          { text: 'Tổng quan', link: '/automation' },
        ],
      },
      {
        text: 'Quản lý chất lượng',
        items: [
          { text: 'Tổng quan', link: '/quality-management' },
        ],
      },
      {
        text: 'Nhà hàng',
        items: [
          { text: 'Tổng quan', link: '/restaurant' },
        ],
      },
      {
        text: 'Vùng miền',
        items: [
          { text: 'Tổng quan', link: '/regional' },
        ],
      },
      {
        text: 'Email',
        items: [
          { text: 'Tổng quan', link: '/email' },
        ],
      },
      {
        text: 'In ấn',
        items: [
          { text: 'Tổng quan', link: '/printing' },
        ],
      },
      {
        text: 'Dữ liệu',
        items: [
          { text: 'Tổng quan', link: '/data' },
        ],
      },
      {
        text: 'Phân quyền',
        items: [
          { text: 'Tổng quan', link: '/permissions' },
        ],
      },
      {
        text: 'Thiết lập hệ thống',
        items: [
          { text: 'Tổng quan', link: '/system-settings' },
        ],
      },
      {
        text: 'Người dùng',
        items: [
          { text: 'Thêm người dùng', link: '/adding-users' },
        ],
      },
      {
        text: 'Khu vực khác',
        items: [
          { text: 'Định giá', link: '/pricing' },
          { text: 'Bảo trì', link: '/maintenance' },
          { text: 'Tiêu đề thư', link: '/letter-head' },
          { text: 'Bản tin', link: '/newsletter' },
        ],
      },
    ],
    outlineTitle: 'Trên trang này',
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp',
    },
    lastUpdatedText: 'Cập nhật lần cuối',
    darkModeSwitchLabel: 'Giao diện',
    sidebarMenuLabel: 'Danh mục',
    returnToTopLabel: 'Quay lại đầu trang',
    footer: {
      copyright: 'Bản quyền © 2026 ABNERP',
    },
  },
})
