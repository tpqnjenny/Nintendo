window.addEventListener("click", spriteEffect);

      function spriteEffect(e) {
        const width = 300;
        const height = 300;
        const cols = 6;
        const rows = 5;
        let current = 0;
        const intervalGap = 600 / 25;

        const sprite = document.createElement("div");
        sprite.style.position = "absolute";
        sprite.style.left = e.pageX + "px";
        sprite.style.top = e.pageY + "px";
        sprite.style.backgroundImage = 'url("../img/kirby-explosion.png")';
        sprite.style.width = width + "px";
        sprite.style.height = height + "px";
        sprite.style.backgroundSize = `${width * cols}px ${height * rows}px`;
        sprite.style.transform = ` translate(-50%, -50%)`;
        sprite.style.zIndex = 9999999;
        document.body.append(sprite);

        const intervalId = setInterval(() => {
          const currentCol = current % cols; // 나머지 구하기
          const currentRow = Math.floor(current / cols); // 몫 구하기

          sprite.style.backgroundPosition = `${-width * currentCol}px ${
            -height * currentRow
          }px`;

          if (++current % (rows * cols) === 0) {
            clearInterval(intervalId);
            document.body.removeChild(sprite);
          }
        }, intervalGap);
      }