var unavailableDates = [];

function getPlaces(categoryId,searchText) {
  if (searchText){
    var queryURL = '/items/owned/text/'+searchText;  
    // alert("Search by text!");
   }
  else
   {
    if (categoryId){
      var queryURL = '/items/owned/'+categoryId;  
     }
    else{
       var queryURL = '/items/owned';
    }
  }
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $("#query-div").empty();
    // $("#query-table").empty();
    // $('#items-data').empty();
    $('#row').empty();
    $('#places').empty();
    for (var i = 0; i < response.length; i++) {
      if (response[i].OCCUPIED_DATE)
      {
      var dayStartStr = response[i].OCCUPIED_DATE;
      var year = parseInt(dayStartStr.substring(0,4));
      var month = parseInt(dayStartStr.substring(5,7))-1;
      var day = parseInt(dayStartStr.substring(8,10))-1;
      var dayStart = new Date(year,month,day);
      var dayEnd = new Date;
      dayEnd.setDate(dayStart.getDate() + response[i].OCCUPIED_PERIOD);
      // var options = { day: '2-digit', month: '2-digit', year: 'numeric'};
      // eventDatedayStart.toLocaleString('en-US', options)
      var placeDate = {
        start: dayStart.toISOString().substring(0,10),
        end: dayEnd.toISOString().substring(0,10)
        };
      console.log(placeDate);
      unavailableDates.push(placeDate);
      }
      var newDivA = $("<div>");
      newDivA.addClass("single-event d-flex flex-row" );
      // newDivA.on("Click",getSpaces());
      // newDivA.on("Click",alert("clicked!"));
      var newPA = $("<p>");
      newPA.addClass("col");
      newPA.text(response[i].OCCUPIED_DATE.substring(0,10));
      var newPB = $("<p>");
      newPB.addClass("col-4");
      newPB.text(response[i].LOCATION);
      var newPD = $("<p>");
      newPD.addClass("col-4");
      newPD.text(response[i].CATEGORY_NAME);
      var newPC = $("<p>");
      newPC.addClass("col text-right"); 
      newPC.text(response[i].DESCRIPTION);
      // var newSpanA = $("<span>"); 
      // newSpanA.addClass("lnr lnr-highlight");     
      // var newSpanB= $("<span>"); 
      // newSpanB.addClass("lnr lnr-trash");  
      // newPC.append(newSpanA);      
      // newPC.append(newSpanB);
      newDivA.append(newPA);
      newDivA.append(newPB);
      newDivA.append(newPD);
      newDivA.append(newPC);
      $('#places').append(newDivA);
    //   <div class="single-event d-flex flex-row">
    //   <p class="col">
    //     Dec 01
    //   </p>
    //   <p class="col-8">
    //     World AIDS Day
    //   </p>
    //   <p class="col text-right">
    //     <span class="lnr lnr-highlight"></span>
    //     <span class="lnr lnr-trash"></span>
    //   </p>
    // </div>

      // var newH = $("<h3>");
      // newH.text(response[i].ITEM_NAME);
      // $('#items-data').append(newH);
      var newDiv0 = $("<div>");
      newDiv0.addClass("col-lg-4 col-sm-4" );
      var newDiv1 = $("<div>");
      newDiv1.addClass("single-events row no-padding");
      var newDiv2 = $("<div>");
      newDiv2.addClass("col-lg-4 image");
      var dayStr = response[i].CREATEDAT; 
      console.log("day=",dayStr);
      year = parseInt(dayStr.substring(0,4));
      month = parseInt(dayStr.substring(5,7))-1;
      day = parseInt(dayStr.substring(8,10));

      var eventDate = new Date(year,month,day);
      // var eventDate.setFullYear(1969);

      // var eventDate = new Date(response[i].CREATEDAT);
      // newP.text(eventDate.getFullYear);
      // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var options = { day: 'numeric', month: 'long', year: 'numeric'};
      // console.log(date.toLocaleString('de-DE', options));
      // → "Donnerstag, 20. Dezember 2012"
      // an application may want to use UTC and make that visible
      // options.timeZone = 'UTC';
      // options.timeZoneName = 'short';
//console.log(eventDate.toLocaleString('en-US', options));
// console.log("Month",month);
// console.log("Date",eventDate);
      // newDiv2.attr("style", "--my-day-var: '"+eventDate.toLocaleString('en-US', options)+"'");
      newDiv2.attr("style", "--my-day-var: '"+eventDate.toLocaleString('en-US', options)+"'");
      // newDiv2.attr("style", "border-style: solid; border-color: grey; border-width: 10px");
      // newDiv2.attr("style", "padding-color: grey; padding: 10px");
      // newDiv2.attr("style", "border-color: black");
      // newDiv2.attr("style", "border-width: 5px");
      // newDiv2.attr("style", "--my-day-var: '11 Jan'");
      // newDiv2.attr("style", ":root {--my-day-var: '11 Jan';}");
      var newImage = $("<img>");
      if (response[i].IMAGE_PATH){
        newImage.attr("src", "./../"+response[i].IMAGE_PATH);
        newImage.attr("width", "300");
        newImage.attr("height", "250");     
        newImage.attr("alt", ""); 
        newImage.attr("style", "border-style: solid; border-color: grey; border-width: 10px");

        // newImage.attr("width", "260");
        // newImage.attr("height", "200");
        // newImage.addClass("auth-image");
         }
      else {
        newImage.attr("src", "/img/logo.png");
        newImage.attr("width", "100");
        newImage.attr("height", "90");    
        newImage.attr("vspace", "75");  
        newImage.attr("hspace", "20");  
        newImage.attr("alt", ""); 
        // newImage.attr("width", "260");
        // newImage.attr("height", "200");
        // newImage.addClass("auth-image");
      }    
 
      
      newDiv2.append(newImage);  

      // var newDiv3 = $("<div>");
      // newDiv3.addClass("col-lg-7 details");  
 
      // var newA = $("<a>");
      // newA.attr("href","/items/page");         
      // var newH = $("<h4>");
      // newH.text(response[i].ITEM_NAME);      
      // newA.append(newH);

      // var newP = $("<p>");
      // newP.text(response[i].DESCRIPTION);

      // newDiv3.append(newA);
      // newDiv3.append(newP);


      // <p class="meta"><span class="lnr lnr-heart"></span> <span class="likes">05 likes</span> <span class="lnr lnr-bubble"></span> <span class="likes">06 comments</span></p>
      // newDivContent1.append(newDiv3);
      // newDivContent1.append(newA);
      // newDivContent2.append(newSpan1); 
      // newDivContent2.append(newSpan3); 
      // // newSpan2.append(newButton);
      // newDivContent3.append(newSpan2);
      // newDiv2.append(newDivContent1);
      // newDiv2.append(newDivContent2);
      // newDiv2.append(newDivContent3);
      newDiv1.append(newDiv2);
      // newDiv1.append(newDiv3);
      newDiv0.append(newDiv1);
      $('#row').append(newDiv0);

      // <div class="column">
      //   <div class="ui centered card three wide column">
      //         <div class="content">
      //                 <div class="left floated meta">Owned</div>
      //                 <img src="https://images.homedepot-static.com/productImages/a7e66f32-ae9c-440c-bb2c-53628ff60672/svn/milwaukee-power-tool-combo-kits-2997-23po-64_1000.jpg" width="200" height="200"/>
      //         </div>
              
      //         <div class="content">
      //             <span class="left floated" id="Description"> 
      //                 Description
      //             </span> 
      //         </div>
              
      //         <div class="content">
      //             <span class="right floated">
      //                 <button class="circular ui blue button" id="borrowButton">Borrow</button>
      //             </span>
      //         </div>
      //     </div>
      // </div>
    }
    $('#calendar').availabilityCalendar(unavailableDates); 
  });
}

function getCategories() {
  var queryURL = '/categories';
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $("#query-div").empty();
    // $("#query-table").empty();
    $('#select-category').empty();
    for (var i = 0; i < response.length; i++) {
      var newO = $("<option>");

      newO.attr("value", response[i].ID);
      newO.text(response[i].NAME);

      // <option value=""></option>
      //       <option value="1">1 (Strongly Disagree)</option>
      //       <option value="2">2</option>
      //       <option value="3">3</option>
      //       <option value="4">4</option>
      //       <option value="5">5 (Strongly Agree)</option>
      $('#select-category').append(newO);
    }
  });
}

$(document).ready(function() {
  var places = [];

    $("#searchButtonContainer").on("click", function(){
      // alert("Clicked search button");
      getPlaces();
    //   location.replace("/postitem/page");
    });
    $("#select-category").on("change", function(){
      // alert("Changed Category to "+$("#select-category").val());
      getPlaces($("#select-category").val());
      // location.replace("/postitem/page");
    // $("#select-category").val(),
    });   
    $("#search-text").on("keyup", function(){
      // alert("Key is Up!"+$("#search-text").val());
      var categoryId;
      getPlaces(categoryId,$("#search-text").val());
    //   location.replace("/postitem/page");
    });
    // getCategories();

 // var userPromise = new Promise(function(resolve, reject) {

   getPlaces();

  //  console.log(unavailableDates); 
  //     unavailableDates = [
  //       {start: '2019-08-31', end: '2019-09-05'},
  //           {start: '2019-03-11', end: '2019-03-15'},
  //           {start: '2019-04-15', end: '2019-04-23'},
  //           {start: '2019-10-01', end: '2019-10-07'}
  //       ]; 
  //  console.log(unavailableDates); 
  //  $('#calendar').availabilityCalendar(unavailableDates);    

});