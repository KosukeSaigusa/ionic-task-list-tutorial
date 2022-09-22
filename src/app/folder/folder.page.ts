import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  title = 'タスク登録';

  /** 画面に表示するタスク一覧。 */
  tasks: { name: string }[] = [];

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /**
   * ページ読み込み時のライフサイクルメソッド。
   * ページを読み込む際に localStorage から永続化しているデータを取得する。
   */
  ionViewWillEnter(): void {
    if (this.tasksLocalStorageKey in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  /**
   * 現在入力されている task の値を用いて、タスクを追加する。
   * localStorage.tasks に JSON.stringify() で文字列化したタスク一覧を保存する。
   * 追加後は、task の入力値を空に戻す。
   */
  addTask(): void {
    this.tasks.push({ name: this.task });
    // TODO: 下記の 2 つの違いを知りたい
    // localStorage.tasks = JSON.stringify(this.tasks);
    localStorage.setItem(this.tasksLocalStorageKey, JSON.stringify(this.tasks));
    this.task = '';
  }
}
