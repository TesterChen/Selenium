(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[84],{v4bG:function(o,e,n){!function(e,t){true?o.exports=t(n("aWzz"),n("ERkP"),n("7nmT")):undefined}(this,function(e,r,a){"use strict";function s(a,i){return new Promise(function(e,t){var o,n=new Image;n.onload=function(){return e(n)},n.onerror=t,!1==(null!==(o=a)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&i&&(n.crossOrigin=i),n.src=a})}e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a;var h=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),o="undefined"!=typeof File,n={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},d=c?n.touch:n.desktop,g="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,p={x:.5,y:.5},i=function(e){function i(){var e,t,f;h(this,i);for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];return t=f=u(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(n))),f.state={drag:!1,my:null,mx:null,image:p},f.handleImageReady=function(e){var t=f.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,f.setState({drag:!1,image:t},f.props.onImageReady),f.props.onLoadSuccess(t)},f.clearImage=function(){var e=f.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height),f.setState({image:p})},f.handleMouseDown=function(e){(e=e||window.event).preventDefault(),f.setState({drag:!0,mx:null,my:null})},f.handleMouseUp=function(){f.state.drag&&(f.setState({drag:!1}),f.props.onMouseUp())},f.handleMouseMove=function(e){if(e=e||window.event,!1!==f.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,o=e.targetTouches?e.targetTouches[0].pageY:e.clientY,n={mx:t,my:o},a=f.props.rotate;if(a=(a%=360)<0?a+360:a,f.state.mx&&f.state.my){var i=f.state.mx-t,r=f.state.my-o,s=f.state.image.width*f.props.scale,h=f.state.image.height*f.props.scale,u=f.getCroppingRect(),c=u.x,d=u.y;c*=s,d*=h;var l=function(e){return e*(Math.PI/180)},g=Math.cos(l(a)),p=Math.sin(l(a)),m=d+-i*p+r*g,v={x:(c+i*g+r*p)/s+1/f.props.scale*f.getXScale()/2,y:m/h+1/f.props.scale*f.getYScale()/2};f.props.onPositionChange(v),n.image=y({},f.state.image,v)}f.setState(n),f.props.onMouseMove(e)}},f.setCanvas=function(e){f.canvas=e},u(f,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,r.Component),t(i,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(g=1);var e=a.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},o=d.native;document.addEventListener(o.move,this.handleMouseMove,t),document.addEventListener(o.up,this.handleMouseUp,t),c&&(document.addEventListener(o.mouseMove,this.handleMouseMove,t),document.addEventListener(o.mouseUp,this.handleMouseUp,t))}}},{key:"componentWillReceiveProps",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage()}},{key:"componentDidUpdate",value:function(e,t){var o=a.findDOMNode(this.canvas),n=o.getContext("2d");n.clearRect(0,0,o.width,o.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){if(document){var e=d.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),c&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,a=e.border,i={},r=this.getBorders(a),s=l(r,2),h=s[0],u=s[1],c=t,d=o;return this.isVertical()?(i.width=d,i.height=c):(i.width=c,i.height=d),i.width+=2*h,i.height+=2*u,{canvas:i,rotate:n,width:t,height:o,border:a}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var n=o.getContext("2d");return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,n=document.createElement("canvas");return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),this.paintImage(n.getContext("2d"),this.state.image,0,1),n}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),n={x:e.x-t/2,y:e.y-o/2,width:t,height:o},a=0,i=1-n.width,r=0,s=1-n.height;return(this.props.disableBoundaryChecks||t>1||o>1)&&(a=-n.width,i=1,r=-n.height,s=1),y({},n,{x:Math.max(a,Math.min(n.x,i)),y:Math.max(r,Math.min(n.y,s))})}},{key:"loadImage",value:function(e){var t;o&&e instanceof File?(t=e,new Promise(function(o,n){var e=new FileReader;e.onload=function(e){try{var t=s(e.target.result);o(t)}catch(e){n(e)}},e.readAsDataURL(t)})).then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&s(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure)}},{key:"getInitialSize",value:function(e,t){var o=void 0,n=void 0,a=this.getDimensions();return a.height/a.width>t/e?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;if(t.resource){var a=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(n,n),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,a.x,a.y,a.width,a.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),n=l(o,2),a=n[0],i=n[1],r=this.getCroppingRect(),s=e.width*this.props.scale,h=e.height*this.props.scale,u=-r.x*s,c=-r.y*h;return this.isVertical()?(u+=i,c+=a):(u+=a,c+=i),{x:u,y:c,height:h,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(g,g),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),n=this.getBorders(o.border),a=l(n,2),i=a[0],r=a[1],s=o.canvas.height,h=o.canvas.width;t=Math.max(t,0),t=Math.min(t,h/2-i,s/2-r),e.beginPath(),function(e,t,o,n,a,i){if(0===i)e.rect(t,o,n,a);else{var r=n-i,s=a-i;e.translate(t,o),e.arc(i,i,i,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,i,i,1.5*Math.PI,2*Math.PI),e.lineTo(n,s),e.arc(r,s,i,2*Math.PI,.5*Math.PI),e.lineTo(i,a),e.arc(i,s,i,.5*Math.PI,Math.PI),e.translate(-t,-o)}}(e,i,r,h-2*i,s-2*r,t),e.rect(h,0,-h,s),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),n=this.getDimensions(),a={width:n.canvas.width,height:n.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},i={width:n.canvas.width*g,height:n.canvas.height*g,style:y({},a,t)};return i[d.react.down]=this.handleMouseDown,c&&(i[d.react.mouseDown]=this.handleMouseDown),r.createElement("canvas",y({ref:this.setCanvas},i,o))}}]),i}();return i.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(o?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),className:e.string,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},i.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},className:"",onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},i})}}]);