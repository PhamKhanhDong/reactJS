import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function getName(name){
  alert(name);
}

class KD extends React.Component{

  addStudent(){
    this.setState({tongHocVien: parseInt(this.state.tongHocVien) + 1});
  }

  constructor(props) {
    // console.log('1');
    super(props);
    this.state = {tongHocVien: this.props.tongHocVien};
    this.LayThongTin = this.LayThongTin.bind(this);
    this.addStudent = this.addStudent .bind(this);
  }

  LayThongTin() {
    alert(this.props.children);
  }

  // getInitialState(){
  //     return {tongHocVien: this.props.tongHocVien};
  // }

  render(){
    return (
      <div>
        <h1 className="mauvang"> Khanh Dong DEP TRAI {this.props.name} by {this.props.teacher} </h1>
        <p>{this.props.children}</p>
        <p>{this.state.tongHocVien}</p>
        <input type="button" onClick={()=>{getName(this.props.teacher)}} value="submit coi"/>
        <input type="button" onClick={this.addStudent} value="Dang ky"/>
      </div>
    );
  }
}

class KhoaHoc extends React.Component{
  render() {
    return(<h3> Lap Trinh ReactJS </h3>);
  }
}


class InputTag extends React.Component {
  constructor() {
    super();
    this.getInfo = this.getInfo.bind(this);
    this.getSelectBox = this.getSelectBox.bind(this);

  }

  getInfo() {
    console.log(this.refs.txtName.value);
  }

  getSelectBox() {
    console.log(this.refs.sl.value);
  }

  render(){
    return(
      <div>
        <input type="text" ref="txtName" onKeyUp={this.getInfo}/>
        <select ref="sl" onChange={this.getSelectBox}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <InputTag/>
    <KD name="ReactJS" teacher="KD" tongHocVien="10">Mon hoc reactJS</KD>
    <KD name="NodeJS" teacher="KD1" tongHocVien="20">Mon hoc NodeJS</KD>
  </div>
  , rootElement);
