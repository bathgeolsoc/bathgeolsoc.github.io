---
layout: page
title: Member's Area
---
<style>
#member-login-container{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 360px;
}
</style>
<div id="member-login-container">
<input style="margin: 16px; text-align: center;font-size: 1.2em;padding: 10px; margin-bottom: 6px;" id="password" type="password" placeholder="password" /> <br />
<div id="loginbutton" class="standard-button" type="button">Log In</div>
<p id="wrongPassword" style="display: none">wrong password</p>
<a href="/membership.html" class="standard-button">Register</a>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js">
</script>
<script type="text/javascript" src="/assets/sha1.js"></script>
<script type="text/javascript">
"use strict";
	function loadPage(pwd) {

		var hash= pwd;
		hash= Sha1.hash(pwd);
		var url= hash + "/index.html";

		$.ajax({
			url : url,
			dataType : "html",
			success : function(data) {

				window.location= url;

			},
			error : function(xhr, ajaxOptions, thrownError) {


				parent.location.hash= hash;

				//$("#wrongPassword").show();
				$("#password").attr("placeholder","wrong password");
				$("#password").val("");
			}
		});
	}


	$("#loginbutton").on("click", function() {
		loadPage($("#password").val());
	});
	$("#password").keypress(function(e) {
		if (e.which == 13) {

			loadPage($("#password").val());
		}
	});
	$("#password").focus();

</script>