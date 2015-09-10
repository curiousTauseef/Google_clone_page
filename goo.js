$(document).ready(function () {
 

    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#g').css('color',rand);
    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#O').css('color',rand);
    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#o').css('color',rand);
    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#G').css('color',rand);
    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#l').css('color',rand);
    var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#e').css('color',rand);

    //$("#google").effect("clip");

    $("h1").css("position","relative");
    $("h1").animate({left:"+=1250"},1000);
        
    $("#fb_button").click(function(){

        var fb_search = $("input[name=fb_search]").val();
        var array=[];

        for(var i=0;i<fb_search.length;i++)
        {
            if(fb_search[i]===".")
            {
                break;
            }
            else
            {
                array[i]=fb_search[i];
            }
        }

        var name= array.join("");

        var fb_link = "http://graph.facebook.com/" + fb_search + "/picture";

        $("body").css("background","lawngreen");
        
        $("#facebook").delay(1000).remove();
        $("#search").css("visibility","visible");
        $("#search").css("top","250px")

        $("#google").delay(200).animate({top : "-=110px"},1250)
       	$("#search").animate({top:'-=420px'}, 2000);
    	$("#search").animate({left:'+=130px'}, 2000);
    	$("#search_button").delay(2000).animate({left:'-=70px'},2000)
        
        $("h1").after("<p id=\"new_appended_1\" >"+"Hi "+name+" !! search here.. </p> <br>");
        $("#google").after("<br><img id=\"new_appended_2\" src=\""+fb_link+"\"> <br>");
    	
        //$("#google").after("<br><img id=\"new_appended_2\" src=\"azhar.jpg\" alt=\"azhar's\">");
    	
        $("#new_appended_2").css("position","relative");
    	$("#new_appended_2").delay(1000).animate({left:"+=460"},3000);
        $("#new_appended_2").effect("shake")

        $("#new_appended_1").delay(1000).animate({left:"+=460"},3000);
        $("#new_appended_1").effect("shake")
        //$("#new_appended_1").effect("bounce")
    	//$("#new_appended_2").effect("slide");
    });
    
    $("#search_button").click(function(){
        
        var search_query =$("input[name=query_search]").val();
        var replaced = search_query.replace(/ /g, '+');
        replaced ="https://www.google.co.in/webhp?hl=en#hl=en-IN&q=" + replaced;

        window.open(replaced);
        //$("input[name=query_search]").val()="";

        //$("body").html("<p>"+replaced+"</p>");
        //$("#one").after("<p>"+search_query+"</p>");

    })

    $("#dialog").dialog({ autoOpen: false });
 
    $("#doubt_button").click(function () {
        $("#dialog").dialog('open');
    })   
})