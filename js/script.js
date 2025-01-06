document.addEventListener("DOMContentLoaded", function() {
    // ページ内のリンクをすべて取得
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        // デフォルトのリンク動作を無効にする
        event.preventDefault();
  
        // リンク先のhref属性を取得
        let href = this.getAttribute("href");
  
        // ジャンプ先の要素を取得
        let target = document.querySelector(href === "#" || href === "" ? "html" : href);
  
        if (target) {
          // ジャンプ先の要素の位置を取得
          let position = target.getBoundingClientRect().top + window.scrollY;
  
          // スムーススクロールを実行
          window.scrollTo({
            top: position,
            behavior: "smooth" // スムーススクロールを指定
          });
        }
      });
    });
  });
