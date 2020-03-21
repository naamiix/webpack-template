import './style/main.styl'

console.log('Hello World !')

const $body = document.querySelector('body')
const $login = $body.querySelector('.js-login')
const $loginButton = $body.querySelector('.js-submit-login-button')
const $header = $body.querySelector('#header')
const $main = $body.querySelector('#main')
const $navButtons = $body.querySelectorAll('li a')
const $capteurTabs = $body.querySelectorAll('.capteur')

console.log($navButtons)
$loginButton.addEventListener('click', () => 
{
    $login.classList.add('is-not-visible')
    $body.style.background = '#ebebeb'
    $header.classList.remove('is-not-visible')
    $main.classList.remove('is-not-visible')
})

$navButtons[0].addEventListener('click', () =>
{
    for (let i = 0; i < $navButtons.length; i++) 
    {
        $navButtons[i].classList.remove('current')
    }

    for (let i= 0; i< $capteurTabs.length; i++)
    {
        $capteurTabs[i].classList.add('is-not-visible')
    }

    $navButtons[0].classList.add('current')
    $capteurTabs[0].classList.remove('is-not-visible')
})

$navButtons[1].addEventListener('click', () =>
{
    for (let i = 0; i < $navButtons.length; i++) 
    {
        $navButtons[i].classList.remove('current')
    }

    for (let i= 0; i< $capteurTabs.length; i++)
    {
        $capteurTabs[i].classList.add('is-not-visible')
    }

    $navButtons[1].classList.add('current')
    $capteurTabs[1].classList.remove('is-not-visible')
})

$navButtons[2].addEventListener('click', () =>
{
    for (let i = 0; i < $navButtons.length; i++) 
    {
        $navButtons[i].classList.remove('current')
    }

    for (let i= 0; i< $capteurTabs.length; i++)
    {
        $capteurTabs[i].classList.add('is-not-visible')
    }

    $navButtons[2].classList.add('current')
    $capteurTabs[2].classList.remove('is-not-visible')
})