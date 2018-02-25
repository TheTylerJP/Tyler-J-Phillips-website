<button onclick="four()">4</button>
<button onclick="two()">2</button>
<button onclick="one()">1</button>


// Four images side by side
function four() {
    var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "25%";
    }
}

// Two images side by side
function two() {
    var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}

// Full-width images
function one() {
    var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// New portfolio image slider 

var slider = {
    
    // Not sure if keeping element collections like this
    // together is useful or not.
    el: {
      slider: $("#slider"),
      allSlides: $(".slide"),
      sliderNav: $(".slider-nav"),
      allNavButtons: $(".slider-nav > a")
    },
    
    timing: 800,
    slideWidth: 300, // could measure this
   
    // In this simple example, might just move the
    // binding here to the init function
    init: function() {
      this.bindUIEvents();
    },
    
    bindUIEvents: function() {
      // You can either manually scroll...
      this.el.slider.on("scroll", function(event) {
        slider.moveSlidePosition(event);
      });
      // ... or click a thing
      this.el.sliderNav.on("click", "a", function(event) {
        slider.handleNavClick(event, this);
      });
      // What would be cool is if it had touch
      // events where you could swipe but it
      // also kinda snapped into place.
    },
    
    moveSlidePosition: function(event) {
      // Magic Numbers =(
      this.el.allSlides.css({
        "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
      });  
    },
    
    handleNavClick: function(event, el) {
      event.preventDefault();
      var position = $(el).attr("href").split("-").pop();
      
      this.el.slider.animate({
        scrollLeft: position * this.slideWidth
      }, this.timing);
      
      this.changeActiveNav(el);
    },
    
    changeActiveNav: function(el) {
      this.el.allNavButtons.removeClass("active");
      $(el).addClass("active");
    }
    
  };
  
  slider.init();
  
  // https://codepen.io/BaylorRae/pen/ImGBC
  // Originally added click links, so I ported over and re-wrote











