<?php
if (isset($_POST['fname'])) {
	# code...
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
    $email=$_POST['email'];
    $tel=$_POST['tel'];
    $txt=$_POST['txt'];
   

                $conx=mysqli_connect("https://vishvajeetchauhan12345.github.io/","root","","vishdata");
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }

                 $stmt = $conx->prepare("INSERT INTO vish VALUES (?, ?, ?, ?, ?)");
                 $stmt->bind_param('sssss', $fname, $lname, $email, $tel,$txt);

                 /* execute prepared statement */
                 $stmt->execute();
                 /* close statement and connection */
                 $stmt->close();
                 /* close connection */
                 $conx->close();
                 if ($stmt==true) {
                 	# code...
                 	echo "<h3>Inserted...</h3>";
                 }
                else
                  {
                  	echo "<h3>Not inserted try...!</h3>";
                  }
}
?>