import React from 'react'
import { connect } from 'react-redux'
import RecipesList from './RecipesList'
import SearchBar from './SearchBar'
import { fetchRecipes } from '../../actions/RecipeActions.js'

class RecipesContainer extends React.Component {
	componentDidMount() {
		this.props.fetchRecipes()
	}

	handleLoading = () => {
		if (this.props.loading) {
			return <div>Loading...</div>
		} else {
			return (
				<>
					{/* <SearchBar recipes={this.props.recipes} /> */}
					<RecipesList recipes={this.props.recipes} />
				</>
			)
		}
	}

	render() {
		return (
			<div className='main-container'>
				{this.handleLoading()}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return { fetchRecipes: () => dispatch(fetchRecipes()) }
}

function mapStateToProps(state) {
	return {
		loading: state.loading,
		recipes: state.recipes
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
