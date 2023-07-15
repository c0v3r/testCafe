import {Selector, t} from 'testcafe'

class LoginPage{

    emailTxt = Selector("#Email")
    passwordTxt = Selector("#Password")
    signInBtn = Selector(".button-1.login-button")
    invalidCredentialsMsgLbl = Selector("div.message-error")

    async clickSignInBtn() {
        await t.click(this.signInBtn)
    }

    async typeUserEmailTxt(email){
        await t.typeText(this.emailTxt, email)
    }

    async typePasswordTxt(password){
        await t.typeText(this.passwordTxt, password)
    }

    unsuccessfulMsg() {
        return invalidCredentialsMsgLbl;
    }
    
}

export default new LoginPage();