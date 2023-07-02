<? session_start()?>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>html5문서</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/login.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="sign-up-container">
          <form action="insert.php" name="member_form" method="post">
            <h1>Sign Up</h1>
            <div class="social-links">
              <div class="ka">
                <img src="img/kaka.png" alt="" />
              </div>
              <div class="na">
                <img src="img/naver.png" alt="" />
              </div>
              <div class="fa">
                <img src="img/face.png" alt="" />
              </div>
            </div>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="id" />
            <input type="password" placeholder="Password" name="pw" />
            <button class="form_btn" onclick="check_input()">Sign Up</button>
          </form>
        </div>
        <div class="sign-in-container">
          <form name="member_to" method="post" action="login.php">
            <h1>Log In</h1>
            <div class="social-links">
              <div class="ka">
                <img src="img/kaka.png" alt="" />
              </div>
              <div class="na">
                <img src="img/naver.png" alt="" />
              </div>
              <div class="fa">
                <img src="img/face.png" alt="" />
              </div>
            </div>
            <input type="text" placeholder="Email" name="id" />
            <input type="password" placeholder="Password" name="pw" />
            <button class="form_btn" type="submit">Log In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay-left">
            <div class="logo"><img src="img/logo.png" alt="" /></div>
            <h1>Welcome Back!</h1>
            <p>페이지를 이용하려면 로그인을 해주세요.</p>
            <button id="signIn" class="overlay_btn">Log In</button>
          </div>
          <div class="overlay-right">
            <div class="logo"><img src="img/logo.png" alt="" /></div>
            <h1>Welcome!</h1>
            <p>Sign Up and be our member. :-)</p>
            <button id="signUp" class="overlay_btn">Sign Up</button>
          </div>
        </div>
      </div>
      <script src="css/login.js"></script>
    </div>
    <script>
      function check_input() {
        const id = document.member_form.id.value;
        const re =
          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (!document.member_form.id.value) {
          alert("아이디를 입력하세요.");
          document.member_form.id.focus();
          return;
        } else if (!re.test(id)) {
          // test() : 값이 일치하는지 안하는지 확인
          alert("도메인(예:@abc.co.kr)을 포함해서 다시 입력해 주세요.");
          return false;
        }

        if (!document.member_form.pw.value) {
          alert("비밀번호를 입력하세요.");
          document.member_form.pw.focus();
          return;
        }

        if (!document.member_form.name.value) {
          alert("이름을 입력하세요.");
          document.member_form.name.focus();
          return;
        }

        document.member_form.submit();
        // 회원가입 버튼을 눌렀을 때 db로 보내는 작업
      }
    </script>
  </body>
</html>
