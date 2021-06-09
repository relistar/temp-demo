let delay = 100,
    throttled = false;

export function fitPageHeaderHeight() {
    const pageHeader = document.querySelector('.page-header');
    const quizPageHeader = document.querySelector('.quiz-page-header h1');
    const quizQuestion = document.querySelector('.quiz-question');

    if(!pageHeader || !quizPageHeader || !quizQuestion) {
        return
    }

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    const windowWidth = getWidth();
    let heightAddition = 80;

    if(windowWidth < 768) {
        heightAddition = 60
    } else if(windowWidth < 993) {
        heightAddition = 40
    }

    pageHeader.style.height = quizPageHeader.offsetHeight + quizQuestion.offsetHeight + heightAddition + 'px';
}

if (process.browser) {
    window.addEventListener('resize', function (event) {
        if (!throttled) {
            fitPageHeaderHeight()
            throttled = true
            setTimeout(function () {
                throttled = false
            }, delay)
        }
    }, true)
}