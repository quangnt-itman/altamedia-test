import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchListComments } from '../../redux/actions/index.js';

export class Comments extends Component {
	// componentDidMount () {
	// 	this.props.fetchListComments( 1 );
	// 	console.log( this );
	// }

	renderComments () {
		console.log( this );
		let { comments } = this.props;
		console.log( { comments } );
		if ( comments && comments.length > 0 ) {
			return comments.map( ( comment, index ) => {
				return (

					<div className="card my-4">
						<div className="card-header">
							from: <span className="mt-0 mb-1">{ comment.email }</span>
						</div>
						<div className="card-body">
							<blockquote className="blockquote mb-0">
								<p>{ comment.body }</p>
								<footer className="blockquote-footer">name - <cite title="Source Title"><small>{ comment.name }</small></cite></footer>
							</blockquote>
						</div>
					</div>


					// <div className="media">
					// 	<div className="media-body">
					// 		<h5 className="mt-0 mb-1">{ comment.name }</h5>
					// 		<small>{ comment.email }</small>
					// 		<p>{ comment.body }</p>
					// 	</div>

					// </div>

				);
			} );
		} else {
			return 'comments empty';
		}
	}
	render () {
		console.log( this );
		return (
			<>
				<div className="modal fade" id="exampleModal" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Post's Comment</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								{ this.renderComments() }
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								{/* <button type="button" className="btn btn-primary">Save changes</button> */}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	comments: state.commentReducer.comments
} );

const mapDispatchToProps = dispatch => ( {
	fetchListComments: ( postId ) => dispatch( actFetchListComments( postId ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Comments );

