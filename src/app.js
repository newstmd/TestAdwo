
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var bgSprite = cc.Sprite.create(res.bg_jpg);
        bgSprite.attr({
        	x:size.width/2,
        	y:size.height/2
        });
        this.addChild(bgSprite);
        
        var sizeLable = cc.LabelTTF.create();
        sizeLable.setString(size.width+"+"+size.height);
        sizeLable.attr({
        	x:size.width/2,
        	y:size.height/2
        });
        this.addChild(sizeLable);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

