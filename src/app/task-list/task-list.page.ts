import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  readonly pageTitle = 'タスク一覧';

  /** 画面に表示するタスク一覧。 */
  tasks: { name: string }[] = [];

  /** 入力値を受け付けて双方向バインディングする変数。 */
  task: string;

  /** タスク一覧を LocalStorage に保存する際のキー名。 */
  readonly tasksLocalStorageKey = 'tasks';

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

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

  /**
   * @ionic/angular の ActionSheet を表示して
   * タスクの変更アクションに関する選択肢を表示し、選択された内容を実行する。
   *  */
  async changeTask(index: number): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.tasks.splice(index, 1);
            localStorage.setItem(
              this.tasksLocalStorageKey,
              JSON.stringify(this.tasks)
            );
          },
        },
        {
          text: '変更',
          icon: 'create',
          handler: () => {
            this.renameTask(index);
          },
        },
        {
          text: '閉じる',
          role: 'キャンセル',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked.');
          },
        },
      ],
    });
    actionSheet.present();
  }

  /** Prompt タイプのアラートを表示して、
   * 指定した番号のタスクの名前を変更する。 */
  async renameTask(index: number): Promise<void> {
    const prompt = await this.alertController.create({
      header: '変更後のタスク',
      inputs: [
        {
          name: 'task',
          placeholder: 'タスク',
          value: this.tasks[index].name,
        },
      ],
      buttons: [
        {
          text: '閉じる',
        },
        {
          text: '保存',
          handler: (data) => {
            // TODO: data.task がややこしい気がする
            this.tasks[index] = { name: data.task };
            localStorage.setItem(
              this.tasksLocalStorageKey,
              JSON.stringify(this.tasks)
            );
          },
        },
      ],
    });
    prompt.present();
  }
}
