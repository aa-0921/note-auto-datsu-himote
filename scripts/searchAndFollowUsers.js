// scripts/searchAndFollowUsers.js
// Twitterユーザー検索・フォロースクリプト

import { runWithCore } from '@aa-0921/note-auto-core';

(async () => {
  await runWithCore(async ({ core }) => {
    // コマンドライン引数から検索クエリを取得
    const args = process.argv.slice(2);
    const searchQuery = args.find(arg => !arg.startsWith('--')) || 'フォロバ100';
    const isDryrun = args.includes('--dryrun');

    console.log('========================================');
    console.log('Twitterユーザー検索・フォロー');
    console.log('========================================');
    console.log(`検索クエリ: "${searchQuery}"`);
    console.log(`DRYRUNモード: ${isDryrun ? 'ON' : 'OFF'}`);
    console.log('');

    await core.runSearchAndFollowUsers(searchQuery, {
      maxFollows: 10, // 1回の実行で最大10人までフォロー
      maxSearchResults: 50, // 最大50件の検索結果を取得
      followInterval: 60000, // フォロー間隔: 1分（60000ミリ秒）
      dailyFollowLimit: 50, // 1日のフォロー上限: 50人
      dryrun: isDryrun
    });

    console.log('処理が完了しました');
  });
})();

