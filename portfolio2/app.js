Particles.init
({
  
// normal options
  selector: 
'.background'
,
  maxParticles: 
450
,
  
// options for breakpoints
  responsive: [
    {
      breakpoint: 
768
,
      options: {
        maxParticles: 
200
,
        color: 
'#48F2E3'
,
        connectParticles: 
false
      }
    }, {
      breakpoint: 
425
,
      options: {
        maxParticles: 
100
,
        connectParticles: 
true
      }
    }, {
      breakpoint: 
320
,
      options: {
        maxParticles: 
0
 
// disables particles.js
      }
    }
  ]
});