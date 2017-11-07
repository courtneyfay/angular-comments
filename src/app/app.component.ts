/*
::TADONE::

DONE	Alter your comments so that each comment has an author (represented by a string).

DONE	Add a feature that allows you to add more comments.
				This should all be within the same component.
				Visually, it should consist of two text inputs (one for author, one for comment) and a submit button.
				It should add comments to the array of objects on the page

DONE	Add a feature that allows you to delete comments.

DONE	Add a feature that allows you to edit comments.
				When you click on a comment, the text should be replaced by two text inputs (one for author, one for comment).

*/

import { Component } from '@angular/core';
import { CommentService } from './comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	commentText: string = "";
	commentAuthor: string = "";

	comments = [
		{text: 'first comment!', author: 'anonymous', editBoolean: false},
	  {text: 'nice work!', author: 'Court', editBoolean: false},
	  {text: 'I would also like to congratulate you!', author: 'Marissa', editBoolean: false}
	];

	addComment(newText: string, newAuthor: string) {
	 	let newComment = {text: newText, author: newAuthor, editBoolean: false}
	 	this.comments.push(newComment);
	};
	
	deleteComment(index) {
		this.comments.splice(index, 1);
	};

	editComment(editComment) {
		editComment.editBoolean = true; 
	}
	
	saveComment(editComment) {
		editComment.editBoolean = false; 
	}
}

///////////////////////////////////////////////////////////////
// OLD EDIT BUTTON ISH //
/////////////////////////

		// this.commentText = editComment.text;
		// this.commentAuthor = editComment.author;
		// this.editedText = true;
		// this.editedIndex = index; 

		// USED TO BE IN addComment function!! //
		// if the comment is edited, then look for it in the array using the index and update it
		// if (this.editedText) {
		// 	for (let i = 0; i < this.comments.length; i++) {
		// 		if (i === this.editedIndex) {
		// 			// over write it on the index where it exists currently
		// 			this.comments.splice(this.editedIndex, 1, newComment);
		// 			this.editedIndex = 0;
		// 		}
		// 	}
		// 	this.editedText = false;
		// } 
		// // otherwise (if it's a new comment), then add it to the array
		// else {
			
	 // 	}


//////////////////////////////////////////////////////////////
// SERVICE WORKER ISH THAT AIN'T WORKIN //
//////////////////////////////////////////

// componentComments = this.commentService.getComments();
// 	// commentText: string = "";
//  // 	commentAuthor: string = "";

// 	constructor(public commentService: CommentService) {}

// 	ngOnInit() {
// 		this.commentService.onCommentUpdated((serviceComments) => {
// 			this.componentComments = serviceComments;
// 		})
// 	}

// 	addComment(newText: string, newAuthor: string) {
//   	this.commentService.addComment(newText, newAuthor);
//   };

//   deleteComment(index: number) {
// 		this.commentService.deleteComment(index);
// 	};

// 	editComment(commentText: string, editComment: object, index: number) {
// 		this.commentService.editComment(commentText,editComment,index);
// 	}	
