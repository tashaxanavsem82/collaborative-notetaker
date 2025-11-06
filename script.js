document.getElementById('save-note').addEventListener('click', function() {
    const noteText = document.getElementById('new-note').value;
    if(noteText) {
        const noteList = document.getElementById('notes-list');
        const newNote = document.createElement('div');
        newNote.textContent = noteText;
        noteList.appendChild(newNote);
        document.getElementById('new-note').value = ''; // Clear the textarea
    }
});