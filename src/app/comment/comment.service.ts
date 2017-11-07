/*
TODO:
		Your comment service should have the following methods: 
????			updateSubject() 
DONE			getComments() 
????			addComment() 
????			deleteComment()
????			onCommentUpdated()
************OPTIONAL*******************
????			**setComments() 
????			**editComment() 		

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
	serviceComments = [
		{text: 'first comment!', author: 'anonymous'},
    {text: 'nice work!', author: 'Court'},
    {text: 'I would also like to congratulate you!', author: 'Marissa'}
  ];
  subject: Subject<number> = new Subject<number>();

  constructor() { }
  // this.subject.asObservable().subscribe(callback);

  private updateSubject(): void {
  	this.subject.next(); //this.serviceComments
  } 

	getComments(): object {
		return this.serviceComments;
	}

	onCommentUpdated(callback): void {
		this.subject.asObservable().subscribe(callback);
	} 
	/*
	////////// BALANCE SERVICE //////////
	private updateSubject(): void {
    this.subject.next(this.balance);
  }
  onBalanceUpdated(callback): void {
   	this.subject.asObservable().subscribe(callback);
  }

	////////// ITEMS SERVICE //////////
	get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onItemsRetrieved(callback: any): void {
    this.get().subscribe(callback);
  }

  getSelectedItem(): any {
    return this.selectedItem;
  }
	*/

	addComment(newText, newAuthor) {
		let newComment = {text: newText, author: newAuthor}

  	// if the comment is edited, then look for it in the array using the index and update it
  	if (this.editedText) {
  		for (let i = 0; i < this.serviceComments.length; i++) {
  			if (i === this.editedIndex) {
  				// over write it on the index where it exists currently
  				this.serviceComments.splice(this.editedIndex, 1, newComment);
  				this.editedIndex = 0;
  			}
  		}
  	} 
  	// otherwise (if it's a new comment), then add it to the array
  	else {
  		this.serviceComments.push(newComment);
  	}
  	this.editedText = false;
  	this.updateSubject();
	}

	deleteComment(index) {
		this.serviceComments.splice(index, 1);
		this.updateSubject();
	}

	// OPTIONAL FUNCTIONS
	editComment(commentText, editComment, index) {
		this.commentText = editComment.text;
		this.commentAuthor = editComment.author;
		this.editedText = true;
		this.editedIndex = index;
		console.log(commentText);
		console.log(editComment);
		console.log(index); 
	}

	setComments() {

	}
	/*
	setSelectedItem(item: any): void {
  this.selectedItem = item;
  }
	*/
}


