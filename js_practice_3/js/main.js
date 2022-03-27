'use strict';

{
    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount} likes`);
        }

        like() {
            this.likeCount++;
            this.show();
        }
    }

    const posts = [
        new Post('JavaScriptの勉強中…'),
        new Post('プログラミング楽しい！'),
    ];

    posts[0].like();
    // posts[0].likeCount++;
    // posts[0].likeCount++;
    // posts[0].likeCount++;
    // posts[0].likeCount++;
    // 上記の書き方は非推奨（プロバティの操作）

    // posts[0].show();
    // posts[1].show();
}
