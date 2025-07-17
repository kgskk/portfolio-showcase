let title = document.getElementById('hello');

let input = document.getElementById('name_input');

let error = document.getElementById('error');

let skills = document.getElementById('info-text1');

let bio = document.getElementById('info-text2');

let socialMedia = document.getElementById('info-text3');

let unknown = document.getElementById('info-text4');

let isAnimating = false;

async function typeText(element, text, speed) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function untypeText(element, speed) {
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function start() {
    await typeText(title, 'Enter your name.', 100);
};

start();

input.style.transition = 'opacity 1s ease';

setTimeout(() => {
    input.style.opacity = '100';
}, 1000);

setTimeout(() => {
    input.style.display = 'block';
}, 0);



input.addEventListener('keydown', async function (event) {
    name = input.value;



    if (event.key === 'Enter') {
        await untypeText(title, 50)
        await wait(150)
        if (isAnimating) return;
        isAnimating = true;

        if (name !== "" && /^[A-Za-z0-9_]+$/.test(name)) {
            input.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                input.style.opacity = '0';
            }, 0);

            setTimeout(() => {
                input.style.display = 'none';
            }, 500);
            isAnimating = false;

            await typeText(title, `Hello ${name}. I guess you came here to learn something about me..`, 100);
            await wait(3000);
            await untypeText(title, 50);
            await typeText(title, `Choose.`, 100);
            await wait(1000);
            await typeText(skills, `SKILLS`, 100);
            await typeText(bio, `BIO`, 100);
            await typeText(socialMedia, `SOCIAL MEDIA`, 100);
            await typeText(unknown, `????????`, 100);


        } else {
            async function errorTextTyping() {
                await typeText(error, 'Only letters, underscore and numbers.', 50)
            };
            errorTextTyping();
            await wait(3000);
            async function errorTextUnTyping() {
                await untypeText(error, 50)
            };
            errorTextUnTyping();
            await wait(1500);
            isAnimating = false;
        }
    }
});

skills.addEventListener("click", function () {
    Swal.fire({
        html: `
                  <p>
                   HTML5 <br> CSS3 <br> JavaScript
                  </p>
                `,
        confirmButtonText: 'OK',
        animation: false,
        color: 'rgb(1, 194, 1) ',
        background: '#000000',
        customClass: {
            popup: 'my-popup',
            confirmButton: 'confirm-btn'
        }
    })
})

bio.addEventListener("click", function () {
    Swal.fire({
        html: `
                  <p>
                   Matvii Matvienko <br> 16 y.o. <br> Country: Ukraine <br> City: Kyiv <br> Languages: <br> Ukrainian: Native <br> English: B2+
                  </p>
                `,
        animation: false,
        color: 'rgb(1, 194, 1) ',
        background: '#000000',
        customClass: {
            popup: 'my-popup',
            confirmButton: 'confirm-btn'
        }
    })
})

socialMedia.addEventListener("click", function () {
    Swal.fire({
        html: `
                  <p>
                    My <a href="https://www.instagram.com/heavensentt_t" target="_blank">Instagram</a><br>
                    My <a href="https://t.me/matvimt" target="_blank">Telegram</a><br>
                  </p>
                `,
        confirmButtonText: 'OK',
        animation: false,
        color: 'rgb(1, 194, 1) ',
        background: '#000000',
        customClass: {
            popup: 'my-popup',
            confirmButton: 'confirm-btn'
        }
    })
})

unknown.addEventListener("click", function () {
    Swal.fire({
        html: `
                  <p>
                    Its empty here.
                  </p>
                `,
        confirmButtonText: 'OK',
        animation: false,
        color: 'rgb(1, 194, 1) ',
        background: '#000000',
        customClass: {
            popup: 'my-popup',
            confirmButton: 'confirm-btn'
        }
    })
})








