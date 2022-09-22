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

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /**
   * 現在入力されている task の値を用いて、タスクを追加する。
   * localStorage.tasks に JSON.stringify() で文字列化したタスク一覧を保存する。
   * 追加後は、task の入力値を空に戻す。
   */
  addTask(): void {
    const tasks: { name: string }[] = JSON.parse(
      localStorage.getItem(this.tasksLocalStorageKey)
    );
    tasks.push({ name: this.task });
    localStorage.setItem(this.tasksLocalStorageKey, JSON.stringify(tasks));
    this.task = '';
  }
}
