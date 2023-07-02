<?
  session_start();
?>
<meta charset="utf-8">
<?
  $id = $_POST['id'];
  $pw = $_POST['pw'];
  $name = $_POST['name'];

  include "dbconn.php";
  mysqli_query($connect, 'set names utf8');

  $sql = "select * from join_mem where id='id'";
  $result = mysqli_query($connect, $sql);
  $exist_id = mysqli_num_rows($result);
  if($exist_id){
    echo("
      <script>
        window.alert('해당 아이디가 존재합니다.')
        history.go(-1)
      </script>
    ");
    exit;
  } else{
    $sql = "insert into join_mem(name, id, pw )";
    $sql .= "values ('$name', '$id', '$pw')";
    mysqli_query($connect, $sql);
  }
  mysqli_close($connect);

  echo "
    <script>
      location.href = './login_form.php';
    </script>
  "
?>