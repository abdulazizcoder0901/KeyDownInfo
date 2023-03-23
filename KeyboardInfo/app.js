const click = document.querySelector('.click')

window.addEventListener('keydown', (e) => {
    e.preventDefault()

    click.innerHTML = `
        <div class="key keyboard-key">
        ${e.key == " " ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key keyboard-key__code">
        ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key keyboard-code">
        ${e.code}
            <small>event.code</small>
        </div>
    `
})