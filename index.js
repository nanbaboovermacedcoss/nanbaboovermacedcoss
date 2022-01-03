document.write("<h1>" + "Order Details" +"</h1>");
var firstname = "Nanbaboo";
var lastname = "Verma";
var fname = firstname+' '+lastname;
var totalletters = fname.length;

document.write('Hello '+ firstname + ', please check your order:');

var subtotal = totalletters*5;
var shipping = 7;
var grandtotal = subtotal+shipping;
document.write('<table><tr class="row1"> <td>' + 'Name:' + '</td> <td>' + firstname+' '+ lastname+ '</td> </tr>   <tr class="row2"> <td>' + 'Total letters:' + '</td> <td>' + totalletters+ '</td> </tr>     <tr class="row3"> <td>' + 'Subtotal:' + '</td> <td>' +'$'+ subtotal+ '</td> </tr>   <tr class="row4"> <td>' + 'Shipping:' + '</td> <td>' + '$'+ shipping+ '</td> </tr>    <tr class="row5"> <td>' + 'Grand total:' + '</td> <td>' + '$'+ grandtotal+ '</td> </tr>   </table><br>');

document.write('<a href="#">Pay Now</a>');
