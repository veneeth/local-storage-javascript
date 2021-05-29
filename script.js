const submit = document.querySelector('.comment-submit')
const commentList = document.querySelector('.comments')
const commentInput = document.querySelector('.comment-input')

function template(data) {
	commentList.insertAdjacentHTML(
		'beforeend',
		`
            <div class="comment flex item-start justify-start">
                <img
                    class="comment-avatar"
                    src="${data.avatar}"
                />
                <div class="flex-1">
                    <h3 class="comment-author">${data.author}</h3>
                    <div class="comment-body">${data.comment}</div>
                </div>
            </div>
                
                `,
	)
}

function appendComment(event) {
	const data = {
		avatar:
			'https://secure.gravatar.com/avatar/d1f5ca0d7e625f334c5186e112b77ebd',
		comment: commentInput.value,
		author: 'Veneeth',
	}

	event.preventDefault()

	// if cooment text area value is empty exit
	if (commentInput.value.length < 1) return

	// if nt we continue
	template(data)

	// Clear text area once submited
	commentInput.value = ''

	//Local Storage
	localStorage.setItem('commentList', commentList.innerHTML)
}

submit.addEventListener('click', appendComment, false)

const save = localStorage.getItem('commentList')

if (save) {
	commentList.innerHTML = save
}
