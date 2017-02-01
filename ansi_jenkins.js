const func = ()=>{
  jQuery(".console-output").each((i, e)=> {
    console.log(i, e);
    jQuery(e)
    .html(ansi_up.ansi_to_html(e.innerText))
    .css("color", "white")
    .css("background", "black")
    .css("padding", "16px");
  });
}

console.log("loaded extention");
func();