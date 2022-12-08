import { Component } from "react";

export class Plans extends Component{
    state = {
        inputLine: "",
        plansForDay: [],
        likes: 0
    }

    InformationInput(e){
        this.setState({inputLine: e})
    }

    addPlan(input){ 
        if(input === ""){
            alert('Please post your plans!')
        }
        else{
        let addPlanForDay = this.state.plansForDay;
        addPlanForDay.push(input);
        this.setState({plansForDay: addPlanForDay, inputLine: '', likes: this.state.likes + 1})
        }}

    CrossPlan(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deletePlan(){
        let addPlanForDay = this.state.plansForDay;
        addPlanForDay = [];
        this.setState({plansForDay: addPlanForDay, likes: 0});
    }

    ButtomEnter(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <div className="blockStyle">
                <p className="howManyPlans">Today you have {this.state.likes} plans</p>
            </div>
                <form onSubmit={this.ButtomEnter}>
            <div className="blockStyle">
                <input className="styleInput" type="text" placeholder="what are your plans" onChange={(e) =>this.InformationInput(e.target.value)} value={this.state.inputLine} />
            </div>

            <div className="blockStyle">
            <button className="styleAdd" onClick={() =>this.addPlan(this.state.inputLine)}>Add plan</button>
            <button className="styleDelete" onClick={() =>this.deletePlan()}>Delete plan</button>
            </div>

            <div className="blockStyle">
                <ul>{this.state.plansForDay.map((item, index) =>(<li className="styleLine" onClick={this.CrossPlan} key={index} >{item}</li>))}
                    
                </ul>
            </div>
            </form>
            </div>
        )
    }
}