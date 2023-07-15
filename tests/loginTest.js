import LoginPage from '../page-object/loginPage'
import * as userDataSet from "../test-data/user.data.json";




fixture('My Fixture')
  .page('https://demo.nopcommerce.com/login?returnUrl=%2F');

test.meta('Env','smoke')
('Smoke testing', async (t) => {
      await LoginPage.typeUserEmailTxt(userDataSet.email)    
      await LoginPage.typePasswordTxt(userDataSet.password) 
  //    await t.wait(9000)    
      await LoginPage.clickSignInBtn()      
      await t.expect(LoginPage.invalidCredentialsMsgLbl.innerText)
      .contains('Login was unsuccessful. Please correct the errors and try again.'+'\n'+'No customer account found') 
});

test.meta('Env','regression')
('Regression testing', async (t) => {
    console.log('regression')
    console.log(`environment: ${process.env.ENVIRONMENT}`)
    await t.expect("1").contains("1") 
});
