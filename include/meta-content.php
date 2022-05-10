<?php
   if (isset($_POST['route'])) {
      switch ($_POST['route']) {
         case 'index.php':
            $title = 'Home';
            break;
         case 'about.php':
               $title = 'About';
            break;
         case 'service.php':
            $title = 'Service';
            break;
         default:
         $title = 'Unknown';
         break;
      }
   }
?>
<title><?php echo $title; ?></title>
<!-- <meta content="Free HTML Templates" name="keywords">
<meta content="Free HTML Templates" name="description"> -->