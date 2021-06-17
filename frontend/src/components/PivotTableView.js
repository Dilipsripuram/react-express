import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import './pivottable.css';

//Passing sample data
const data = [{"NoData":"NoData"}];


//PivotTable class with render method for PitvotTableUI
class PivotTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data : data
        }
    }

    
    componentDidMount(){
        fetch('/pivotTable')
        .then(res => res.json())
        .then(result => this.setState({data : result}));
    }

    render() {
        return (
            <PivotTableUI
                data={data}
                onChange={s => this.setState(s)}
                {...this.state}
            />
        );
    }
}


export default PivotTable;