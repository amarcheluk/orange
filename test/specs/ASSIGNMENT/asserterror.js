describe("assert ", async ()=>
             {


                it('should log in to Facebook', async () => {
                    try {
                      await browser.url('http://www.facebook.com');
                    } 
                    catch (error) {
                      console.error('Error:', error);
                      throw error;
                    }
                  });
                
                  it('asserting title ', async () => {
                    try {
                      const title = await browser.getTitle();
                      expect(title).to.equal('ABCDEFG');
                    } 
                    catch (error) {
                      console.error('Assertion Error:', error);
                      throw error;
                    }
                  });
                
                 














             })