<template>
    <section class="section-content">
        <div class="containers">
            <div class="row">
                <!--Sedibar user-->
                <div class="col-3 sidebar-user" data-aos="fade-right">
                    <h2><i class="far fa-user"></i> <span> Chào <strong>Hoàng!</strong></span></h2>
                    <ul class="nav-user">
                        <li><a href=""><i class="fas fa-chevron-right"></i> Đổi mật khẩu</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Thay đổi mã rút tiền</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Nạp tiền</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Rút tiền</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Danh sách cược</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Lịch sử cược</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Tiền thưởng</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Chuyển ví</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Doanh thu</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Thành tích</a></li>
                        <li><a href=""><i class="fas fa-chevron-right"></i> Hộp tin nhắn</a></li>
                    </ul>
                </div>
                <!--end sidebar user-->
                <!--Content overview-->
                <div class="col-9" data-aos="fade-left">
                    <div class="card-info">
                        <div class="title"><h2>Thông tin cơ bản</h2></div>
                        <div class="card-info-content">
                            <div class="row">
                                <!--item wallet-->
                                <div class="col-4">
                                    <div class="wallet-overview">
                                        <img src="images/icon-bonus.png">
                                        <h2>Tổng tiền thưởng</h2>
                                        <strong>00.0</strong>
                                    </div>
                                </div>
                                <!--end item wallet-->
                                <!--item wallet-->
                                <div class="col-4">
                                    <div class="wallet-overview">
                                        <img src="images/icon-meny.png">
                                        <h2>Lần thưởng gần nhất</h2>
                                        <strong>00.0</strong>
                                    </div>
                                </div>
                                <!--end item wallet-->
                                <!--item wallet-->
                                <div class="col-4">
                                    <div class="wallet-overview">
                                        <img src="images/icon-wallet.png">
                                        <h2>Số dư tài khoản (VND)</h2>
                                        <strong>00.0</strong>
                                    </div>
                                </div>
                                <!--end item wallet-->
                            </div>

                            <ul class="row-overview-account">
                                <li><span>Tài khoản:</span>thaihungd</li>
                                <li><span>Điện thoại:</span>0933022922</li>
                                <li><span>Tên rút tiền:</span>Demo</li>
                            </ul>
                            <div class="row-log">
                                <p>Thời điểm đăng ký : 2021-06-16 21:30:32</p>
                                <p>Lần đăng nhập gần nhất : 2021-06-26 14:12:38</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End content overview-->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
    }
}
</script>
