import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchListComments } from '../../redux/actions/index.js';

export class Comments extends Component {
	// componentDidMount () {
	// 	this.props.fetchListComments( 1 );
	// 	console.log( this );
	// }

	renderComments () {
		let { comments } = this.props;
		if ( comments && comments.length > 0 ) {
			return comments.filter( ( comment, index ) => {
				return (
					<p>{ comment.body }</p>
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
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
				{ this.renderComments() }
			</>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	commnets: state.postReducer.comments
} );

const mapDispatchToProps = dispatch => ( {
	fetchListComments: ( postId ) => dispatch( actFetchListComments( postId ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Comments );

