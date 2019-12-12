import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"]
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Award Winning Pictures";
  image1 =
    "https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png";
  image2 =
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
  image3 =
    "https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-768x1030.png";

  constructor() {}

  ngOnInit() {}
}
