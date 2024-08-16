// Hiệu ứng chuyển trang
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.content').classList.add('fade-out');
        document.querySelector('.left-aside').classList.add('fade-out');
        document.querySelector('.right-aside').classList.add('fade-out');

        setTimeout(() => {
            window.location.href = link.href;
        }, 550); // Thời gian hiệu ứng mờ
    });
});

// Hiệu ứng cho xe yêu thích
document.querySelectorAll('.car-link').forEach(link => {
    link.addEventListener('click', () => {
        link.querySelector('.car').classList.add('fade-out');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Chọn tất cả các liên kết có chứa dấu # trong href
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Ngăn chặn hành vi mặc định của liên kết
            event.preventDefault();

            // Lấy giá trị href từ liên kết (ví dụ: #skills)
            var targetId = this.getAttribute('href').substring(1);

            // Tìm phần tử mục tiêu dựa trên ID
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Cuộn mượt mà đến phần tử mục tiêu
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


