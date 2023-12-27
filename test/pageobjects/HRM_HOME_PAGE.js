class HomePage{
         get pimButtom()
                        {
                          return $('//a[@href="/web/index.php/pim/viewPimModule"]')
                        }

         get addButton()
                        {

                        return $('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
                        }   
         get leaveButton()
                        {
                        return $('//a[@class="oxd-main-menu-item active"]')
                        }                           





}
 export default  new HomePage()