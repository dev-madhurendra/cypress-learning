import { AutomateGithub } from "../../kitchensinkcommands_learning/Practice"

describe('Github automation test', () => { 
    
    const githubAutomation = new AutomateGithub();

    it('should visit the url', () => {
        githubAutomation.visitUrl();
    })

    it('should type username and password', () => {
        githubAutomation.typeCredentials()
    }) 

    it('should create new repository', () => {
        githubAutomation.selectNewRepository();
    })
    
})