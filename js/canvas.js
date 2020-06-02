<script type="text/paperscript" canvas="canvas">
let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
let count = 0
let point = new Path.Rectangle({
  point: [20,20],
  size: [20,20],
  strokeColor: randomColor
})

view.onFrame = function(event){
  randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  point.rotate(1)
  point.strokeColor = randomColor
  point.size = [event.count, event.count]
}

tool.onMouse = function(event){
  point.position = event.point;
}

tool.onMouseDrag = function(event){
  point.position = event.point
    var newPoint = new Path.Rectangle({
      point: event.point,
      size: [count/4, count/4],
      strokeColor: randomColor,
      fillColor: randomColor
    })
    count++
}
</script>
