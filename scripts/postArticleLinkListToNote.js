// scripts/postArticleLinkListToNote.js
// 自アカウント群の最新記事＋検索で取得した他者記事のURLをAB交互に並べた記事をnoteに投稿する

import { runWithCore } from '@aa-0921/note-auto-core';

(async () => {
  await runWithCore(async ({ core }) => {
    // ======================================
    // アカウントごとにカスタマイズしてください
    // ======================================

    const currentAccount = 'datsu_himote';

    // 記事タイトル候補（絵文字と言い回しのみ変更。ランダムに1つ選択）
    const titleCandidates = [
      '💪 注目のピックアップ記事一覧',
      '🔥 読んでほしい記事まとめ',
      '⚡ おすすめ記事リンク集',
      '💪 厳選！気になる記事をピックアップ',
      '🔥 保存しておきたい記事一覧',
      '⚡ 気になった記事をまとめました',
      '💪 おすすめ記事リンク',
      '🔥 ピックアップ記事リンク集',
      '⚡ 注目記事をチェック',
    ];
    const title = titleCandidates[Math.floor(Math.random() * titleCandidates.length)];

    const bodyIntro = ``;

    const searchKeywords = [
      'フォロバ',
      'フォロバ100',
      '恋愛',
      '彼女',
      '非モテ',
      '出会い',
      '結婚',
      '婚活',
      'モテる',
      'モテない',
      '恋愛テクニック',
      'デート',
      '告白',
      '片思い',
      '失恋',
      '復縁',
      '浮気',
      '別れ',
      'マッチングアプリ',
      '出会い系',
      '合コン',
      'ナンパ',
      'コミュ障',
      '恋愛相談',
      '女性心理',
    ];

    // ======================================

    console.log('=== リンク一覧記事の投稿を開始します ===');
    console.log(`タイトル: ${title}`);
    console.log(`検索キーワード数: ${searchKeywords.length}`);
    console.log('');

    const result = await core.runPostArticleLinkListToNote({
      title,
      bodyIntro,
      searchKeywords,
      currentAccount,
    });

    console.log('');
    console.log('✅ リンク一覧記事の処理が完了しました');
    console.log(`自アカウント記事URL: ${result.urlsFromOwnAccounts?.length ?? 0}件`);
    console.log(`検索で取得したURL: ${result.urlsFromSearch?.length ?? 0}件`);
    console.log(`掲載したURL合計: ${result.interleavedUrls?.length ?? 0}件`);
  });
})();
