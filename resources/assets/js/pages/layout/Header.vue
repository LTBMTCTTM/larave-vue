<template>
    <div>
        <header class="header">
            <div class="containers">
                <!--start top header-->
                <nav class="top-header">
                    <ul class="">
                        <li class="header-sign-up"><a href="" title="Đăng ký"><i class="far fa-user"></i>Đăng ký</a></li>
                        <li class="header-sign-in"><a href="" title="Đăng nhập"><i class="fas fa-sign-in-alt"></i> Đăng nhập</a></li>
                        <li class="dropdown header-lang">
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-globe-europe"></i>  Tiếng việt
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Tiếng anh</a></li>

                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <!--end top header-->
            <div class="clearfix"></div>
            <!--start nav--->
            <nav class="navprimary">
                <div class="containers">
                    <a class="logo" href="#">
                        <img src="images/logo.png">
                    </a>
                    <div class="nav-main">
                        <ul class="nav-item">
                            <li> <a title="Trang chủ" class="active" href="#"><span class="icon-nav"><img src="images/icon-home.png"></span> Trang chủ</a></li>
                            <li><a title="Thể thao" href="#"><span class="icon-nav"><img src="images/icon-spuport.png"></span> Thể thao</a> </li>
                            <li><a title="Casion" href="#"><span class="icon-nav"><img src="images/icon-casino.png"></span> Casion</a></li>
                            <li><a title="Xổ số" href="#"><span class="icon-nav"><img src="images/icon-xoso.png"></span>Xổ số</a></li>
                            <li><a title="Bắn cá" href="#"><span class="icon-nav"><img src="images/icon-banca.png"></span>Bắn cá</a></li>
                            <li><a title="E-game" href="#"><span class="icon-nav"><img src="images/icon-game.png"></span>E - Game</a></li>
                            <li><a title="Khuyến mãi" href="#"><span class="icon-nav"><img src="images/icon-promotion.png"></span>Khuyến mãi</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!--end nav-->
        </header>
        <div class="clearfix"></div>
        <!--start noti-->
        <section class="section-noti">
            <div class="car-marq" scrolldelay="150"><marquee><h3><a href="">Kính gửi đến quý khách hàng, Nhà Cái không sử dụng cố định ngân hàng để giao dịch.</a></h3></marquee></div>
        </section>
        <!--end noti-->
        <!--start section content-->
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$isMobile());
    }
}
</script>
