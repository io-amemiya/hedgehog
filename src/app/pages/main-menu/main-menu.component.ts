import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  // --------------------------------------------------------------------------------
  // public変数
  // --------------------------------------------------------------------------------

  /**
   * メニューの開閉フラグ
   */
  public showDetail = {
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false
  }

  // --------------------------------------------------------------------------------
  // private変数
  // --------------------------------------------------------------------------------


  // --------------------------------------------------------------------------------
  // コンストラクタ
  // --------------------------------------------------------------------------------

  constructor(
    private router: Router
  ) { }

  // --------------------------------------------------------------------------------
  // 初期処理
  // --------------------------------------------------------------------------------
  ngOnInit() {

  }

  // --------------------------------------------------------------------------------
  // publicメソッド
  // --------------------------------------------------------------------------------

  /**
   * メニューの開閉
   */
  public onAccordion($event: any, menuNo: number) {

    switch (menuNo) {
      case 1:
        this.showDetail.menu1 = !this.showDetail.menu1;
        break;
      case 2:
        this.showDetail.menu2 = !this.showDetail.menu2;
        break;
      case 3:
        this.showDetail.menu3 = !this.showDetail.menu3;
        break;
      case 4:
        this.showDetail.menu4 = !this.showDetail.menu4;
        break;
    }
  }
}
