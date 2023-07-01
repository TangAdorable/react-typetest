import { ElementStylesheetStyle } from "cytoscape";

const getBackgroundImage = (ele: any) => {
  const countryName = ele.data("country") ? ele.data("country") : "";
  return ele.data("label") === "Country" && ele.data("country") !== null
    ? `/images/flags/${countryName}.jpg`
    : `/images/flags/null.jpg`;
};

export const pmesiiStyleSheet: any = [
  {
    selector: "node",
    style: {
      color: "white",
      "font-size": 8,

      label: function (x: any) {
        if (x.data("label") == undefined) {
          return x.data("pmesii");
        } else if (x.data("label") == "subAscope" && x.data("name") != null) {
          return x.data("name");
        } else if (x.data("label") == "ASCOPE" && x.data("ascope") != null) {
          return x.data("ascope");
        } else if (x.data("label") == "PMESII" && x.data("pmesii") != null) {
          return x.data("pmesii");
        } else if (x.data("label") == "Country" && x.data("country") != null) {
          return x.data("country");
        }
      },
      "background-color": function (ele: any) {
        if (ele.data("label") === "Country" && ele.data("country") !== null) {
          return "black";
        } 
        
        // else {
        //   if (ele.data("pmesii") === "Political") {
        //     return "blue";
        //   } else if (ele.data("pmesii") === "Military") {
        //     return "white";
        //   } else if (ele.data("pmesii") === "Social") {
        //     return "green";
        //   } else if (ele.data("pmesii") === "Infomation") {
        //     return "pink";
        //   } else if (ele.data("pmesii") === "Infrastructure") {
        //     return "orange";
        //   } else if (ele.data("pmesii") === "Economic") {
        //     return "yellow";
        //   }
        // }

        // return ele.data("color") ? ele.data("color") : "gray";  
        return ele.data("color") ? ele.data("color") : "gray";  
      },
      "background-image": getBackgroundImage,
      "background-fit": "cover",
      "background-image-opacity": 0.6,

      shape: "ellipse",
      width: function (ele: any) {
        return ele.data("value") ? ele.data("value") * 3 : 20;
      },
      height: function (ele: any) {
        return ele.data("value") ? ele.data("value") * 3 : 20;
      },
    },
  },
  {
    selector: ":parent",
    style: {
      "background-opacity": 0.333,
    },
  },
  {
    selector: "node.cy-expand-collapse-collapsed-node",
    style: {
      color: "white",
      "background-color": "darkblue",
      shape: "circle",
    },
  },
  {
    selector: "edge",
    style: {
      "font-size": 8,
      color: "white",
      label: "data(name)",
      "source-arrow-shape": function (ele: any) {
        switch (ele.data("line")) {
          case 2:
            return "triangle";
          case 1:
            return "none";
          case 0:
            return "none";
          default:
            return "none";
        }
      },
      "target-arrow-shape": function (ele: any) {
        switch (ele.data("line")) {
          case 2:
            return "triangle";
          case 1:
            return "triangle";
          case 0:
            return "none";
          default:
            return "triangle";
        }
      },
      "text-valign": "center",
      width: function (ele: any) {
        return ele.data("size") ? ele.data("size") : 1;
      },
      "line-color": function (ele: any) {
        return ele.data("color") ? ele.data("color") : "gray";
      },
      "curve-style": "bezier",
      "line-style": function (ele: any) {
        return ele.data("name") === "พึ่งพา" ? "dashed" : "solid";
      },
    },
  },
  {
    selector: "edge.meta",
    style: {
      width: 2,
      "line-color": "red",
    },
  },
  {
    selector: ":selected",
    style: {
      color: "white",
      "overlay-color": "#6c757d",
      "overlay-opacity": 0.3,
      "background-color": "#999999",
    },
  },
];
