const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
    React.createElement("h1", { id: "heading" }, "I Am Iron Man"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
