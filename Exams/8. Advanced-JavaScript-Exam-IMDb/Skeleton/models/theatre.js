var imdb = imdb || {};

(function (scope) {
    var id = 1;
    function Theatre (name, length, rating, country, isPuppet) {
        scope._Movie.call(this, name, length, rating, country);
        this.isPuppet = isPuppet || false;
        this._actors = [];
        this._reviews = [];
        this._id = id++;
    }
        
    Theatre.extends(scope._Movie);
    
    scope.getTheatre = function (name, length, rating, country, isPuppet) {
        return new Theatre(name, length, rating, country, isPuppet);
    }
})(imdb);