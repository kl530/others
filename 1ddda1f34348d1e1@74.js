// https://observablehq.com/@nanl/bax-431-exercise-vega-lite@74
import define1 from "./a2166040e5fb39a6@226.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# BAX 431 Exercise: Vega-Lite
[**Vega-Lite**](https://vega.github.io/vega-lite) is a declarative language for interactive data visualization. It provides a highly flexible JSON grammar for describing visualization elements. It has extensive [documentation](https://vega.github.io/vega-lite/docs/) and [examples](https://vega.github.io/vega-lite/examples/), and can be used on a variety of platforms, including Javascript and Python (via [Altair](https://altair-viz.github.io/)).

For simplicity, this notebook uses the JSON syntax of Vega-Lite. We'll be using a cleaned-up Gapminder dataset from [vega-datasets](https://github.com/vega/vega-datasets). 
`
)});
  main.variable(observer()).define(["printTable","gapminder"], function(printTable,gapminder){return(
printTable(gapminder.slice(0, 10))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Visualization`
)});
  main.variable(observer()).define(["vegalite","gapminder"], function(vegalite,gapminder){return(
vegalite({
  // This should show "Invalid spec". We'll fill it out in the exercise.
  "height": 400,
  "width": 600,
  "data": {
    "values": gapminder
  },
  "transform": [
    {"filter": {"field": "year", "equal": 2000}}
  ],
  "mark": {"type":"circle"},
  "encoding": {
    "x":{"field": "life_expect", "scale": {"domain":[20, 85]}},
    "y":{"field": "fertility"},
    "size":{"field": "pop", "scale":{"range":[10, 1000]}},
    "color":{"field": "cluster", "type": "nominal"}
  }
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Imports`
)});
  main.variable(observer("vegalite")).define("vegalite", ["require"], function(require){return(
require("@observablehq/vega-lite@0.2")
)});
  main.variable(observer("datasets")).define("datasets", ["require"], function(require){return(
require('vega-datasets')
)});
  main.variable(observer("gapminder")).define("gapminder", ["datasets"], function(datasets){return(
datasets['gapminder.json']()
)});
  const child1 = runtime.module(define1);
  main.import("printTable", child1);
  main.variable(observer()).define(["vegalite","gapminder"], function(vegalite,gapminder){return(
vegalite({
  // 1.bar-chart.
  "height": 400,
  "width": 600,
  "data": {
    "values": gapminder
  },
 
  "mark": {"type":"bar"},
  "encoding": {
    "x":{"field": "year", "type": "ordinal"},
    "y":{"field": "pop", "pop": "quantitative"}
  }
})
)});
  main.variable(observer()).define(["vegalite","gapminder"], function(vegalite,gapminder){return(
vegalite({
  // 2.bubble
  "height": 400,
  "width": 600,
  "data": {
    "values": gapminder
  },
   
  "mark": {"type":"point"},
  "encoding": {
    "x":{"field": "life_expect", "type": "ordinal"},
    "y":{"field": "fertility"},
    "size": {"field": "pop", "type": "quantitative"},
    "color":{"field": "country", "type": "nominal"}
  }
})
)});
  return main;
}
