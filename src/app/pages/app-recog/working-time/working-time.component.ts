import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-working-time',
    templateUrl: './working-time.component.html',
    styleUrls: ['./working-time.component.scss']
})
export class WorkingTimeComponent implements OnInit {

    // --------------------------------------------------------------------------------
    // public変数
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // private変数
    // --------------------------------------------------------------------------------

    /**
    * カレンダー生成用変数
    */
    private myDate = new Date();
    private myWeekTbl: string[] = ['日', '月', '火', '水', '木', '金', '土'];
    private myMonthTbl: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private myYear = this.myDate.getFullYear();	// 年を取得
    private myMonth;
    private myToday;
    private myWeek;
    public myTable: number[] = Array(31);

    // --------------------------------------------------------------------------------
    // コンストラクタ
    // --------------------------------------------------------------------------------

    constructor(
    ) { }

    // --------------------------------------------------------------------------------
    // 初期処理
    // --------------------------------------------------------------------------------
    ngOnInit() {
        this.createCalendar();
    }

    // --------------------------------------------------------------------------------
    // publicメソッド
    // --------------------------------------------------------------------------------

    /**
     * カレンダー生成
     */
    public createCalendar() {
        // うるう年なら２月を２９日とする
        if (((this.myYear % 4) === 0 && (this.myYear % 100) !== 0) || (this.myYear % 400) === 0) {
            this.myMonthTbl[1] = 29;
        }
        // 月を取得(0月～11月)
        this.myMonth = this.myDate.getMonth();
        // 今日の'日'を退避
        this.myToday = this.myDate.getDate();
        // 日付を'１日'に変えて、'１日'の曜日を取得
        this.myDate.setDate(1);
        this.myWeek = this.myDate.getDay();
        // myTableを初期化
        this.myTable.fill(0);
        // テーブルへ日付を格納
        for (let i = 0; i < this.myMonthTbl[this.myMonth]; i++) {
            this.myTable[i + this.myWeek] = i + 1;
        }
    }
}
