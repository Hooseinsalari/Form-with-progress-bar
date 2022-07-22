const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.querySelector('#progress');
const progressSteps = document.querySelectorAll('.progress-step');
const formSteps = document.querySelectorAll('.form-step');

let formStepNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepNum++;
        updateFormStep();
        updateProgressBar();
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepNum--;
        updateFormStep();
        updateProgressBar();
    })
})

const updateFormStep = () => {
    formSteps.forEach((formStep) => {
        formStep.classList.contains('form-step-active') && 
        formStep.classList.remove('form-step-active')
    })    

    formSteps[formStepNum].classList.add('form-step-active');
}

const updateProgressBar = () => {
    progressSteps.forEach((progressStep, idx) => {
        if(idx < formStepNum + 1) {
            progressStep.classList.add('progress-step-active')
        } else {
            progressStep.classList.remove('progress-step-active')
        }
    })

    const progressStepActive = document.querySelectorAll('.progress-step-active')
    progress.style.width = ((progressStepActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}