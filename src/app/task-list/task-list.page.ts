import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  readonly title = 'タスク一覧';

  /** 画面に表示するタスク一覧。 */
  tasks: { name: string }[] = [];

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor() {}

  /** Angular のライフサイクルで、ページを生成したときに一度だけ実行される。 */
  ngOnInit(): void {}

  /**
   * ページ読み込み時のライフサイクルメソッド。
   * ページを読み込む際に localStorage から永続化しているデータを取得する。
   */
  ionViewWillEnter(): void {
    if (this.tasksLocalStorageKey in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
}
