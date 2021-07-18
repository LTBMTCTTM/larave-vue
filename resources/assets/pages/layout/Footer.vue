<template>
    <div v-if="!this.$isMobile()">
        <!--start footer-->
        <footer class="footer" data-aos="zoom-in-up">
            <div class="containers">
                <div class="row">
                    <div class="col-3 footer-col">
                        <h5>Về chúng tôi</h5>
                        <ul class="list-unstyled text-small">
                            <li><a href="#">Về SENBET</a></li>
                            <li><a href="#">Điều khoản và điều kiện</a></li>
                            <li><a href="#">Chơi có trách nhiệm</a></li>
                            <li><a href="#">Miễn trách nhiệm</a></li>
                            <li><a href="#">Quyền riêng tư</a></li>
                            <li><a href="#">Đại lý</a></li>
                        </ul>
                    </div>
                    <div class="col-3 footer-col">
                        <h5>Liên kết nổi bật</h5>
                        <ul class="list-unstyled text-small">
                            <li><a href="#">Thể thao</a></li>
                            <li><a href="#">Casino</a></li>
                            <li><a href="#">Xổ số</a></li>
                            <li><a href="#">Bắn cá</a></li>
                            <li><a href="#">E-Game</a></li>
                            <li><a href="#">Khuyến mãi</a></li>
                        </ul>
                    </div>
                    <div class="col-3 footer-col">
                        <h5>Giúp đỡ và hỗ trợ</h5>
                        <ul class="list-unstyled text-small">
                            <li><a href="#">Hướng dẫn nạp tiền</a></li>
                            <li><a href="#">Hướng dẫn rút tiền</a></li>
                            <li><a href="#">Câu hỏi thường gặp</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div class="col-3 footer-col">
                        <h5>Giấy phép</h5>
                        <div class="row">
                            <div class="col-6 card-license">
                                <img src="images/thawte.png">
                            </div>
                            <div class="col-6 card-license">
                                <img src="images/tst.png">
                            </div>
                            <div class="col-6 card-license">
                                <img src="images/gamble.png">
                            </div>
                            <div class="col-6 card-license">
                                <img src="images/safe.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <span>© 2020 SEN BET CROP. ALL RIGHTS RESERVED</span>
            </div>
        </footer>
        <!--end footer-->
        <!--start support-->
        <ul class="fix-support" data-aos="fade-down">
            <li>
                <span><img src="images/e-mail.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <span><img src="images/zallo.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <span><img src="images/skype.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <span><img src="images/viber.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <span><img src="images/mobile.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <span><img src="images/telegram.png"></span>
                <div class="item-sp"><a href="">0933 222 222</a></div>
            </li>
            <li>
                <a id="back-to-top" href="#" class="back-to-top" title="Top">
                    <i class="fas fa-angle-up"></i>
                    Top
                </a>
            </li>
        </ul>
        <!--end support-->
    </div>
    <div v-else>
        <footer  class="footer">
            <div class="nav-footer">
                <ul>
                    <li class="active"><a href=""><span class="icon-nav"><img src="/mobile-images/icon-home.png"></span> Trang chủ</a></li>
                    <li class=""><a href=""><span class="icon-nav"><img src="/mobile-images/icon-mn.png"></span> Nạp tiền</a></li>
                    <li class=""><a href=""><span class="icon-nav"><img src="/mobile-images/icon-mn.png"></span> Rút tiền</a></li>
                    <li class=""><a href=""><span class="icon-nav"><img src="/mobile-images/icon-promotion.png"></span> Khuyến mãi</a></li>
                    <li class="images/"><a href=""><span class="icon-nav"><img src="/mobile-images/icon-profile.png"></span> Hồ sơ</a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    mounted() {
    }
}
</script>
