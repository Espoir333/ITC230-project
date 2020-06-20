const expect= require("chai").expect;
const movie=require("../data");

describe("movie module", () => {
    it("return requested movie", () => {
        const result = movie.getltem("titanic");
        expect(result).to.deep.equal({ "firstName" : "James"
    });
    
    it("fails w/ invalid movie", () => {
        const result = movie.getltem("fake");
        expect(result).to.be.undefined;
    });
   }); 
     


