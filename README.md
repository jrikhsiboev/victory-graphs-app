Mini app with graphs using victory.js

Why?
#####
A: Testing out the graphing library for the features I need.

There are so many graphing modules out there that it gets pretty overwhelming real fast. If one is just trying to use one or couple graphs with basic features in their app, then there is usually no problem selecting the module. In other words, you can just go with the one that looks better for you whether it is Chart.js, Victory.js, C3.js, and etc. However, things get a bit tricky if you are looking for customizable graphs with specific behaviors(animation, real-time data support, and etc.). That could be the case if your app is heavily focuses on graphs.

Take Chart.js for instance. It is amazing. There are few minor details that could be better though. One of them is sizing and alignment of the graphs. For example, if you define width for your graphs (lets say 1000px), then the container of the graphs will indeed be 1300px. But the graph content will shift according to your "y-axis" values. In case of two graphs stacked one after another, first one with y values ranging from 1-10, and the second ranging from 10000 - 100000, then the second graph will be shifted to the right a bit. I can easily fix it via hardcoding it, but doing it dynamically with constantly changing y-axis values gets messy. This is just one of the examples, but you can see where I am going...

Anyway, I still think majority of the graphing modules are quite impressive, including Chart.js, and they serve general purpose just fine.

From my research and multiple comparisons with other graphing modules, Victory.js seems to be right in the middle. Not the most fancy looking one, but highly customizable with a pretty good documentation. On top of that it seems library is being maintained on a regular basis.

