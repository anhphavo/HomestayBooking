const destinations = [
    {
      id: 1,
      name: "Harmony Homestay",
      address:"152 Phan Thanh, Đà Nẵng",
      description: "Nằm tại vị trí thuận tiện ở Đà Nẵng, Harmony Homestay cung cấp các phòng điều hòa với Wi-Fi miễn phí và chỗ đậu xe riêng miễn phí. Ngoài dịch vụ phòng, chỗ nghỉ này còn có sân hiên. Du khách có thể thưởng thức đồ uống tại quầy bar. Tất cả các căn được trang bị TV màn hình phẳng có truyền hình cáp, tủ lạnh, ấm đun nước, vòi xịt/chậu rửa vệ sinh, đồ vệ sinh cá nhân miễn phí và bàn làm việc. Với phòng tắm riêng được trang bị vòi sen và máy sấy tóc, một số căn tại guest house cũng có view thành phố. Tại Harmony Homestay, tất cả các phòng đều có ga trải giường và khăn tắm. Chỗ nghỉ cách Bãi biển Thanh Bình 2.5 km và Bảo tàng điêu khắc Chăm 2 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách Harmony Homestay 1 km.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293535054.jpg?k=d9754b17366db60ce8bb3ca264c03c6c0b7c994bdac6dc8b7caec73f7c5f69c2&o=&hp=1",
      rating: 9.2,
      cost: "238.095 VND",
    },
    {
      id: 2,
      name: "Joie Home",
      address:"112 Đường Hoàng Hoa Thám, Nha Trang",
      description: "Tọa lạc cách Bãi biển Nha Trang 6 phút đi bộ ở Nha Trang, Joie Home cung cấp chỗ nghỉ có điều hòa và Wi-Fi miễn phí. Một số căn có sân hiên và/hoặc ban công nhìn ra thành phố. Các điểm tham quan nổi tiếng gần homestay bao gồm Trung tâm thương mại Nha Trang Center, Nhà thờ Chánh tòa Kitô Vua (Nhà thờ Núi) và Tháp Trầm Hương. Sân bay gần nhất là Sân bay quốc tế Cam Ranh, cách Joie Home 36 km.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/547222726.jpg?k=3175125ef08fc5a158c29644ec464d29cddb18abdbd2f02a4b6d5be313c0a6b2&o=&hp=1",
      rating: 8.8,
      cost: "450.000 VND",
    },
    {
      id: 3,
      name: "Tâm Homestay",
      address:"12/35 Chu Van An Phu Hoi, Huế",
      description: "Nằm ở Huế, cách Cầu Tràng Tiền 15 phút đi bộ và Chợ Đông Ba 1.9 km, Tâm Homestay cung cấp chỗ nghỉ có Wi-Fi miễn phí, điều hòa, khu vườn và phòng chờ chung. Nơi đây còn có phòng tắm riêng với vòi xịt/chậu rửa vệ sinh ở tất cả các căn, cùng đồ vệ sinh cá nhân miễn phí, máy sấy tóc và dép đi trong phòng. Khuôn viên của nhà nghỉ B&B có sân hiên và du khách có thể đi xe đạp ở khu vực gần đó. Tâm Homestay cách Bảo tàng Museum of Royal Antiquities 2.9 km và Tử Cấm Thành 4 km. Sân bay gần nhất là Sân bay quốc tế Phú Bài, cách chỗ nghỉ 13 km, đồng thời chỗ nghỉ có cung cấp dịch vụ đưa đón sân bay mất phí.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/208112066.jpg?k=e36d3f9a85d0f162f08751107900d4ccc8402cae6c9fb08235f58c5240c94121&o=&hp=1",
      rating: 9.7,
      cost: "850.000 VND",
    },
    {
      id: 4,
      name: "A Little Saigon",
      address:"145D Đường Đề Thám, Quận 1, TP. Hồ Chí Minh",
      description: "Là chỗ nghỉ có sân hiên, Wi-Fi miễn phí và nhìn ra thành phố, A Little Saigon nằm tại vị trí thuận tiện ở TP. Hồ Chí Minh, cách Bảo tàng Mỹ thuật, Trung tâm mua sắm Takashimaya Việt Nam và Chợ Bến Thành một đoạn ngắn. Được thiết kế với sân trong, các căn có điều hòa, TV, cùng phòng tắm riêng gồm vòi xịt/chậu rửa vệ sinh và đồ vệ sinh cá nhân miễn phí. Để thuận tiện hơn cho khách, chỗ nghỉ có thể cung cấp khăn tắm và khăn trải giường với khoản phụ phí. Các điểm tham quan nổi tiếng gần khách sạn căn hộ bao gồm Công viên Tao Đàn, Trung tâm Thương mại Vincom Center A và Bến cảng Nhà Rồng. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách A Little Saigon 8 km.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293535054.jpg?k=d9754b17366db60ce8bb3ca264c03c6c0b7c994bdac6dc8b7caec73f7c5f69c2&o=&hp=1",
      rating: 9.2,
      cost: "500.000 VND",
    },
    {
      id: 5,
      name: "La Passion - Tay Ho Hanoi One Bedroom Apartment",
      address:"52/28 Đường Tô Ngọc Vân Phòng 201 nhà số 7, Quận Tây Hồ, Hà Nội",
      description: "La Passion - Tay Ho Hanoi One Bedroom Apartment! nhìn ra hồ, có Wi-Fi miễn phí và chỗ đậu xe riêng miễn phí, nằm ở Hà Nội, cách Hồ Tây 3.4 km. Chỗ nghỉ có điều hòa, bếp đầy đủ tiện nghi, TV màn hình phẳng, cũng như phòng tắm riêng với vòi sen, đồ vệ sinh cá nhân miễn phí và máy sấy tóc. Tủ lạnh và lò vi sóng, cũng như ấm đun nước đều được cung cấp. Khách có thể sử dụng sân hiên tại căn hộ. La Passion - Tay Ho Hanoi One Bedroom Apartment! cách Đền Quán Thánh 4.6 km và Ô Quan Chưởng 5.1 km. Sân bay gần nhất là Sân bay Quốc tế Nội Bài, cách chỗ nghỉ 18 km, đồng thời chỗ nghỉ này cũng cung cấp dịch vụ đưa đón sân bay mất phí.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293535054.jpg?k=d9754b17366db60ce8bb3ca264c03c6c0b7c994bdac6dc8b7caec73f7c5f69c2&o=&hp=1",
      rating: 9.2,
      cost: "300.000 VND",
    },
  ];

  module.exports = destinations;
  