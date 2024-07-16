var debug_mode = true //to control debug in console	, either debug_mode = true or set url?dfp_debug=true

var googletag = googletag || {}
googletag.cmd = googletag.cmd || []

var dfp = {}
dfp["account_id"] = "117295781"
dfp["ads_slots"] = {}
dfp["brand_name"] = "cap_" //php_vars.brand_name + "_" ;
dfp["brand_name"] += detectIsUat() //add _uat if is LOCALHOST or domain under scyeah.com.hk
dfp["current_cat"] = "" //php_vars.cat_slug ;
dfp["mapping"] = {}

function setupGoogleTagIndex(wrapper_name, ads_slot_name, mapping_array) {
  custom_console("setupGoogleTagIndex", wrapper_name, ads_slot_name, mapping_array)
  console.log("wrapper_name", wrapper_name)
  googletag.cmd.push(function () {
    var arr = document.querySelectorAll("[id^='" + wrapper_name + "']")
    var element = arr[arr.length - 1]
    var wName = element.getAttribute("id") + "_" + Math.floor(Math.random() * 10000)
    if (wrapper_name == "ads_popup_wrapper") {
      wName = "ads_popup_wrapper"
    }
    element.setAttribute("id", wName)
    // if (is_single_post == "1") {
    //   dfp["current_cat"] = "article"
    // } else if (is_front_page) {
    //   dfp["current_cat"] = "index"
    // } else {
    //   dfp["current_cat"] = "index"
    // }

    var size_array = [] // size array for defineSlot
    for (i = mapping_array.length; i < 6; i++) {
      //if mapping array lenght is less than 6 , add 2 dummy object
      mapping_array.push({ ss: [0, 0], as: [[0, 0]] })
    }
    for (j = 0; j < mapping_array.length; j++) {
      //convert mapping array to size_array for dfp
      size_array = size_array.concat(Object.values(mapping_array[j].as))
    }

    var current_array_index = 0
    do {
      size_array = removeDuplicateSize(current_array_index, size_array)
      current_array_index += 1
    } while (current_array_index < size_array.length)

    dfp["mapping"][wName] = googletag
      .sizeMapping()
      .addSize(mapping_array[0]["ss"], mapping_array[0]["as"]) // eg addSize([970,0],[[970,250],[970,90],[300,250]]).
      .addSize(mapping_array[1]["ss"], mapping_array[1]["as"])
      .addSize(mapping_array[2]["ss"], mapping_array[2]["as"])
      .addSize(mapping_array[3]["ss"], mapping_array[3]["as"])
      .addSize(mapping_array[4]["ss"], mapping_array[4]["as"])
      .addSize(mapping_array[5]["ss"], mapping_array[5]["as"])
      .build()

    googletag.cmd.push(function () {
      //dfp["ads_slots"]["article_infeed_lkf_wrapper"] = googletag.defineSlot('/' + id + '/' + dfp["brand_name"] + 'infeed_lkf', [[320,100],[300,250],[0,0],[1,1]], 'article_infeed_lkf_wrapper').defineSizeMapping(content1_mapping).addService(googletag.pubads());
      dfp["ads_slots"][wName] = googletag
        .defineSlot(
          //   "/" + dfp["account_id"] + "/" + dfp["brand_name"] + dfp["current_cat"] + ads_slot_name,
          ads_slot_name,
          size_array,
          wName
        )
        .defineSizeMapping(dfp["mapping"][wName])
        .setTargeting("scm", ads_slot_name)
        .addService(googletag.pubads())
      googletag.pubads().enableSingleRequest()
      // Collapses empty div elements on a page when there is no ad content to display.
      //googletag.pubads().collapseEmptyDivs();
      googletag.enableServices()

      if (arr.length > 1) {
        console.log(wName, "reload!!!")
        reloadDFP(wName)
      } else {
        console.log(wName, "display ads")
        googletag.display(wName)
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  if (googletag && googletag.pubads) {
    googletag.pubads().addEventListener("slotRenderEnded", function (event) {
      jQuery("#" + event.slot.getSlotElementId()).removeClass("ads_reload")
      //console.log(event.slot.getSlotElementId() + " ads empty = " + event.isEmpty);
      if (!event.isEmpty) {
        custom_console(event.slot.getSlotElementId() + " ads isEmpty = " + event.isEmpty)
        //if (event.slot == popup_ads){setTimeout(function(){jQuery('.popup_ad_container').css('display','block')},2000);}
        // if (
        //   dfp["ads_slots"]["ads_popup_wrapper"] != undefined &&
        //   event.slot == dfp["ads_slots"]["ads_popup_wrapper"]
        // ) {
        //   setTimeout(function () {
        //     jQuery(".popup_ad_container").css("display", "block");
        //   }, 2000);
        // }
      } else {
        if (debug_mode || getQueryVariable("dfp_debug")) {
          custom_console(event.slot.getAdUnitPath() + " " + event.slot.getSlotElementId() + " is Empty")
        }
        if (
          document.getElementsByClassName("popup_ad_container").length > 0 &&
          dfp["ads_slots"]["ads_popup_wrapper"] != undefined &&
          event.slot == dfp["ads_slots"]["ads_popup_wrapper"]
        ) {
          jQuery(".popup_ad_container").css("display", "none")
          return
        }
        var empty_div = jQuery("#" + event.slot.getSlotElementId()).find("div")

        //open auto dfp
        //if(empty_div.outerWidth() == 970 && empty_div.outerHeight() == 250){	//if size is 970px , load HOUSE ADS
        //	empty_div.css('margin','0 auto');
        //	empty_div.append('<a href="http://www.scmedia.com.hk/product/mc/" target="_blank"><div style="position:absolute;width:100%;height:100%;"></div><iframe width="'+empty_div.outerWidth()+'px" height="'+empty_div.outerHeight()+'"src="https://jmenplus-prod-resources.s3-ap-southeast-1.amazonaws.com/dfp/970_250/_HTML5+Canvas.html" frameBorder="0" scrolling="no"></iframe></a>');
        //}else{
        //	var empty_div = empty_div.addClass("dfp_empty");	//if dfp empy , add empty dfp empty class
        //}
        empty_div.css("display", "none")
        var empty_div = empty_div.addClass("dfp_empty")
      }
    })
  }
})

function removeDuplicateSize(start_index, size_array_object) {
  for (k = start_index + 1; k < size_array_object.length; k++) {
    if (
      size_array_object[start_index][0] == size_array_object[k][0] &&
      size_array_object[start_index][1] == size_array_object[k][1]
    ) {
      size_array_object.splice(k, 1)
      size_array_object = removeDuplicateSize(start_index, size_array_object)
    }
  }
  return size_array_object
}

function detectIsUat() {
  var o = location.origin
  if (o.search("scyeah.com.hk") > -1 || o.search("http://localhost/") > -1) {
    return "uat_" //if larger than -1 , means is LOCALHOST or UAT , return uat_
  }
  return "" //return nothing if not UAT or LOCALHOST
}

function removePopUpAd() {
  var element = document.getElementsByClassName("popup_ad_container")[0]
  if (element) element.parentNode.removeChild(element)
}

function reloadDFP(target_id) {
  if (target_id != undefined) {
    googletag.pubads().refresh([dfp["ads_slots"][target_id]])
    custom_console(target_id + " reload DFP due to adsize exceed and reload")
  } else {
    custom_console("ReloadDFP Fail, ADS no found")
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}

function custom_console(content) {
  if (debug_mode || getQueryVariable("dfp_debug_mode")) {
    console.log(content)
  }
}

//check each ads when screen on reize
window.addEventListener("resize", function () {
  if (window.innerWidth < 319) return //prevent checking when screen width is smaller than 319px
  jQuery(".dfp:not('.ads_reload')").each(function () {
    var parent_obj = jQuery(this) //ads div
    //if div is visible and div is smaller than dfp iframe ,reload ads
    if (parent_obj.css("display") != "none" && parent_obj.width() < parent_obj.find("iframe").attr("width")) {
      parent_obj.addClass("ads_reload") //add CLASS ads_reload to prevent keep reload ads
      reloadDFP(parent_obj.attr("id")) //pass div id to reload
    }
  })
})
