function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const setblockStyle = {
  animation: "smooth 1s",
  animationFillMode: "forwards" };

let listData = [
{
  taskname: "Task 1",
  taskDisc: "Hello i am task 1",
  background: "gray" },

{
  taskname: "Task 2",
  taskDisc: "Hello i am task 2",
  background: "red" },

{
  taskname: "Task 3",
  taskDisc: "Hello i am task 3",
  background: "blue" },

{
  taskname: "Task 4",
  taskDisc: "Hello i am task 4",
  background: "hotpink" },

{
  taskname: "Task 5",
  taskDisc: "Hello i am task 5",
  background: "violet" },

{
  taskname: "Task 6",
  taskDisc: "Hello i am task 6",
  background: "yellow" }];


class Test extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",




    value => {
      this.setState({
        active: value });

    });this.state = { active: "" };}
  render() {
    const { active } = this.state;
    return (
      React.createElement("div", { className: "container" },
      React.createElement("ul", { className: "taskbox" },
      listData.map((each, index) => {
        return (
          React.createElement("li", {
            key: index,
            onClick: () => {
              {
                this.handleClick(index);
              }
            } },

          each.taskname));


      })),

      React.createElement("div", { className: "rightbox" },
      listData.map((each, index) => {
        return active === index ?
        React.createElement("div", { style: { ...setblockStyle, background: each.background } },
        each.taskDisc) :

        null;
      }))));



  }}


ReactDOM.render(React.createElement(Test, null), document.getElementById("root"));