window.onload = function () {
  // navbar
  const meun = document.getElementsByClassName("navbar_menu")[0];
  const navber = document.getElementsByClassName("navbar_group")[0];
  meun.addEventListener("click", () => {
    meun.classList.toggle("navbar_menu_active");
    navber.classList.toggle("navbar_group_active");
  });
  // allactivity
  const activity_lbtn = document.getElementsByClassName(
    "allactivity_control_btn"
  )[0];
  const activity_rbtn = document.getElementsByClassName(
    "allactivity_control_btn"
  )[1];
  // 圖片
  const activity_imgcontainer = document.getElementsByClassName(
    "allactivity_gruop"
  )[0];
  const allactivity_img_width = document.getElementsByClassName(
    "allactivity_img"
  );

  // console.log(allactivity_img_width.length);
  // console.log(allactivity_img_width[0].clientWidth);

  let elementWidth = 0;
  let position = 0;
  // window.addEventListener("resize", () => {
  //   console.log("client width", allactivity_img_width[0].clientWidth);
  //   elementWidth = allactivity_img_width[0].clientWidth + 8;
  //   console.log("elementWidth", elementWidth);
  //   let carouselWidth = elementWidth * allactivity_img_width.length;
  //   console.log(carouselWidth);
  // });
  // 圖片寬度
  // elementWidth = allactivity_img_width[0].clientWidth + 8;
  // console.log(elementWidth);

  activity_lbtn.addEventListener("click", () => {
    if (elementWidth == 300 && position > -333) {
      position -= 333;
      activity_imgcontainer.style.marginLeft = position + "px";
      console.log("1click");
      console.log("position1", position);
    } else if (elementWidth < 250) {
      activity_imgcontainer.style.marginLeft = -(elementWidth + 33) + "px";
      console.log("2click");
      console.log("position2", elementWidth);
    }
  });
  // activity_rbtn.addEventListener("click", () => {
  //   if (position < 0) {
  //     position += 333;
  //     activity_imgcontainer.style.marginLeft = position + "px";
  //   }
  // });

  const hothotel_width = document.getElementsByClassName("hothotel_row")[0];
  const hothotel_card_width = document.getElementsByClassName(
    "hothotel_content"
  )[0];

  const dots = document.getElementsByClassName("hothotel_dot");

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      for (let j = 0; j < dots.length; j++) {
        dots[j].classList.remove("dot_active");
      }
      dots[i].classList.add("dot_active");
    });
  }
  let card = hothotel_card_width.clientWidth;
  console.log(card);
  let shift = hothotel_width.clientWidth;
  console.log(shift);
  let padding = 26;

  // dots[0].addEventListener("click", () => {
  //   if(card<550){
  //     hothotel_width.style.left = 0 + "px";
  //     console.log("click");
  //   }
  // });
  // dots[1].addEventListener("click", () => {
  //   if(card<550){
  //     hothotel_width.style.left = -shift - 26 + "px";
  //     console.log("click");
  //   }
  // });
  // dots[2].addEventListener("click", () => {
  //   if(card<550){
  //     hothotel_width.style.left = -shift*2 - 52 + "px";
  //     console.log("click");
  //   }
  // });
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      hothotel_width.style.left = -shift * i - padding * i + "px";
    });
  }
};

const news_btn = document.getElementsByClassName("news_content");
console.log(news_btn);
const news_img = document.getElementsByClassName("news_img");
console.log(news_img);
console.log(news_btn.length);

for (let i = 0; i < news_btn.length; i++) {
  news_btn[i].addEventListener("click", () => {
    for (let j = 0; j < news_btn.length; j++) {
      news_btn[j].classList.remove("news_content_active");
      news_img[j].classList.remove("news_active")
    }
    news_btn[i].classList.add("news_content_active");
    news_img[i].classList.add("news_active");

  });
}