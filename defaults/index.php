<?php define(FORWARDED_FILE,"forwarded.txt");$title=$h1="This page has moved - Redirecting...";$p1="This page has moved to ";$p2="Please update your bookmarks.";$url="";$refresh1="<meta http-equiv=\"refresh\" content=\"0;URL='";$refresh2="'\" />";$onload1=" onload=\"window.location='";$onload2="';\"";try{$file=fopen(FORWARDED_FILE,'r');$url=trim((string)fread($file,filesize(FORWARDED_FILE)));fclose($file);}catch(Exception $e){}if(empty($url)){$title=$h1="Coming Soon...";$p1="A new organization website at UCI!";$p2=$refresh1=$refresh2=$onload1=$onload2="";}else{if(!headers_sent()){header("Location: $url",true,301);}}?><!DOCTYPE html><html lang=en><head><?php echo $refresh1 . $url . $refresh2; ?><title><?php echo $title; ?></title></head><body<?php echo $onload1 . $url . $onload2; ?>><h1><?php echo $h1; ?></h1><p><?php echo $p1; ?><?php if (!empty($url)) { ?><a href=<?php echo $url; ?>><?php echo "'$url'"; ?></a></p><?php } ?><p><?php echo $p2; ?><hr /><p><a href=http://clubs.uci.edu>CO Web Services</a> | <a href=http://campusorgs.uci.edu>Campus Organizations</a> | <a href=http://studentlife.uci.edu>Student Life & Leadership</a> | <a href=http://uci.edu>UC Irvine</a></p></body></html>
