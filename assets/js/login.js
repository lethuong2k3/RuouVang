const users = [
    {email: 'admin', password: '123456'}
];
// Hàm xử lý sự kiện đăng nhập
function login() {
    // Lấy dữ liệu từ các trường input
    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('passwordForm').value;
  
    // Kiểm tra thông tin đăng nhập có hợp lệ hay không
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      // Đăng nhập thành công, chuyển hướng tới trang chính
        window.location.href = '../../crudProduct.html';
    } else {
      // Đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
    }
  }