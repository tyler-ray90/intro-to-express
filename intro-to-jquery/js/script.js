$('#addHome').removeClass('btn-danger');

$('#addHome').removeClass('btn-danger').addClass('btn-success');

$('h1').addClass('text-center');

// returns a jQuery set of new DOM elements
var $newLink = $( '<br><br><a id="zillowLink" href="https://www.zillow.com">Visit Zillow.com</a>' );

$('body').append($newLink);

// console.log("Everything is loaded!");
$('#addHome').removeClass('btn-danger').addClass('btn-success');
$('h1').addClass('text-center');
// returns a jQuery set of new DOM elements
var $newLink = $( '<br><br><a id="zillowLink" href="https://www.zillow.com">Visit Zillow.com</a>' );
$('body').append($newLink);
$('#zillowLink').attr("target", "_blank");

// $('#addHome').on('click', function(evt) {
//     console.log(evt);
//   });

$('#homes tbody').on('click', 'button', function() {
    console.log(this);
  });

  $('#homes tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
  });

  $('#homes tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function() {
      // now that the tr is hidden, let's completely remove it from the DOM
      $(this).remove();
    });
  });

  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];

  $('#addHome').on('click', function(){
    let $newHomes = $(`<tr>
    <td>${newHomes[0].address}</td>
    <td>${newHomes[0].sf}</td>
    <td>${newHomes[0].baths}</td>
    <td>${newHomes[0].baths}</td>
    <td>${newHomes[0].price}</td>
    <td><button class="btn btn-xs btn-danger">Remove</button></td></tr>`);

    newHomes.shift();
    
    $('tbody').append($newHomes);
  });
