var should = require('should');

describe('TAFFYDB', function(){

    var TAFFY;

    it('should be requireable',function(){

        TAFFY = require(__dirname+'/../index');
        TAFFY.should.be.a('function');
    });

    it('should be able to create a new database',function(){

        var db = new TAFFY();

        db.should.be.a('function');
    });

    it('should accept new entries',function(){

        var db = new TAFFY();
        db.insert({foo:'bar'});

        var result = db().get().length;
        result.should.be.eql(1);
    });

    it('should retain new entries', function(){

        var db = new TAFFY();
        db.insert({foo:'bar'});

        var entry = db().first();
        entry.should.have.keys('foo','___id','___s');
        entry.foo.should.be.eql('bar');
    });
});