
var expect = chai.expect

describe('MyFunction', function() {
    describe('test', function() {
        it('create deck with 52 cards', function() {
          var x = createDeck();
            expect(x = 52)
        }) 
        it('should thow an error if theres a mistake.', function() {
          expect(function() {
            shuffleThe(1,2,3)
          }) .to.throw(Error); 
        })
    })
})