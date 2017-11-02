/*
TODO:
		Your comment service should have the following methods: 
????			updateSubject() 
DONE			getComments() 
DONE			addComment() 
DONE			deleteComment()
????			onCommentUpdated()
????			**setComments() 
????			**editComment() 
					**OPTIONAL

DONE	Your comment service should have the following variables: 
				comments (array) 
				subject (Observable)

		Make sure your code is working as before, but using the Comment Service.
*/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
	commentText: string = "";
 	commentAuthor: string = "";
 	editedText: boolean = false;
 	editedIndex: number = 0;
	comments = [
		{text: 'first comment!', author: 'anonymous'},
    {text: 'nice work!', author: 'Court'},
    {text: 'I would also like to congratulate you!', author: 'Marissa'}
  ];
  subject: Subject<number> = new Subject<number>();

  constructor() { }
  // this.subject.asObservable().subscribe(callback);


  updateSubject() {
  
  } 
  /*
	private updateSubject(): void {
    this.subject.next(this.balance);
  }
  */

	getComments() {
		return this.comments;
	}

	addComment(newText, newAuthor) {
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
	}

	deleteComment(index) {
		this.comments.splice(index, 1);
	}

	editComment(commentText, editComment, index) {
		this.commentText = editComment.text;
		this.commentAuthor = editComment.author;
		this.editedText = true;
		this.editedIndex = index;
		console.log(commentText);
		console.log(editComment);
		console.log(index); 
	}

	onCommentUpdated() {

	} 
	/*
	onBalanceUpdated(callback): void {
    this.subject.asObservable().subscribe(callback);
  }
	*/
	setComments() {

	}
}


