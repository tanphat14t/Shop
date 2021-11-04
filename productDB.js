const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const product =$('#list-product')
const app = {


    products: [
        {
            name: 'Bộ Mỹ Phẩm Trắng Da Cao Cấp Meiya Cam Nhật Bản Giá Gốc',
            price: 450000,
            brand: 'Whoo',
            origin: 'Hàn Quốc',
            salePercents: '43%',
            image: './assets/images/productImgs/mayja.jpg'
        },
        {
            name: 'Bộ 3 Sản Phẩm Dưỡng Gỉam Mụn Some By Mi AHA- BHA-PHA 30 Days Miracle',
            price: 859000,
            brand: 'Some By Mi',
            origin: 'Nhật Bản',
            salePercents: '28%',
            image: './assets/images/productImgs/giammun.jpg'
        },
        {
            name: 'Bộ 10 Mỹ Phẩm Trang Điểm PINKFLASH Kèm Túi Đựng Dùng Làm Quà Tặng Giáng Sinh Độc Đáo',
            price: 108800,
            brand: 'PINKFLASH',
            origin: 'Anh',
            salePercents: '52%',
            image: './assets/images/productImgs/pinkflash.jpg',
        },
        {
            name: 'Bộ 5 Sản Phẩm Dưỡng Trắng và Phục Hồi Da GILAA SAFFRON TONE UP REPAIR',
            price: 1290000,
            brand: 'DINO',
            origin: 'Hàn Quốc',
            salePercents: '47%',
            image: './assets/images/productImgs/dino.jpg'
        },
        {
            name: 'Combo Kem Face Collagen X3 + Serum Căng Bóng Colagen X3 + Chống Nắng Mỹ Phẩm Đông Anh',
            price: 115000,
            brand: 'Collagen x3',
            origin: 'Thái Lan',
            salePercents: '20%',
            image: './assets/images/productImgs/collegen.jpg'
        },
        {
            name: 'Bộ sản phẩm chăm sóc da mặt hoàn hảo Acosmetics (Sữa rửa mặt, Detox, Serum và Kem face Pháp)',
            price: 599000,
            brand: 'A Cosmetics',
            origin: 'Mỹ',
            salePercents: '41%',
            image: './assets/images/productImgs/acollegen.jpg',
        },
        {
            name: 'Kem Dưỡng Ẩm Trắng Da Ý Dĩ Hatomugi The Milky Cream Nhật Bản 180g – Tổng Kho Mỹ Phẩm Chính Hãng Hà My',
            price: 230000,
            brand: 'Naturie',
            origin: 'Nhật Bản',
            salePercents: '28%',
            image: './assets/images/productImgs/naturie.jpg',
        },
        {
            name: 'Phấn Tươi Collagen Hàn Quốc - Mỹ Phẩm Quỳnh Vy',
            price: 378000,
            brand: 'EDEN',
            origin: 'Việt Nam',
            salePercents: '43%',
            image: './assets/images/productImgs/eden.jpg',
        },
        {
            name: 'Serum Collagen X3 xóa thâm nám căng bóng da Mỹ Phẩm Đông Anh Chính Hãng',
            price: 90000,
            brand: 'Đông Anh',
            origin: 'Việt Nam',
            salePercents: '43%',
            image: './assets/images/productImgs/donganh.jpg'
        },
        {
            name: 'Phấn mắt 4 màu lì Kiss Beauty ánh nhũ đẹp bắt sáng chống thấm nước lâu trôi mỹ phẩm nội địa Trang chính hãng',
            price: 39000,
            brand: 'Kiss Beauty',
            origin: 'Tây Ban Nha',
            salePercents: '48%',
            image: './assets/images/productImgs/kissbeauty.jpg',
        },

    ],
    handleEvent: function () {

    },
    render: function () {
        const htmls = this.products.map((product) => {
            return `
            
                  <div class="col l-2-4 m-4 c-6 ">
                    <!-- Product item -->
                    <a href="" class="home-product-item">
                      <div
                        class="home-product-item__img"
                        style="background-image: url('${product.image}')"
                      ></div>
                      <h4 class="home-product-item__name">
                        ${product.name}
                      </h4>
                      <div class="home-product-item__price">
                        <span class="home-product-item__price-old"
                          >1.200.000đ
                          </span>
                        <span class="home-product-item__price-new"
                          >${product.price}đ</span>

                        </span>
                      </div>
                      <div class="home-product-item__action">
                        <span
                          class="
                            home-product-item__like
                            home-product-item__like--liked
                          "
                        >
                          <i
                            class="
                              home-product-item__like-icon-empty
                              far
                              fa-heart
                            "
                          ></i>
                          <i
                            class="
                              home-product-item__like-icon-fill
                              fas
                              fa-heart
                            "
                          ></i>
                        </span>
                        <div class="home-product-item__rating">
                          <i
                            class="home-product-item__star-gold fas fa-star"
                          ></i>
                          <i
                            class="home-product-item__star-gold fas fa-star"
                          ></i>
                          <i
                            class="home-product-item__star-gold fas fa-star"
                          ></i>
                          <i
                            class="home-product-item__star-gold fas fa-star"
                          ></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">88 đã bán</span>
                      </div>
                      <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${product.brand}</span>
                        <span class="home-product-item__origin-name"
                          >${product.origin}</span>
                      </div>
                      <div class="home-product-item__favourite">
                        <i class="fas fa-check"></i>
                        <span>Yêu Thích</span>
                      </div>
                      <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent"
                          >${product.salePercents}</span
                        >
                        <span class="home-product-item__sale-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                 
            `
        })
        product.innerHTML = htmls.join('\n');
    },
    start: function () {
        this.handleEvent();
        this.render();
    }
}
app.start()