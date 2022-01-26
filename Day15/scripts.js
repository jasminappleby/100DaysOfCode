const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);
	
	if(e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10)
		
		randomSelect();
	}
});
