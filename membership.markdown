---
layout: page
title: Join the Bath Geological Society
---
<h3>Key benefits</h3>
<ul><li>Free entry to our series of ten lectures held at the BRLSI, presented by well qualified speakers from university professors to research scientists to committed amateurs.</li>
<li>Free admittance to our field trips, usually led by experts in the areas to be visited (some trips may have charges for elements such as transportation or accommodation).</li>
<li>A copy of our professionally produced annual Journal.</li></ul>
<hr class="full-hr">
<h3>Pricing</h3>
<i>For the period 1st January - 31st December 2020</i>
<table>
<tr>
<td>Annual adult subscription</td><td>£30.00</td>
</tr>
<tr>
<td>Annual student subscription</td><td>£15.00</td>
</tr>
<tr>
<td>Annual family subscription</td><td>£45.00</td>
</tr>
</table>
<hr class="full-hr">
<h3>Join now</h3>
<form id="application-form">
<div class="form-section">
<div class="form-field">
<label>Membership required:</label>
<br>
<select onchange="membershipSelect()" id="membership-select">
<option value="I">Individual - £30</option>
<option value="S">Student - £15</option>
<option value="F">Family - £45</option>
</select>
</div>
<div class="form-field" id="family-container" style="display: none;">
<label>Number in family:</label>
<br>
<select onchange="familySelect()" id="family-select" name="family-number">
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>
</div>
</div>
<div class="form-section">
<div class="form-field">
<label id="name-1-label">Name:</label><br>
<input type="text" id="name-1" class="membership-input" name="name1">
</div>
<div class="form-field" id="family-2" style="display: none;">
<label>Name 2:</label><br>
<input type="text" class="membership-input" name="name2">
</div>
<div class="form-field" id="family-3" style="display: none;">
<label>Name 3:</label><br>
<input type="text" class="membership-input" name="name3">
</div>
<div class="form-field" id="family-4" style="display: none;">
<label>Name 4:</label><br>
<input type="text" class="membership-input" name="name4">
</div>
</div>
<div class="form-section">
<div class="form-field">
<label>Address:</label>
<br>
<input type="text" class="membership-input" id="address-input" name="address">
</div>
<br>
<div class="form-field">
<label>Postcode:</label>
<br>
<input type="text" class="membership-input" id="postcode-input" name="postcode">
</div>
<br>
<div class="form-field">
<label>Telephone number:</label>
<br>
<input type="text" class="membership-input" id="telephone-input" name="telephone">
</div>
<div class="form-field">
<label>Email address: (optional)</label>
<br>
<input type="text" class="membership-input" id="email-input" name="email">
<input type="text" class="membership-details-input" id="details-input" name="details">
</div>
<div class="form-field">
<label>Method of payment:</label>
<br>
<select name="payment" id="payment-select">
<option value="BACS">Bank transfer</option>
<option value="Cheque">Cheque</option>
<option value="SO">Standing order</option>
</select>
</div>
</div>
<div class="form-field">
<label class="checkbox-container">Please tick if you are a member of the Geologist's Association:
<input type="checkbox" class="hidden-checkbox" name="GA" id="GA-checkbox"><span class="checkmark"></span></label>
</div>
<div class="standard-button" id="membership-submit-button">Submit application</div>
</form>
<hr class="full-hr">
<h3>How to Pay</h3>
<div id="bank-transfer-help">
<h4>Bank Transfer</h4>
<p><strong>Account name:</strong> Bath Geological Society<br>
<strong>Account number:</strong> 71262556<br>
<strong>Sort code:</strong> 40-09-19<br>
<strong>Reference:</strong> BGS/[INSERT YOUR NAME]</p>
</div>
<div id="cheque-help">
<h4>Cheque</h4>
<p>Please make cheques payable to 'The Bath Geological Society' and send to: Miss Polly Sternbauer, The Membership Secretary, Flat 4, Somerset House, Moorfields Road, Bath, BA2 2HU</p>
</div>
<div id="so-help">
<h4>Standing Order</h4>
<p>Please download and print the following form: <strong><a download href="/assets/Bath-Geol-Soc-standing-order-2020.pdf">Bath-Geol-Soc-standing-order-2020.pdf</a></strong></p>
<p>Once completed, please send to: Miss Polly Sternbauer, The Membership Secretary, Flat 4, Somerset House, Moorfields Road, Bath, BA2 2HU</p>
</div>

<script type="text/javascript">
const membershipSubmitButton = document.querySelector('#membership-submit-button');
membershipSubmitButton.addEventListener('click', function(event) { 
console.log("submitted form");

var membership = document.getElementById("membership-select");
var name = document.getElementById("name-1");
var family2 = document.getElementById("family-2");
var family3 = document.getElementById("family-3");
var family4 = document.getElementById("family-4");
var address = document.getElementById("address-input");
var postcode = document.getElementById("postcode-input");
var telephone = document.getElementById("telephone-input");
var email = document.getElementById("email-input");
var details = document.getElementById("details-input");
var payment = document.getElementById("payment-select");
var GA = document.getElementById("GA-checkbox");

var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://bpm-maintenance.co.uk/bgs/membership-form-handler.php', true);
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("membership=" + membership + "&name=" + name + "&family2=" + family2 + "&family3=" + family3 + "&family4=" + family4 + "&address=" + address + "&postcode=" + postcode + "&telephone=" + telephone + "&email=" + email + "&details=" + details + "&payment=" + payment + "&GA=" + GA);
});
</script>