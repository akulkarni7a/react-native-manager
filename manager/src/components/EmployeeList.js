import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount(){
		this.props.employeesFetch();
		// this.createDataSource(this.props);
		
	}

	// componentWillReceiveProps(nextProps){
	// 	// nextProps are the next set of props that this compoennt will be rendered with
	// 	// this.props is still old set of props
	// 	this.createDataSource(nextProps);
	// }

	// createDataSource({employees}){
	// 	const ds = new FlatList.DataSource({
	// 		rowHasChanged: (r1,r2) => r1 !== r2
	// 	});

	// 	this.dataSource = ds.cloneWithRows(this.props.employees);
	// }

	renderItem({item}){
		return <ListItem employee={item} />;
	}

	render(){
		console.log(this.props);
		return(
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem}
			/>
		)
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val,uid) => {
		return {...val,uid};
	})

	return {employees};
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);

