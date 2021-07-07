import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchListComments, actFetchListPosts } from '../../redux/actions/index.js';

export class Posts extends Component {
	componentDidMount () {
		this.props.fetchListPosts();
		console.log( this );
	}

	renderPosts () {
		let { posts } = this.props;
		if ( posts && posts.length > 0 ) {
			return posts.map( ( item, index ) => {
				return (
					<div className="col-4 py-4" key={ item.id }>
						<div className="card" style={ { width: '18rem', height: '400px' } }>
							<div className="card-body">
								<h3 className="card-title">{ item.title }</h3>
								<p className="card-text">{ item.body }</p>
								<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={ () => this.props.fetchListComments( item.id ) } >See Components</button>
							</div>
						</div>
					</div>
				);
			} );
		} else {
			return ( 'posts empty' );
		}
	}

	render () {
		console.log( this );
		return (
			<div className="container">
				<h1>Posts</h1>
				<div className="row posts">
					{ this.renderPosts() }
				</div>

			</div>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	posts: state.postReducer.posts
} );

const mapDispatchToProps = ( dispatch ) => ( {
	fetchListPosts: () => dispatch( actFetchListPosts() ),
	fetchListComments: ( postId ) => dispatch( actFetchListComments( postId ) )

} );

export default connect( mapStateToProps, mapDispatchToProps )( Posts );

