import { Content } from "./content";

describe('Notification content', () => {
    it('shoud be able to create notification content',() => {
        const content = new Content('Você recebeu um novo pagamento');
        expect(content).toBeTruthy();
      });
      
    it('shoud not be able to create notification content with less than 5 characters',() => {
          expect(() => new Content('1234')).toThrowError('Invalid content length');
      });
      
    it('shoud not be able to create notification content with more than 255 characters',() => {
          expect(() => new Content('a'.repeat(255))).toThrowError('Invalid content length');
      });
      
})

