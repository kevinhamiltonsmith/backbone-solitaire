// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Game = (function(_super) {
    __extends(Game, _super);

    function Game() {
      _ref = Game.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Game.prototype.initialize = function() {
      var deck;

      this.set('deck', deck = new Deck());
      this.set('gameBoard', deck.dealGameBoard());
      return this.set('gamePile', deck.dealPile());
    };

    return Game;

  })(Backbone.Model);

}).call(this);