import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: { title: string; url: string; icon: string }[] = [
    // icon は Ionicons というデフォルトで利用可能なアイコンパッケージの名前を設定している
    // https://ionicons.com/
    { title: 'タスク登録', url: '/home', icon: 'add' },
    { title: 'タスク一覧', url: '/tasks', icon: 'list' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
