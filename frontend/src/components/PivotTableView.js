import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import './pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

//Passing sample data
const data = [{"NoData":"NoData"}];

const PlotlyRenderers = createPlotlyRenderers(Plot);

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
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />
        );
    }
}


export default PivotTable;