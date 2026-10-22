# Trung tâm học ngoại ngữ — PWA 4 trong 1

## Triển khai GitHub Pages
1. Giải nén và tải **toàn bộ các file trong thư mục** lên thư mục gốc repository (không tải nguyên ZIP).
2. GitHub → Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save.
3. Mở URL `https://TEN-TAI-KHOAN.github.io/TEN-REPO/` bằng HTTPS. Tất cả đường dẫn PWA là tương đối, hỗ trợ repository con.

## Cài ứng dụng
- Android/Chrome: menu ⋮ → Install app hoặc Add to Home screen.
- iPhone/Safari: Share → Add to Home Screen. Chrome iOS có thể dùng Share → Add to Home Screen tùy phiên bản; Safari đáng tin cậy hơn.
- Máy tính/Chrome/Edge: biểu tượng cài đặt ở thanh địa chỉ hoặc menu → Install.

## Ngoại tuyến và dữ liệu
- Sau lần mở trực tuyến thành công, giao diện chính và **mã của cả bốn ứng dụng được nhúng trong index.html** có thể mở ngoại tuyến.
- Những tính năng cần mạng như AI Kokoro trực tuyến, dịch vụ API, tải model, âm thanh hay tài nguyên CDN chưa từng được cache sẽ không đảm bảo hoạt động ngoại tuyến. Giọng đọc của trình duyệt phụ thuộc hệ điều hành và gói giọng đã cài.
- Không sửa code lưu trữ của bốn ứng dụng gốc. Dữ liệu đã được từng ứng dụng lưu trong localStorage/IndexedDB (nếu có) được giữ theo origin/trình duyệt hiện tại; dữ liệu chỉ ở RAM hoặc dữ liệu chưa được ứng dụng gốc lưu sẽ không tự động được lưu bởi PWA.
- Không xóa dữ liệu website, không dùng chế độ ẩn danh nếu muốn giữ tiến độ. Sao lưu/xuất dữ liệu từ từng ứng dụng nếu có chức năng.
- Nếu trước đó dùng file HTML trực tiếp hoặc domain khác, dữ liệu không tự chuyển sang URL GitHub Pages do quy tắc bảo mật trình duyệt.

## Cập nhật
1. Thay `index.html` hoặc các file liên quan.
2. Đổi `CACHE_VERSION` trong `sw.js` (ví dụ `language-hub-v2-20261023`).
3. Commit/push lên GitHub, đợi Pages triển khai; mở lại website có mạng. Nếu có cập nhật, nhấn **Cập nhật** sau khi lưu bài đang làm.
4. Nếu gặp lỗi cache: đóng/mở ứng dụng hoặc xóa cache website (chú ý không xóa storage nếu cần giữ tiến độ).

## Kiểm thử và giới hạn
- Đã kiểm tra cấu trúc gói, đường dẫn và giữ nguyên bốn ứng dụng nhúng trong file HTML nguồn.
- Cần kiểm tra thực tế trên thiết bị: mở cả bốn mục, nhập bài, flashcard, phát âm, lưu/tải lại, tắt mạng mở lại, và cập nhật Service Worker.
- Không thể cam kết AI và các phụ thuộc mạng chạy ngoại tuyến; muốn dùng model AI ngoại tuyến cần đóng gói riêng model và runtime tương thích thiết bị.
