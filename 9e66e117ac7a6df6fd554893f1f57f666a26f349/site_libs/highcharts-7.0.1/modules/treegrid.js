/*
 Highcharts JS v7.0.1 (2018-12-19)
 Tree Grid

 (c) 2016-2018 Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(E){"object"===typeof module&&module.exports?module.exports=E:"function"===typeof define&&define.amd?define(function(){return E}):E("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(E){(function(a){var x=function(d){return Array.prototype.slice.call(d,1)},D=a.dateFormat,q=a.defined,A=a.isArray,B=a.isNumber,y=function(d){return a.isObject(d,!0)},r=a.merge,p=a.pick,e=a.wrap,f=a.Axis,h=a.Tick,t={top:0,right:1,bottom:2,left:3,0:"top",1:"right",2:"bottom",3:"left"};f.prototype.isNavigatorAxis=
function(){return/highcharts-navigator-[xy]axis/.test(this.options.className)};f.prototype.isOuterAxis=function(){var d=this,c=-1,b=!0;d.chart.axes.forEach(function(k,g){k.side!==d.side||k.isNavigatorAxis()||(k===d?c=g:0<=c&&g>c&&(b=!1))});return b};f.prototype.getMaxLabelDimensions=function(d,c){var b={width:0,height:0};c.forEach(function(c){c=d[c];var g;y(c)&&(g=y(c.label)?c.label:{},c=g.getBBox?g.getBBox().height:0,g=B(g.textPxLength)?g.textPxLength:0,b.height=Math.max(c,b.height),b.width=Math.max(g,
b.width))});return b};a.dateFormats={W:function(d){d=new Date(d);var c;d.setHours(0,0,0,0);d.setDate(d.getDate()-(d.getDay()||7));c=new Date(d.getFullYear(),0,1);return Math.ceil(((d-c)/864E5+1)/7)},E:function(d){return D("%a",d,!0).charAt(0)}};e(f.prototype,"autoLabelAlign",function(d){return this.chart.isStock?"left":d.apply(this,x(arguments))});e(h.prototype,"getLabelPosition",function(d,c,b,k,g,u,h,e){var m=this.axis,v=m.reversed,a=m.chart,l=m.options,z=l&&y(l.grid)?l.grid:{},l=u.align,n=t[m.side],
C=m.tickPositions,G=this.pos-h,F=B(C[e+1])?C[e+1]-h:m.max+h,w=m.tickSize("tick",!0),C=A(w)?w[0]:0,w=w&&w[1]/2,f;!0===z.enabled?("top"===n?(z=m.top+m.offset,f=z-C):"bottom"===n?(f=a.chartHeight-m.bottom+m.offset,z=f+C):(z=m.top+m.len-m.translate(v?F:G),f=m.top+m.len-m.translate(v?G:F)),"right"===n?(n=a.chartWidth-m.right+m.offset,v=n+C):"left"===n?(v=m.left+m.offset,n=v-C):(n=Math.round(m.left+m.translate(v?F:G))-w,v=Math.round(m.left+m.translate(v?G:F))-w),this.slotWidth=v-n,v={x:"left"===l?n:"right"===
l?v:n+(v-n)/2,y:f+(z-f)/2},a=a.renderer.fontMetrics(u.style.fontSize,k.element),l=k.getBBox().height,u.useHTML?v.y+=a.b+-(l/2):(l=Math.round(l/a.h),v.y+=(a.b-(a.h-a.f))/2+-((l-1)*a.h/2)),v.x+=m.horiz&&u.x||0):v=d.apply(this,x(arguments));return v});e(f.prototype,"tickSize",function(d){var c=this.maxLabelDimensions,b=this.options,k=b&&y(b.grid)?b.grid:{},b=d.apply(this,x(arguments));!0===k.enabled&&(k=2*Math.abs(this.defaultLeftAxisOptions.labels.x),c=k+(this.horiz?c.height:c.width),A(b)?b[0]=c:b=
[c]);return b});e(f.prototype,"getTitlePosition",function(d){var c=this.options;if(!0===(c&&y(c.grid)?c.grid:{}).enabled){var b=this.axisTitle,k=b&&b.getBBox().width,g=this.horiz,u=this.left,h=this.top,a=this.width,m=this.height,e=c.title,c=this.opposite,f=this.offset,l=this.tickSize()||[0],z=e.x||0,n=e.y||0,C=p(e.margin,g?5:10),b=this.chart.renderer.fontMetrics(e.style&&e.style.fontSize,b).f,l=(g?h+m:u)+l[0]/2*(c?-1:1)*(g?1:-1)+(this.side===t.bottom?b:0);return{x:g?u-k/2-C+z:l+(c?a:0)+f+z,y:g?l-
(c?m:0)+(c?b:-b)/2+f+n:h-C+n}}return d.apply(this,x(arguments))});e(f.prototype,"unsquish",function(d){var c=this.options;return!0===(c&&y(c.grid)?c.grid:{}).enabled&&this.categories?this.tickInterval:d.apply(this,x(arguments))});a.addEvent(f,"afterSetOptions",function(d){var c=this.options;d=d.userOptions;var b,k=c&&y(c.grid)?c.grid:{};!0===k.enabled&&(b=r(!0,{className:"highcharts-grid-axis "+(d.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b",
"%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},d),"xAxis"===this.coll&&(q(d.linkedTo)&&!q(d.tickPixelInterval)&&(b.tickPixelInterval=350),q(d.tickPixelInterval)||!q(d.linkedTo)||q(d.tickPositioner)||q(d.tickInterval)||(b.tickPositioner=
function(d,c){var g=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(g){var k,h,u,e,l=b.units;for(e=0;e<l.length;e++)if(l[e][0]===g.unitName){k=e;break}if(l[k][1])return l[k+1]&&(u=l[k+1][0],h=(l[k+1][1]||[1])[0]),g=a.timeUnits[u],this.tickInterval=g*h,this.getTimeTicks({unitRange:g,count:h,unitName:u},d,c,this.options.startOfWeek)}})),r(!0,this.options,b),this.horiz&&(c.minPadding=p(d.minPadding,0),c.maxPadding=p(d.maxPadding,0)),B(c.grid.borderWidth)&&
(c.tickWidth=c.lineWidth=k.borderWidth))});e(f.prototype,"setAxisTranslation",function(d){var c=this.options,b=c&&y(c.grid)?c.grid:{},k=this.tickPositions&&this.tickPositions.info,g=this.userOptions.labels||{};this.horiz&&(!0===b.enabled&&this.series.forEach(function(b){b.options.pointRange=0}),k&&(!1===c.dateTimeLabelFormats[k.unitName].range||1<k.count)&&!q(g.align)&&(c.labels.align="left",q(g.x)||(c.labels.x=3)));d.apply(this,x(arguments))});e(f.prototype,"trimTicks",function(d){var c=this.options,
b=c&&y(c.grid)?c.grid:{},k=this.categories,g=this.tickPositions,h=g[0],e=g[g.length-1],a=this.linkedParent&&this.linkedParent.min||this.min,m=this.linkedParent&&this.linkedParent.max||this.max,f=this.tickInterval,t=h>a,l=e<m,h=h<a&&h+f>a,e=e>m&&e-f<m;!0!==b.enabled||k||!this.horiz&&!this.isLinked||(!t&&!h||c.startOnTick||(g[0]=a),!l&&!e||c.endOnTick||(g[g.length-1]=m));d.apply(this,x(arguments))});e(f.prototype,"render",function(d){var c=this.options,b=c&&y(c.grid)?c.grid:{},h,g,e,a,f,m=this.chart.renderer,
v=this.horiz;if(!0===b.enabled){if(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),b=this.maxLabelDimensions.width+b,h=c.lineWidth,this.rightWall&&this.rightWall.destroy(),d.apply(this),d=this.axisGroup.getBBox(),this.isOuterAxis()&&this.axisLine&&(v&&(b=d.height-1),h)){d=this.getLinePath(h);a=d.indexOf("M")+1;f=d.indexOf("L")+1;g=d.indexOf("M")+2;e=d.indexOf("L")+2;if(this.side===t.top||this.side===t.left)b=-b;v?
(d[g]+=b,d[e]+=b):(d[a]+=b,d[f]+=b);this.axisLineExtra?this.axisLineExtra.animate({d:d}):this.axisLineExtra=m.path(d).attr({stroke:c.lineColor,"stroke-width":h,zIndex:7}).addClass("highcharts-axis-line").add(this.axisGroup);this.axisLine[this.showAxis?"show":"hide"](!0)}}else d.apply(this)});e(f.prototype,"init",function(d,c,b){function h(b){var d=b.options,c=25/11,l=b.chart.renderer.fontMetrics(d.labels.style.fontSize);d.labels||(d.labels={});d.labels.align=p(d.labels.align,"center");b.categories||
(d.showLastLabel=!1);b.horiz&&(d.tickLength=g.cellHeight||l.h*c);b.labelRotation=0;d.labels.rotation=0}var g=b&&y(b.grid)?b.grid:{},u,t,w;if(g.enabled)if(q(g.borderColor)&&(b.tickColor=b.lineColor=g.borderColor),A(g.columns))for(t=0,w=g.columns.length;w--;)u=r(b,g.columns[w],{type:"category"}),delete u.grid.columns,u=new f(c,u),u.isColumn=!0,u.columnIndex=t,e(u,"labelFormatter",function(b){var d=this.axis,c=d.tickPositions,l=this.value,h=l===c[0],c=l===c[c.length-1],n=a.find(d.series[0].options.data,
function(b){return b[d.isXAxis?"x":"y"]===l});this.isFirst=h;this.isLast=c;this.point=n;return b.call(this)}),t++;else d.apply(this,x(arguments)),h(this);else d.apply(this,x(arguments))})})(E);var H=function(a){var x=a.extend,D=a.isNumber,q=a.pick,A=function(a,r){var p=a.reduce(function(e,a){var h=q(a.parent,"");void 0===e[h]&&(e[h]=[]);e[h].push(a);return e},{});Object.keys(p).forEach(function(e,a){var h=p[e];""!==e&&-1===r.indexOf(e)&&(h.forEach(function(h){a[""].push(h)}),delete a[e])});return p},
B=function(a,r,p,e,f,h){var t=0,d=0,c=h&&h.after,b=h&&h.before;r={data:e,depth:p-1,id:a,level:p,parent:r};var k,g;"function"===typeof b&&b(r,h);b=(f[a]||[]).map(function(b){var c=B(b.id,a,p+1,b,f,h),e=b.start;b=!0===b.milestone?e:b.end;k=!D(k)||e<k?e:k;g=!D(g)||b>g?b:g;t=t+1+c.descendants;d=Math.max(c.height+1,d);return c});e&&(e.start=q(e.start,k),e.end=q(e.end,g));x(r,{children:b,descendants:t,height:d});"function"===typeof c&&c(r,h);return r};return{getListOfParents:A,getNode:B,getTree:function(a,
r){var p=a.map(function(a){return a.id});a=A(a,p);return B("",null,1,null,a,r)}}}(E),I=function(a){var x=a.extend,D=a.isArray,q=a.isObject,A=a.isNumber,B=a.merge,y=a.pick;return{getColor:function(r,p){var e=p.index,f=p.mapOptionsToLevel,h=p.parentColor,t=p.parentColorIndex,d=p.series,c=p.colors,b=p.siblings,k=d.points,g=d.chart.options.chart,u,F,w,m;if(r){k=k[r.i];r=f[r.level]||{};if(f=k&&r.colorByPoint)F=k.index%(c?c.length:g.colorCount),u=c&&c[F];if(!d.chart.styledMode){c=k&&k.options.color;g=r&&
r.color;if(w=h)w=(w=r&&r.colorVariation)&&"brightness"===w.key?a.color(h).brighten(e/b*w.to).get():h;w=y(c,g,u,w,d.color)}m=y(k&&k.options.colorIndex,r&&r.colorIndex,F,t,p.colorIndex)}return{color:w,colorIndex:m}},getLevelOptions:function(a){var p=null,e,f,h,t;if(q(a))for(p={},h=A(a.from)?a.from:1,t=a.levels,f={},e=q(a.defaults)?a.defaults:{},D(t)&&(f=t.reduce(function(d,c){var b,a;q(c)&&A(c.level)&&(a=B({},c),b="boolean"===typeof a.levelIsConstant?a.levelIsConstant:e.levelIsConstant,delete a.levelIsConstant,
delete a.level,c=c.level+(b?0:h-1),q(d[c])?x(d[c],a):d[c]=a);return d},{})),t=A(a.to)?a.to:1,a=0;a<=t;a++)p[a]=B({},e,q(f[a])?f[a]:{});return p},setTreeValues:function p(a,f){var h=f.before,e=f.idRoot,d=f.mapIdToNode[e],c=f.points[a.i],b=c&&c.options||{},k=0,g=[];x(a,{levelDynamic:a.level-(("boolean"===typeof f.levelIsConstant?f.levelIsConstant:1)?0:d.level),name:y(c&&c.name,""),visible:e===a.id||("boolean"===typeof f.visible?f.visible:!1)});"function"===typeof h&&(a=h(a,f));a.children.forEach(function(b,
d){var c=x({},f);x(c,{index:d,siblings:a.children.length,visible:a.visible});b=p(b,c);g.push(b);b.visible&&(k+=b.val)});a.visible=0<k||a.visible;h=y(b.value,k);x(a,{children:g,childrenTotal:k,isLeaf:a.visible&&!k,val:h});return a},updateRootId:function(a){var e;q(a)&&(e=q(a.options)?a.options:{},e=y(a.rootNode,e.rootId,""),q(a.userOptions)&&(a.userOptions.rootId=e),a.rootNode=e);return e}}}(E);(function(a){function x(){return Array.prototype.slice.call(arguments,1)}function D(a){a.apply(this);this.drawBreaks(this.xAxis,
["x"]);this.drawBreaks(this.yAxis,A(this.pointArrayMap,["y"]))}var q=a.addEvent,A=a.pick,B=a.wrap,y=a.extend,r=a.isArray,p=a.fireEvent,e=a.Axis,f=a.Series;y(e.prototype,{isInBreak:function(a,e){var d=a.repeat||Infinity,c=a.from,b=a.to-a.from;e=e>=c?(e-c)%d:d-(c-e)%d;return a.inclusive?e<=b:e<b&&0!==e},isInAnyBreak:function(a,e){var d=this.options.breaks,c=d&&d.length,b,h,g;if(c){for(;c--;)this.isInBreak(d[c],a)&&(b=!0,h||(h=A(d[c].showPoints,this.isXAxis?!1:!0)));g=b&&e?b&&!h:b}return g}});q(e,"afterInit",
function(){"function"===typeof this.setBreaks&&this.setBreaks(this.options.breaks,!1)});q(e,"afterSetTickPositions",function(){if(this.isBroken){var a=this.tickPositions,e=this.tickPositions.info,d=[],c;for(c=0;c<a.length;c++)this.isInAnyBreak(a[c])||d.push(a[c]);this.tickPositions=d;this.tickPositions.info=e}});q(e,"afterSetOptions",function(){this.isBroken&&(this.options.ordinal=!1)});e.prototype.setBreaks=function(a,f){function d(a){var d=a,c,e;for(e=0;e<b.breakArray.length;e++)if(c=b.breakArray[e],
c.to<=a)d-=c.len;else if(c.from>=a)break;else if(b.isInBreak(c,a)){d-=a-c.from;break}return d}function c(a){var c,d;for(d=0;d<b.breakArray.length&&!(c=b.breakArray[d],c.from>=a);d++)c.to<a?a+=c.len:b.isInBreak(c,a)&&(a+=c.len);return a}var b=this,h=r(a)&&!!a.length;b.isDirty=b.isBroken!==h;b.isBroken=h;b.options.breaks=b.userOptions.breaks=a;b.forceRedraw=!0;h||b.val2lin!==d||(delete b.val2lin,delete b.lin2val);h&&(b.userOptions.ordinal=!1,b.val2lin=d,b.lin2val=c,b.setExtremes=function(a,b,c,d,h){if(this.isBroken){for(;this.isInAnyBreak(a);)a-=
this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange}e.prototype.setExtremes.call(this,a,b,c,d,h)},b.setAxisTranslation=function(a){e.prototype.setAxisTranslation.call(this,a);this.unitLength=null;if(this.isBroken){a=b.options.breaks;var c=[],d=[],h=0,g,k,f=b.userMin||b.min,l=b.userMax||b.max,z=A(b.pointRangePadding,0),n,C;a.forEach(function(a){k=a.repeat||Infinity;b.isInBreak(a,f)&&(f+=a.to%k-f%k);b.isInBreak(a,l)&&(l-=l%k-a.from%k)});a.forEach(function(a){n=a.from;for(k=a.repeat||
Infinity;n-k>f;)n-=k;for(;n<f;)n+=k;for(C=n;C<l;C+=k)c.push({value:C,move:"in"}),c.push({value:C+(a.to-a.from),move:"out",size:a.breakSize})});c.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});g=0;n=f;c.forEach(function(a){g+="in"===a.move?1:-1;1===g&&"in"===a.move&&(n=a.value);0===g&&(d.push({from:n,to:a.value,len:a.value-n-(a.size||0)}),h+=a.value-n-(a.size||0))});b.breakArray=d;b.unitLength=l-f-h+z;p(b,"afterBreaks");b.staticScale?b.transA=
b.staticScale:b.unitLength&&(b.transA*=(l-b.min+z)/b.unitLength);z&&(b.minPixelPadding=b.transA*b.minPointOffset);b.min=f;b.max=l}});A(f,!0)&&this.chart.redraw()};B(f.prototype,"generatePoints",function(a){a.apply(this,x(arguments));var e=this.xAxis,d=this.yAxis,c=this.points,b,h=c.length,g=this.options.connectNulls,f;if(e&&d&&(e.options.breaks||d.options.breaks))for(;h--;)b=c[h],f=null===b.y&&!1===g,f||!e.isInAnyBreak(b.x,!0)&&!d.isInAnyBreak(b.y,!0)||(c.splice(h,1),this.data[h]&&this.data[h].destroyElements())});
a.Series.prototype.drawBreaks=function(a,e){var d=this,c=d.points,b,h,g,f;a&&e.forEach(function(e){b=a.breakArray||[];h=a.isXAxis?a.min:A(d.options.threshold,a.min);c.forEach(function(c){f=A(c["stack"+e.toUpperCase()],c[e]);b.forEach(function(b){g=!1;if(h<b.from&&f>b.to||h>b.from&&f<b.from)g="pointBreak";else if(h<b.from&&f>b.from&&f<b.to||h>b.from&&f>b.to&&f<b.from)g="pointInBreak";g&&p(a,g,{point:c,brk:b})})})})};a.Series.prototype.gappedPath=function(){var e=this.currentDataGrouping,f=e&&e.totalRange,
e=this.options.gapSize,d=this.points.slice(),c=d.length-1,b=this.yAxis;if(e&&0<c)for("value"!==this.options.gapUnit&&(e*=this.closestPointRange),f&&f>e&&(e=f);c--;)d[c+1].x-d[c].x>e&&(f=(d[c].x+d[c+1].x)/2,d.splice(c+1,0,{isNull:!0,x:f}),this.options.stacking&&(f=b.stacks[this.stackKey][f]=new a.StackItem(b,b.options.stackLabels,!1,f,this.stack),f.total=0));return this.getGraphPath(d)};B(a.seriesTypes.column.prototype,"drawPoints",D);B(a.Series.prototype,"drawPoints",D)})(E);(function(a,x,D){var q=
function(a){return Array.prototype.slice.call(a,1)},A=a.defined,B=a.extend,y=a.find,r=a.fireEvent,p=D.getLevelOptions,e=a.merge,f=a.isNumber,h=function(b){return a.isObject(b,!0)},t=a.isString,d=a.pick,c=a.wrap;D=a.Axis;var b=a.Tick,k=function(a,b){var d,e;for(d in b)b.hasOwnProperty(d)&&(e=b[d],c(a,d,e))},g=function(a,b){var c=a.collapseStart;a=a.collapseEnd;a>=b&&(c-=.5);return{from:c,to:a,showPoints:!1}},u=function(a){return Object.keys(a.mapOfPosToGridNode).reduce(function(b,c){c=+c;a.min<=c&&
a.max>=c&&!a.isInAnyBreak(c)&&b.push(c);return b},[])},F=function(a,b){var c=a.options.breaks||[],d=g(b,a.max);return c.some(function(a){return a.from===d.from&&a.to===d.to})},w=function(a,b){var c=a.options.breaks||[];a=g(b,a.max);c.push(a);return c},m=function(a,b){var c=a.options.breaks||[],d=g(b,a.max);return c.reduce(function(a,b){b.to===d.to&&b.from===d.from||a.push(b);return a},[])},v=function(b,c){var e=b.labelIcon,h=!e,f=c.renderer,g=c.xy,l=c.options,z=l.width,k=l.height,m=g.x-z/2-l.padding,
g=g.y-k/2,p=c.collapsed?90:180,q=c.show&&a.isNumber(g);h&&(b.labelIcon=e=f.path(f.symbols[l.type](l.x,l.y,z,k)).addClass("highcharts-label-icon").add(c.group));q||e.attr({y:-9999});f.styledMode||e.attr({"stroke-width":1,fill:d(c.color,"#666666")}).css({cursor:"pointer",stroke:l.lineColor,strokeWidth:l.lineWidth});e[h?"attr":"animate"]({translateX:m,translateY:g,rotation:p})},E=function(a,b,c){var d=[],e=[],f={},g={},l=-1,z="boolean"===typeof b?b:!1;a=x.getTree(a,{after:function(a){a=g[a.pos];var b=
0,c=0;a.children.forEach(function(a){c+=a.descendants+1;b=Math.max(a.height+1,b)});a.descendants=c;a.height=b;a.collapsed&&e.push(a)},before:function(a){var b=h(a.data)?a.data:{},c=t(b.name)?b.name:"",e=f[a.parent],e=h(e)?g[e.pos]:null,n=function(a){return a.name===c},k;z&&h(e)&&(k=y(e.children,n))?(n=k.pos,k.nodes.push(a)):n=l++;g[n]||(g[n]=k={depth:e?e.depth+1:0,name:c,nodes:[a],children:[],pos:n},-1!==n&&d.push(c),h(e)&&e.children.push(k));t(a.id)&&(f[a.id]=a);!0===b.collapsed&&(k.collapsed=!0);
a.pos=n}});g=function(a,b){var c=function(a,d,e){var f=d+(-1===d?0:b-1),g=(f-d)/2,l=d+g;a.nodes.forEach(function(a){var b=a.data;h(b)&&(b.y=d+b.seriesIndex,delete b.seriesIndex);a.pos=l});e[l]=a;a.pos=l;a.tickmarkOffset=g+.5;a.collapseStart=f+.5;a.children.forEach(function(a){c(a,f+1,e);f=a.collapseEnd-.5});a.collapseEnd=f+.5;return e};return c(a["-1"],-1,{})}(g,c);return{categories:d,mapOfIdToNode:f,mapOfPosToGridNode:g,collapsedNodes:e,tree:a}};k(D.prototype,{init:function(b,c,d){var f=this,g,h=
"treegrid"===d.type;h&&(d=e({grid:{enabled:!0},labels:{align:"left",levels:[{level:void 0},{level:1,style:{fontWeight:"bold"}}],symbol:{type:"triangle",x:-5,y:-5,height:10,width:10,padding:5}},uniqueNames:!1},d,{reversed:!0,grid:{columns:void 0}}));b.apply(f,[c,d]);h&&(a.addEvent(f.chart,"beforeRender",function(){var b=f.options&&f.options.labels;f.updateYNames();f.series.forEach(function(a){a.yData=a.options.data.map(function(a){return a.y})});f.mapOptionsToLevel=p({defaults:b,from:1,levels:b.levels,
to:f.tree.height});g=a.addEvent(f,"foundExtremes",function(){f.collapsedNodes.forEach(function(a){a=w(f,a);f.setBreaks(a,!1)});g()})}),f.hasNames=!0,f.options.showLastLabel=!0)},getMaxLabelDimensions:function(a){var b=this.options,c=b&&b.labels,b=c&&f(c.indentation)?b.labels.indentation:0,c=a.apply(this,q(arguments)),d;"treegrid"===this.options.type&&(d=this.mapOfPosToGridNode[-1].height,c.width+=b*(d-1));return c},generateTick:function(a,c){var d=h(this.mapOptionsToLevel)?this.mapOptionsToLevel:
{},e=this.ticks,f=e[c],g,l;"treegrid"===this.options.type?(l=this.mapOfPosToGridNode[c],(d=d[l.depth])&&(g={labels:d}),f?(f.parameters.category=l.name,f.options=g,f.addLabel()):e[c]=new b(this,c,null,void 0,{category:l.name,tickmarkOffset:l.tickmarkOffset,options:g})):a.apply(this,q(arguments))},setTickInterval:function(a){var b=this.options;"treegrid"===b.type?(this.min=d(this.userMin,b.min,this.dataMin),this.max=d(this.userMax,b.max,this.dataMax),r(this,"foundExtremes"),this.setAxisTranslation(!0),
this.tickmarkOffset=.5,this.tickInterval=1,this.tickPositions=u(this)):a.apply(this,q(arguments))}});k(b.prototype,{getLabelPosition:function(a,b,c,e,g,k,m,p,q){var l=d(this.options&&this.options.labels,k);k=this.pos;var n=this.axis,z="treegrid"===n.options.type;a=a.apply(this,[b,c,e,g,l,m,p,q]);z&&(b=l&&h(l.symbol)?l.symbol:{},l=l&&f(l.indentation)?l.indentation:0,k=(k=(n=n.mapOfPosToGridNode)&&n[k])&&k.depth||1,a.x+=b.width+2*b.padding+(k-1)*l);return a},renderLabel:function(b){var c=this,e=c.pos,
f=c.axis,g=c.label,l=f.mapOfPosToGridNode,k=f.options,m=d(c.options&&c.options.labels,k&&k.labels),p=m&&h(m.symbol)?m.symbol:{},r=(l=l&&l[e])&&l.depth,k="treegrid"===k.type,t=!(!g||!g.element),u=-1<f.tickPositions.indexOf(e),e=f.chart.styledMode;k&&l&&t&&g.addClass("highcharts-treegrid-node-level-"+r);b.apply(c,q(arguments));k&&l&&t&&0<l.descendants&&(f=F(f,l),v(c,{color:!e&&g.styles.color,collapsed:f,group:g.parentGroup,options:p,renderer:g.renderer,show:u,xy:g.xy}),p="highcharts-treegrid-node-"+
(f?"expanded":"collapsed"),g.addClass("highcharts-treegrid-node-"+(f?"collapsed":"expanded")).removeClass(p),e||g.css({cursor:"pointer"}),[g,c.labelIcon].forEach(function(b){b.attachedTreeGridEvents||(a.addEvent(b.element,"mouseover",function(){var a=g;a.addClass("highcharts-treegrid-node-active");a.renderer.styledMode||a.css({textDecoration:"underline"})}),a.addEvent(b.element,"mouseout",function(){var a=g,b=m,b=A(b.style)?b.style:{};a.removeClass("highcharts-treegrid-node-active");a.renderer.styledMode||
a.css({textDecoration:b.textDecoration})}),a.addEvent(b.element,"click",function(){c.toggleCollapse()}),b.attachedTreeGridEvents=!0)}))}});B(b.prototype,{collapse:function(a){var b=this.axis,c=w(b,b.mapOfPosToGridNode[this.pos]);b.setBreaks(c,d(a,!0))},expand:function(a){var b=this.axis,c=m(b,b.mapOfPosToGridNode[this.pos]);b.setBreaks(c,d(a,!0))},toggleCollapse:function(a){var b=this.axis,c;c=b.mapOfPosToGridNode[this.pos];c=F(b,c)?m(b,c):w(b,c);b.setBreaks(c,d(a,!0))}});D.prototype.updateYNames=
function(){var a=this.options,b=a.uniqueNames,c=!this.isXAxis,d=this.series,e=0;"treegrid"===a.type&&c&&(a=d.reduce(function(a,c){c.visible&&(c.options.data.forEach(function(b){h(b)&&(b.seriesIndex=e,a.push(b))}),!0===b&&e++);return a},[]),a=E(a,b,!0===b?e:1),this.categories=a.categories,this.mapOfPosToGridNode=a.mapOfPosToGridNode,this.collapsedNodes=a.collapsedNodes,this.hasNames=!0,this.tree=a.tree)};D.prototype.utils={getNode:x.getNode}})(E,H,I)});
//# sourceMappingURL=treegrid.js.map
