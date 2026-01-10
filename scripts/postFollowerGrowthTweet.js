// scripts/postFollowerGrowthTweet.js
// フォロワー増加用Twitter投稿スクリプト

import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import RandomPostService from '@aa-0921/note-auto-core/src/services/RandomPostService.js';
import Logger from '@aa-0921/note-auto-core/src/utils/Logger.js';
import { posts } from '../data/follower-growth-posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// プロジェクトルートを取得（scripts/の親ディレクトリ）
const projectRoot = path.resolve(__dirname, '..');

const logger = new Logger();
const args = process.argv.slice(2);
const isDryrun = args.includes('--dryrun');

async function main() {
  try {
    logger.info('========================================');
    logger.info('フォロワー増加用Twitter投稿');
    logger.info('========================================');
    logger.info('');

    if (isDryrun) {
      logger.info('⚠️ DRYRUNモード: 実際には投稿しません');
      logger.info('');
    }

    const service = new RandomPostService(logger, {
      baseDir: projectRoot
    });

    // await service.postRandomTweet(posts, { dryrun: isDryrun });
    await service.postRandomTweet(posts, { 
      dryrun: isDryrun,
      // 話題のハッシュタグを追加するか（文字数上限までギリギリ追加）
      includeTrending: true
    });


  } catch (error) {
    logger.error('❌ エラーが発生しました');
    logger.error('エラー内容:', error.message);
    if (error.stack) {
      logger.error('スタックトレース:', error.stack);
    }
    process.exit(1);
  }
}

main();

