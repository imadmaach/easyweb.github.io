(function ($) {

 

  var flexy_groups = new Array(50);
  for (i=0; i<50; i++){
flexy_groups[i]=new Array(50);}




  $.fn.FlexyElement = function (option) {

    var defaults = {
      
      // width/height:'px','%','auto', 'related'
      // position:'absolute' , 'relative' , 'fixed',
      // direction:'top right' ,'top left' 'top center' 'bottom right' 'bottom left' 'bottom center' 'left top' 'left botom' 'left center' 'right top' 'right bottom' 'right center' 'center'
      // autoposition: true , false ,
      // x_distance: int ,
      // parent_distance: true , false ,
      // event_handled:'hover' , 'click' , 'toggle' , 'none' ,
      // selectable: true , false ,
      // open/close_duration: int /ms ,
      // open/close_animation: ,
      // activate/deactivate_after: 'ms' , 'px' ,
      // scroll_to_it: true , false ,

      
      width:'300px',
      height:'200px',
      direction:'right bottom',
      parent_distance:true,
      x_distance:0,
      y_distance:0,
      position:'absolute',
      autoposition:false,
      event_handled:'hover',
      selectable:'false', 
      open_duration: 300,
      close_duration: 225,
      open_animation:'righttoleft',
      close_animation:'lefttoright',
      activate_after:'none',
      deactivate_after:'none',
      scroll_to_it:false,
      group:'none',
      flexy_index:'none',
      child_element:'none',
      constrain_element:'none',
      background_element:'none',
      indicator_elment:'none'

    };
    

    this.each(function(){
    var parent_element = $(this);
    var options = $.extend({}, defaults, option);
    var isFocused = false;


   


    
    function update_options() {

      if (parent_element.data('width') !== undefined)
        options.width = parent_element.data('width');
      if (parent_element.data('height') !== undefined)
        options.height = parent_element.data('height');
      if (parent_element.data('position') !== undefined)
        options.position = parent_element.data('position');
      if (parent_element.data('direction') !== undefined)
        options.direction = parent_element.data('direction');
      if (parent_element.data('autoposition') !== undefined)
        options.autoposition = parent_element.data('autoposition');
      if (parent_element.data('x_distance') !== undefined)
        options.x_distance = parent_element.data('x_distance');
      if (parent_element.data('y_distance') !== undefined)
        options.y_distance = parent_element.data('y_distance');
      if (parent_element.data('parent_distance') !== undefined)
        options.parent_distance = parent_element.data('parent_distance');
      if (parent_element.data('event_handled') !== undefined)
        options.event_handled = parent_element.data('event_handled');
      if (parent_element.data('selectable') !== undefined)
        options.selectable = parent_element.data('selectable');
      if (parent_element.data('open_duration') !== undefined)
        options.open_duration = parent_element.data('open_duration');
      if (parent_element.data('close_duration') !== undefined)
        options.close_duration = parent_element.data('close_duration');
      if (parent_element.data('open_animation') !== undefined)
        options.open_animation = parent_element.data('open_animation');
      if (parent_element.data('close_animation') !== undefined)
        options.close_animation = parent_element.data('close_animation');
      if (parent_element.data('activate_after') !== undefined)
        options.activate_after = parent_element.data('activate_after');
      if (parent_element.data('deactivate_after') !== undefined)
        options.deactivate_after = parent_element.data('deactivate_after');
      if (parent_element.data('scroll_to_it') !== undefined)
        options.scroll_to_it = parent_element.data('scroll_to_it');
      if (parent_element.data('group') !== undefined)
        options.group = parent_element.data('group');
      if (parent_element.data('flexy_index') !== undefined)
        options.flexy_index = parent_element.data('flexy_index');
      if (parent_element.data('child_element') !== undefined)
        options.child_element = parent_element.data('child_element');
      if (parent_element.data('constrain_element') !== undefined)
        options.constrain_element = parent_element.data('constrain_element');
      if (parent_element.data('background_element') !== undefined)
        options.background_element = parent_element.data('background_element');
      if (parent_element.data('indicator_elment') !== undefined)
        options.indicator_elment = parent_element.data('indicator_elment');
  


      if (parent_element.attr('width') !== undefined)
        options.width = parent_element.attr('width');
      if (parent_element.attr('height') !== undefined)
        options.height = parent_element.attr('height');
      if (parent_element.attr('position') !== undefined)
        options.position = parent_element.attr('position');
      if (parent_element.attr('direction') !== undefined){
        options.direction = parent_element.attr('direction');}
      if (parent_element.attr('autoposition') !== undefined)
        options.autoposition = parent_element.attr('autoposition');
      if (parent_element.attr('x-distance') !== undefined){
        options.x_distance = parseInt(parent_element.attr('x-distance'));}
      if (parent_element.attr('y-distance') !== undefined)
        options.y_distance = parseInt(parent_element.attr('y-distance'));
      if (parent_element.attr('parent-distance') !== undefined){
        if (parent_element.attr('parent-distance')=="true") {options.parent_distance=true;};
        if (parent_element.attr('parent-distance')=="false") {options.parent_distance=false;};
      }
      if (parent_element.attr('event-handled') !== undefined)
        options.event_handled = parent_element.attr('event-handled');
      if (parent_element.attr('selectable') !== undefined)
        options.selectable = parent_element.attr('selectable');
      if (parent_element.attr('open-duration') !== undefined)
        options.open_duration = parent_element.attr('open-duration');
      if (parent_element.attr('close-duration') !== undefined)
        options.close_duration = parent_element.attr('close-duration');
      if (parent_element.attr('open-animation') !== undefined)
        options.open_animation = parent_element.attr('open-animation');
      if (parent_element.attr('close-animation') !== undefined)
        options.close_animation = parent_element.attr('close-animation');
      if (parent_element.attr('activate-after') !== undefined)
        options.activate_after = parent-element.attr('activate-after');
      if (parent_element.attr('deactivate-after') !== undefined)
        options.deactivate_after = parent_element.attr('deactivate-after');
      if (parent_element.attr('scroll-to-it') !== undefined)
        options.scroll_to_it = parent_element.attr('scroll-to-it');
      if (parent_element.attr('group') !== undefined)
        options.group = parent_element.attr('group');
      if (parent_element.attr('flexy-index') !== undefined)
        options.flexy_index = parent_element.attr('flexy-index');
      if (parent_element.attr('child-element') !== undefined)
        options.child_element = parent_element.attr('child-element');
      if (parent_element.attr('constrain-element') !== undefined)
        options.constrain_element = parent_element.attr('constrain-element');
      if (parent_element.attr('background-element') !== undefined)
        options.background_element = parent_element.attr('background-element');
      if (parent_element.attr('indicator-elment') !== undefined)
        options.indicator_elment = parent_element.attr('indicator-elment');
    }
    // update options
    update_options();

    // attach elements to objects
    var child_element,constrain_element,background_element,indicator_elment;

    if (options.child_element!='none') {child_element = $("#"+ options.child_element);}
    if (options.constrain_element!='none') {constrain_element = $("#"+ options.constrain_element);}
    if (options.background_element!='none') {background_element = $("#"+ options.background_element);}
    if (options.indicator_elment!='none') {indicator_elment = $("#"+ options.indicator_elment);}

    
    
    
    // Attach FlexyElement to its activator
   //if (options.child_element!='none'){parent_element.after(child_element);}


    if (options.background_element!='none'){parent_element.before(background_element);}
    if (options.indicator_elment!='none'){parent_element.before(indicator_elment);}
 
    //intialising flexy_groups
    var ag=parseInt(options.group);var ai=parseInt(options.flexy_index);
    if (options.group!='none' && options.flexy_index!='none' ) {
     
    
      flexy_groups[ai,ag]=""+parent_element.attr('class'); 
      flexy_groups[ai,ag]=""+flexy_groups[ai,ag].replace(" active" ,"");
      flexy_groups[ai,ag]="."+flexy_groups[ai,ag].replace(" " ,".");
     

 alert("ai"+ai+"ag"+ag+"class"+flexy_groups[ai,ag]);
 alert("1-1:"+flexy_groups[1,1]);

    };
    
    //helped variables & functions
    var alldirections=['top right','top left'];

    var parent_element_width,parent_element_width,child_element_height,child_element_width,offsetleft,offsettop,screen_height,screen_width;
    var child_element_offsettop,child_element_offsetleft;

    function refresh(){

      parent_element_height = parent_element.outerHeight();
      parent_element_width = parent_element.outerWidth();

      child_element_height = child_element.outerHeight();
      child_element_width = child_element.outerWidth();

      offsetleft = parent_element.position().left+parseInt(parent_element.css('marginLeft'), 10);
      offsettop = parent_element.position().top+parseInt(parent_element.css('marginTop'), 10); 


      screen_height= $(window).height();
      screen_width= $(window).width();


      if (options.constrain_element!='none') {

      parent_element_height = constrain_element.outerHeight();
      parent_element_width = constrain_element.outerWidth();
   

      offsetleft = constrain_element.position().left+parseInt(constrain_element.css('marginLeft'), 10);;
      offsettop = constrain_element.position().top+parseInt(constrain_element.css('marginTop'), 10); ;



      }

      if (options.position=="fixed") {
      options.parent_distance = false;  
      parent_element_height = screen_height;
      parent_element_width = screen_width ;
      offsetleft = 0;
      offsettop = 0;


      }

      if (options.position=="absolute" && options.autoposition==true && options.width.replace('px','')>screen_width) {options.width=screen_width+"px";}
       if (options.position=="absolute" && options.autoposition==true && options.height.replace('px','')>screen_height) {options.height=""+screen_height+"px";}



    }
    refresh();
    function antidirection(direction){
      var anti;
      if (direction=="top") {anti="bottom"};
      if (direction=="bottom") {anti="top"};
      if (direction=="right") {anti="left"};
      if (direction=="left") {anti="right"};
      if (direction=="center") {anti="center"};
      return anti;
    }
    //checkfreepos function
    function checkfreepos(){

      var check=false;
      if (child_element_offsettop<0) {check=true;}
      if (child_element_offsetleft<0) {check=true;}
      if (child_element_offsettop+parseInt(child_element_height)>$(document).height()) {check=true;} 
      if (child_element_offsetleft+parseInt(child_element_width)>screen_width) {check=true;}
      
      return check;
    }
    //autoposition function
    function autoposition(){
      var pos=[];

      var str=options.direction;
      var res = str.split(" ");
      var posx=res[0];var posy=res[1];

      if (checkfreepos()==true) {

        pos=Setposbydirection(posx+" "+antidirection(posy));
        
        if (checkfreepos()==true) {

          pos=Setposbydirection(posx+" center");
          
          if (options.height.search("%")>=0) {
            if (pos[1]<0) {pos[1]=0;}
            kk=parseInt(child_element_height)+parseInt(pos[1]);
            if (kk>$(document).height()) {pos[1]=$(document).height()-parseInt(child_element_height);}
          }
          if (options.width.search("%")>=0) {
            if (pos[0]<0) {pos[0]=0;}
            kk=parseInt(child_element_width)+parseInt(pos[0]);
            if (kk>screen_width) {pos[0]=parseInt(screen_width)-parseInt(child_element_width);}
          }
      
          if (checkfreepos()==true) {

            pos=Setposbydirection(antidirection(posx)+" "+posy);



            if (checkfreepos()==true) {

            pos=Setposbydirection(antidirection(posx)+" "+antidirection(posy));
              
              if (checkfreepos()==true) {

                pos=Setposbydirection(antidirection(posx)+" center");

                if (options.height.search("%")>=0) {
                  if (pos[1]<0) {pos[1]=0;}
                  kk=parseInt(child_element_height)+parseInt(pos[1]);
                  if (kk>$(document).height()) {pos[1]=$(document).height()-parseInt(child_element_height);}
                }
                if (options.width.search("%")>=0) {
                  if (pos[0]<0) {pos[0]=0;}
                  kk=parseInt(child_element_width)+parseInt(pos[0]);
                  if (kk>screen_width) {pos[0]=parseInt(screen_width)-parseInt(child_element_width);}
                }
                
                if (checkfreepos()==true) {

                  pos=Setposbydirection("center center");

                  if (options.height.search("%")>=0) {
                    if (pos[1]<0) {pos[1]=0;}
                    kk=parseInt(child_element_height)+parseInt(pos[1]);
                    if (kk>$(document).height()) {pos[1]=$(document).height()-parseInt(child_element_height);}
                  }
                  if (options.width.search("%")>=0) {
                    if (pos[0]<0) {pos[0]=0;}
                    kk=parseInt(child_element_width)+parseInt(pos[0]);
                    if (kk>screen_width) {pos[0]=parseInt(screen_width)-parseInt(child_element_width);}
                  }
            
                }
              }
            }
          }
        }
      }

      //pos[0]=pos_x;
      //pos[1]=pos_y;
      return pos;
    }





     function close_same_group(){
      var gg=parseInt[options.index]+1;
     // alert(""+flexy_groups[parseInt(options.group , gg)]+"g"+parseInt[options.index]);
     }
    //set height and width


    function SetDimentions(){

      refresh();

      var dd_height;
      var dd_width;
      
      // Set width
      if (options.width=="related") {dd_width=parent_element_width;};
      if (options.width.search("px")>=0) {dd_width=options.width; }
      if (options.width=="auto") { dd_width="auto"; }
      if (options.width.search("%")>=0) {
        if (options.position=="absolute") {


          if (options.direction=="right bottom" || options.direction=="right top" || options.direction=="right center") {
            if (options.parent_distance==true) {
              var jj=screen_width-parent_element_width-offsetleft;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
            }
            else {
              
              var jj=screen_width-offsetleft;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
            }
          }
          if (options.direction=="left bottom" || options.direction=="left top" || options.direction=="left center" || options.direction=="bottom left" || options.direction=="top left" ) {
            if (options.parent_distance==true) {
              var jj=offsetleft;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
            }
            else {
              var jj=offsetleft+parent_element_width;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
            }
          }
          if (options.direction=="bottom left" || options.direction=="top left" ) {

              var jj=screen_width-offsetleft;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
          }
          if (options.direction=="bottom right" || options.direction=="top right" ) {

              var jj=offsetleft+parent_element_width;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
            
          }
          if (options.direction=="bottom center" || options.direction=="top center" || options.direction=="center center" ) {
              var jj=screen_width;
              var o_w=options.width.replace('%','');
              dd_width=(jj*o_w)/100;
          }

          if (options.constrain_element!='none' && options.parent_distance==false) {
            
            var jj=parent_element_width;
            var o_w=options.width.replace('%','');
            dd_width=(jj*o_w)/100;

            
          }
          
          dd_width=dd_width+"px";
        }

        if (options.position=="relative" || options.position=="fixed") {
          dd_width=options.width;
        }
        
       }

       // set Height

      if (options.height=="related") {dd_height=parent_element_height;};
      if (options.height.search("px")>=0) {dd_height=options.height; }
      if (options.height=="auto") { dd_height="auto"; }
      if (options.height.search("%")>=0) {
        if (options.position=="absolute") {
          

          if (options.direction=="bottom right" || options.direction=="bottom left" || options.direction=="bottom center" ) {
            
              
            kk=$(document).height()-screen_height;

              if (offsettop<kk) {
                var jj=screen_height;
                var o_w=options.height.replace('%','');
                dd_height=(jj*o_w)/100;
              }
              else {
                
                if (options.parent_distance==true) {
                  var jj=$(document).height()-offsettop-parent_element_height;
                  var o_w=options.height.replace('%','');
                  dd_height=(jj*o_w)/100;
                 
                }
                if (options.parent_distance==false) {

                  var jj=$(document).height()-offsettop;
                  var o_w=options.height.replace('%','');
                  dd_height=(jj*o_w)/100;
                }
              }
           
          }
          if (options.direction=="right bottom" || options.direction=="left bottom"){
            
              kk=$(document).height()-screen_height;

              if (offsettop<kk) {
                var jj=screen_height;
                var o_w=options.height.replace('%','');
                dd_height=(jj*o_w)/100;
              }

              else {
                
                  var jj=$(document).height()-offsettop;
                  var o_w=options.height.replace('%','');
                  dd_height=(jj*o_w)/100;
              }
          }
          
          if (options.direction=="top right" || options.direction=="top left" || options.direction=="top center" ) {
            if (options.parent_distance==true) {
              var jj=offsettop;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;

            }
            else {
              var jj=offsettop+parent_element_height;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;
            }
            if (offsettop>screen_height) {
              var jj=screen_height;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;
            };
          }

          if (options.direction=="right top" || options.direction=="left top"){
              var jj=offsettop+parent_element_height;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;
              if (offsettop>screen_height) {
              var jj=screen_height;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;
            };
          }
          if (options.direction=="left center" || options.direction=="right center" || options.direction=="center center" ) {
              var jj=screen_height;
              var o_w=options.height.replace('%','');
              dd_height=(jj*o_w)/100;
          }
          if (options.constrain_element!='none' && options.parent_distance==false) {
            
            var jj=parent_element_height;
            var o_w=options.height.replace('%','');
            dd_height=(jj*o_w)/100;

            
          }
          
          dd_height=dd_height+"px";
        }
        if (options.position=="relative" || options.position=="fixed") {
          dd_height=options.height;
        }
       }

       //Set the Height and Width in the element 
       

       if (options.height.search("px")>=0 || options.height.search("%")>=0 && options.position!="relative") {
        child_element_height=dd_height.replace('px','');}
       if (options.width.search("px")>=0 || options.width.search("%")>=0 && options.position!="relative") {
        child_element_width=dd_width.replace('px','');}

        if (options.position=="relative" && options.height.search("%")>=0) {
          child_element_height=dd_height;
        }
        if (options.position=="relative" && options.width.search("%")>=0) {
          child_element_width=dd_width;
        }

       if (options.height=="related" ) { child_element_height=dd_height; }
       if (options.width=="related" ) { child_element_width=dd_width; }

       
       


       child_element.css({ width: dd_width, height: dd_height });

    }
    //end SetDimentions()

    //Start Setposbydirection()
    function Setposbydirection(direction){
      var pos_x;
      var pos_y;
      var pos=[];
      if (direction=="bottom right") {

          pos_y=offsettop+parent_element_height+options.y_distance;
          pos_x=offsetleft+options.x_distance;
          if (options.parent_distance==false) {
            pos_y=offsettop+options.y_distance;
          }
      }
      if (direction=="bottom left") {
        pos_y=offsettop+parent_element_height+options.y_distance;
          pos_x=offsetleft+parent_element_width-child_element_width+options.x_distance;

          if (options.parent_distance==false) {
            pos_y=offsettop+options.y_distance;
          }
      }
      if (direction=="bottom center") {
        pos_y=offsettop+parent_element_height+options.y_distance+options.y_distance;
          pos_x=offsetleft+(parent_element_width-child_element_width)/2+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_y=offsettop+options.y_distance;
          }
      }

      if (direction=="top right") {
        pos_y=offsettop-child_element_height+options.y_distance;
          pos_x=offsetleft+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_y=offsettop-child_element_height+parent_element_height+options.y_distance;
          }
      }
      if (direction=="top left") {
        pos_y=offsettop-child_element_height+options.y_distance;
          pos_x=offsetleft+parent_element_width-child_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_y=offsettop-child_element_height+parent_element_height+options.y_distance;
          }
      }
      if (direction=="top center") {
        pos_y=offsettop-child_element_height+options.y_distance;
          pos_x=offsetleft+(parent_element_width-child_element_width)/2+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_y=offsettop-child_element_height+parent_element_height+options.y_distance;
          }
      }

      if (direction=="right bottom") {
        pos_y=offsettop+options.y_distance;
          pos_x=offsetleft+parent_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft+options.x_distance;
          }
      }
      if (direction=="right top") {
        pos_y=offsettop-child_element_height+parent_element_height+options.y_distance;
          pos_x=offsetleft+parent_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft+options.x_distance;
          }
      }
      if (direction=="right center") {
        pos_y=offsettop-(child_element_height-parent_element_height)/2+options.y_distance;
          pos_x=offsetleft+parent_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft+options.x_distance;
          }
      }

      if (direction=="left bottom") {
        pos_y=offsettop+options.y_distance;
          pos_x=offsetleft-child_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft-child_element_width+parent_element_width+options.x_distance;
          }
      }
      if (direction=="left top") {
        pos_y=offsettop-child_element_height+parent_element_height+options.y_distance;
          pos_x=offsetleft-child_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft-child_element_width+parent_element_width+options.x_distance;
          }
      }
      if (direction=="left center") {
        pos_y=offsettop-(child_element_height-parent_element_height)/2+options.y_distance;
          pos_x=offsetleft-child_element_width+options.x_distance;
          
          if (options.parent_distance==false) {
            pos_x=offsetleft-child_element_width+parent_element_width+options.x_distance;
          }
      }
      if (direction=="center center") {
          pos_x=offsetleft+(parent_element_width-child_element_width)/2+options.x_distance;
          pos_y=offsettop-(child_element_height-parent_element_height)/2+options.y_distance;
      }
      pos[0]=pos_x;
      pos[1]=pos_y;
        child_element_offsettop=pos[1];
        child_element_offsetleft=pos[0];
        child_element.css({ top:pos[1], left:pos[0] });
      return pos;
    }

    //End Setposbydirection()

    //Start SetPosition()

    function SetPosition(){


      var pos=[];

      if (options.position=="absolute" || options.position=="fixed") {

        if (options.direction=="bottom left") { 
          pos=Setposbydirection('bottom left');
        }
        if (options.direction=="bottom right") { 
          pos=Setposbydirection('bottom right'); 
        }
        if (options.direction=="bottom center") { 
          pos=Setposbydirection('bottom center');
        }
        if (options.direction=="top left") { 
          pos=Setposbydirection('top left');
        }
        if (options.direction=="top right") { 
          pos=Setposbydirection('top right');
        }
        if (options.direction=="top center") { 
          pos=Setposbydirection('top center');
        }
        if (options.direction=="right bottom") { 
          pos=Setposbydirection('right bottom');
        }
        if (options.direction=="right top") { 
          pos=Setposbydirection('right top');
        }
        if (options.direction=="right center") { 
          pos=Setposbydirection('right center'); 
        }
        if (options.direction=="left bottom") { 
          pos=Setposbydirection('left bottom');
        }
        if (options.direction=="left top") { 
          pos=Setposbydirection('left top');
        }
        if (options.direction=="left center") { 
           pos=Setposbydirection('left center');
        }

        if (options.direction=="center center") { 
          pos=Setposbydirection('center center');
        }

        if (options.autoposition==true) {pos=autoposition();}

        if (options.height.search("%")>=0) {
            if (pos[1]<0) {pos[1]=0;}
            kk=parseInt(child_element_height)+parseInt(pos[1]);
            if (kk>$(document).height()) {pos[1]=$(document).height()-parseInt(child_element_height);}
            child_element.css({ top:pos[1], left:pos[0] });
          }
          if (options.width.search("%")>=0) {
            if (pos[0]<0) {pos[0]=0;}
            kk=parseInt(child_element_width)+parseInt(pos[0]);
            if (kk>screen_width) {pos[0]=parseInt(screen_width)-parseInt(child_element_width);}
            child_element.css({ top:pos[1], left:pos[0] });
          }
        
        
        
        // Set the position of element
        

        
      };

      if (options.position=="relative") {

        // Attach dropdown to its activator
        if (options.constrain_element!='none') {
          constrain_element.after(child_element);
        }
        else {parent_element.after(child_element);}
        
        child_element.css({position: 'relative'});
       
      };
      if (options.position=="fixed") {

        // Attach dropdown to its activator
        parent_element.after(child_element);
        child_element.css({position: 'fixed'});
       
      };
      parent_element.css({zIndex:699});
    child_element.css({display: 'inherit', zIndex:700});
    }
    // End Setposition()



    if (options.group!='none' && options.flexy_index!='none') {
//alert(""+flexy_groups[1,1]+"+"+flexy_groups[1,2]+"+"+flexy_groups[1,3]+"+"+flexy_groups[1,4]+"+");

//alert(""+flexy_groups[2,1]+"+"+flexy_groups[2,2]+"+"+flexy_groups[2,3]+"+"+flexy_groups[2,4]+"+"+flexy_groups[2,5]);
      
      $(document).bind('click.'+ parent_element.attr('id'), function (e) {

        var ccce="";
       
              if ( !child_element.is(e.target) && !parent_element.is(e.target) && (!parent_element.find(e.target).length) ) {
                
                for (var i = 1; i < 1000; i++) {
                 //if (flexy_groups[parseInt(options.group) , i]!=undefined && flexy_groups[parseInt(options.group), i].is(e.target)) {
               

                  if (flexy_groups[options.group,i]!=undefined ) {
                   
                    if ($(''+flexy_groups[options.group,i]).is(e.target) ) {   


                        cccc=parent_element.attr('class');
                        cccc=cccc.replace(" active" ,"");
                         cccc=cccc.replace(" " ,".");



                        if ($(''+flexy_groups[options.group,i]).hasClass('active') && cccc!=flexy_groups[options.group,i] ) {

                          
                         CloseDropdown();

                        };
                    }
                  }
                  else {
                    i=1000;
                  }
                }
              }
      });     
    };

    

    
   if (parent_element.hasClass('active')) {OpenDropdown();};


    function OpenDropdown(eventType) {


       if (options.background_element!='none') { 
        
        background_element.css({display: 'inherit' , zIndex:100 ,height:''+$(document).height()+'px' , width:""+screen_width+"px" });
      };
      SetDimentions();

      SetPosition();
     
      
      parent_element.addClass("active");
    }

    function CloseDropdown() {

        parent_element.removeClass("active");
        child_element.css({display: 'none'});

        if (options.background_element!='none') { 
        
        background_element.css({display: 'none' });
      };
      
        
    }



     // Hover
    if (options.event_handled=="hover") {
      var open = false;
      parent_element.unbind('click.' + parent_element.attr('id'));
      // Hover handler to show dropdown
      parent_element.on('mouseenter', function(e){ // Mouse over
        if (open === false) {
          OpenDropdown();
          open = true;
        }
      });
      parent_element.on('mouseleave', function(e){
        // If hover on parent_element then to something other than dropdown content, then close
        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
        if(!$(toEl).closest('#'+options.child_element).is(child_element)) {
          child_element.stop(true, true);
          CloseDropdown();
          open = false;
        }
      });

      child_element.on('mouseleave', function(e){ // Mouse out
        var toEl = e.toElement || e.relatedTarget;
        if(!$(toEl).closest('#'+parent_element.attr('id')).is(parent_element)) {
          child_element.stop(true, true);
          CloseDropdown();
          open = false;
        }
      });

    // Click
    }
    if (options.event_handled=="click") {
      // Click handler to show dropdown
      parent_element.unbind('click.' + parent_element.attr('id'));
      parent_element.bind('click.'+parent_element.attr('id'), function(e){
        if (!isFocused) {
          if ( !parent_element.hasClass('active') ) {
            e.preventDefault(); // Prevents button click from moving window
            OpenDropdown();
            open = true;
          }
          // If origin is clicked and menu is open, close menu
          
          if (parent_element.hasClass('active')) {
            $(document).bind('click.'+ parent_element.attr('id'), function (e) {
              if ( !child_element.is(e.target) && !parent_element.is(e.target) && (!parent_element.find(e.target).length) ) {
                CloseDropdown();
                open = false;
                
                }
            });
          }
          
        }
        else {

          CloseDropdown();
          open = false;
        }
        

      });

    } // End if
    if (options.event_handled=="toggle") {
      // Click handler to show dropdown
      parent_element.unbind('click.' + parent_element.attr('id'));
      parent_element.bind('click.'+parent_element.attr('id'), function(e){
        if (!isFocused) {
          if ( !parent_element.hasClass('active') ) {
            e.preventDefault(); // Prevents button click from moving window
            OpenDropdown();
            close_same_group();
            open = true;
          }
          // If origin is clicked and menu is open, close menu
          else if (parent_element.hasClass('active')) {
            if (options.group=='none') {
            CloseDropdown();
            open = false;
            };
          }
          
          
        }

        

      });

    } // End if
     
   });
  };// End FlexyElement plugin
 
  
}( jQuery ));

