import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  title = 'タスク登録';

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /**
   * 現在入力されている task の値を用いて、タスクを保存する。
   * localStorage.tasks に JSON.stringify() で文字列化したタスク一覧を保存する。
   * 保存後は、task の入力値を空に戻す。
   */
  saveTask(): void {
    const tasks: { name: string }[] =
      JSON.parse(localStorage.getItem(this.tasksLocalStorageKey)) || [];
    tasks.push({ name: this.task });
    localStorage.setItem(this.tasksLocalStorageKey, JSON.stringify(tasks));
    this.task = '';
  }
}
