import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gradients = [
    'linear-gradient(90deg, #006494 0%, #16A085 100%)',
    'linear-gradient(90deg, #247ba0 0%, #74ebd5 100%)',
    'linear-gradient(90deg, #1b98e0 0%, #6c9eac 100%)'
  ];

  buildingSliders = [
    {
      id: 1,
      // src: '../../assets/imgs/UZ_Building_1.jpg',
      src: '../../assets/imgs/uz_placeholder.jpg',
      alt: 'Budynek Uniwersytetu Zielonogórskiego',
      title: 'Budynek Uniwersytetu Zielonogórskiego',
      class: 'center'
    },
    {
      id: 2,
      src: '../../assets/imgs/UZ_Building_2.jpg',
      alt: 'Budynek Uniwersytetu Zielonogórskiego',
      title: 'Budynek Uniwersytetu Zielonogórskiego',
      class: 'right-up'
    },
    {
      id: 3,
      // src: '../../assets/imgs/UZ_Building_3.jpg',
      src: '../../assets/imgs/wiea-building2.jpg',
      alt: 'Budynek Uniwersytetu Zielonogórskiego',
      title: 'Budynek Uniwersytetu Zielonogórskiego',
      class: 'left-down'
    }
  ]

  infoCards = [
    {
      title:'Card 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti, possimus sint optio minus, fugit aliquam ut eius corrupti at ipsum modi! Ratione maxime quia illo asperiores natus facere quos.',
      footer: 'Lorem ipsum dolor sit amet.',
      gradient: this.gradients[Math.floor(Math.random() * this.gradients.length)]
    },
    {
      title:'Card 2',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti, possimus sint optio minus, fugit aliquam ut eius corrupti at ipsum modi! Ratione maxime quia illo asperiores natus facere quos.',
      footer: 'Lorem ipsum dolor sit amet.',
      gradient: this.gradients[Math.floor(Math.random() * this.gradients.length)]
    },
    {
      title:'Card 3',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti, possimus sint optio minus, fugit aliquam ut eius corrupti at ipsum modi! Ratione maxime quia illo asperiores natus facere quos.',
      footer: 'Lorem ipsum dolor sit amet.',
      gradient: this.gradients[Math.floor(Math.random() * this.gradients.length)]
    },
    {
      title:'Card 4',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti, possimus sint optio minus, fugit aliquam ut eius corrupti at ipsum modi! Ratione maxime quia illo asperiores natus facere quos.',
      footer: 'Lorem ipsum dolor sit amet.',
      gradient: this.gradients[Math.floor(Math.random() * this.gradients.length)]
    },
    {
      title:'Card 5',
      description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti, possimus sint optio minus, fugit aliquam ut eius corrupti at ipsum modi! Ratione maxime quia illo asperiores natus facere quos.',
      footer: 'Lorem ipsum dolor sit amet.',
      gradient: this.gradients[Math.floor(Math.random() * this.gradients.length)]
    }
  ]

  buildingSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
		autoplaySpeed: 7000,
    responsive: {
      0: {
        items: 1 
      }
    },
    nav: false
  }

  infoCardsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    // margin: 20,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      }
    },
    nav: false
  }

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  goToAdmissions() {
    this.router.navigateByUrl("admissions");
  }

}
