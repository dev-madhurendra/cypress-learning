import { RobotEyes, RobotHands, Dependencies } from '../../robots/wikipedia/Robot';

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

    describe('Search the required information', ()=>{

        it("navigate to wikipedia page", () => {
            dependencies.visitWikipedia();
        });

        it("search for the details", () => {
            robotHands.searchtesting()    
            robotEyes.seesMainPage
        })

    });

});