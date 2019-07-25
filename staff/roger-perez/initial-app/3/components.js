/**
 * Component abstraction.
 * 
 * @param {HTMLElement} container 
 */
function Component(container) {
    if (!(container instanceof HTMLElement)) throw new TypeError(container + ' is not an HTMLElement');

    this.container = container;
}

/**
 * Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function Panel(container) {
    Component.call(this, container);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

Panel.prototype.show = function () {
    this.container.classList.remove('panel--hide');
    this.container.classList.add('panel--show');
};

Panel.prototype.hide = function () {
    this.container.classList.remove('panel--show');
    this.container.classList.add('panel--hide');
};

/**
 * Initial Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function InitialPanel(container) {
    Panel.call(this, container);
}

InitialPanel.prototype = Object.create(Panel.prototype);
InitialPanel.prototype.constructor = InitialPanel;

InitialPanel.prototype.onNavigateToRegister = function (expression) {
    var registerLink = this.container.children[0];

<<<<<<< HEAD
    registerLink.addEventListener('click', expression);
=======
    registerLink.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
>>>>>>> develop
};

InitialPanel.prototype.onNavigateToLogin = function (expression) {
    var loginLink = this.container.children[1];

<<<<<<< HEAD
    loginLink.addEventListener('click', expression);
=======
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
>>>>>>> develop
};

/**
 * Register Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function RegisterPanel(container) {
    Panel.call(this, container);
}

RegisterPanel.prototype = Object.create(Panel.prototype);
RegisterPanel.prototype.constructor = RegisterPanel;

RegisterPanel.prototype.onNavigateBack = function (expression) {
<<<<<<< HEAD
    var registerBackLink = this.container.children[2];

    registerBackLink.addEventListener('click', expression);
};

RegisterPanel.prototype.onRegisterSubmit = function (expression) {
    var registerForm = this.container.children[0];

    registerForm.addEventListener('submit', expression);
};

// TODO RegisterSuccesPanel, LoginPanel, WelcomePanel... (FeedbackPanel?)
/**
 * Register Succes panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function RegisterSuccesPanel (container) {
    Panel.call(this, container);
}

RegisterSuccesPanel.prototype = Object.create(Panel.prototype);
RegisterSuccesPanel.prototype.constructor = RegisterSuccesPanel;

RegisterSuccesPanel.prototype.onSuccesToLogin = function (expression) {
    var loginLink = this.container.children[0];
    loginLink.addEventListener('click', expression);
}
/**
 * LogIn panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function LoginPanel (container) {
=======
    var backLink = this.container.children[2];

    backLink.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
};

RegisterPanel.prototype.onSubmitRegister = function (expression) {
    var form = this.container.children[0];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = event.target.name.value;
        var surname = event.target.surname.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        expression(name, surname, email, password);
    });
};

RegisterPanel.prototype.showFeedback = function (message) {
    var registerFeedback = this.container.children[1];

    registerFeedback.innerText = message;
};

/**
 * Register Success Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function RegisterSuccessPanel(container) {
    Panel.call(this, container);
}

RegisterSuccessPanel.prototype = Object.create(Panel.prototype);
RegisterSuccessPanel.prototype.constructor = RegisterSuccessPanel;

RegisterSuccessPanel.prototype.onNavigateToLogin = function (expression) {
    var loginLink = this.container.children[0];

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
};

/**
 * Login Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function LoginPanel(container) {
>>>>>>> develop
    Panel.call(this, container);
}

LoginPanel.prototype = Object.create(Panel.prototype);
LoginPanel.prototype.constructor = LoginPanel;

LoginPanel.prototype.onNavigateBack = function (expression) {
<<<<<<< HEAD
    var registerBackLink = this.container.children[2];

    registerBackLink.addEventListener('click', expression);
};

LoginPanel.prototype.onLoginToWelcome = function (expression) {
    var loginLink = this.container.children[0];
    loginLink.addEventListener('submit', expression);
}

/**
 * Welcome panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function welcomePanel (container) {
    Panel.call(this, container);
}

welcomePanel.prototype = Object.create(Panel.prototype);
welcomePanel.prototype.constructor = welcomePanel;



welcomePanel.prototype.onSuccesToLogin = function (expression) {
    var loginLink = this.container.children[0];
    loginLink.addEventListener('click', expression);
}

=======
    var backLink = this.container.children[2];

    backLink.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
};

LoginPanel.prototype.onSubmitLogin = function (expression) {
    var form = this.container.children[0];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = event.target.email.value;
        var password = event.target.password.value;

        expression(email, password);
    });
};

LoginPanel.prototype.showFeedback = function (message) {
    var loginFeedback = this.container.children[1];

    loginFeedback.innerText = message;
}

/**
 * Welcome Panel abstraction.
 * 
 * @param {HTMLElement} container 
 */
function WelcomePanel(container) {
    Panel.call(this, container);
}

WelcomePanel.prototype = Object.create(Panel.prototype);
WelcomePanel.prototype.constructor = WelcomePanel;

WelcomePanel.prototype.onClickLogout = function (expression) {
    var logoutButton = this.container.children[1];

    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();

        expression();
    });
};

// TODO (FeedbackPanel?)
>>>>>>> develop
