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

	componentComments = []; //this.commentService.getComments();
	// commentText: string = "";
 // 	commentAuthor: string = "";

	constructor(public commentService: CommentService) {}

	ngOnInit() {
		this.commentService.onCommentUpdated((serviceComments) => {
			this.componentComments = serviceComments;
		})
	}

	addComment(newText: string, newAuthor: string) {
  	this.commentService.addComment(newText, newAuthor);
  };

  deleteComment(index: number) {
		this.commentService.deleteComment(index);
	};

	editComment(commentText: string, editComment: object, index: number) {
		this.commentService.editComment(commentText,editComment,index);
	}	
}

//////////////////////////////////////////////////////////////
// ISH THAT WORKED //
/////////////////////

// commentText: string = "";
// commentAuthor: string = "";
// editedText: boolean = false;
// editedIndex: number = 0;

// comments = [
	// {text: 'first comment!', author: 'anonymous'},
//   {text: 'nice work!', author: 'Court'},
//   {text: 'I would also like to congratulate you!', author: 'Marissa'}
// ];

/*addComment(newText: string, newAuthor: string) {
  	
 	let newComment = {text: newText, author: newAuthor}

	// if the comment is edited, then look for it in the array using the index and update it
	if (this.editedText) {
		for (let i = 0; i < this.comments.length; i++) {
			if (i === this.editedIndex) {
				// over write it on the index where it exists currently
				this.comments.splice(this.editedIndex, 1, newComment);
				this.editedIndex = 0;
			}
		}
		this.editedText = false;
	} 
	// otherwise (if it's a new comment), then add it to the array
	else {
		this.comments.push(newComment);
		this.editedText = false;
 	}
};*/
 

// deleteComment(index) {
// 	this.comments.splice(index, 1);
// };

// editComment(editComment, index) {
// 	this.commentText = editComment.text;
// 	this.commentAuthor = editComment.author;
// 	this.editedText = true;
// 	this.editedIndex = index; 
// }
