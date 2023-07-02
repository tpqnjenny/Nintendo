<? 
	session_start(); 
?>
	<div id="top_login">
  
	  
	  <?
    if(!$_SESSION['userid'] )
	{
?>
          <a href="login_form.php">로그인 및 회원가입</a> 
<?
	}
	else
	{
?>
		<p class="hello"><?=$_SESSION['username']?> 님, 반갑습니다! |</p> 
		<a href="logout.php">Logout</a> 
<?
	}
?>
	  
     </div>
  