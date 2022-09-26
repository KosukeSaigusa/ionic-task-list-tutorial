import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  readonly pageTitle = 'タスク登録';

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor(
    private activatedRoute: ActivatedRoute,
    public title: Title,
    public meta: Meta
  ) {}

  /**
   * コンポーネントが表示されるアニメーションがはじまる時に発火するライフライクルメソッド。
   */
  ionViewWillEnter(): void {
    // index.html による JS の読み込みの前にページの情報が得られるようにするために、
    // Netlify の prerendering を使用することにしている（Twitter Card などが典型例）。
    // title, meta タグを設定・追加する。
    // すでに存在する meta タグの場合は `updateTag()` メソッドを使用する必要がある。
    this.title.setTitle('ionic-task-list');
    this.meta.addTag({
      name: 'description',
      content: 'Ionic & Angular task list app tutorial.',
    });
    // Netlify の prerendering 機能の内部的に、Window オブジェクト内の
    // デフォルト false な `prerenderReady` キーが true に書き換わったら JS のレンダリングが
    // 終了したと判定するので、上記の title や meta タグを書き換えた時点で JS のレンダリングが
    // 済んだことにする。
    (window as any).prerenderReady = true;
  }

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
