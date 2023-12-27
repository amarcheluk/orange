describe("log in ", async ()=>
             {


                it('should perform mouse actions on Facebook', async () => {
                    try {
                      await browser.url('https://www.facebook.com');
                
                      // Perform mouse actions
                      const button = await browser.$('[name="login"]');
                      await button.moveTo();
                      await browser.pause(1000); // Wait for 1 second
                      await button.doubleClick();
                      await browser.pause(1000); // Wait for 1 second
                      await button.rightClick();
                      await browser.pause(1000); // Wait for 1 second
                    } catch (error) {
                      console.error('Error:', error);
                      throw error;
                    }
                  });
                
                  after(async () => {
                    await browser.deleteSession();
                  });





             })
