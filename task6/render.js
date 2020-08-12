function renderMustache() {


      var template = document.getElementById('bodyguard_name').innerHTML; 
      var rendered = Mustache.render(template, { name: '<div><h3>Chuck Norris Bodyguards<h3></div>'});
      document.getElementById('guard_name1').innerHTML = rendered;
      document.getElementById('guard_name2').innerHTML = rendered;
      document.getElementById('guard_name3').innerHTML = rendered;
      document.getElementById('guard_name4').innerHTML = rendered;
      document.getElementById('guard_name5').innerHTML = rendered;
      document.getElementById('guard_name6').innerHTML = rendered;

      
      var template = document.getElementById('bodyguard_body').innerHTML;
      var renderedage = Mustache.render(template, { name: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.</p>'});
      document.getElementById('guard_body1').innerHTML = renderedage;
      document.getElementById('guard_body2').innerHTML = renderedage;
      document.getElementById('guard_body3').innerHTML = renderedage;
      document.getElementById('guard_body4').innerHTML = renderedage;
      document.getElementById('guard_body5').innerHTML = renderedage;
      document.getElementById('guard_body6').innerHTML = renderedage;
    
  }