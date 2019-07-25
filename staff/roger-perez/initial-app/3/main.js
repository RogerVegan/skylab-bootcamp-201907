'use strict';

/**
 * Presentation
 */

var panels = document.getElementsByClassName('panel');

// initial panel

var initialPanel = new InitialPanel(panels[0]);

<<<<<<< HEAD
initialPanel.onNavigateToRegister(function (event) {
    event.preventDefault();

=======
initialPanel.onNavigateToRegister(function () {
>>>>>>> develop
    initialPanel.hide();
    registerPanel.show();
});

<<<<<<< HEAD
initialPanel.onNavigateToLogin(function (event) {
    event.preventDefault();

=======
initialPanel.onNavigateToLogin(function () {
>>>>>>> develop
    initialPanel.hide();
    loginPanel.show();
});

// register panel

var registerPanel = new RegisterPanel(panels[1]);

<<<<<<< HEAD
registerPanel.onNavigateBack(function (event) {
    event.preventDefault();

=======
registerPanel.onNavigateBack(function () {
>>>>>>> develop
    registerPanel.hide();
    initialPanel.show();
});

<<<<<<< HEAD
registerPanel.onRegisterSubmit(function (event) {
    event.preventDefault();

    var name = event.target.name.value;
    var surname = event.target.surname.value;
    var email = event.target.email.value;
    var password = event.target.password.value;

=======
registerPanel.onSubmitRegister(function (name, surname, email, password) {
>>>>>>> develop
    try {
        register(name, surname, email, password);

        registerPanel.hide();
        registerSuccessPanel.show();
    } catch (error) {
<<<<<<< HEAD
        var registerFeedback = registerPanel.container.children[1];

        registerFeedback.innerText = error.message;
=======
        registerPanel.showFeedback(error.message);
>>>>>>> develop
    }
});

// register success panel

<<<<<<< HEAD

var registerSuccessPanel = new registerSuccesPanel(panels[2]);
registerSuccessPanel.onSuccesToLogin( function(event){
    event.preventDefault();

    registerSuccesPanel.hide();
    logInPanel.show();
});


// login panel

var loginPanel = new loginPanel(panels[3]);

var loginBackLink = loginPanel.container.children[2];

loginBackLink.onNavigateBack(function (event) {
    event.preventDefault();

    loginPanel.hide();

    initialPanel.show();
    });

var loginForm = loginPanel.container.children[0];

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.password.value;

=======
var registerSuccessPanel = new RegisterSuccessPanel(panels[2]);

registerSuccessPanel.onNavigateToLogin(function () {
    registerSuccessPanel.hide();
    loginPanel.show();
});

// login panel

var loginPanel = new LoginPanel(panels[3]);

loginPanel.onNavigateBack(function () {
    loginPanel.hide();
    initialPanel.show();
});

loginPanel.onSubmitLogin(function (email, password) {
>>>>>>> develop
    try {
        login(email, password);

        loginPanel.hide();
        welcomePanel.show();
    } catch(error) {
<<<<<<< HEAD
        var loginFeedback = loginPanel.container.children[1];

        loginFeedback.innerText = error.message;
    }
});

var welcomeContainer = panels[4];

var welcomePanel = new Panel(welcomeContainer);
=======
        loginPanel.showFeedback(error.message);
    }
});

// welcome panel

var welcomePanel = new WelcomePanel(panels[4]);

welcomePanel.onClickLogout(function() {
    welcomePanel.hide();
    initialPanel.show();
});
>>>>>>> develop

