(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.VISUEL = function() {
	this.initialize(img.VISUEL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,755);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Visuel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.VISUEL();
	this.instance.parent = this;
	this.instance.setTransform(-309,-264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Visuel, new cjs.Rectangle(-309,-264,300,755), null);


(lib.txtML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(-69.425,599.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_1.setTransform(-73.275,597.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIAAgBIgDgIIgBgHQAAgJAGgGQAHgGAJAAQAFAAAFACQAGACADADIgGAJIgFgEIgGgBQgGABgCADQgDADAAAFIABAFIACAJIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_2.setTransform(-78.5,595.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_3.setTransform(-83.125,599.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_4.setTransform(-89.225,597.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_5.setTransform(-94.825,596.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_6.setTransform(-99.725,597.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_7.setTransform(-107.525,597.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_8.setTransform(-115.675,595.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_9.setTransform(-124.625,597.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_10.setTransform(-131.5,597.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_11.setTransform(-138.275,597.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_12.setTransform(126.625,580.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_13.setTransform(118.75,580.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_14.setTransform(113.125,579.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_15.setTransform(108.5,579.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_16.setTransform(101.325,580.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgTAsQgIgDgHgHIAGgJQAHAFAHADQAGACAHAAQAKABAHgGQAGgGABgIIgBgFIgCgGQgEAGgGAEQgGAEgGAAQgOAAgJgJQgIgKgBgNQABgOAIgKQAJgJAOAAQAFAAAFADQAGADADAFIACgKIALAAIAAArIACACIACAIIABAIQAAAOgKAJQgKAIgQAAQgJAAgJgDgAgPgdQgFAHAAAJQAAAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgFgIAAQgIAAgGAFg");
	this.shape_17.setTransform(93.4,581.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_18.setTransform(85.35,580.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_19.setTransform(79.725,578.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_20.setTransform(74.1,580.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_21.setTransform(64.275,580.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_22.setTransform(54.3,580.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAQAxIAAgjQAAgIgEgFQgEgDgHAAQgEAAgEACQgFADgDAFIAAApIgNAAIAAhhIANAAIAAAtQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAHAAAMIAAAlg");
	this.shape_23.setTransform(46.575,578.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgEAQIgBgfIALAAIgBAfg");
	this.shape_24.setTransform(41.4,575.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_25.setTransform(35.875,578.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_26.setTransform(25.325,580.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_27.setTransform(19.525,580.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_28.setTransform(12.65,580.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_29.setTransform(4.575,578.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAJQgGAEgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_30.setTransform(-2.925,578.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_31.setTransform(-9.875,580.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_32.setTransform(-17.3,580.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_33.setTransform(-23.225,580.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_34.setTransform(-30.025,582.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_35.setTransform(-41.675,580.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_36.setTransform(-47.275,578.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_37.setTransform(-55.675,580.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_38.setTransform(-63.725,578.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_39.setTransform(-73.625,580.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_40.setTransform(-78.275,578.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_41.setTransform(-81.725,579.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_42.setTransform(-87.725,580.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_43.setTransform(-94.5,579.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAJQgGAEgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_44.setTransform(-101.025,578.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_45.setTransform(-109.075,578.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_46.setTransform(-118.025,580.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_47.setTransform(-122.725,579.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_48.setTransform(-128.35,580.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgFAwIgkhfIAOAAIAbBOIAdhOIANAAIgjBfg");
	this.shape_49.setTransform(-136.725,578.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_50.setTransform(-28.275,548.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgXAnQgJgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAJAIQAKAIAAAOQAAAOgKAJQgJAJgOAAQgNAAgKgKgAgOACQgFAGAAAJQAAAJAFAGQAHAFAHAAQAIAAAGgFQAFgGABgJQgBgJgFgGQgGgFgIAAQgIAAgGAFg");
	this.shape_51.setTransform(-34,544.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_52.setTransform(-41.775,544.675);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_53.setTransform(-48.475,544.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgaAwIAohfIANAAIgoBfg");
	this.shape_54.setTransform(-53.6,544.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAJgOAPgBQAPABAKAOQAKANAAAVQAAAWgKAOQgKANgPAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_55.setTransform(-61,544.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_56.setTransform(-68.225,544.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_57.setTransform(-73.175,544.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgcASIAAgLIA5AAIAAALgAgcgGIAAgLIA5AAIAAALg");
	this.shape_58.setTransform(-81.75,544.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgVA5QAOgJAHgQQAJgPAAgRQAAgQgJgPQgHgQgOgJIAGgKQARALALASQAJARABAUQgBAVgJARQgLASgRALg");
	this.shape_59.setTransform(-88.4,545.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_60.setTransform(-94.675,546.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_61.setTransform(-102.075,544.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_62.setTransform(-107.575,544.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_63.setTransform(-112.925,544.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_64.setTransform(-118.725,546.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_65.setTransform(-123.725,546.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_66.setTransform(-130.6,546.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_67.setTransform(-137.675,546.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgbAkQgOgPABgVQgBgUAOgOQAOgPATAAQAKAAAIAFQAKADAGAIIgIAIQgFgGgHgCQgGgDgIAAQgNAAgKALQgKAKAAAPQAAAQAKALQAKAKANAAQAIAAAHgDQAGgDAGgHIAIAJQgHAIgJAFQgJADgKAAQgTABgOgOg");
	this.shape_68.setTransform(114.3,527.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAALgJQAKgKAAgRQAAgQgKgJQgLgKgSAAIgLAAg");
	this.shape_69.setTransform(104.9,527.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_70.setTransform(96,527.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AAZAwIgxhKIAABKIgMAAIAAhfIAMAAIAxBKIAAhKIAMAAIAABfg");
	this.shape_71.setTransform(86.7,527.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_72.setTransform(78.975,528.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALAKASQALARgBAUQABAVgLARQgKASgRALg");
	this.shape_73.setTransform(72.65,528.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_74.setTransform(64.075,529.075);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAPAxIgRgbIgEABIgGAAIgEAAIAAAaIgNAAIAAhhIANAAIAAA7IAEAAQAIAAAEgCQADgDADgGIAGgNIANAAIgGANIgFAJQgDAFgDACIAWAhg");
	this.shape_75.setTransform(54.825,527.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgZAwIAnhfIANAAIgoBfg");
	this.shape_76.setTransform(47.65,527.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgTAsQgIgDgHgHIAGgJQAGAFAIADQAGACAHAAQAKABAHgGQAGgGABgIIgBgFIgCgGQgEAGgGAEQgGAEgHAAQgNAAgIgJQgJgKAAgNQAAgOAJgKQAIgJANAAQAGAAAFADQAGADADAFIADgKIAKAAIAAArIABACIADAIIABAIQAAAOgKAJQgKAIgQAAQgIAAgKgDgAgPgdQgFAHgBAJQABAJAFAGQAGAFAIAAQAIAAAGgFQAFgGABgJQgBgJgFgHQgGgFgIAAQgIAAgGAFg");
	this.shape_77.setTransform(40.5,530.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_78.setTransform(33.725,528.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgVgfIAOAAIAPAWIAPgWIANAAIgVAfIAXAfg");
	this.shape_79.setTransform(24.15,529.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_80.setTransform(16.525,529.15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_81.setTransform(6.725,529.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_82.setTransform(-2.45,527.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_83.setTransform(-9.375,529.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_84.setTransform(-15.075,527.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_85.setTransform(-22.725,529.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_86.setTransform(-35.55,527.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AghAkQgOgPAAgVQAAgUAOgOQAOgPATAAQAVAAANAPQAOAOAAAUQAAAVgOAPQgNAOgVgBQgTABgOgOgAgXgZQgKAKAAAPQAAAQAKALQAKAKANAAQAPAAAJgKQAKgLAAgQQAAgPgKgKQgJgLgPAAQgNAAgKALg");
	this.shape_87.setTransform(-44.625,527.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgaAkQgOgPgBgVQABgUAOgOQANgPAUAAQAJAAAJAFQAIADAHAIIgIAIQgGgGgGgCQgHgDgGAAQgOAAgKALQgJAKAAAPQAAAQAJALQAKAKAOAAQAHAAAGgDQAIgDAFgHIAIAJQgHAIgJAFQgJADgJAAQgUABgNgOg");
	this.shape_88.setTransform(-54.6,527.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_89.setTransform(-66.125,529.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_90.setTransform(-74.175,527.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_91.setTransform(-84.075,529.15);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_92.setTransform(-90.825,529.075);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAOgJAKQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_93.setTransform(-98.7,529.15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_94.setTransform(-104.325,527.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_95.setTransform(-109.025,529.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_96.setTransform(-114.925,529.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_97.setTransform(-119.575,527.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_98.setTransform(-127.225,529.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_99.setTransform(-136.95,527.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_100.setTransform(-95.575,514.45);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgSAwIAihTIgtAAIAAgMIA7AAIAAAJIgiBWg");
	this.shape_101.setTransform(-100.775,510.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_102.setTransform(-105.925,515.375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgXApQgJgHAAgNQAAgIAEgGQAEgGAIgDQgHgDgCgGQgEgFAAgGQAAgLAIgIQAJgHAMgBQAMABAJAHQAIAIAAALQAAAGgDAFQgDAGgGADQAIADAEAGQAEAHAAAHQAAANgKAHQgJAJgOgBQgNABgKgJgAgOAIQgFAFAAAIQAAAHAFAFQAHAFAHAAQAIAAAGgFQAFgFABgHQgBgIgFgFQgGgFgIAAQgIAAgGAFgAgLggQgFAEAAAGQABAHAEAEQAFAFAGAAQAHAAAEgFQAFgEABgHQgBgGgFgEQgEgEgHgBQgGABgFAEg");
	this.shape_103.setTransform(-111.85,510.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_104.setTransform(-119.1,510.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgFAAgGADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQAAAHgEAGQgDAHgHAHIgaAgIAqAAIAAALg");
	this.shape_105.setTransform(-125.9,510.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_106.setTransform(-131.325,515.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AAJAwIAAgXIgsAAIAAgJIAtg/IAMAAIAAA9IAOAAIAAALIgOAAIAAAXgAgVAOIAeAAIAAgrg");
	this.shape_107.setTransform(-137.2,510.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgdASIAAgLIA7AAIAAALgAgdgGIAAgLIA7AAIAAALg");
	this.shape_108.setTransform(86.3,493.375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgVA5QAOgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgOgJIAGgKQARALALASQAKARAAAUQAAAVgKARQgLASgRALg");
	this.shape_109.setTransform(79.65,494.475);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_110.setTransform(73.375,494.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGACgIAAQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_111.setTransform(65.975,493.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_112.setTransform(60.475,493.175);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGACgIAAQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_113.setTransform(55.125,493.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_114.setTransform(49.325,494.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_115.setTransform(44.325,494.875);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgXAYQgJgKABgOQgBgNAJgKQAKgJANAAQAOAAAJAJQAKAKgBANQABAOgKAKQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_116.setTransform(37.45,494.95);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_117.setTransform(30.375,494.95);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgaAkQgPgPAAgVQAAgUAPgOQANgPAUAAQAJAAAJAFQAIADAHAIIgIAIQgFgGgHgCQgHgDgGAAQgOAAgKALQgJAKAAAPQAAAQAJALQAKAKAOAAQAHAAAGgDQAIgDAFgHIAJAJQgIAIgJAFQgJADgJAAQgUABgNgOg");
	this.shape_118.setTransform(19.3,493.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAOANQAPANAAAVQAAAXgPAMQgOANgYAAgAgZAkIAMAAQARAAAKgJQALgKAAgRQAAgQgLgJQgKgKgRAAIgMAAg");
	this.shape_119.setTransform(9.9,493.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_120.setTransform(1,493.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AAYAwIgwhKIAABKIgNAAIAAhfIAOAAIAwBKIAAhKIAMAAIAABfg");
	this.shape_121.setTransform(-8.3,493.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_122.setTransform(-16.025,494.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgVA5QAOgJAHgQQAJgPAAgRQAAgQgJgPQgHgQgOgJIAGgKQARALALASQAJARABAUQgBAVgJARQgLASgRALg");
	this.shape_123.setTransform(-22.35,494.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_124.setTransform(-30.925,494.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AAPAxIgRgbIgEABIgGAAIgEAAIAAAaIgNAAIAAhhIANAAIAAA7IAEAAQAIAAAEgCQADgDADgGIAGgNIANAAIgGANIgFAJQgDAFgDACIAWAhg");
	this.shape_125.setTransform(-40.175,493.175);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAQABAJAOQAKANAAAVQAAAWgKAOQgJANgQAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_126.setTransform(-48.55,493.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAKgOAOgBQAPABAKAOQAJANAAAVQAAAWgJAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_127.setTransform(-57.15,493.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_128.setTransform(-64.375,493.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_129.setTransform(-69.5,493.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_130.setTransform(-74.325,493.175);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_131.setTransform(-78.675,494.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgVgfIAOAAIAOAWIAQgWIANAAIgVAfIAXAfg");
	this.shape_132.setTransform(-88.25,494.95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_133.setTransform(-95.875,494.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_134.setTransform(-105.675,494.875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_135.setTransform(-114.85,493.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_136.setTransform(-121.775,494.875);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_137.setTransform(-127.475,493.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_138.setTransform(-135.125,494.875);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_139.setTransform(106.125,477.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_140.setTransform(99.575,477.85);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_141.setTransform(92.9,477.025);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgWgfIAQAAIANAWIAQgWIAOAAIgXAfIAYAfg");
	this.shape_142.setTransform(86.65,477.85);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_143.setTransform(81.575,476.425);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_144.setTransform(73.925,477.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_145.setTransform(61.825,477.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_146.setTransform(55.075,477.775);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_147.setTransform(47.2,477.85);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_148.setTransform(41.575,476.425);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_149.setTransform(36.95,477.025);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_150.setTransform(29.775,477.85);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_151.setTransform(19.975,477.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_152.setTransform(7.975,477.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_153.setTransform(-2,477.85);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_154.setTransform(-8.875,477.85);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_155.setTransform(-15.625,477.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_156.setTransform(-23.5,477.85);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgbAkQgOgPAAgVQAAgUAOgOQAOgPAUAAQAJAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgHgDgGAAQgOAAgKALQgKAKAAAPQAAAQAKALQAKAKAOAAQAHAAAGgDQAIgDAFgHIAJAJQgIAIgJAFQgIADgKAAQgUABgOgOg");
	this.shape_157.setTransform(-31.9,476.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgFAfQgDgDAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFgRQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_158.setTransform(-41.625,477.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_159.setTransform(-48.525,477.775);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_160.setTransform(-55.125,477.85);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgHAjQgEgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAFgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_161.setTransform(-61.8,477.025);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_162.setTransform(-67.675,477.85);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_163.setTransform(-74.5,477.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAALgJQAKgKAAgRQAAgQgKgJQgLgKgSAAIgLAAg");
	this.shape_164.setTransform(-82.85,476.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_165.setTransform(-94.775,477.85);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_166.setTransform(-104.475,477.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_167.setTransform(-116.475,477.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_168.setTransform(-126.825,477.85);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AggAkQgOgPABgVQgBgUAOgOQAOgPATAAQAKAAAIAFQAJADAHAIIgIAIQgFgFgHgDQgGgDgIAAQgNAAgKALQgKAKAAAPQAAAQAKALQAKAKANAAQAMAAAKgHQAIgIACgLIghAAIAAgMIAuAAIAAACIAAACQABAUgNANQgNANgUAAQgTABgOgOg");
	this.shape_169.setTransform(-135.85,476.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_170.setTransform(-66.775,446.05);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIAAgBIgDgIIgBgHQAAgJAGgGQAHgGAJAAQAFAAAFACQAGACADADIgGAJIgFgEIgGgBQgGABgCADQgDADAAAFIABAFIACAJIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_171.setTransform(-70.85,441.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_172.setTransform(-77.55,443.725);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_173.setTransform(-84.975,443.65);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_174.setTransform(-92.575,443.575);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_175.setTransform(-101.625,443.575);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_176.setTransform(-108.225,443.65);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgHAjQgEgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAFgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_177.setTransform(-114.9,442.825);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_178.setTransform(-120.775,443.65);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_179.setTransform(-127.6,443.725);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAALgJQAKgKAAgRQAAgQgKgJQgLgKgSAAIgLAAg");
	this.shape_180.setTransform(-135.95,442);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_181.setTransform(94.375,426.55);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_182.setTransform(88.775,425.125);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_183.setTransform(83.875,426.55);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_184.setTransform(76.075,426.55);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIAMAAQARAAALgJQAKgKAAgRQAAgQgKgJQgLgKgRAAIgMAAg");
	this.shape_185.setTransform(67.65,424.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_186.setTransform(55.525,426.475);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_187.setTransform(47.65,426.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgJAQIAGgfIANAAIgKAfg");
	this.shape_188.setTransform(42.5,421.725);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_189.setTransform(36.725,424.85);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_190.setTransform(26.175,426.55);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_191.setTransform(18.125,424.85);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_192.setTransform(10.425,426.475);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_193.setTransform(2.175,426.55);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_194.setTransform(-7.625,426.475);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_195.setTransform(-19.625,426.475);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_196.setTransform(-29.6,426.55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_197.setTransform(-36.675,426.55);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_198.setTransform(-46.875,426.55);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_199.setTransform(-53.55,425.725);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_200.setTransform(-60.35,426.625);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_201.setTransform(-68.05,426.55);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgHAjQgEgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAFgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_202.setTransform(-74.85,425.725);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_203.setTransform(-82.825,426.475);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_204.setTransform(-89.7,426.625);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_205.setTransform(-97.4,426.55);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_206.setTransform(-105.125,428.275);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgPAxIAYgkIgEABIgFABQgNAAgJgJQgKgIAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAAOQAAAIgEAHQgDAJgIALIgTAdgAgNgeQgFAGAAAIQAAAJAFAGQAGAFAHAAQAJAAAFgFQAGgGAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_207.setTransform(-116.425,424.825);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_208.setTransform(-123.275,424.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAKgOAOgBQAPABAKAOQAJANAAAVQAAAWgJAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_209.setTransform(-129.6,424.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgFAAgGADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQAAAHgEAGQgDAHgHAHIgaAgIAqAAIAAALg");
	this.shape_210.setTransform(-137.6,424.825);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_211.setTransform(116.025,409.45);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_212.setTransform(110.225,409.375);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgKAvQgFgCgEgGIgBAJIgLAAIAAhhIAMAAIAAAsQAEgFAGgCQAFgDAFAAQAOAAAIAJQAJAJAAAOQAAAOgJAKQgIAJgOAAQgFAAgGgDgAgOABQgGAHAAAJQAAAJAGAHQAGAFAIAAQAIAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgIAAQgIAAgGAEg");
	this.shape_213.setTransform(103.425,407.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgWAYQgJgKAAgOQAAgNAJgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAAOgJAKQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_214.setTransform(95.2,409.45);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_215.setTransform(88.4,408.625);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_216.setTransform(82.325,409.45);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAOgJAKQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_217.setTransform(74.9,409.45);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_218.setTransform(65.025,407.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgQAuQgIgEgHgIIAIgJQAFAHAGACQAHAEAGAAQAHgBAFgEQAFgFABgHQAAgHgGgFQgGgFgIAAIgJAAIAAgKIAJAAQAGAAAFgFQAFgEgBgHQABgGgFgEQgEgEgHgBQgFABgFADQgFACgGAHIgIgIQAHgJAIgDQAHgFAIAAQALABAJAHQAHAIABALQAAAGgEAGQgEAGgHADQAJACAFAGQAFAGAAAIQAAANgJAHQgJAJgNgBQgJAAgIgDg");
	this.shape_219.setTransform(59.05,407.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_220.setTransform(48.55,409.525);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_221.setTransform(40.475,409.45);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_222.setTransform(31.525,409.375);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_223.setTransform(24.925,409.45);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_224.setTransform(18.225,407.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_225.setTransform(9.25,409.525);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_226.setTransform(1.175,407.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_227.setTransform(-9.375,409.45);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_228.setTransform(-14.875,407.675);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgKAvQgFgCgEgGIgBAJIgLAAIAAhhIAMAAIAAAsQAEgFAGgCQAFgDAFAAQAOAAAIAJQAJAJAAAOQAAAOgJAKQgIAJgOAAQgFAAgGgDgAgOABQgGAHAAAJQAAAJAGAHQAGAFAIAAQAIAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgIAAQgIAAgGAEg");
	this.shape_229.setTransform(-20.425,407.75);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_230.setTransform(-29.025,409.45);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_231.setTransform(-34.625,407.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_232.setTransform(-40.625,409.45);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_233.setTransform(-47.875,409.45);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAFgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_234.setTransform(-57.25,408.625);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_235.setTransform(-63.775,409.45);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgHAjQgEgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAFgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_236.setTransform(-73.5,408.625);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_237.setTransform(-80.225,409.375);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_238.setTransform(-88.475,409.45);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_239.setTransform(-96.175,411.175);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_240.setTransform(-102.225,408.025);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_241.setTransform(-107.125,409.45);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_242.setTransform(-112.375,408.025);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_243.setTransform(-117,408.625);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_244.setTransform(-121.925,409.375);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_245.setTransform(-129.175,409.45);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_246.setTransform(-136.875,411.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_247.setTransform(81.125,392.35);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_248.setTransform(75.525,390.925);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_249.setTransform(70.625,392.35);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_250.setTransform(62.825,392.35);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAALgJQAKgKAAgRQAAgQgKgJQgLgKgSAAIgLAAg");
	this.shape_251.setTransform(54.4,390.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_252.setTransform(42.2,392.425);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_253.setTransform(34.125,392.35);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_254.setTransform(26.625,392.35);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_255.setTransform(19.875,392.35);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_256.setTransform(13.325,390.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_257.setTransform(7.525,392.275);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_258.setTransform(-2.125,392.35);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_259.setTransform(-7.625,390.575);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_260.setTransform(-15.375,392.35);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_261.setTransform(-22.125,392.275);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_262.setTransform(-30.375,392.35);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_263.setTransform(-38.525,390.65);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_264.setTransform(-48.425,392.35);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_265.setTransform(-53.375,392.275);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_266.setTransform(-59.975,392.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_267.setTransform(-65.475,390.925);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_268.setTransform(-68.925,390.575);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_269.setTransform(-74.55,392.425);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_270.setTransform(-81.525,392.35);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_271.setTransform(-86.775,390.925);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_272.setTransform(-91.4,391.525);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_273.setTransform(-96.325,392.275);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_274.setTransform(-103.575,392.35);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_275.setTransform(-111.275,394.075);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgVgfIAOAAIAOAWIAQgWIANAAIgVAfIAXAfg");
	this.shape_276.setTransform(-122,392.35);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_277.setTransform(-129.25,392.425);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_278.setTransform(-137.325,392.35);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_279.setTransform(128.975,375.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_280.setTransform(121.575,373.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_281.setTransform(114.425,375.25);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_282.setTransform(108.975,375.175);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_283.setTransform(102.375,375.25);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_284.setTransform(95.625,375.25);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_285.setTransform(89.075,373.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_286.setTransform(83.275,375.175);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_287.setTransform(75.425,378.575);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_288.setTransform(69.975,375.25);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_289.setTransform(64.475,373.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgKAvQgFgCgEgGIgBAJIgLAAIAAhhIAMAAIAAAsQAEgFAGgCQAFgDAFAAQAOAAAIAJQAJAJAAAOQAAAOgJAKQgIAJgOAAQgFAAgGgDgAgOABQgGAHAAAJQAAAJAGAHQAGAFAIAAQAIAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgIAAQgIAAgGAEg");
	this.shape_290.setTransform(58.925,373.55);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_291.setTransform(50.325,375.25);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_292.setTransform(44.725,373.475);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_293.setTransform(39.1,375.325);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_294.setTransform(29.375,375.175);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_295.setTransform(19.4,375.325);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_296.setTransform(12.425,375.25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_297.setTransform(2.025,375.175);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_298.setTransform(-5.85,375.25);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_299.setTransform(-13.575,375.175);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_300.setTransform(-24.225,375.25);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_301.setTransform(-30.025,375.175);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIgBgBIgCgIIgBgHQAAgJAHgGQAGgGAJAAQAFAAAFACQAGACAEADIgHAJIgFgEIgGgBQgGABgCADQgDADAAAFIAAAGIADAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_302.setTransform(-35.25,373.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgLAyIAAgzIgNAAIAAgKIAMgBIgBgBIgCgIIgBgHQAAgJAHgGQAGgGAJAAQAFAAAFACQAFACAFADIgGAJIgGgEIgGgBQgGABgCADQgDADAAAFIAAAGIADAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_303.setTransform(-40.3,373.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AghAkQgOgPAAgVQAAgUAOgOQAOgPATAAQAVAAANAPQAOAOAAAUQAAAVgOAPQgNAOgVgBQgTABgOgOgAgXgZQgKAKAAAPQAAAQAKALQAKAKANAAQAPAAAJgKQAKgLAAgQQAAgPgKgKQgJgLgPAAQgNAAgKALg");
	this.shape_304.setTransform(-48.575,373.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_305.setTransform(-58.925,377.65);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgRAsQgIgDgGgFIAGgKQAGAFAFACQAGACAHAAQAIAAAGgGQAHgFAAgJIgBgFIgCgGQgEAHgGADQgGAEgGAAQgLAAgGgHQgGgHAAgLIAAgmIANAAIAAAkQAAAIADADQAEAEAHAAQADAAAFgCQAEgDAEgEIAAgqIAMAAIAAArIACACIACAHIABAJQAAANgJAJQgKAIgNAAQgJAAgIgCg");
	this.shape_306.setTransform(-64.625,376.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_307.setTransform(-72.275,375.175);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgTAsQgIgDgHgHIAGgJQAHAFAHADQAGACAHAAQAKABAHgGQAGgGABgIIgBgFIgCgGQgEAGgGAEQgGAEgGAAQgOAAgJgJQgIgKgBgNQABgOAIgKQAJgJAOAAQAFAAAFADQAGADADAFIACgKIALAAIAAArIACACIACAIIABAIQAAAOgKAJQgKAIgQAAQgJAAgJgDgAgPgdQgFAHAAAJQAAAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgFgIAAQgIAAgGAFg");
	this.shape_308.setTransform(-80.3,376.65);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_309.setTransform(-86.175,373.825);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgKAvQgFgCgEgGIgBAJIgLAAIAAhhIAMAAIAAAsQAEgFAGgCQAFgDAFAAQAOAAAIAJQAJAJAAAOQAAAOgJAKQgIAJgOAAQgFAAgGgDgAgOABQgGAHAAAJQAAAJAGAHQAGAFAIAAQAIAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgIAAQgIAAgGAEg");
	this.shape_310.setTransform(-91.725,373.55);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_311.setTransform(-99.95,375.25);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgfAwIAAhfIAbAAQAPAAAIAGQAJAHAAAMQAAAHgEAFQgDAFgHAEQAJACAEAGQAFAHAAAHQAAAMgKAIQgJAHgQAAgAgSAlIAQAAQAJAAAGgFQAGgEAAgHQAAgJgGgDQgGgFgJAAIgQAAgAgSgGIAPAAQAIgBAFgDQAFgEAAgHQAAgHgFgDQgFgEgIAAIgPAAg");
	this.shape_312.setTransform(-107.825,373.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgQAuQgKgFgHgIIAIgJQAGAIAHACQAHAEAHAAQAIAAAGgFQAFgEAAgHQAAgFgEgEQgFgEgMgEQgQgFgGgGQgGgGAAgLQAAgLAIgHQAJgHAMgBQAIABAIADQAHADAHAHIgIAJQgFgGgGgCQgFgDgGAAQgHAAgEAEQgFAEAAAGQAAAGAEAEQAFAEAOAFQAOAEAGAGQAGAGAAAKQAAALgJAIQgJAJgOgBQgJAAgJgDg");
	this.shape_313.setTransform(-119.425,373.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgaAkQgPgPAAgVQAAgUAPgOQANgPAUAAQAJAAAJAFQAIADAHAIIgIAIQgFgFgHgDQgHgDgGAAQgOAAgKALQgJAKAAAPQAAAQAJALQAKAKAOAAQAHAAAGgDQAIgDAFgHIAJAJQgIAIgJAFQgJADgJAAQgUABgNgOg");
	this.shape_314.setTransform(-127.85,373.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AATAwIgVgoIgSAAIAAAoIgNAAIAAhfIAeAAQANAAAJAHQAJAIAAAMQAAAKgFAGQgFAHgIACIAYArgAgUgDIARAAQAIABAFgFQAFgFAAgHQAAgHgFgFQgFgEgIAAIgRAAg");
	this.shape_315.setTransform(-136.475,373.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_316.setTransform(108.425,356.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgFAAgGADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQAAAHgEAGQgDAHgHAHIgaAgIAqAAIAAALg");
	this.shape_317.setTransform(102.7,356.425);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgFAGIgJgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_318.setTransform(95.4,356.425);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgdAxIAAgKIAignQAEgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_319.setTransform(85.05,356.425);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAJgOAPgBQAPABAKAOQAKANAAAVQAAAWgKAOQgKANgPAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_320.setTransform(77.15,356.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAKgOAOgBQAQABAJAOQAJANABAVQgBAWgJAOQgJANgQAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_321.setTransform(68.55,356.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgdAxIAAgKIAignQAEgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgFAGIgIgIQAGgIAIgEQAHgEAIAAQALAAAJAIQAHAHAAAMQAAAHgDAGQgCAHgIAHIgaAgIArAAIAAALg");
	this.shape_322.setTransform(57.5,356.425);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAKgOAOgBQAPABAKAOQAKANgBAVQABAWgKAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgJAAgFAKg");
	this.shape_323.setTransform(49.6,356.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgSAwIAihTIgtAAIAAgMIA7AAIAAAJIgiBWg");
	this.shape_324.setTransform(41.925,356.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AAYAwIgwhKIAABKIgNAAIAAhfIAOAAIAwBKIAAhKIANAAIAABfg");
	this.shape_325.setTransform(30.5,356.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_326.setTransform(21.75,356.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AATAwIgVgoIgSAAIAAAoIgNAAIAAhfIAeAAQANAAAJAHQAJAIAAAMQAAAKgFAGQgFAHgIACIAYArgAgUgDIARAAQAIABAFgFQAFgFAAgHQAAgHgFgFQgFgEgIAAIgRAAg");
	this.shape_327.setTransform(13.725,356.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgFAwIAAhfIAMAAIAABfg");
	this.shape_328.setTransform(7,356.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgQAuQgKgFgHgIIAIgJQAGAIAHACQAHAEAHAAQAIAAAGgFQAFgEAAgHQAAgFgEgEQgFgEgMgEQgQgFgGgGQgGgGAAgLQAAgLAIgHQAJgHAMgBQAIABAIADQAHADAHAHIgIAJQgFgGgGgCQgFgDgGAAQgHAAgEAEQgFAEAAAGQAAAGAEAEQAFAEAOAFQAOAEAGAGQAGAGAAAKQAAALgJAIQgJAJgOgBQgJAAgJgDg");
	this.shape_329.setTransform(1.025,356.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_330.setTransform(-10.225,356.45);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_331.setTransform(-17.925,358.075);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_332.setTransform(-26.175,358.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_333.setTransform(-32.075,358.075);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AggAkQgNgPAAgVQAAgUANgOQAOgPATAAQAKAAAIAFQAJADAIAIIgJAIQgGgFgGgDQgGgDgIAAQgNAAgKALQgKAKAAAPQAAAQAKALQAKAKANAAQANAAAIgHQAJgIACgLIghAAIAAgMIAuAAIAAACIAAADQABATgNANQgOANgTAAQgTABgOgOg");
	this.shape_334.setTransform(-40.2,356.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_335.setTransform(-48.025,357.25);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_336.setTransform(-54.175,358.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_337.setTransform(-59.675,356.375);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_338.setTransform(-63.875,357.25);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgRAsQgIgDgGgFIAGgKQAGAFAFACQAGACAHAAQAIAAAGgGQAHgFAAgJIgBgFIgCgGQgEAHgGADQgGAEgGAAQgLAAgGgHQgGgHAAgLIAAgmIANAAIAAAkQAAAIADADQAEAEAHAAQADAAAFgCQAEgDAEgEIAAgqIAMAAIAAArIACACIACAHIABAJQAAANgJAJQgKAIgNAAQgJAAgIgCg");
	this.shape_339.setTransform(-70.275,359.625);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_340.setTransform(-77.075,358.15);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_341.setTransform(-81.725,356.725);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_342.setTransform(-87.35,358.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AAYAwIgwhKIAABKIgNAAIAAhfIAOAAIAwBKIAAhKIANAAIAABfg");
	this.shape_343.setTransform(-96.3,356.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAKgOAOgBQAQABAJAOQAJANAAAVQAAAWgJAOQgJANgQAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_344.setTransform(-108.75,356.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgXAnQgJgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAKAIQAJAIAAAOQAAAOgJAJQgKAJgOAAQgNAAgKgKgAgOACQgFAGAAAJQAAAJAFAGQAHAFAHAAQAIAAAGgFQAGgGgBgJQABgJgGgGQgGgFgIAAQgIAAgGAFg");
	this.shape_345.setTransform(-116.95,356.575);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_346.setTransform(-123.825,356.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgQAuQgIgEgHgIIAIgJQAFAHAHACQAGAEAFAAQAIgBAGgEQAEgFAAgHQABgHgGgFQgFgFgJAAIgJAAIAAgKIAJAAQAGAAAFgFQAEgEABgHQgBgGgEgEQgEgEgHgBQgFABgFADQgFACgFAHIgIgIQAGgJAHgDQAIgFAIAAQAMABAHAHQAIAIAAALQABAGgEAGQgEAFgGAEQAIACAFAGQAFAGAAAIQAAANgJAHQgJAJgOgBQgIAAgIgDg");
	this.shape_347.setTransform(-129.8,356.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgPAxIAYgkIgEABIgFABQgNAAgJgJQgKgIAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAAOQAAAIgEAHQgDAJgIALIgTAdgAgNgeQgFAGAAAIQAAAJAFAGQAGAFAHAAQAJAAAFgFQAGgGAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_348.setTransform(-137.275,356.425);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgLAyIAAgzIgNAAIAAgKIAMgBIAAgBIgDgIIgBgHQAAgJAGgGQAHgGAJAAQAFAAAFACQAFACAEADIgFAJIgGgEIgGgBQgGABgCADQgDADAAAFIAAAFIADAJIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_349.setTransform(105.75,339.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_350.setTransform(99.05,341.125);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_351.setTransform(91.625,341.05);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AAYAwIgwhKIAABKIgNAAIAAhfIAOAAIAwBKIAAhKIANAAIAABfg");
	this.shape_352.setTransform(82.8,339.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAJQgGAEgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_353.setTransform(71.025,339.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_354.setTransform(63.875,341.05);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_355.setTransform(56.175,341.05);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgeAwIAAhfIAbAAQAQAAAJAIQAJAIAAAOQAAANgJAIQgKAIgPAAIgOAAIAAAkgAgRAAIAOAAQAKAAAFgEQAGgEAAgJQAAgJgGgFQgFgEgKAAIgOAAg");
	this.shape_356.setTransform(48.625,339.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_357.setTransform(37.2,341.125);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_358.setTransform(29.125,339.35);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_359.setTransform(18.575,341.05);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_360.setTransform(10.9,341.125);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_361.setTransform(3.275,340.975);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_362.setTransform(-4.325,341.05);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_363.setTransform(-11.475,341.05);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_364.setTransform(-19.175,341.05);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AAKAwIAAgXIgtAAIAAgJIAtg/IAMAAIAAA9IAOAAIAAALIgOAAIAAAXgAgVAOIAfAAIAAgrg");
	this.shape_365.setTransform(-30.15,339.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_366.setTransform(-37.075,339.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_367.setTransform(-44.625,340.15);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgOApQgNgJgEgOIgQAAIAAgMIANAAIAAgDIAAgDIAAgBIAAgDIgNAAIAAgMIAQAAQAEgPANgJQAMgJAOAAQAKAAAJAFQAIADAHAIIgIAIQgGgGgGgCQgGgDgIAAQgKAAgHAFQgIAGgEAJIAsAAIgEAMIgrAAIAAACIgBACIABADIAAADIAoAAIgDAMIgiAAQAEAIAIAGQAHAFAKAAQAIAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgJADgKAAQgOAAgMgIg");
	this.shape_368.setTransform(-58.375,339.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAKgOAOgBQAPABAKAOQAJANAAAVQAAAWgJAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAJAAAGgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_369.setTransform(-68.15,339.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AgWAnQgKgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAKAIQAJAIAAAOQAAAOgJAJQgKAJgOAAQgNAAgJgKgAgNACQgGAGAAAJQAAAJAGAGQAFAFAIAAQAIAAAGgFQAGgGgBgJQABgJgGgGQgGgFgIAAQgIAAgFAFg");
	this.shape_370.setTransform(-76.35,339.475);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_371.setTransform(-84.125,339.475);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_372.setTransform(-94.775,339.475);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_373.setTransform(-102.375,339.475);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgQAuQgIgEgHgIIAHgJQAGAHAHACQAGAEAFAAQAIgBAGgEQAEgFAAgHQABgHgGgFQgFgFgJAAIgJAAIAAgKIAJAAQAGAAAFgFQAEgEABgHQgBgGgEgEQgFgEgGgBQgFABgFADQgFACgFAHIgIgIQAGgJAHgDQAIgFAIAAQALABAIAHQAJAIgBALQABAGgEAGQgEAFgGAEQAIACAFAGQAFAGAAAIQAAANgJAHQgJAJgOgBQgIAAgIgDg");
	this.shape_374.setTransform(-110.1,339.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgPAxIAYgkIgEABIgFABQgNAAgJgJQgKgIAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAAOQAAAIgEAHQgDAJgIALIgTAdgAgNgeQgFAGAAAIQAAAJAFAGQAGAFAHAAQAJAAAFgFQAGgGAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_375.setTransform(-120.625,339.325);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAPABAKAOQAKANAAAVQAAAWgKAOQgKANgPAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgIAAgGAKg");
	this.shape_376.setTransform(-128.85,339.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AAJAwIAAgXIgsAAIAAgJIAtg/IAMAAIAAA9IAOAAIAAALIgOAAIAAAXgAgVAOIAeAAIAAgrg");
	this.shape_377.setTransform(-137.2,339.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_378.setTransform(110.825,323.95);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_379.setTransform(102.775,322.25);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_380.setTransform(94.125,322.175);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_381.setTransform(88.125,323.95);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAFgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_382.setTransform(81.35,323.125);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_383.setTransform(76.725,322.525);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_384.setTransform(71.175,325.675);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_385.setTransform(62.575,323.95);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_386.setTransform(55.525,323.95);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_387.setTransform(45.05,324.025);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_388.setTransform(36.975,323.95);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AAgAwIgKgZIgrAAIgKAZIgOAAIAnhfIANAAIAmBfgAASAMIgSgrIgRArIAjAAg");
	this.shape_389.setTransform(25.25,322.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgQAuQgKgFgHgIIAIgJQAGAIAHACQAHAEAHAAQAIAAAGgFQAFgEAAgHQAAgFgEgEQgFgDgMgFQgQgFgGgGQgGgGAAgLQAAgLAIgHQAJgHAMgBQAIABAIADQAHADAHAHIgIAJQgFgGgGgCQgFgDgGAAQgHAAgEAEQgFAEAAAGQAAAGAEAEQAFAEAOAFQAOAEAGAGQAGAGAAAKQAAALgJAIQgJAJgOgBQgJAAgJgDg");
	this.shape_390.setTransform(16.475,322.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_391.setTransform(7.675,327.275);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgbAkQgOgPABgVQgBgUAOgOQAOgPATAAQAKAAAIAFQAKADAGAIIgIAIQgFgGgHgCQgGgDgIAAQgNAAgKALQgKAKAAAPQAAAQAKALQAKAKANAAQAIAAAHgDQAGgDAGgHIAIAJQgHAIgJAFQgJADgKAAQgTABgOgOg");
	this.shape_392.setTransform(1.35,322.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AAgAwIgKgZIgrAAIgKAZIgOAAIAohfIALAAIAnBfgAARAMIgRgrIgRArIAiAAg");
	this.shape_393.setTransform(-8.3,322.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgGAwIAAhfIAMAAIAABfg");
	this.shape_394.setTransform(-15.1,322.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAALgJQAKgKAAgRQAAgQgKgJQgLgKgSAAIgLAAg");
	this.shape_395.setTransform(-21.65,322.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_396.setTransform(-31.975,323.875);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_397.setTransform(-39.225,323.95);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_398.setTransform(-46.925,325.675);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_399.setTransform(-58.125,323.875);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgWAYQgJgKAAgOQAAgNAJgKQAJgJANAAQAOAAAKAJQAIAKABANQgBAOgIAKQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_400.setTransform(-66,323.95);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_401.setTransform(-71.625,322.525);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_402.setTransform(-76.25,323.125);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_403.setTransform(-83.425,323.95);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_404.setTransform(-90.2,323.125);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_405.setTransform(-96.925,325.675);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_406.setTransform(-104.875,323.95);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_407.setTransform(-111.825,323.95);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AgTAYQgJgKAAgOQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_408.setTransform(-118.525,323.95);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_409.setTransform(-126.325,323.95);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgJAQIAGgfIANAAIgKAfg");
	this.shape_410.setTransform(-131.55,319.125);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_411.setTransform(-137.325,322.25);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_412.setTransform(65.075,306.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_413.setTransform(57.925,306.85);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_414.setTransform(52.475,306.775);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_415.setTransform(45.875,306.85);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_416.setTransform(39.125,306.85);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_417.setTransform(32.575,305.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_418.setTransform(26.775,306.775);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_419.setTransform(17.775,306.85);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_420.setTransform(10.95,306.925);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_421.setTransform(3.25,306.85);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AgQAuQgKgFgHgIIAIgJQAGAIAHACQAHAEAHAAQAIAAAGgFQAFgEAAgHQAAgFgEgEQgFgDgMgFQgQgFgGgGQgGgGAAgKQAAgMAIgHQAJgHAMgBQAIABAIADQAHADAHAHIgIAJQgFgGgGgCQgFgDgGAAQgHAAgEAEQgFAEAAAHQAAAFAEAEQAFAEAOAFQAOAEAGAGQAGAGAAAKQAAALgJAIQgJAJgOgBQgJAAgJgDg");
	this.shape_422.setTransform(-4.625,305.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_423.setTransform(-13.425,309.25);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_424.setTransform(-18.225,306.85);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_425.setTransform(-24.775,306.85);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_426.setTransform(-30.575,306.775);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_427.setTransform(-35.275,305.425);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_428.setTransform(-41.275,306.85);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_429.setTransform(-48.05,306.025);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_430.setTransform(-54.775,306.775);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_431.setTransform(-62.375,306.85);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_432.setTransform(-72.075,306.775);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_433.setTransform(-81.775,305.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_434.setTransform(-87.275,305.075);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_435.setTransform(-92.825,308.575);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_436.setTransform(-100.975,308.575);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_437.setTransform(-109.2,306.925);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEAAgDADQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_438.setTransform(-115.975,306.85);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_439.setTransform(-127.875,306.775);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AAPAxIgRgbIgEABIgGAAIgEAAIAAAaIgNAAIAAhhIANAAIAAA7IAEAAQAIAAAEgCQADgDADgGIAGgNIANAAIgGANIgFAJQgDAFgDACIAWAhg");
	this.shape_440.setTransform(-137.125,305.075);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_441.setTransform(122.325,289.75);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_442.setTransform(115.775,289.75);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_443.setTransform(107.725,288.05);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_444.setTransform(97.9,288.925);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_445.setTransform(91.375,289.75);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_446.setTransform(80.275,288.05);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_447.setTransform(74.375,289.675);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_448.setTransform(67.125,289.75);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_449.setTransform(58.975,288.05);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_450.setTransform(51.275,289.675);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_451.setTransform(43.025,289.75);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_452.setTransform(36.25,288.925);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_453.setTransform(30.375,289.75);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAFgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_454.setTransform(21.5,288.925);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_455.setTransform(14.325,289.75);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAFgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_456.setTransform(7.55,288.925);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_457.setTransform(1.025,288.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AgJAQIAGgfIANAAIgKAfg");
	this.shape_458.setTransform(-4.1,284.925);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_459.setTransform(-7.325,287.975);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AgXAoQgIgKAAgOQAAgOAIgIQAJgJANAAQAGAAAFACQAGADAEAFIABgJIALAAIAAA+IgLAAIgBgJQgEAFgGADQgFACgGAAQgNAAgJgJgAgNABQgGAHAAAIQAAAJAGAHQAGAGAHAAQAJAAAGgGQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFgAgNgmIAGgLIAXATIgFAHg");
	this.shape_460.setTransform(-19.425,288.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_461.setTransform(-29.975,289.75);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_462.setTransform(-36.725,289.75);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_463.setTransform(-41.375,288.325);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_464.setTransform(-49.025,289.675);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_465.setTransform(-58.725,289.75);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_466.setTransform(-64.525,289.675);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_467.setTransform(-74.175,289.75);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_468.setTransform(-82.225,288.05);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_469.setTransform(-92.125,289.75);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_470.setTransform(-96.775,288.325);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_471.setTransform(-102.775,289.75);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_472.setTransform(-108.675,289.675);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIgBgBIgCgIIgBgHQAAgJAHgGQAGgGAJAAQAFAAAFACQAFACAFADIgHAJIgFgEIgGgBQgFABgDADQgDADAAAFIABAGIACAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_473.setTransform(-113.9,287.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_474.setTransform(-122.725,289.75);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_475.setTransform(-129.275,289.75);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_476.setTransform(-137.325,288.05);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#333333").s().p("AgHAjQgEgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAFgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_477.setTransform(117.3,271.825);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_478.setTransform(110.575,272.575);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_479.setTransform(102.975,272.65);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_480.setTransform(93.275,272.575);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_481.setTransform(83.575,272.65);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_482.setTransform(78.075,271.225);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_483.setTransform(72.075,272.65);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_484.setTransform(64.375,274.375);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_485.setTransform(53.825,272.65);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_486.setTransform(46.675,272.65);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_487.setTransform(39.525,272.65);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_488.setTransform(31.825,272.65);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_489.setTransform(21.275,272.65);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_490.setTransform(15.475,272.575);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_491.setTransform(10.775,271.225);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_492.setTransform(4.775,272.65);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_493.setTransform(-2.925,272.575);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_494.setTransform(-10.725,272.575);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_495.setTransform(-18.6,272.65);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_496.setTransform(-24.225,271.225);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_497.setTransform(-28.925,272.65);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_498.setTransform(-34.825,272.65);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_499.setTransform(-41.375,272.65);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_500.setTransform(-48.325,272.65);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_501.setTransform(-55.675,272.575);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_502.setTransform(-63.55,272.65);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_503.setTransform(-70.625,272.65);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_504.setTransform(-80.825,272.65);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_505.setTransform(-86.625,272.575);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_506.setTransform(-92.5,271.825);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_507.setTransform(-99.3,272.65);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_508.setTransform(-106.575,272.65);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#333333").s().p("AgZAfIAAgJIAigpIghAAIAAgMIAxAAIAAAJIgiAqIAjAAIAAALg");
	this.shape_509.setTransform(-116.175,272.65);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_510.setTransform(-122.925,272.65);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#333333").s().p("AAQAxIAAgjQAAgIgEgFQgEgDgHAAQgEAAgEACQgFADgDAFIAAApIgNAAIAAhhIANAAIAAAtQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAHAAAMIAAAlg");
	this.shape_511.setTransform(-130.525,270.875);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_512.setTransform(-137.675,272.65);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_513.setTransform(130.125,255.55);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_514.setTransform(124.625,253.775);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_515.setTransform(119,255.625);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_516.setTransform(112.025,255.55);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_517.setTransform(106.775,254.125);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#333333").s().p("AAQAxIAAgjQAAgIgEgFQgEgDgHAAQgEAAgEACQgFADgDAFIAAApIgNAAIAAhhIANAAIAAAtQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAHAAAMIAAAlg");
	this.shape_518.setTransform(101.225,253.775);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAJQgGAEgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_519.setTransform(93.625,253.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_520.setTransform(86.475,255.55);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_521.setTransform(76.1,255.625);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_522.setTransform(68.025,253.85);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_523.setTransform(57.275,255.475);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAKAJQAJAKgBANQABAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_524.setTransform(49.4,255.55);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_525.setTransform(43.775,254.125);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_526.setTransform(39.15,254.725);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_527.setTransform(32.35,255.625);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_528.setTransform(25.65,254.725);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_529.setTransform(21.025,254.125);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_530.setTransform(16.4,254.725);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_531.setTransform(10.525,255.55);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_532.setTransform(3.975,255.55);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_533.setTransform(-1.825,255.475);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_534.setTransform(-9.675,258.875);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_535.setTransform(-14.4,254.725);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_536.setTransform(-21.575,255.55);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_537.setTransform(-27.475,255.475);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_538.setTransform(-33.35,254.725);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_539.setTransform(-40.075,255.475);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#333333").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_540.setTransform(-47.95,255.55);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_541.setTransform(-55.025,255.55);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_542.setTransform(-65.225,255.55);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_543.setTransform(-73.275,253.85);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_544.setTransform(-84.025,255.475);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_545.setTransform(-89.725,254.125);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#333333").s().p("AgLAyIAAgzIgNAAIAAgKIAMgBIAAgBIgDgIIgBgHQAAgJAGgGQAHgGAJAAQAFAAAFACQAFACAEADIgFAJIgGgEIgGgBQgGABgCADQgDADAAAFIAAAGIADAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_546.setTransform(-93.7,253.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_547.setTransform(-103.375,255.475);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_548.setTransform(-111,253.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_549.setTransform(-120.125,257.95);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_550.setTransform(-127.875,255.475);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#333333").s().p("AAPAxIgRgbIgEABIgGAAIgEAAIAAAaIgNAAIAAhhIANAAIAAA7IAEAAQAIAAAEgCQADgDADgGIAGgNIANAAIgGANIgFAJQgDAFgDACIAWAhg");
	this.shape_551.setTransform(-137.125,253.775);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAKgOAOgBQAQABAJAOQAJANAAAVQAAAWgJAOQgJANgQAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_552.setTransform(112.65,236.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAKgOAOgBQAPABAKAOQAKANgBAVQABAWgKAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgJAAgFAKg");
	this.shape_553.setTransform(104.05,236.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAQABAJAOQAKANAAAVQAAAWgKAOQgJANgQAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_554.setTransform(95.45,236.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#333333").s().p("AgYAkQgJgOAAgWQAAgVAJgNQAKgOAOgBQAPABAKAOQAKANgBAVQABAWgKAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgJAAgFAKg");
	this.shape_555.setTransform(83.8,236.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#333333").s().p("AgWAnQgKgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAJAIQAKAIAAAOQAAAOgKAJQgJAJgOAAQgNAAgJgKgAgNACQgGAGAAAJQAAAJAGAGQAFAFAIAAQAJAAAFgFQAGgGAAgJQAAgJgGgGQgFgFgJAAQgIAAgFAFg");
	this.shape_556.setTransform(75.6,236.875);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_557.setTransform(64.975,238.45);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_558.setTransform(56.925,236.75);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_559.setTransform(44.075,238.375);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_560.setTransform(34.1,238.525);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_561.setTransform(24.375,238.375);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_562.setTransform(16.575,237.025);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgVgfIAPAAIANAWIAQgWIAOAAIgXAfIAYAfg");
	this.shape_563.setTransform(11.5,238.45);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_564.setTransform(3.875,238.45);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_565.setTransform(-5.925,238.375);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_566.setTransform(-18.675,238.45);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#333333").s().p("AgSAsQgJgDgHgHIAHgJQAFAFAHADQAHACAIAAQAJABAHgGQAHgGAAgIIgBgFIgCgGQgEAGgGAEQgGAEgGAAQgOAAgJgJQgIgKgBgNQABgOAIgKQAJgJAOAAQAFAAAFADQAGADADAFIACgKIALAAIAAArIACACIACAIIABAIQAAAOgKAJQgKAIgPAAQgJAAgJgDgAgPgdQgGAHABAJQgBAJAGAGQAGAFAJAAQAHAAAFgFQAHgGgBgJQABgJgHgHQgFgFgHAAQgJAAgGAFg");
	this.shape_567.setTransform(-26.5,239.85);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_568.setTransform(-34.925,238.45);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_569.setTransform(-40.825,238.375);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_570.setTransform(-46.7,237.625);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_571.setTransform(-53.225,236.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_572.setTransform(-62.925,238.375);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_573.setTransform(-72.9,238.45);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_574.setTransform(-78.525,236.675);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_575.setTransform(-81.975,237.025);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#333333").s().p("AAPAxIgRgbIgEABIgGAAIgEAAIAAAaIgNAAIAAhhIANAAIAAA7IAEAAQAIAAAEgCQADgDADgGIAGgNIANAAIgGANIgFAJQgDAFgDACIAWAhg");
	this.shape_576.setTransform(-86.875,236.675);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_577.setTransform(-97.825,238.375);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_578.setTransform(-105.7,238.525);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_579.setTransform(-114.575,238.375);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_580.setTransform(-121.45,238.525);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_581.setTransform(-129.15,238.45);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_582.setTransform(-136.875,240.175);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_583.setTransform(108.125,221.35);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_584.setTransform(103.475,219.925);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#333333").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_585.setTransform(97.85,221.35);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_586.setTransform(88.025,221.275);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_587.setTransform(75.975,219.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#333333").s().p("AgXAnQgJgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAJAIQAKAIAAAOQAAAOgKAJQgJAJgOAAQgNAAgKgKgAgOACQgFAGAAAJQAAAJAFAGQAHAFAHAAQAIAAAGgFQAFgGABgJQgBgJgFgGQgGgFgIAAQgIAAgGAFg");
	this.shape_588.setTransform(70.05,219.775);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_589.setTransform(61.025,221.275);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_590.setTransform(54.15,221.425);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_591.setTransform(47.375,221.35);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_592.setTransform(37.775,221.35);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_593.setTransform(30.375,219.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_594.setTransform(24.575,221.275);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_595.setTransform(17.7,221.425);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAOANQAPANAAAVQAAAXgPAMQgOANgYAAgAgZAkIAMAAQARAAALgJQAKgKAAgRQAAgQgKgJQgLgKgRAAIgMAAg");
	this.shape_596.setTransform(9.35,219.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_597.setTransform(-2.575,221.35);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_598.setTransform(-10.25,221.425);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#333333").s().p("AgTAsQgIgDgHgHIAGgJQAHAFAHADQAGACAHAAQAKABAHgGQAGgGABgIIgBgFIgCgGQgEAGgGAEQgGAEgHAAQgNAAgIgJQgJgKAAgNQAAgOAJgKQAIgJANAAQAGAAAFADQAGADADAFIADgKIAKAAIAAArIACACIACAIIABAIQAAAOgKAJQgKAIgQAAQgIAAgKgDgAgPgdQgFAHgBAJQABAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgFgIAAQgIAAgGAFg");
	this.shape_599.setTransform(-18.1,222.75);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_600.setTransform(-26.075,221.275);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_601.setTransform(-33.95,221.35);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#333333").s().p("AgaAwIAAhfIANAAIAABTIAoAAIAAAMg");
	this.shape_602.setTransform(-40.925,219.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_603.setTransform(-51.875,221.275);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#333333").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_604.setTransform(-59.75,221.35);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_605.setTransform(-65.375,219.925);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_606.setTransform(-70,220.525);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_607.setTransform(-77.175,221.35);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_608.setTransform(-84.225,221.35);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_609.setTransform(-91.65,221.35);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#333333").s().p("AgaAwIAAhfIANAAIAABTIAoAAIAAAMg");
	this.shape_610.setTransform(-98.625,219.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALALASQAKARgBAUQABAVgKARQgLASgRALg");
	this.shape_611.setTransform(-108.9,220.875);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAGgGACgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgFAAgGADQgFADgGAGIgHgIQAGgIAHgEQAIgEAIAAQAMAAAHAIQAJAHgBAMQAAAHgCAGQgEAHgHAHIgaAgIAqAAIAAALg");
	this.shape_612.setTransform(-115.25,219.625);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_613.setTransform(-121.475,220.875);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALALASQAKARgBAUQABAVgKARQgLASgRALg");
	this.shape_614.setTransform(-127.8,220.875);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_615.setTransform(-133.375,219.7);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_616.setTransform(-138.025,220.875);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_617.setTransform(43.575,189.55);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#333333").s().p("AgVA5QAOgJAHgQQAJgPAAgRQAAgQgJgPQgHgQgOgJIAGgKQARALALASQAKARAAAUQAAAVgKARQgLASgRALg");
	this.shape_618.setTransform(38.6,186.675);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_619.setTransform(32.975,187.15);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_620.setTransform(28.025,187.075);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_621.setTransform(21.15,187.225);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_622.setTransform(13.45,187.15);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#333333").s().p("AgMA7QgEgCgDgEIAGgJIAGAEIAEABQADAAADgEQADgDAAgHIAAhCIANAAIAABEQgBAKgFAHQgGAGgJAAQgFAAgFgBgAAHgtQgDgDAAgDQAAgDADgDQACgDADABQAEgBACADQADADgBADQABADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_623.setTransform(6.6,187.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAQABAJAOQAKANAAAVQAAAWgKAOQgJANgQAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAFALAJAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgJAAgFAKg");
	this.shape_624.setTransform(-1.3,185.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#333333").s().p("AgQAuQgJgEgGgIIAIgJQAGAHAFACQAHAEAFAAQAJgBAFgEQAEgFAAgHQABgHgGgFQgFgFgJAAIgJAAIAAgKIAJAAQAGAAAFgFQAEgEAAgHQAAgGgEgEQgEgEgHgBQgFABgFADQgFACgFAHIgJgIQAHgJAIgDQAHgFAIAAQAMABAIAHQAHAIAAALQAAAGgDAGQgEAGgGADQAIACAFAGQAFAGAAAIQAAANgJAHQgJAJgOgBQgIAAgIgDg");
	this.shape_625.setTransform(-9.55,185.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_626.setTransform(-19.775,187.15);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_627.setTransform(-27.825,185.45);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_628.setTransform(-37.725,187.15);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_629.setTransform(-42.375,185.725);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#333333").s().p("AgWAYQgJgJAAgPQAAgNAJgKQAJgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgHAAgGAFg");
	this.shape_630.setTransform(-48,187.15);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_631.setTransform(-57.825,187.075);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_632.setTransform(-70.775,187.075);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_633.setTransform(-78.65,187.225);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_634.setTransform(-87.525,187.075);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_635.setTransform(-94.4,187.225);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_636.setTransform(-102.1,187.15);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_637.setTransform(-109.825,188.875);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_638.setTransform(-119.225,187.075);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_639.setTransform(-126.1,187.225);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_640.setTransform(-133.8,187.15);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#333333").s().p("AgMA7QgEgCgEgEIAHgJIAGAEIAEABQADAAADgEQADgDAAgHIAAhCIANAAIAABEQgBAKgFAHQgGAGgJAAQgFAAgFgBgAAGgtQgCgDAAgDQAAgDACgDQADgDADABQAEgBACADQACADAAADQAAADgCADQgCACgEAAQgDAAgDgCg");
	this.shape_641.setTransform(-140.65,187.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_642.setTransform(132.125,169.975);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_643.setTransform(124.875,170.05);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_644.setTransform(117.175,171.775);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#333333").s().p("AgbAkQgOgPABgVQgBgUAOgOQAOgPATAAQAKAAAIAFQAKADAGAIIgIAIQgFgFgHgDQgGgDgIAAQgNAAgKALQgKAKAAAPQAAAQAKALQAKAKANAAQAIAAAHgDQAGgDAGgHIAIAJQgHAIgJAFQgJADgKAAQgTABgOgOg");
	this.shape_645.setTransform(105.3,168.4);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#333333").s().p("AgGAwIAAhTIgdAAIAAgMIBHAAIAAAMIgdAAIAABTg");
	this.shape_646.setTransform(96.625,168.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#333333").s().p("AgGAwIAAhTIgdAAIAAgMIBHAAIAAAMIgdAAIAABTg");
	this.shape_647.setTransform(88.925,168.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#333333").s().p("AgOApQgNgJgEgOIgQAAIAAgMIANAAIAAgDIAAgDIAAgBIAAgEIgNAAIAAgLIAQAAQAEgPANgJQAMgJAOAAQAKAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgGgDgIAAQgKAAgHAFQgIAGgEAJIAsAAIgEALIgrAAIAAADIgBACIABADIAAADIAoAAIgDAMIgiAAQAEAIAIAGQAHAFAKAAQAIAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgJADgKAAQgOAAgMgIg");
	this.shape_648.setTransform(76.875,168.4);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_649.setTransform(67.575,168.475);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_650.setTransform(57.85,169.225);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_651.setTransform(53.225,168.625);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAKAJQAJAKgBANQABAPgJAJQgKAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_652.setTransform(47.6,170.05);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_653.setTransform(40.725,170.05);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_654.setTransform(35.175,169.575);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_655.setTransform(25.975,170.05);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_656.setTransform(21.325,168.625);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_657.setTransform(15.7,170.05);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_658.setTransform(5.875,169.975);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_659.setTransform(-5.275,169.975);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_660.setTransform(-12.525,170.05);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_661.setTransform(-20.225,171.775);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_662.setTransform(-30.575,170.05);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_663.setTransform(-35.525,169.975);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgEAFgFACQgFADgFAAQgLAAgGgHg");
	this.shape_664.setTransform(-42.4,170.125);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_665.setTransform(-50.1,170.05);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#333333").s().p("AgMA6QgEgBgEgEIAHgJIAGAEIAEABQADAAADgEQADgDAAgHIAAhCIANAAIAABEQgBAKgFAHQgGAGgJAAQgFAAgFgCgAAGgtQgCgDAAgDQAAgDACgDQADgDADABQAEgBACADQACADAAADQAAADgCADQgCACgEAAQgDAAgDgCg");
	this.shape_666.setTransform(-56.95,170.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_667.setTransform(-64.175,170.05);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_668.setTransform(-72.225,168.35);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_669.setTransform(-82.775,170.05);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_670.setTransform(-88.575,169.975);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#333333").s().p("AgKAvQgFgCgEgGIgBAJIgLAAIAAhhIAMAAIAAAsQAEgFAGgCQAFgDAFAAQAOAAAIAJQAJAJAAAOQAAAOgJAKQgIAJgOAAQgFAAgGgDgAgOABQgGAHAAAJQAAAJAGAHQAGAFAIAAQAIAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgIAAQgIAAgGAEg");
	this.shape_671.setTransform(-95.375,168.35);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_672.setTransform(-105.625,169.975);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_673.setTransform(-115.6,170.05);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_674.setTransform(-123.325,169.975);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_675.setTransform(-133.975,170.05);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_676.setTransform(-139.475,168.275);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_677.setTransform(126.2,152.125);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_678.setTransform(121.575,151.525);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_679.setTransform(115.95,152.95);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_680.setTransform(109.075,152.95);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_681.setTransform(99.475,152.95);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_682.setTransform(91.8,153.025);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#333333").s().p("AATAyIAAgsQgEAEgFADQgFADgGAAQgNAAgJgKQgIgIAAgOQAAgOAIgKQAJgJANAAQAGAAAFADQAGACAEAGIABgKIALAAIAABigAgNggQgGAHAAAJQAAAJAGAGQAGAFAHAAQAJAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgJAAQgHAAgGAGg");
	this.shape_683.setTransform(83.725,154.675);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_684.setTransform(75.075,151.175);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_685.setTransform(69.725,152.95);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQABAIADAEQAEAEAHAAQADAAAFgCQAEgDAEgFIAAgpIAMAAIAAA+IgKAAIgCgJQgFAFgEACQgGADgFAAQgLAAgGgHg");
	this.shape_686.setTransform(62.05,153.025);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#333333").s().p("AATAyIAAgsQgEAEgFADQgFADgGAAQgNAAgJgKQgIgIAAgOQAAgOAIgKQAJgJANAAQAGAAAFADQAGACAEAGIABgKIALAAIAABigAgNggQgGAHAAAJQAAAJAGAGQAGAFAHAAQAJAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgJAAQgHAAgGAGg");
	this.shape_687.setTransform(53.975,154.675);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#333333").s().p("AgbAkQgNgPAAgVQAAgUANgOQAOgPAUAAQAJAAAJAFQAJADAGAIIgIAIQgGgFgGgDQgGgDgHAAQgOAAgKALQgKAKAAAPQAAAQAKALQAKAKAOAAQAHAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgIADgKAAQgUABgOgOg");
	this.shape_688.setTransform(42.55,151.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#333333").s().p("AgGAwIAAhTIgdAAIAAgMIBHAAIAAAMIgdAAIAABTg");
	this.shape_689.setTransform(33.875,151.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#333333").s().p("AgGAwIAAhTIgdAAIAAgMIBHAAIAAAMIgdAAIAABTg");
	this.shape_690.setTransform(26.175,151.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#333333").s().p("AgOApQgNgJgEgOIgQAAIAAgMIANAAIAAgDIAAgDIAAgBIAAgEIgNAAIAAgLIAQAAQAEgPANgJQAMgJAOAAQAKAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgGgDgIAAQgKAAgHAFQgIAGgEAJIAsAAIgEALIgrAAIAAADIgBACIABADIAAADIAoAAIgDAMIgiAAQAEAIAIAGQAHAFAKAAQAIAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgJADgKAAQgOAAgMgIg");
	this.shape_691.setTransform(14.125,151.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAPABAKAOQAKANAAAVQAAAWgKAOQgKANgPAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgIAAgGAKg");
	this.shape_692.setTransform(4.35,151.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_693.setTransform(-3.775,151.375);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_694.setTransform(-10.475,151.3);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_695.setTransform(-19.175,152.95);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_696.setTransform(-27.225,151.25);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_697.setTransform(-37.125,152.95);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_698.setTransform(-42.075,152.875);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_699.setTransform(-48.675,152.95);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#333333").s().p("AgRAsQgIgDgGgFIAGgKQAGAFAFACQAGACAHAAQAIAAAGgGQAHgFAAgJIgBgFIgCgGQgEAHgGADQgGAEgGAAQgLAAgGgHQgGgHAAgLIAAgmIANAAIAAAkQAAAIADADQAEAEAHAAQADAAAFgCQAEgDAEgEIAAgqIAMAAIAAArIACACIACAHIABAJQAAANgJAJQgKAIgNAAQgJAAgIgCg");
	this.shape_700.setTransform(-56.325,154.425);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAJAJQAJAKAAANQAAAPgJAJQgJAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_701.setTransform(-64.05,152.95);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_702.setTransform(-69.675,151.175);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_703.setTransform(-77.375,151.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#333333").s().p("AgXAnQgJgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAKAIQAJAIAAAOQAAAOgJAJQgKAJgOAAQgNAAgKgKgAgOACQgFAGAAAJQAAAJAFAGQAHAFAHAAQAJAAAFgFQAFgGAAgJQAAgJgFgGQgFgFgJAAQgIAAgGAFg");
	this.shape_704.setTransform(-83.3,151.375);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#333333").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_705.setTransform(-92.125,155.35);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_706.setTransform(-97.65,151.225);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgWgfIAQAAIANAWIAQgWIAOAAIgXAfIAYAfg");
	this.shape_707.setTransform(-104.6,152.95);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#333333").s().p("AAJAwIAAgXIgsAAIAAgJIAtg/IAMAAIAAA9IAOAAIAAALIgOAAIAAAXgAgVAOIAeAAIAAgrg");
	this.shape_708.setTransform(-112,151.3);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#333333").s().p("AgYAkQgKgOAAgWQAAgVAKgNQAJgOAPgBQAQABAJAOQAKANAAAVQAAAWgKAOQgJANgQAAQgPAAgJgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAJAAAHgLQAFgKAAgRQAAgQgFgKQgGgKgKAAQgIAAgGAKg");
	this.shape_709.setTransform(-123.35,151.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#333333").s().p("AgYAkQgKgOABgWQgBgVAKgNQAKgOAOgBQAPABAKAOQAJANAAAVQAAAWgJAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_710.setTransform(-131.95,151.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_711.setTransform(-139.175,151.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_712.setTransform(113.525,135.85);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_713.setTransform(106.575,135.85);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#333333").s().p("AgGAwIAAhTIgdAAIAAgMIBHAAIAAAMIgdAAIAABTg");
	this.shape_714.setTransform(99.225,134.2);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_715.setTransform(89.325,135.85);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_716.setTransform(83.425,135.85);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_717.setTransform(76.875,135.85);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_718.setTransform(69.925,135.85);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_719.setTransform(63.225,135.85);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#333333").s().p("AAgAwIgKgZIgsAAIgJAZIgOAAIAohfIALAAIAoBfgAARAMIgRgrIgQArIAhAAg");
	this.shape_720.setTransform(54.9,134.2);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_721.setTransform(45.025,135.775);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_722.setTransform(38.425,135.85);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_723.setTransform(31.75,135.025);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEAEAFABQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_724.setTransform(25.875,135.85);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_725.setTransform(19.05,135.925);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAOANQAPANAAAVQAAAXgPAMQgOANgYAAgAgZAkIAMAAQARAAAKgJQALgKAAgRQAAgQgLgJQgKgKgRAAIgMAAg");
	this.shape_726.setTransform(10.7,134.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_727.setTransform(-1.875,135.85);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_728.setTransform(-7.475,134.425);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_729.setTransform(-12.375,135.85);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_730.setTransform(-20.175,135.85);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAOANQAPANAAAVQAAAXgPAMQgOANgYAAgAgZAkIALAAQASAAAKgJQALgKAAgRQAAgQgLgJQgKgKgSAAIgLAAg");
	this.shape_731.setTransform(-28.6,134.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_732.setTransform(-38.925,135.775);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_733.setTransform(-45.8,135.925);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_734.setTransform(-53.5,135.85);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_735.setTransform(-61.225,137.575);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_736.setTransform(-72.225,135.85);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_737.setTransform(-77.725,134.075);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_738.setTransform(-83.275,137.575);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_739.setTransform(-93.525,135.775);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_740.setTransform(-103.225,135.85);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAYgfIgXgfIAQAAIANAWIAQgWIAOAAIgXAfIAYAfg");
	this.shape_741.setTransform(-110.35,135.85);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#333333").s().p("AgcAwIAAhfIA5AAIAAAMIgsAAIAAAdIApAAIAAAKIgpAAIAAAgIAsAAIAAAMg");
	this.shape_742.setTransform(-117.35,134.2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALALASQAKARgBAUQABAVgKARQgLASgRALg");
	this.shape_743.setTransform(-127.8,135.375);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_744.setTransform(-133.375,134.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_745.setTransform(-138.025,135.375);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALAKASQALARgBAUQABAVgLARQgKASgRALg");
	this.shape_746.setTransform(-8.9,101.175);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#333333").s().p("AgdAxIAAgKIAignQAFgGACgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgFAAgGADQgFADgFAGIgIgIQAGgIAHgEQAIgEAIAAQAMAAAHAIQAJAHgBAMQAAAHgCAGQgDAHgIAHIgaAgIAqAAIAAALg");
	this.shape_747.setTransform(-15.25,99.925);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_748.setTransform(-21.475,101.175);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAFQgHAFgKAAQgGAAgHgDg");
	this.shape_749.setTransform(-30.675,101.65);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgDADgFACQgFACgFAAQgIAAgHgGg");
	this.shape_750.setTransform(-36.5,100.825);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_751.setTransform(-41.425,101.575);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_752.setTransform(-48.025,101.65);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIgBgBIgCgIIgBgHQAAgJAHgGQAGgGAJAAQAFAAAFACQAFACAFADIgHAJIgFgEIgGgBQgFABgDADQgDADAAAFIABAGIACAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_753.setTransform(-54.05,99.8);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#333333").s().p("AgLAyIAAgzIgOAAIAAgKIANgBIgBgBIgCgIIgBgHQAAgJAHgGQAGgGAJAAQAFAAAFACQAGACAEADIgHAJIgFgEIgGgBQgGABgCADQgDADAAAFIAAAGIADAIIAAAAIAVAAIAAALIgUAAIAAAzg");
	this.shape_754.setTransform(-59.1,99.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_755.setTransform(-65.8,101.65);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_756.setTransform(-76.575,101.575);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_757.setTransform(-84.175,101.65);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_758.setTransform(-89.675,100.225);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_759.setTransform(-94.3,100.825);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_760.setTransform(-100.825,101.65);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_761.setTransform(-106.625,101.575);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_762.setTransform(-112.5,100.825);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_763.setTransform(-119.225,101.575);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_764.setTransform(-126.825,101.65);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#333333").s().p("AgEAQIgBgfIALAAIgBAfg");
	this.shape_765.setTransform(-131.8,96.825);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_766.setTransform(-137.325,99.95);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_767.setTransform(118.975,84.55);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_768.setTransform(112.225,84.475);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_769.setTransform(103.975,84.55);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_770.setTransform(93.225,82.975);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_771.setTransform(83.225,84.55);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_772.setTransform(76.075,84.55);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_773.setTransform(68.925,84.55);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_774.setTransform(61.225,84.55);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#333333").s().p("AgWA5QAPgJAIgQQAIgPAAgRQAAgQgIgPQgIgQgPgJIAHgKQARALAKASQAKARAAAUQAAAVgKARQgKASgRALg");
	this.shape_775.setTransform(51.15,84.075);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#333333").s().p("AgQAuQgJgEgGgIIAIgJQAGAHAFACQAHAEAGAAQAIgBAEgEQAFgFABgHQAAgHgGgFQgFgFgJAAIgJAAIAAgKIAJAAQAGAAAFgFQAEgEAAgHQAAgGgEgEQgEgEgHgBQgFABgFADQgFACgGAHIgIgIQAHgJAIgDQAHgFAIAAQALABAJAHQAHAIABALQAAAGgEAGQgEAFgHAEQAJACAFAGQAFAGAAAIQAAANgJAHQgJAJgNgBQgJAAgIgDg");
	this.shape_776.setTransform(44.55,82.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#333333").s().p("AgLAmQgLgRAAgVQAAgUALgRQAKgSARgLIAHAKQgPAJgIAQQgIAPAAAQQAAARAIAPQAIAQAPAJIgHAKQgRgLgKgSg");
	this.shape_777.setTransform(38.375,84.075);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_778.setTransform(29.25,83.725);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_779.setTransform(24.325,84.475);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgHAAgGAFg");
	this.shape_780.setTransform(17.45,84.55);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_781.setTransform(9.725,86.275);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_782.setTransform(1.575,86.275);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_783.setTransform(-7.025,84.55);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_784.setTransform(-16.925,84.55);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_785.setTransform(-23.675,84.475);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_786.setTransform(-31.925,84.55);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_787.setTransform(-38.775,84.55);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_788.setTransform(-46.575,87.875);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_789.setTransform(-51.375,84.55);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_790.setTransform(-56.025,83.125);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_791.setTransform(-61.65,84.55);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#333333").s().p("AAlAgIAAgiQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEADgEAGIAAAnIgLAAIAAgiQAAgIgEgFQgEgFgGAAQgFAAgEADQgFADgDAGIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAFgDAGAAQAHAAAGADQAEAEADAGQAEgGAGgEQAGgDAGAAQALAAAHAHQAGAHAAANIAAAkg");
	this.shape_792.setTransform(-71.475,84.475);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_793.setTransform(-80.65,82.9);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#333333").s().p("AgOApQgNgJgEgOIgQAAIAAgMIANAAIAAgDIAAgDIAAgBIAAgEIgNAAIAAgLIAQAAQAEgPANgJQAMgJAOAAQAKAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgGgDgIAAQgKAAgHAFQgIAGgEAJIAsAAIgEALIgrAAIAAADIgBACIABADIAAADIAoAAIgDAMIgiAAQAEAIAIAGQAHAFAKAAQAIAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgJADgKAAQgOAAgMgIg");
	this.shape_794.setTransform(-88.875,82.9);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#333333").s().p("AgYAkQgKgOABgWQgBgVAKgNQAKgOAOgBQAPABAKAOQAJANAAAVQAAAWgJAOQgKANgPAAQgOAAgKgNgAgOgaQgGAKAAAQQAAARAGAKQAGALAIAAQAKAAAFgLQAGgKAAgRQAAgQgGgKQgFgKgKAAQgIAAgGAKg");
	this.shape_795.setTransform(-98.65,82.9);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_796.setTransform(-105.875,82.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_797.setTransform(-111.6,82.825);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAWAAIAAALIgWAAIAAAdQAAAFADADQACAEAEAAIAFgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_798.setTransform(-121.15,83.725);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_799.setTransform(-125.775,83.125);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_800.setTransform(-131.4,84.55);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_801.setTransform(-138.275,84.55);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_802.setTransform(111.725,67.375);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQgBAIAEAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgLAAIgCgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_803.setTransform(104.85,67.525);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#333333").s().p("AgXAYQgIgJgBgPQABgNAIgKQAKgJANAAQAOAAAKAJQAIAKABANQgBAPgIAJQgKAJgOAAQgNAAgKgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAIAAAHgFQAFgHAAgJQAAgIgFgHQgHgFgIAAQgIAAgFAFg");
	this.shape_804.setTransform(97.15,67.45);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#333333").s().p("AgMA6QgEgBgDgEIAGgJIAGAEIAEABQADAAADgEQADgDAAgHIAAhCIANAAIAABEQgBAKgFAHQgGAGgJAAQgFAAgFgCgAAHgtQgDgDAAgDQAAgDADgDQACgDADABQAEgBACADQADADgBADQABADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_805.setTransform(90.3,67.5);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#333333").s().p("AgaAwIAohfIAMAAIgmBfg");
	this.shape_806.setTransform(86.65,65.8);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#333333").s().p("AgOApQgNgJgEgOIgQAAIAAgMIANAAIAAgDIAAgDIAAgBIAAgDIgNAAIAAgMIAQAAQAEgPANgJQAMgJAOAAQAKAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgGgDgIAAQgKAAgHAFQgIAGgEAJIAsAAIgEAMIgrAAIAAACIgBACIABADIAAADIAoAAIgDAMIgiAAQAEAIAIAGQAHAFAKAAQAIAAAHgDQAGgDAGgHIAJAJQgIAIgJAFQgJADgKAAQgOAAgMgIg");
	this.shape_807.setTransform(78.425,65.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#333333").s().p("AgPAxIAYgkIgEABIgFABQgNAAgJgJQgKgIAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAAOQAAAIgEAHQgDAJgIALIgTAdgAgNgeQgFAGAAAIQAAAJAFAGQAGAFAHAAQAJAAAFgFQAGgGAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_808.setTransform(69.025,65.725);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#333333").s().p("AgPAxIAYgkIgEABIgFABQgNAAgJgJQgKgIAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAAOQAAAIgEAHQgDAJgIALIgTAdgAgNgeQgFAGAAAIQAAAJAFAGQAGAFAHAAQAJAAAFgFQAGgGAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_809.setTransform(61.175,65.725);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#333333").s().p("AgHASIAEgSQgCgBgCgDIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEIgBAEIgBAEIgHASg");
	this.shape_810.setTransform(55.425,70.775);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#333333").s().p("AgXAnQgJgJAAgOQAAgIAEgIQADgIAIgLIATgdIAOAAIgYAkIAEgBIAEAAQAOAAAJAIQAKAIAAAOQAAAOgKAJQgJAJgOAAQgNAAgKgKgAgOACQgFAGAAAJQAAAJAFAGQAHAFAHAAQAIAAAGgFQAFgGABgJQgBgJgFgGQgGgFgIAAQgIAAgGAFg");
	this.shape_811.setTransform(49.7,65.875);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_812.setTransform(38.425,67.45);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_813.setTransform(27.675,67.375);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_814.setTransform(19.8,67.45);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_815.setTransform(14.175,66.025);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#333333").s().p("AgGAjQgGgGAAgLIAAgdIgNAAIAAgKIANgBIABAAIABgSIAKAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFADADQACAEAFAAIAEgCIAGgDIAGAJQgEADgEACQgFACgFAAQgJAAgFgGg");
	this.shape_816.setTransform(9.55,66.625);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_817.setTransform(2.825,69.175);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_818.setTransform(-5.4,67.45);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_819.setTransform(-15.525,67.45);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_820.setTransform(-22.675,67.45);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#333333").s().p("AgFAfIgag+IANAAIASAwIATgwIANAAIgaA+g");
	this.shape_821.setTransform(-29.825,67.45);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_822.setTransform(-37.525,67.45);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#333333").s().p("AgdAxIAAgKIAhgnQAFgGADgFQACgFAAgFQAAgGgEgFQgFgEgFAAQgGAAgFADQgFADgGAGIgIgIQAHgIAIgEQAHgEAIAAQALAAAJAIQAHAHABAMQgBAHgDAGQgDAHgHAHIgaAgIArAAIAAALg");
	this.shape_823.setTransform(-48.15,65.725);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#333333").s().p("AAQAfIgQgWIgQAWIgOAAIAXgfIgWgfIAQAAIANAWIAQgWIAOAAIgXAfIAYAfg");
	this.shape_824.setTransform(-55.1,67.45);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#333333").s().p("AAJAwIAAgXIgsAAIAAgJIAtg/IAMAAIAAA9IAOAAIAAALIgOAAIAAAXgAgVAOIAeAAIAAgrg");
	this.shape_825.setTransform(-62.5,65.8);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#333333").s().p("AgRAtQgIgEgGgHIAHgJQAGAGAGADQAGADAGAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgEgIAAQgEAAgFABQgEAAgDADIgKgEIAEgvIAuAAIAAAMIgkAAIgCAbIAHgDIAHgBQAOAAAJAJQAJAIAAANQAAAOgJAJQgJAJgOAAQgIAAgJgEg");
	this.shape_826.setTransform(-73.375,65.875);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_827.setTransform(-80.075,65.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#333333").s().p("AACAwIAAhTIgRAAIAAgMIAfAAIAABfg");
	this.shape_828.setTransform(-85.025,65.8);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_829.setTransform(-91.825,66.025);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#333333").s().p("AgbAkQgOgPAAgVQAAgUAOgOQAOgPAUAAQAJAAAJAFQAIADAHAIIgIAIQgGgFgGgDQgHgDgGAAQgOAAgKALQgKAKAAAPQAAAQAKALQAKAKAOAAQAHAAAGgDQAIgDAFgHIAJAJQgIAIgJAFQgIADgKAAQgUABgOgOg");
	this.shape_830.setTransform(-98.05,65.8);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_831.setTransform(-107.175,65.75);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_832.setTransform(-117.725,67.45);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIAMAAIAAAjQAAAIAEAEQAEAEAGAAQAEAAAEgCQAFgDAEgFIAAgpIAMAAIAAA+IgLAAIgBgJQgEAFgFACQgGADgFAAQgLAAgGgHg");
	this.shape_833.setTransform(-125.4,67.525);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_834.setTransform(-130.925,65.675);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#333333").s().p("AgfAwIAAhfIAbAAQAPAAAIAGQAJAIAAALQAAAHgEAFQgDAFgHAEQAJACAEAGQAFAHAAAHQAAAMgKAIQgJAHgQAAgAgSAlIAQAAQAJAAAGgFQAGgEAAgHQAAgJgGgDQgGgFgJAAIgQAAgAgSgGIAPAAQAIgBAFgDQAFgEAAgHQAAgHgFgEQgFgDgIAAIgPAAg");
	this.shape_835.setTransform(-136.625,65.8);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_836.setTransform(105.375,50.35);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#333333").s().p("AgTAsQgIgDgHgHIAGgJQAHAFAHADQAGACAHAAQAKABAHgGQAGgGABgIIgBgFIgCgGQgEAGgGAEQgGAEgHAAQgNAAgIgJQgJgKAAgNQAAgOAJgKQAIgJANAAQAGAAAFADQAGADADAFIADgKIAKAAIAAArIACACIACAIIABAIQAAAOgKAJQgKAIgQAAQgIAAgKgDgAgPgdQgFAHAAAJQAAAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgFgIAAQgIAAgGAFg");
	this.shape_837.setTransform(97.55,51.75);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_838.setTransform(91.675,48.925);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_839.setTransform(87.05,49.525);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_840.setTransform(81.175,50.35);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_841.setTransform(74.625,50.35);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_842.setTransform(68.825,50.275);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#333333").s().p("AgeAwIAAhfIAbAAQAQAAAJAIQAJAIAAAOQAAANgJAHQgKAJgPAAIgOAAIAAAkgAgRAAIAOAAQAKAAAFgEQAGgEAAgJQAAgJgGgFQgFgEgKAAIgOAAg");
	this.shape_843.setTransform(62.175,48.7);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_844.setTransform(52.625,50.275);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_845.setTransform(46.025,50.35);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#333333").s().p("AgGAjQgFgGgBgLIAAgdIgNAAIAAgKIANgBIABAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAFAAIAEgCIAGgDIAGAJQgDADgFACQgFACgFAAQgJAAgFgGg");
	this.shape_846.setTransform(39.35,49.525);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_847.setTransform(33.475,50.35);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#333333").s().p("AgVAZQgGgHAAgMIAAglIANAAIAAAjQAAAIADAEQAEAEAGAAQAEAAAEgCQAFgDADgFIAAgpIANAAIAAA+IgKAAIgDgJQgDAFgGACQgFADgFAAQgLAAgGgHg");
	this.shape_848.setTransform(26.65,50.425);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIALAAQASAAAKgJQALgKAAgRQAAgQgLgJQgKgKgSAAIgLAAg");
	this.shape_849.setTransform(18.3,48.7);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_850.setTransform(5.725,50.35);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#333333").s().p("AgFAuIAAg+IALAAIAAA+gAgFgeQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_851.setTransform(0.125,48.925);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#333333").s().p("AgTAYQgJgJAAgPQAAgNAJgKQAKgJANAAQAGAAAGADQAGACAFAEIgIAJIgHgFIgIgBQgIAAgFAFQgGAHAAAIQAAAJAGAHQAFAFAIAAQAEAAAFgCQAEgBADgEIAJAIQgFAGgHACQgGADgHAAQgNAAgKgJg");
	this.shape_852.setTransform(-4.775,50.35);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#333333").s().p("AgXAYQgIgKAAgOQAAgNAIgKQAJgJANAAQAGAAAFADQAGADAEAFIABgKIALAAIAAA+IgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgJAAQgHAAgGAFg");
	this.shape_853.setTransform(-12.575,50.35);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#333333").s().p("AgmAwIAAhfIAYAAQAYAAAPANQAOANAAAVQAAAXgOAMQgPANgYAAgAgZAkIAMAAQARAAALgJQAKgKAAgRQAAgQgKgJQgLgKgRAAIgMAAg");
	this.shape_854.setTransform(-21,48.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#333333").s().p("AgFAfQgDgDAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFgRQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_855.setTransform(-31.125,50.325);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_856.setTransform(-39.625,48.7);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#333333").s().p("AgHAjQgEgGAAgLIAAgdIgOAAIAAgKIAOgBIAAAAIACgSIAJAAIAAASIAVAAIAAALIgVAAIAAAdQAAAFACADQADAEAEAAIAGgCIAEgDIAHAJQgEADgEACQgFACgFAAQgIAAgHgGg");
	this.shape_857.setTransform(-46.3,49.525);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#333333").s().p("AAQAgIAAgiQAAgIgEgFQgEgEgHAAQgEAAgEADQgFADgDAFIAAAoIgNAAIAAg+IALAAIACAKQAEgFAFgDQAGgDAFAAQALAAAGAHQAHAIAAAMIAAAkg");
	this.shape_858.setTransform(-53.025,50.275);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_859.setTransform(-60.625,50.35);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#333333").s().p("AgMAeQgGgCgFgEIAGgJQAEADAFACQAEACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgDgCgHgCQgLgEgFgDQgEgFAAgHQAAgIAGgFQAGgFAJAAQAGAAAFACQAGACAEADIgGAJIgIgEIgHgCQgEABgDACQgCACAAACQAAAEADACQADACAHACQAKAEAFADQAEAFAAAHQAAAJgGAEQgHAGgKAAQgGAAgHgDg");
	this.shape_860.setTransform(-67.375,50.35);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgOgeIAXgTIAGALIgYAPg");
	this.shape_861.setTransform(-73.925,48.7);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#333333").s().p("AgSAgIAAg+IALAAIACAKQAEgFAEgDQAFgDAGAAIADAAIACABIgDANIgCAAIgDgBQgFAAgEADQgEACgDAFIAAAog");
	this.shape_862.setTransform(-79.725,50.275);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#333333").s().p("AgfAyIAAhiIALAAIABAKQAEgGAFgCQAGgDAFAAQAOAAAIAJQAJAKAAAOQAAAOgJAIQgIAKgOAAQgFAAgFgDQgGgDgEgEIAAAsgAgOggQgGAHAAAJQAAAJAGAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgJgFgHQgGgGgIAAQgIAAgGAGg");
	this.shape_863.setTransform(-86.525,52.075);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#333333").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAACIAAAEIgwAAQABAGAGAFQAFAFAGAAQAFAAAFgCQAEgBAEgEIAIAIQgGAFgGACQgGADgIAAQgMAAgKgJgAASgFQgBgGgFgFQgGgFgGABQgGgBgFAFQgFAFgBAGIAjAAIAAAAg");
	this.shape_864.setTransform(-97.525,50.35);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#333333").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_865.setTransform(-103.025,48.575);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#333333").s().p("AgVAoQgJgKAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAAADIAAADIgwAAQABAHAGAEQAFAGAGAAQAFAAAFgCQAEgCAEgEIAIAIQgGAFgGADQgGADgIgBQgMAAgKgJgAASALQgBgHgFgEQgGgEgGAAQgGAAgFAEQgFAEgBAHIAjAAIAAAAgAgQgmIAHgLIAXATIgFAHg");
	this.shape_866.setTransform(-108.375,48.7);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#333333").s().p("AgXApQgIgKAAgOQAAgOAIgJQAJgJANAAQAGAAAFADQAFACAEAFIAAgsIANAAIAABhIgLAAIgBgJQgEAGgGACQgFADgGAAQgNAAgJgJgAgNABQgGAHAAAJQAAAJAGAHQAGAFAHAAQAJAAAGgFQAFgHAAgJQAAgJgFgHQgGgEgJAAQgHAAgGAEg");
	this.shape_867.setTransform(-116.425,48.65);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#333333").s().p("AgWAYQgKgJABgPQgBgNAKgKQAJgJANAAQAOAAAJAJQAKAKgBANQABAPgKAJQgJAJgOAAQgNAAgJgJgAgNgPQgGAHAAAIQAAAJAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgJQAAgIgGgHQgFgFgJAAQgIAAgFAFg");
	this.shape_868.setTransform(-124.2,50.35);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#333333").s().p("AAsAwIgLhIIgaBIIgNAAIgahJIgLBJIgNAAIAPhfIANAAIAcBQIAdhQIANAAIAPBfg");
	this.shape_869.setTransform(-134.625,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtML, new cjs.Rectangle(-143.2,33.8,280,574.3000000000001), null);


(lib.ToutSimplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13416D").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgEAEAAQAEAAAEAEQACADAAAEQAAAEgCAEQgEADgEABQgEgBgEgDg");
	this.shape.setTransform(56.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13416D").s().p("AgIAjQgHgHAAgNIAAgWIgNAAIAAgPIANgBIABAAIACgSIAPAAIAAASIAVAAIAAAQIgVAAIAAAWQAAAEACADQACADAEAAIAEgBIAFgDIAJANQgEAEgGACQgFACgFAAQgLAAgGgHg");
	this.shape_1.setTransform(51.075,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13416D").s().p("AANAhIAAgiQAAgHgDgDQgDgEgGAAQgDAAgEACQgDADgDAEIAAAnIgTAAIAAhAIARAAIACAKQAEgFAFgDQAEgDAGAAQALAAAHAIQAHAHAAANIAAAlg");
	this.shape_2.setTransform(44.025,2.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13416D").s().p("AgWAYQgKgJAAgPQAAgOAJgJQAKgKANAAQAOAAAJAKQAKAJAAAOIgBADIAAADIgvAAQACAGAFADQAEADAFAAQAFABAEgCIAIgGIAJAMQgFAFgGADQgHACgIABQgOAAgJgKgAAPgGQgCgFgEgEQgEgDgFAAQgFAAgEADQgEAEgBAFIAdAAIAAAAg");
	this.shape_3.setTransform(36.325,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13416D").s().p("AAhAhIAAgiQABgHgDgEQgDgDgGAAQgEAAgDACQgDADgCAFIAAAmIgTAAIAAgiQAAgHgCgEQgDgDgGAAQgDAAgEACQgDADgCAEIAAAnIgTAAIAAhAIAQAAIADAKQADgFAFgDQAFgDAGAAQAGAAAFADQAFADADAGQAEgGAGgDQAGgDAHAAQAKAAAHAIQAHAHgBANIAAAlg");
	this.shape_4.setTransform(26.55,2.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13416D").s().p("AgWAYQgKgJAAgPQAAgOAJgJQAKgKANAAQAOAAAJAKQAKAJAAAOIgBADIAAADIgvAAQACAGAFADQAEADAFAAQAFABAEgCIAIgGIAJAMQgFAFgGADQgHACgIABQgOAAgJgKgAAPgGQgCgFgEgEQgEgDgFAAQgFAAgEADQgEAEgBAFIAdAAIAAAAg");
	this.shape_5.setTransform(16.775,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13416D").s().p("AgJAxIAAhhIASAAIAABhg");
	this.shape_6.setTransform(11.15,0.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13416D").s().p("AghAvIAAhcIAQAAIADAJQADgFAFgCQAFgDAFAAQANAAAJAKQAIAJAAAPQAAANgIAKQgJAJgNAAQgFAAgFgCQgFgDgDgFIAAAlgAgKgZQgFAFAAAIQAAAHAFAFQAEAEAGAAQAHAAAEgEQAFgFAAgHQAAgIgFgFQgEgEgHAAQgGAAgEAEg");
	this.shape_7.setTransform(5.45,3.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13416D").s().p("AAhAhIAAgiQAAgHgCgEQgDgDgGAAQgDAAgEACQgDADgCAFIAAAmIgSAAIAAgiQAAgHgDgEQgDgDgGAAQgDAAgDACQgEADgCAEIAAAnIgTAAIAAhAIAQAAIADAKQADgFAFgDQAFgDAFAAQAIAAAEADQAFADADAGQAEgGAGgDQAGgDAHAAQALAAAGAIQAHAHgBANIAAAlg");
	this.shape_8.setTransform(-4.85,2.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13416D").s().p("AgIAwIAAhAIASAAIAABAgAgHgcQgDgDAAgFQAAgEADgEQAEgDADAAQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_9.setTransform(-12.85,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13416D").s().p("AgRAtQgKgDgHgIIAKgMQAGAFAHADQAGADAHAAQAGAAAEgDQAEgEAAgEQAAgFgDgCQgEgEgLgEQgQgFgGgFQgHgHAAgKQAAgNAKgHQAJgJANABQAIgBAIAEQAJADAGAHIgLANQgFgFgFgCQgFgCgFAAQgFAAgEACQgEADAAAFQAAAEAEADQAEADAMAEQAPAGAGAFQAGAHAAAKQAAAMgJAIQgKAJgOAAQgKAAgJgFg");
	this.shape_10.setTransform(-18.675,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13416D").s().p("AgHAIQgDgEgBgEQABgEADgDQADgEAFAAQAEAAADAEQAEADAAAEQAAAEgEAEQgDADgEABQgFgBgDgDg");
	this.shape_11.setTransform(-27.45,4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13416D").s().p("AgIAjQgHgHAAgNIAAgWIgNAAIAAgPIANgBIABAAIACgSIAPAAIAAASIAVAAIAAAQIgVAAIAAAWQAAAEACADQACADAEAAIAEgBIAFgDIAJANQgEAEgGACQgFACgFAAQgLAAgGgHg");
	this.shape_12.setTransform(-32.475,1.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13416D").s().p("AgXAZQgHgGAAgOIAAglIASAAIAAAjQAAAGADADQADAEAGAAQADAAADgCQAEgDADgEIAAgnIASAAIAAA/IgQAAIgCgIQgEAFgFADQgEACgGAAQgLAAgGgIg");
	this.shape_13.setTransform(-39.6,2.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13416D").s().p("AgXAYQgKgJAAgPQAAgOAKgJQAJgKAOAAQAOAAAKAKQAKAJAAAOQAAAPgKAJQgKAKgOAAQgOAAgJgKgAgLgLQgEAEAAAHQAAAIAEAEQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgHgEgEQgFgFgHAAQgGAAgFAFg");
	this.shape_14.setTransform(-47.35,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#13416D").s().p("AgJAwIAAhOIgcAAIAAgRIBLAAIAAARIgdAAIAABOg");
	this.shape_15.setTransform(-55.275,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ToutSimplement, new cjs.Rectangle(-61.3,-14.2,123.3,27.1), null);


(lib.Titre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#143D66").s().p("AgtBHIAAiJIAjAAIAFAUQAGgMAKgFQALgHALAAIAGABIAHACIgKApIgHgBIgFAAQgJAAgIADQgHAEgFAHIAABUg");
	this.shape.setTransform(-0.95,106.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#143D66").s().p("AgxAzQgUgUAAgeQAAgfAUgUQAUgVAdAAQAeAAAUAVQAUAUAAAfIAAAHIgBAFIhlAAQADANAKAHQAKAHAMAAQAKAAAJgDQAIgEAJgIIATAZQgKALgOAFQgOAGgRAAQgfAAgVgVgAAggOQgEgLgIgHQgJgHgLAAQgLAAgIAHQgJAHgEALIBAAAIAAAAg");
	this.shape_1.setTransform(-15.45,106.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#143D66").s().p("AgUBLQgNgPAAgbIAAgwIgbAAIAAghIAbgCIACAAIAFgnIAgAAIAAAnIAsAAIAAAjIgsAAIAAAvQAAAKAFAGQAEAGAIAAQAFAAAFgCIAJgGIATAcQgIAHgMAFQgLAEgLAAQgZAAgOgPg");
	this.shape_2.setTransform(-30.15,104.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#143D66").s().p("AgcBDQgPgFgOgKIATgcQAJAJALAEQALAFAJgBQAJABAEgEQAFgDgBgFQAAgFgDgEQgFgCgOgFQgbgIgJgJQgKgKAAgQQAAgTAOgLQAPgMAXAAQAOABANADQANAEALAIIgSAbQgHgGgKgDQgIgDgJAAQgFAAgFACQgDADAAAFQgBAFAGADQAFAEAPAEQAWAHALAJQALAKAAAQQAAAVgPALQgPAMgaAAQgPAAgPgFg");
	this.shape_3.setTransform(-43.5,106.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#143D66").s().p("Ag0A3QgOgQAAgbIAAhRIAoAAIAABLQABANAFAIQAHAHALAAQAIAAAIgFQAGgEAGgJIAAhVIApAAIAACIIgjAAIgGgSQgHAKgMAGQgKAFgLAAQgYAAgOgPg");
	this.shape_4.setTransform(-58.6,106.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#143D66").s().p("AhWBnIAAjNIA6AAQA1AAAfAbQAfAcAAAvQAAAwgfAcQgfAbg1AAgAgtBCIASAAQAiAAATgSQATgRAAgfQAAgegTgRQgTgRgiAAIgSAAg");
	this.shape_5.setTransform(-76.925,102.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#143D66").s().p("Ag1AzQgTgUABgeQgBgfATgUQASgVAcAAQALAAALAGQAKAFAIALIAEgTIAkAAIAACJIgkAAIgEgTQgIALgKAFQgLAGgLAAQgcAAgSgVgAgXgZQgKAKAAAQQAAAPAKAKQAJALAPAAQAOAAAKgLQAKgKAAgPQAAgQgKgKQgKgLgOABQgPgBgJALg");
	this.shape_6.setTransform(-103.65,106.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#143D66").s().p("AgTBnIAAiJIAnAAIAACJgAgQg9QgHgHAAgJQAAgLAHgGQAHgIAJAAQAKAAAHAIQAHAGAAALQAAAJgHAIQgHAGgKAAQgJABgHgIg");
	this.shape_7.setTransform(-115.875,102.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#143D66").s().p("AgrAzQgUgUAAgeQAAgfAUgUQAVgVAfAAQAOAAANAGQAOAFALALIgaAaQgFgHgHgCQgHgDgHAAQgOgBgKALQgJAKgBAQQABAPAJAKQAKALAOAAQAIAAAIgEQAGgDAHgHIAaAaQgMAMgNAFQgOAGgQAAQgfAAgVgVg");
	this.shape_8.setTransform(-126.75,106.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#143D66").s().p("Ag1AzQgTgUABgeQgBgfATgUQASgVAcAAQAMAAAKAGQALAFAHALIAFgTIAjAAIAACJIgjAAIgFgTQgHALgLAFQgLAGgLAAQgcAAgSgVgAgXgZQgKAKAAAQQAAAPAKAKQAKALAOAAQAOAAAKgLQAKgKgBgPQABgQgKgKQgKgLgOABQgOgBgKALg");
	this.shape_9.setTransform(-143.45,106.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#143D66").s().p("AhWBnIAAjNIA6AAQA1AAAfAbQAfAcAAAvQAAAwgfAcQgfAbg1AAgAgtBCIASAAQAiAAATgSQATgRAAgfQAAgegTgRQgTgRgiAAIgSAAg");
	this.shape_10.setTransform(-161.675,102.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Titre, new cjs.Rectangle(-174.9,73.3,217,53.400000000000006), null);


(lib.OFFRE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(12));

	// LLD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#133C64").s().p("AgVAuQANgHAGgMQAHgNgBgOQABgNgHgNQgGgMgNgHIAIgNQAQAKAJAPQAKAQAAARQAAASgKAQQgJAPgQAKg");
	this.shape.setTransform(187.65,217.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#133C64").s().p("AAAApIAAhCIgPAAIAAgPIAfAAIAABRg");
	this.shape_1.setTransform(182.5,216.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#133C64").s().p("AgLAiQgKgQAAgSQAAgRAKgQQAKgPAPgKIAHANQgLAHgIAMQgFANgBANQABAOAFANQAIAMALAHIgHANQgPgKgKgPg");
	this.shape_2.setTransform(178.05,217.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13416D").s().p("AgLAbQgFgCgGgEIAHgLQAEADAFACQAEACADAAQADAAACgCQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgBgCgGgBQgKgDgEgDQgEgEAAgHQAAgHAGgFQAGgFAIAAIALACQAFACAFADIgIALIgGgEIgHgBIgEABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAHADQAKADAEADQAEAEAAAGQAAAIgGAFQgGAFgKAAQgFAAgHgCg");
	this.shape_3.setTransform(170.65,221.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13416D").s().p("AgHApIAAg2IAPAAIAAA2gAgGgXQgDgEAAgDQAAgEADgEQADgCADAAQAEAAACACQADAEABAEQgBADgDAEQgCACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(166.5,220.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13416D").s().p("AgUAVQgIgIAAgNQAAgLAIgIQAIgJAMAAQANAAAIAJQAIAIAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgJgJQgEAEAAAFQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgFAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_5.setTransform(161.575,221.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13416D").s().p("AAdAcIAAgdQAAgFgDgEQgCgDgFAAQgDAAgDACQgDACgCAFIAAAgIgPAAIAAgdQAAgFgCgEQgDgDgEAAQgEAAgDACQgDACgCAEIAAAhIgQAAIAAg2IAOAAIACAIQADgEAFgDQAEgCAEAAQAGAAAFADQAEACACAFQAEgFAFgCQAFgDAFAAQAKAAAFAGQAGAHAAALIAAAfg");
	this.shape_6.setTransform(153.075,221.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13416D").s().p("AAAApIAAhDIgPAAIAAgOIAfAAIAABRg");
	this.shape_7.setTransform(142.65,220.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13416D").s().p("AgUAiQgJgJAAgMQAAgIADgGQADgHAHgKIAQgXIAQAAIgTAdIACgBIABAAQANABAIAHQAJAHAAAMQAAAMgJAIQgIAIgNAAQgMgBgIgHgAgJADQgEAFAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgGgEgFQgEgDgGAAQgFAAgEADg");
	this.shape_8.setTransform(137.275,220.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13416D").s().p("AgiApIAAhRIAXAAQAVAAAMAKQANALAAATQAAATgNALQgMALgVAAgAgSAaIAHAAQANAAAJgGQAHgIAAgMQAAgLgHgIQgIgGgOAAIgHAAg");
	this.shape_9.setTransform(127.35,220.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13416D").s().p("AgYApIAAhRIAQAAIAABCIAhAAIAAAPg");
	this.shape_10.setTransform(120.05,220.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13416D").s().p("AgYApIAAhRIAQAAIAABCIAiAAIAAAPg");
	this.shape_11.setTransform(113.7,220.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13416D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(106,223.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13416D").s().p("AgKAbQgHgCgFgEIAHgLQAEADAEACQAFACADAAQADAAACgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgCgCgEgBQgLgDgEgDQgEgEAAgHQAAgHAGgFQAGgFAIAAIALACQAGACAEADIgHALIgHgEIgHgBIgDABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAIADQAIADAFADQAEAEAAAGQAAAIgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_13.setTransform(101.65,221.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13416D").s().p("AgHApIAAg2IAPAAIAAA2gAgGgXQgDgEABgDQgBgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_14.setTransform(97.5,220.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#13416D").s().p("AgUAVQgIgIAAgNQAAgLAIgIQAIgJAMAAQANAAAIAJQAIAIAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgJgJQgEAEAAAFQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgFAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_15.setTransform(92.575,221.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#13416D").s().p("AAdAcIAAgdQAAgFgDgEQgCgDgFAAQgDAAgDACQgDACgCAFIAAAgIgPAAIAAgdQAAgFgCgEQgDgDgEAAQgEAAgDACQgDACgCAEIAAAhIgQAAIAAg2IAOAAIACAIQADgEAFgDQAEgCAEAAQAGAAAFADQAEACACAFQAEgFAFgCQAFgDAFAAQAKAAAFAGQAGAHAAALIAAAfg");
	this.shape_16.setTransform(84.075,221.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#13416D").s().p("AgSAcIAAg2IAPAAIACAIQABgEAFgDQAEgCAEAAIADAAIACABIgEAQIgDAAIgCAAQgDAAgEABQgCACgBADIAAAgg");
	this.shape_17.setTransform(74.4,221.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#13416D").s().p("AgVAVQgHgIAAgNQAAgLAHgIQAIgJALAAQAEABAEACQAEACADAEIACgHIAOAAIAAA2IgOAAIgCgIQgDAFgEACQgEACgEAAQgLAAgIgIgAgJgJQgEAEAAAFQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgFAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_18.setTransform(68.075,221.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#13416D").s().p("AgcAoIAAhOIAOAAIACAIQADgFAEgCQAEgCAFAAQAKAAAIAIQAHAIAAANQAAALgHAIQgIAIgKAAQgFAAgEgCQgEgCgDgEIAAAfgAgJgVQgEAEAAAHQAAAGAEAEQAEADAFAAQAFAAAEgDQAFgEAAgGQAAgHgFgEQgEgEgFAAQgFAAgEAEg");
	this.shape_19.setTransform(61.45,222.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#13416D").s().p("AgNAjQgKgHgFgMIgMAAIAAgLIAKAAIAAgDIAAgCIAAgBIAAgCIgKAAIAAgLIAMAAQAFgMAKgIQALgHAMAAQAIAAAIADQAIADAGAHIgKALQgEgFgGgCQgFgCgFAAQgGAAgFADQgFADgEAGIAfAAIgDALIggAAIAAADIAAAAIAAADIAAACIAeAAIgEALIgVAAQADAFAGADQADADAHAAQAGAAAFgCQAFgCAEgFIALALQgGAHgJADQgHADgJAAQgMAAgLgHg");
	this.shape_20.setTransform(50.9,220.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#13416D").s().p("AgWAfQgIgMgBgTQABgSAIgLQAJgMANAAQAPAAAIAMQAJALgBASQABATgJAMQgIALgPAAQgNAAgJgLgAgJgTQgFAIAAALQAAANAFAHQAEAHAFAAQAHAAAEgHQAEgHAAgNQAAgLgEgIQgEgHgHAAQgFAAgEAHg");
	this.shape_21.setTransform(42.7,220.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#13416D").s().p("AgPAmQgHgCgGgHIAJgLQAFAFAFACQAFACAEAAQAGAAADgDQAEgEAAgFQAAgHgEgDQgEgDgFgBIgGABIgGADIgLgGIADgoIAqAAIAAAOIgdAAIgBARIAEgBIAFAAQAMgBAIAIQAIAGAAANQAAALgIAIQgJAIgMAAQgHgBgIgDg");
	this.shape_22.setTransform(35.625,220.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#13416D").s().p("AAAApIAAhDIgPAAIAAgOIAfAAIAABRg");
	this.shape_23.setTransform(29.7,220.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#13416D").s().p("AgHAeQgGgGAAgKIAAgUIgLAAIAAgMIALgBIABAAIACgQIAMAAIAAAQIASAAIAAANIgSAAIAAATQAAAEACACQACADADAAIAEgBIAEgDIAIAMQgEADgEACQgFABgFAAQgIAAgGgGg");
	this.shape_24.setTransform(22.625,221);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#13416D").s().p("AgHApIAAg2IAPAAIAAA2gAgGgXQgDgEABgDQgBgEADgEQADgCADAAQAEAAADACQACAEABAEQgBADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_25.setTransform(18.4,220.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#13416D").s().p("AgUAVQgIgIAAgNQAAgLAIgIQAIgJAMAAQANAAAIAJQAIAIAAALQAAANgIAIQgIAIgNAAQgMAAgIgIgAgJgJQgEAEAAAFQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgFAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_26.setTransform(13.475,221.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#13416D").s().p("AgPAnQgIgDgGgHIAJgLQAFAFAFADQAGACAFAAQAGAAADgCQAEgDAAgFQAAgDgDgDIgMgFQgOgFgGgFQgFgFAAgKQAAgKAIgGQAHgHALAAQAIAAAHADQAHADAFAFIgJALQgEgEgFgCQgEgCgFAAQgEAAgDACQgDADAAAEQAAAEADACQAEADAKAEQANAEAFAFQAFAFAAAJQAAAKgIAHQgIAHgNAAQgIAAgIgDg");
	this.shape_27.setTransform(6.725,220.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(33));

	// +5 ans
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA6721").s().p("AgXAyQAOgHAIgOQAGgOAAgPQAAgOgGgOQgJgNgNgIIAJgOQARALAKAQQALARAAATQAAAUgLAQQgKASgRAJg");
	this.shape_28.setTransform(208.3,176.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA6721").s().p("AgcAtIAAgNIAegiIAGgJQACgDAAgEQAAgFgDgDQgDgDgEAAQgFAAgEADQgFACgEAFIgLgKQAGgIAIgEQAHgDAIAAQALAAAIAHQAIAHAAALQAAAGgCAHQgDAFgGAGIgVAZIAjAAIAAAPg");
	this.shape_29.setTransform(202.075,175.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA6721").s().p("AgMAkQgKgQAAgUQAAgTAKgRQAKgQARgLIAJAOQgOAIgHANQgHAOAAAOQAAAPAHAOQAHAOAOAHIgJANQgRgJgKgSg");
	this.shape_30.setTransform(196,176.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA6721").s().p("AgyB/QgbgLgVgVIAegkQAQAQASAJQASAHAVABQASAAALgJQAMgJAAgPQAAgLgLgIQgMgIgegLQgsgOgUgTQgRgSAAgdQAAgiAZgVQAbgXAmAAQAYAAAXAKQAWAJATASIgfAkQgOgNgOgHQgNgGgQAAQgQAAgKAHQgLAIAAAOQAAAMAMAJQAJAIAlAMQAqAPAQAQQASASAAAcQAAAjgbAWQgbAYgoAAQgdAAgagLg");
	this.shape_31.setTransform(183.9556,184.3724,0.6252,0.6252);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA6721").s().p("AgaCFIAAjaIhPAAIAAgvIDTAAIAAAvIhPAAIAADag");
	this.shape_32.setTransform(170.874,184.3724,0.6252,0.6252);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA6721").s().p("AAsCFIg2hmIgmAAIAABmIg1AAIAAkJIBaAAQAqgBAcAWQAbAWAAAlQAAAagMARQgMARgXAKIA/BzgAgwgOIAmAAQATgBALgJQAMgJAAgRQAAgPgMgKQgMgKgSAAIgmAAg");
	this.shape_33.setTransform(157.7924,184.3724,0.6252,0.6252);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA6721").s().p("AhUCFIAAkJICpAAIAAAvIhzAAIAAA8IBpAAIAAAuIhpAAIAABBIBzAAIAAAvg");
	this.shape_34.setTransform(143.8199,184.3724,0.6252,0.6252);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA6721").s().p("AhTCFIAAkJICnAAIAAAvIhxAAIAABDIBnAAIAAAvIhnAAIAABog");
	this.shape_35.setTransform(131.2384,184.3724,0.6252,0.6252);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA6721").s().p("AhTCFIAAkJICnAAIAAAvIhxAAIAABDIBnAAIAAAvIhnAAIAABog");
	this.shape_36.setTransform(118.7037,184.3724,0.6252,0.6252);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA6721").s().p("AhhBiQgngnAAg6QAAg7AngnQAngoA6AAQA7AAAnAoQAnAoAAA6QAAA6gnAnQgnAng7ABQg6gBgngngAg5g+QgYAaAAAlQAAAkAYAbQAXAYAiAAQAjAAAYgYQAXgaAAglQAAgmgXgZQgYgZgjAAQgjAAgWAZg");
	this.shape_37.setTransform(102.7463,184.3724,0.6252,0.6252);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA6721").s().p("AAeBLIAAhPQAAgOgHgJQgIgIgMAAQgJAAgIAFQgIAFgHAKIAABaIgrAAIAAiRIAmAAIAFAUQAIgKANgIQALgGANAAQAaAAAQARQAPARAAAfIAABUg");
	this.shape_38.setTransform(184.0963,161.7725,0.6252,0.6252);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA6721").s().p("Ag0A3QgXgWAAghQAAgfAWgXQAWgWAfAAQAgAAAWAWQAWAXAAAfIgBAOIhuAAQAEAMAKAJQALAIANAAQAKAAALgEQAJgEAJgJIAVAbQgMAMgPAGQgPAGgSAAQggAAgXgWgAgVgjQgKAIgDAMIBFAAQgEgMgJgIQgKgHgMAAQgLAAgKAHg");
	this.shape_39.setTransform(173.3747,161.8819,0.6252,0.6252);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EA6721").s().p("AgVBtIAAiRIAqAAIAACRgAgRhBQgIgIAAgKQAAgKAIgIQAHgHAKAAQAKAAAIAHQAIAIAAAKQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_40.setTransform(165.7789,159.6313,0.6252,0.6252);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA6721").s().p("AgVBQQgPgQAAgdIAAg0IgdAAIAAgiIAggCIAFgqIAiAAIAAAqIAwAAIAAAkIgwAAIAAAzQAAAKAFAHQAFAGAKABQAFAAAEgCQAGgDAFgEIAUAeQgJAIgMAFQgMAEgNAAQgZAAgQgQg");
	this.shape_41.setTransform(159.0896,160.6785,0.6252,0.6252);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA6721").s().p("Ag0A3QgXgWAAghQAAgfAWgXQAWgWAfAAQAgAAAWAWQAWAXAAAfIgBAOIhuAAQAFAOAKAHQAKAIANAAQALAAAKgEQAKgFAIgIIAVAbQgLAMgQAGQgPAGgSAAQggAAgXgWgAgVgjQgJAIgEAMIBFAAQgEgMgJgIQgKgHgMAAQgLAAgKAHg");
	this.shape_42.setTransform(149.7433,161.8819,0.6252,0.6252);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA6721").s().p("AgwBLIAAiRIAlAAIAFAUQAHgKALgIQALgGAMAAIAIABIAHACIgMAsQgDgBgDAAIgGgBQgLAAgHAEQgIAEgGAHIAABZg");
	this.shape_43.setTransform(141.5693,161.7725,0.6252,0.6252);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6721").s().p("AgVBQQgOgRAAgcIAAg0IgeAAIAAgiIAggCIAFgqIAjAAIAAAqIAvAAIAAAkIgvAAIAAAzQAAAMAFAFQAEAGAKABQAFAAAFgCIAKgHIAUAeQgJAIgMAFQgMAEgNAAQgZAAgQgQg");
	this.shape_44.setTransform(133.1139,160.6785,0.6252,0.6252);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA6721").s().p("AAeBLIAAhPQAAgPgHgIQgHgIgNAAQgJAAgIAFQgIAFgHAKIAABaIgrAAIAAiRIAmAAIAFAUQAIgKANgIQALgGANAAQAaAAAQARQAPARAAAfIAABUg");
	this.shape_45.setTransform(123.3612,161.7725,0.6252,0.6252);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA6721").s().p("Ag0A3QgXgWABghQgBgfAWgXQAWgWAfAAQAgAAAWAWQAVAXABAfIAAAIIgCAGIhtAAQAFANAKAIQAKAIANAAQALAAAKgEQAJgEAKgJIAUAbQgMAMgPAGQgPAGgSAAQggAAgXgWgAgUgjQgLAIgDAMIBFAAQgEgMgJgIQgKgHgMAAQgLAAgJAHg");
	this.shape_46.setTransform(112.6552,161.8819,0.6252,0.6252);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA6721").s().p("AgcAoIAMhPIAtAAIgbBPg");
	this.shape_47.setTransform(106.8568,155.2708,0.6252,0.6252);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA6721").s().p("Ag6BcQgTgVAAghQAAghATgVQAVgWAdAAQANAAALAGQALAFAIAMIAAhjIArAAIAADhIglAAIgFgUQgIALgMAHQgMAFgMABQgdAAgVgXgAgZAKQgKAKAAASQAAAQAKALQALALAPAAQAPAAALgLQAKgLAAgQQAAgSgKgKQgLgKgPAAQgPAAgLAKg");
	this.shape_48.setTransform(98.7296,159.5219,0.6252,0.6252);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA6721").s().p("Ag3B/QgagJgdgTIAjg1QASAPAVAJQAWAJATAAQAPAAAJgHQAJgFgBgMQAAgJgIgGQgHgFgegJQgxgOgTgSQgUgUAAgeQABgjAdgXQAdgVArAAQAbgBAZAJQAaAIAVANIgjA0QgOgLgTgGQgQgHgQAAQgNAAgHAFQgIAGABAJQAAAJAKAHQAJAHAcAIQAtALAUATQAVAUAAAfQAAAlgdAXQgcAXgxgBQghAAgbgJg");
	this.shape_49.setTransform(179.6107,139.329,0.6252,0.6252);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA6721").s().p("AA1CGIAAiNQAAgcgNgOQgMgPgXAAQgRAAgOAKQgOAIgMATIAAChIhNAAIAAkFIBEAAIAJAmQAPgVAWgLQAUgMAXAAQAvAAAbAfQAcAeAAA2IAACYg");
	this.shape_50.setTransform(163.7471,139.1571,0.6252,0.6252);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA6721").s().p("AhnBiQgkgoAAg5QAAg6AkgoQAjgnA1ABQAYAAAUAKQAVALAOATIAIgjIBEAAIAAEFIhEAAIgIgjQgOATgVALQgVAKgXAAQg1ABgjgngAgtgxQgTAUAAAeQAAAdATATQATAVAbAAQAcAAATgVQATgTAAgdQAAgdgTgVQgTgTgcgBQgbABgTATg");
	this.shape_51.setTransform(144.2731,139.329,0.6252,0.6252);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA6721").s().p("AhLC3QgigOgcgdIApg3QAXAWAYALQAYALAZAAQAaAAARgRQASgRAAgbQAAgagTgSQgTgRgbAAQgPAAgPAFQgNADgOAJIg4giIARi7IDNAAIAABCIiOAAIgIBRIAYgGQAMgBALgBQA7AAAnAkQAmAjAAA3QAAA4gnAmQgoAkg7AAQgoAAgjgPg");
	this.shape_52.setTransform(122.611,135.4842,0.6252,0.6252);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA6721").s().p("AgjCHIAAhoIhdAAIAAg9IBdAAIAAhnIBGAAIAABnIBeAAIAAA9IheAAIAABog");
	this.shape_53.setTransform(102.1368,135.4842,0.6252,0.6252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(33));

	// Filet
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#13406C").ss(1,1,1).p("AAAl6IAAL1");
	this.shape_54.setTransform(82.4,157.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(33));

	// sans apport
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgIAjQgHgHAAgNIAAgWIgNAAIAAgPIANgBIABAAIACgSIAPAAIAAASIAVAAIAAAQIgVAAIAAAWQAAAFACADQACACAEAAIAEgBIAFgCIAJAMQgEAEgGACQgFACgFAAQgLAAgGgHg");
	this.shape_55.setTransform(49.975,186.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUAhIAAhAIAQAAIADAKQACgFAFgDQAEgDAGAAIADAAIACABIgEATIgDAAIgDAAQgEAAgEABQgDACgBAEIAAAmg");
	this.shape_56.setTransform(44.6,186.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgOAKgJQAJgKAOAAQAOAAAKAKQAKAJAAAOQAAAOgKAKQgKAKgOAAQgOAAgJgKgAgLgMQgEAGAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgHAAQgGAAgFAEg");
	this.shape_57.setTransform(37.7,187.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AghAvIAAhcIAQAAIADAJQADgFAFgCQAFgDAFAAQANAAAIAKQAJAJAAAPQAAANgJAKQgIAJgNAAQgFAAgFgCQgEgDgEgFIAAAlgAgLgZQgEAFAAAIQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgIgEgFQgFgEgHAAQgGAAgFAEg");
	this.shape_58.setTransform(29.95,188.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AghAvIAAhcIARAAIACAJQADgFAFgCQAFgDAFAAQANAAAJAKQAIAJAAAPQAAANgIAKQgJAJgNAAQgFAAgFgCQgEgDgEgFIAAAlgAgLgZQgEAFAAAIQAAAHAEAFQAFAEAGAAQAHAAAEgEQAFgFAAgHQAAgIgFgFQgEgEgHAAQgGAAgFAEg");
	this.shape_59.setTransform(21.8,188.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAYQgJgKAAgOQAAgOAJgJQAIgKANAAQAFABAFACQAFADADAEIADgJIAQAAIAABAIgQAAIgDgJQgDAFgFADQgFADgFAAQgNAAgIgKgAgKgMQgFAGAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgHAAQgGAAgEAEg");
	this.shape_60.setTransform(13.225,187.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAfQgIgCgGgFIAIgNQAFAEAFACQAFACAEAAQADAAADgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgIgEQgMgDgFgEQgFgFABgHQAAgJAGgFQAIgFAJgBQAHAAAGACQAGACAFAEIgIAMQgEgDgEgBIgIgBQgDAAgBABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAABABIAIADQALADAFAEQAFAEAAAIQAAAJgHAGQgHAGgMAAQgHAAgGgDg");
	this.shape_61.setTransform(3.4,187.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AANAhIAAgiQAAgHgDgDQgDgEgGAAQgDAAgEACQgDADgDAEIAAAnIgTAAIAAhAIARAAIACAKQAEgFAFgDQAEgDAGAAQALAAAHAIQAHAHAAANIAAAlg");
	this.shape_62.setTransform(-3.575,186.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgYAYQgJgKAAgOQAAgOAJgJQAIgKANAAQAFABAFACQAFADADAEIADgJIAQAAIAABAIgQAAIgDgJQgDAFgFADQgFADgFAAQgNAAgIgKgAgKgMQgFAGAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgHAAQgGAAgEAEg");
	this.shape_63.setTransform(-11.925,187.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMAfQgIgCgGgFIAIgNQAFAEAFACQAFACAEAAQADAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgIgEQgMgDgFgEQgFgFAAgHQABgJAGgFQAHgFAKgBQAHAAAGACQAGACAFAEIgIAMQgEgDgEgBIgIgBQgDAAgBABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAABABIAIADQALADAFAEQAFAEAAAIQAAAJgHAGQgHAGgMAAQgHAAgGgDg");
	this.shape_64.setTransform(-18.85,187.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#13416D").s().p("AnuBGIAAiLIPdAAIAACLg");
	this.shape_65.setTransform(17.5,187.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).wait(33));

	// 3€
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#13416D").s().p("AgNATQgFgGAAgNQAAgLAFgHQAFgGAJAAQAJAAAFAFQAEAFAAALIAAADIAAACIgdAAQAAAJADAEQAEADAGAAIAHAAIAHgCIAAAIIgHABIgHAAQgLAAgFgGgAgHgOQgDADAAAIIAWAAIAAgBQAAgHgDgDQgDgDgFAAQgFAAgDADg");
	this.shape_66.setTransform(-16.875,157.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#13416D").s().p("AgPAcQgEgGAAgNQAAgMAFgGQAFgGAKAAIAFAAIAGACIAAgUIAIAAIAABCIgIAAIAAgFIgHAFIgHABQgIAAgFgGgAgIgEQgDAEAAAJQAAAKADAEQACAEAGAAIAFgBIAHgEIAAgcIgGgCIgFAAQgGAAgDAEg");
	this.shape_67.setTransform(-21.95,156.925);

	this.text = new cjs.Text(" ", "17px 'Read'", "#13416D");
	this.text.lineHeight = 21;
	this.text.parent = this;
	this.text.setTransform(-1.85,141.2,0.552,0.552);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#13416D").s().p("AgLAZIAAgwIAHAAIAAAGIAHgFQADgCAEAAIACABIABAAIAAAHIgKABIgHAEIAAAkg");
	this.shape_68.setTransform(-3.35,146.375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#13416D").s().p("AgDAhIAAgvIAHAAIAAAvgAgDgYIgBgDIABgEIADgBIAEABIABAEIgBADIgEABIgDgBg");
	this.shape_69.setTransform(-6.35,145.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#13416D").s().p("AgDAcQgDgEAAgHIAAgbIgJAAIAAgHIAJAAIABgNIAGAAIAAANIAPAAIAAAHIgPAAIAAAbQAAAEABACQACABADAAIAEAAIAFgBIAAAHIgFAAIgFABQgGAAgDgDg");
	this.shape_70.setTransform(-9.225,145.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#13416D").s().p("AgMAZIAAgwIAIAAIAAAGIAHgFQADgCAEAAIACABIAAAAIAAAHIgJABIgHAEIAAAkg");
	this.shape_71.setTransform(-12.5,146.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#13416D").s().p("AgOAWQgEgEAAgGQAAgIAEgDQAEgDAIAAIANAAIAAgGQAAgFgDgCQgCgCgFAAIgHABIgIACIAAgHIAJgCIAHgBQAIAAAEAEQAFADAAAIIAAAhIgIAAIAAgGIgHAGIgHABQgHAAgEgDgAgIAFQgCACAAAEQAAAEACACQACACAEAAIAGgCIAHgFIAAgJIgLAAQgGAAgCACg");
	this.shape_72.setTransform(-16.975,146.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#13416D").s().p("AgTAjIAAhEIAIAAIAAAGQADgEAEgBQAEgBADAAQAIAAAFAGQAEAGAAANQAAAMgFAGQgEAGgLAAIgGgBIgFgBIAAAVgAgEgZIgHADIAAAdIAFACIAGAAQAGAAADgEQADgEgBgJQABgKgDgEQgDgFgGABIgEABg");
	this.shape_73.setTransform(-21.65,147.35);

	this.text_1 = new cjs.Text(" ", "17px 'Read'", "#13416D");
	this.text_1.lineHeight = 21;
	this.text_1.parent = this;
	this.text_1.setTransform(-19.45,129.7,0.552,0.552);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#13416D").s().p("AgOAfQgEgDAAgHQAAgHAEgEQAEgEAIAAIANAAIAAgGQAAgDgDgCQgCgDgFAAIgHABIgIACIAAgHIAJgCIAHgBQAIAAAEAEQAFAEAAAHIAAAhIgIAAIAAgGIgHAGIgHABQgHABgEgEgAgIAOQgCACAAAEQAAAEACACQACACAEAAIAGgCIAHgEIAAgJIgLAAQgGgBgCACgAgBgVIgKgMIAJAAIAHAMg");
	this.shape_74.setTransform(-22.125,134);

	this.text_2 = new cjs.Text("", "14px 'DaciaSpirit-Bold'", "#13416D");
	this.text_2.lineHeight = 31;
	this.text_2.parent = this;
	this.text_2.setTransform(53.9,154.15,0.552,0.552);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#13416D").s().p("AgVBdQgIgDgGgFIAPgUIAGAEIAGABQAHAAACgFQAEgEAAgJIAAhiIAdAAIAABlQAAATgLALQgLALgRAAQgIAAgIgDgAAHhCQgFgFgBgHQABgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAGgHAAQgHAAgFgGg");
	this.shape_75.setTransform(48.75,163.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#13416D").s().p("AgsBKIA8iTIAcAAIg8CTg");
	this.shape_76.setTransform(42.9,165.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#13416D").s().p("AgnBlQgfgUgNgkIgiAAIAAggIAbAAIgBgHIAAgGIAAgGIABgEIgbAAIAAggIAhAAQANgkAfgVQAegWAnAAQAZAAAVAJQAWAKARASIgdAfQgMgMgOgGQgOgGgQAAQgTAAgPAJQgPAJgLARIBdAAIgLAgIhcAAIAAAHIAAADIAAAHIAAAGIBWAAIgLAgIhAAAQAKAQAQAJQAPAIASABQARgBAOgGQAOgHAOgOIAeAfQgTAUgXAKQgWAKgZAAQgmAAgegVg");
	this.shape_77.setTransform(50.05,131.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#13416D").s().p("AhnD9QgwgVgkgmIA4hMQAfAeAhAPQAgAPAiAAQAkAAAYgYQAYgYAAgkQAAglgZgXQgagYgmAAQgVAAgUAGQgSAGgTAMIhMgvIAXkDIEYAAIAABbIjCAAIgMBvIAhgHIAhgCQBQAAA1AxQA0AwAABMQAABOg2AyQg2AzhRAAQg2AAgwgUg");
	this.shape_78.setTransform(17.1,147.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.text_2},{t:this.shape_74},{t:this.text_1},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.text},{t:this.shape_67},{t:this.shape_66}]}).wait(33));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_7 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_8 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_9 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_10 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_11 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_12 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_13 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_14 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_15 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_16 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_17 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_18 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_19 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");
	var mask_graphics_20 = new cjs.Graphics().p("EgnCAFpMAldgtDMAooAhzMglcAtCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:-190.575,y:-21.225}).wait(1).to({graphics:mask_graphics_7,x:-171.4321,y:-8.6893}).wait(1).to({graphics:mask_graphics_8,x:-152.2893,y:3.8464}).wait(1).to({graphics:mask_graphics_9,x:-133.1464,y:16.3821}).wait(1).to({graphics:mask_graphics_10,x:-114.0036,y:28.9179}).wait(1).to({graphics:mask_graphics_11,x:-94.8607,y:41.4536}).wait(1).to({graphics:mask_graphics_12,x:-75.7179,y:53.9893}).wait(1).to({graphics:mask_graphics_13,x:-56.575,y:66.525}).wait(1).to({graphics:mask_graphics_14,x:-37.4321,y:79.0607}).wait(1).to({graphics:mask_graphics_15,x:-18.2893,y:91.5964}).wait(1).to({graphics:mask_graphics_16,x:0.8536,y:104.1321}).wait(1).to({graphics:mask_graphics_17,x:19.9964,y:116.6679}).wait(1).to({graphics:mask_graphics_18,x:39.1393,y:129.2036}).wait(1).to({graphics:mask_graphics_19,x:58.2821,y:141.7393}).wait(1).to({graphics:mask_graphics_20,x:77.425,y:154.275}).wait(13));

	// CONTOUR
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#13406C").ss(1,1,1).p("AzGqoMAmNAAAQBzAAAABwIAARwQAABxhzAAMgmNAAAQhzAAAAhxIAAxwQAAhwBzAAg");
	this.shape_79.setTransform(87,167.925);
	this.shape_79._off = true;

	var maskedShapeInstanceList = [this.shape_79];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(6).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,73.4,269.5,163.7);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-300,-250,80,80), null);


(lib.CTABtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbApIAmgpIgmgoIAAgVIA3A2IAAAOIg3A3g");
	this.shape.setTransform(24,326.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAmQgLgMAAgaQAAgYALgMQAKgMAUAAQATAAAJAKQAKALAAAUIgBAHIAAAGIg4AAQABAOAGAFQAGAHAMgBIAMgBIAPgCIAAASIgOACIgOABQgYAAgLgLgAgLgaQgFAGgBAMIAkAAIAAAAQAAgMgEgGQgEgFgJgBQgJABgEAFg");
	this.shape_1.setTransform(-28.225,327.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKA1QgGgHAAgPIAAgxIgPAAIAAgRIAQAAIADgYIAQAAIAAAYIAcAAIAAARIgcAAIAAAwQAAAGADADQACADAHAAIAIgBIAHgBIAAASIgLABIgIABQgPAAgHgHg");
	this.shape_2.setTransform(-36.875,326.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBCIAAhdIAVAAIAABdgAgJgsQgDgCAAgHQAAgGADgDQADgDAGAAQAHAAADADQADADAAAGQAAAHgDACQgDADgHAAQgGAAgDgDg");
	this.shape_3.setTransform(-42.925,325.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBBIAAhLIgOAAIAAgRIAOAAIAAgKQAAgOAIgHQAHgGAOAAIAIAAIAIABIAAARIgGgBIgHgBQgGAAgCADQgCACAAAGIAAAKIAXAAIAAARIgXAAIAABLg");
	this.shape_4.setTransform(-48.65,325.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAlQgKgNAAgYQAAgYAKgMQAKgMAUAAQAVAAAKAMQAKAMAAAYQAAAZgKAMQgKAMgVAAQgUAAgKgMgAgOgXQgEAHAAAQQAAARAEAHQAFAHAJAAQALAAAEgHQAFgHAAgRQAAgPgFgIQgEgHgLgBQgJABgFAHg");
	this.shape_5.setTransform(-57.125,327.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAVAAIAAAMQAHgIAHgDQAGgDAIAAIACAAIABAAIAAAVQgKAAgIACQgGABgGADIAABEg");
	this.shape_6.setTransform(-65.35,327.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAVAAIAAAJQAIgGAHgCQAGgDAGAAQARAAAIALQAIANAAAYQAAAYgKAMQgJANgVAAIgJgBIgKgCIAAAlgAgHgtIgLAFIAAAzIAJACIAJABQAKAAAFgHQAEgHAAgRQAAgQgEgHQgFgHgJAAQgDAAgFACg");
	this.shape_7.setTransform(-74.375,329.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAwIAAg+QAAgHgDgDQgDgEgHAAIgKACIgMAFIAABFIgVAAIAAhdIAVAAIAAAKQAIgGAIgDQAHgDAIAAQAMAAAHAHQAGAHAAAOIAABDg");
	this.shape_8.setTransform(-89.475,327.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAmQgLgMAAgaQAAgYALgMQAKgMAUAAQATAAAJAKQAKALAAAUIgBAHIAAAGIg4AAQABAOAGAFQAGAHAMgBIAMgBIAPgCIAAASIgOACIgOABQgYAAgLgLgAgLgaQgFAGgBAMIAkAAIAAAAQAAgMgEgGQgEgFgJgBQgJABgEAFg");
	this.shape_9.setTransform(-99.675,327.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAWIgDgrIAVAAIgCArg");
	this.shape_10.setTransform(-106.8,322.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOA/IgKgBIAAgSIAIABIAHABQAHAAACgDQADgDAAgGIAAhhIAWAAIAABiQAAAPgHAHQgIAHgPAAg");
	this.shape_11.setTransform(-113.225,326.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque_5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0289D0").s().p("AwoDrQhhAAhGhFQhEhFAAhhQAAhhBEhFQBGhEBhAAMAhRAAAQBhAABFBEQBFBFAABhQAABhhFBFQhFBFhhAAg");
	this.shape_12.setTransform(-68.2162,326.2555,1.0009,1.0532);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTABtn, new cjs.Rectangle(-198.3,301.5,260.2,49.5), null);


(lib.ButtonML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAXIgHgBIAAgHIAHACIAHABQAEgBACgBQACgCABgDQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgFgCIgHgCIgDgBIgEgFIgBgFQABgGAEgDQAEgEAHAAIAHAAIAFABIAAAHIgFgBIgIAAQgCgBgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAHAEIAGACIADABIAEAEIABAFQAAAHgFAEQgDADgIAAg");
	this.shape.setTransform(-232.25,514.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMASQgGgGAAgMQAAgLAGgGQAEgGAJAAQAJAAAEAFQAEAFAAAJIAAAEIAAACIgcAAQABAIADAEQADADAGABIAGgBIAHgBIAAAGIgHABIgGABQgLAAgEgGgAALgEQAAgHgDgDQgCgCgFAAQgFAAgDACQgCADAAAHIAUAAIAAAAg");
	this.shape_1.setTransform(-236.65,514.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACAgQgEAAgCgCQgDgCAAgGIAAg2IAHAAIAAA2IABAEIADAAIACAAIACAAIAAAGIgDAAg");
	this.shape_2.setTransform(-240.025,513.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAUQgEgDAAgGQAAgHAEgDQAEgDAHAAIAMAAIAAgFQAAgFgCgCQgCgDgFABIgHAAIgIACIAAgHIAJgCIAGAAQAJAAAEAEQAEADAAAIIAAAfIgIAAIAAgFQgDADgEABQgDACgDAAQgHAAgDgEgAgHAEQgCACAAAEQAAAEABACQACACAEAAQACAAADgBQAEgCADgEIAAgJIgKAAQgFAAgCACg");
	this.shape_3.setTransform(-244.025,514.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAeQgFgEAAgFQAAgDACgDIAEgEIgDgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgDACgCQACgCADgBQgDgCgCgEQgCgDAAgEQAAgHAGgEQAEgEAJAAIACAAIAEABIAQAAIAAAGIgJAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABIAAAFQABAHgGAEQgEAEgIAAIgCgBIgDAAIgBAAIgDACIgBADIABACIADABIAOAAQAGAAAEADQADADAAAFQAAAIgFAEQgHAEgJAAQgJAAgGgDgAgMAQIgBADQAAAEADACQAEACAFAAQAHAAADgCQAFgDAAgEQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgBgEAAIgQAAIgCADgAgJgYQgCACAAAFQAAAFACACQAEADAEAAQAEAAAEgDQACgCAAgFQAAgEgCgDQgEgCgEAAQgEAAgEACg");
	this.shape_4.setTransform(-248.7,515.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAbQgEgGAAgMQAAgLAEgGQAGgGAIAAQAJAAAEAFQAFAFAAAIIAAAEIAAADIgdAAQABAIADAEQADADAGABIAHgBIAGgBIAAAGIgGABIgHABQgKAAgGgGgAALAEQAAgGgCgDQgDgCgFAAQgEAAgDACQgDADgBAGIAVAAIAAAAgAgCgTIAGgNIAJAAIgJANg");
	this.shape_5.setTransform(-253.7,513.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACAgQgEAAgCgCQgDgCAAgGIAAg2IAHAAIAAA2IABAEIADAAIACAAIACAAIAAAGIgDAAg");
	this.shape_6.setTransform(-257.075,513.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAXIgHgBIAAgHIAHACIAHABQAEgBACgBQADgCgBgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFgCIgGgCIgDgBIgDgFIgCgFQAAgGAFgDQAEgEAHAAIAGAAIAHABIAAAHIgHgBIgHAAQgDgBgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAHAEIAGACIADABIAEAEIABAFQAAAHgFAEQgDADgIAAg");
	this.shape_7.setTransform(-262.65,514.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAYIAAggQAAgDgCgCQgCgDgEAAIgFACIgIADIAAAjIgHAAIAAgtIAHAAIAAAEQAEgDAFgBIAGgBQAHgBADAEQADAEAAAGIAAAhg");
	this.shape_8.setTransform(-267.275,514.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOASQgFgGABgMQAAgLAEgGQAFgGAJAAQAKAAAFAGQAEAGAAALQABAMgGAGQgEAGgKAAQgJAAgFgGgAgIgNQgDAFAAAIQAAAJADAEQADAEAFABQAGAAADgFQADgEAAgJQAAgIgDgFQgDgDgGAAQgFAAgDADg");
	this.shape_9.setTransform(-272.4,514.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIgBgEIABgEIADgBIAEABIABAEIgBAEIgEABIgDgBg");
	this.shape_10.setTransform(-276.075,513.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgGIAAgcIgIAAIAAgFIAIAAIABgNIAFAAIAAANIAPAAIAAAFIgPAAIAAAcQABADABABQACACADAAIAEAAIAEgBIAAAHIgFAAIgEAAQgHAAgCgCg");
	this.shape_11.setTransform(-279.05,513.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAYIAAggQAAgDgCgCQgCgDgEAAIgFACIgIADIAAAjIgHAAIAAgtIAHAAIAAAEQAEgDAFgBIAGgBQAHgBADAEQADAEAAAGIAAAhg");
	this.shape_12.setTransform(-283.275,514.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNASQgEgGAAgMQAAgLAEgGQAGgGAIAAQAJAAAEAFQAEAFABAJIAAAEIAAACIgdAAQAAAIAEAEQADADAGABIAHgBIAGgBIAAAGIgGABIgHABQgKAAgGgGgAALgEQAAgHgCgDQgDgCgFAAQgEAAgDACQgDADAAAHIAUAAIAAAAg");
	this.shape_13.setTransform(-288.25,514.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVAgIAAg0IgSAgIgFAAIgSggIAAA0IgIAAIAAg+IAJAAIATAjIAUgjIAJAAIAAA+g");
	this.shape_14.setTransform(-294.475,513.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAqQAHgKACgKQACgLAAgLQAAgLgCgKQgCgLgHgJIAJAAQAEAJADALQADALAAAKQAAAMgDAKQgDAKgEAKg");
	this.shape_15.setTransform(-301.95,514.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAgIAAgFIAQgUIAJgLQACgFAAgEQAAgGgDgCQgDgDgFAAIgHAAIgIACIAAgGIAIgCIAIgBQAIAAAGAEQAEAFAAAIQAAAGgCAFQgDAEgHAJIgNAPIAbAAIAAAHg");
	this.shape_16.setTransform(-305.75,513.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAqQgFgJgDgLQgCgKAAgMQAAgLADgKQACgLAFgJIAIAAQgHAJgCALQgCAKAAALQAAALACALQACAKAHAKg");
	this.shape_17.setTransform(-309.5,514.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAqQAGgKADgKQACgLAAgLQAAgLgCgKQgDgLgGgJIAJAAQAFAJACALQADALgBAKQABAMgDAKQgCAKgFAKg");
	this.shape_18.setTransform(-312.7,514.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEAgIAAg1IgPAIIAAgIIAQgJIAHAAIAAA+g");
	this.shape_19.setTransform(-317.025,513.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AABAqQgEgJgDgLQgCgKgBgMQAAgLADgKQADgLAEgJIAIAAQgFAJgDALQgCAKAAALQAAALACALQADAKAFAKg");
	this.shape_20.setTransform(-320.25,514.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Calque_1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAXIgHgBIAAgHIAHACIAHABQAEgBACgBQACgCABgDQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgFgCIgHgCIgDgBIgEgFIgBgFQABgGAEgDQAEgEAHAAIAHAAIAFABIAAAHIgFgBIgIAAQgCgBgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAHAEIAGACIADABIAEAEIABAFQAAAHgFAEQgDADgIAAg");
	this.shape_21.setTransform(-232.25,514.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMASQgGgGAAgMQAAgLAGgGQAEgGAJAAQAJAAAEAFQAEAFAAAJIAAAEIAAACIgcAAQABAIADAEQADADAGABIAGgBIAHgBIAAAGIgHABIgGABQgLAAgEgGgAALgEQAAgHgDgDQgCgCgFAAQgFAAgDACQgCADAAAHIAUAAIAAAAg");
	this.shape_22.setTransform(-236.65,514.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACAgQgEAAgCgCQgDgCAAgGIAAg2IAHAAIAAA2IABAEIADAAIACAAIACAAIAAAGIgDAAg");
	this.shape_23.setTransform(-240.025,513.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAUQgEgDAAgGQAAgHAEgDQAEgDAHAAIAMAAIAAgFQAAgFgCgCQgCgDgFABIgHAAIgIACIAAgHIAJgCIAGAAQAJAAAEAEQAEADAAAIIAAAfIgIAAIAAgFQgDADgEABQgDACgDAAQgHAAgDgEgAgHAEQgCACAAAEQAAAEABACQACACAEAAQACAAADgBQAEgCADgEIAAgJIgKAAQgFAAgCACg");
	this.shape_24.setTransform(-244.025,514.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAeQgFgEAAgFQAAgDACgDIAEgEIgDgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgDACgCQACgCADgBQgDgCgCgEQgCgDAAgEQAAgHAGgEQAEgEAJAAIACAAIAEABIAQAAIAAAGIgJAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABIAAAFQABAHgGAEQgEAEgIAAIgCgBIgDAAIgBAAIgDACIgBADIABACIADABIAOAAQAGAAAEADQADADAAAFQAAAIgFAEQgHAEgJAAQgJAAgGgDgAgMAQIgBADQAAAEADACQAEACAFAAQAHAAADgCQAFgDAAgEQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgBgEAAIgQAAIgCADgAgJgYQgCACAAAFQAAAFACACQAEADAEAAQAEAAAEgDQACgCAAgFQAAgEgCgDQgEgCgEAAQgEAAgEACg");
	this.shape_25.setTransform(-248.7,515.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAbQgEgGAAgMQAAgLAEgGQAGgGAIAAQAJAAAEAFQAFAFAAAIIAAAEIAAADIgdAAQABAIADAEQADADAGABIAHgBIAGgBIAAAGIgGABIgHABQgKAAgGgGgAALAEQAAgGgCgDQgDgCgFAAQgEAAgDACQgDADgBAGIAVAAIAAAAgAgCgTIAGgNIAJAAIgJANg");
	this.shape_26.setTransform(-253.7,513.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AACAgQgEAAgCgCQgDgCAAgGIAAg2IAHAAIAAA2IABAEIADAAIACAAIACAAIAAAGIgDAAg");
	this.shape_27.setTransform(-257.075,513.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAXIgHgBIAAgHIAHACIAHABQAEgBACgBQADgCgBgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFgCIgGgCIgDgBIgDgFIgCgFQAAgGAFgDQAEgEAHAAIAGAAIAHABIAAAHIgHgBIgHAAQgDgBgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAHAEIAGACIADABIAEAEIABAFQAAAHgFAEQgDADgIAAg");
	this.shape_28.setTransform(-262.65,514.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAYIAAggQAAgDgCgCQgCgDgEAAIgFACIgIADIAAAjIgHAAIAAgtIAHAAIAAAEQAEgDAFgBIAGgBQAHgBADAEQADAEAAAGIAAAhg");
	this.shape_29.setTransform(-267.275,514.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOASQgFgGABgMQAAgLAEgGQAFgGAJAAQAKAAAFAGQAEAGAAALQABAMgGAGQgEAGgKAAQgJAAgFgGgAgIgNQgDAFAAAIQAAAJADAEQADAEAFABQAGAAADgFQADgEAAgJQAAgIgDgFQgDgDgGAAQgFAAgDADg");
	this.shape_30.setTransform(-272.4,514.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIgBgEIABgEIADgBIAEABIABAEIgBAEIgEABIgDgBg");
	this.shape_31.setTransform(-276.075,513.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgGIAAgcIgIAAIAAgFIAIAAIABgNIAFAAIAAANIAPAAIAAAFIgPAAIAAAcQABADABABQACACADAAIAEAAIAEgBIAAAHIgFAAIgEAAQgHAAgCgCg");
	this.shape_32.setTransform(-279.05,513.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AALAYIAAggQAAgDgCgCQgCgDgEAAIgFACIgIADIAAAjIgHAAIAAgtIAHAAIAAAEQAEgDAFgBIAGgBQAHgBADAEQADAEAAAGIAAAhg");
	this.shape_33.setTransform(-283.275,514.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNASQgEgGAAgMQAAgLAEgGQAGgGAIAAQAJAAAEAFQAEAFABAJIAAAEIAAACIgdAAQAAAIAEAEQADADAGABIAHgBIAGgBIAAAGIgGABIgHABQgKAAgGgGgAALgEQAAgHgCgDQgDgCgFAAQgEAAgDACQgDADAAAHIAUAAIAAAAg");
	this.shape_34.setTransform(-288.25,514.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAVAgIAAg0IgSAgIgFAAIgSggIAAA0IgIAAIAAg+IAJAAIATAjIAUgjIAJAAIAAA+g");
	this.shape_35.setTransform(-294.475,513.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAqQAHgKACgKQACgLAAgLQAAgLgCgKQgCgLgHgJIAJAAQAEAJADALQADALAAAKQAAAMgDAKQgDAKgEAKg");
	this.shape_36.setTransform(-301.95,514.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgSAgIAAgFIAQgUIAJgLQACgFAAgEQAAgGgDgCQgDgDgFAAIgHAAIgIACIAAgGIAIgCIAIgBQAIAAAGAEQAEAFAAAIQAAAGgCAFQgDAEgHAJIgNAPIAbAAIAAAHg");
	this.shape_37.setTransform(-305.75,513.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AACAqQgFgJgDgLQgCgKAAgMQAAgLADgKQACgLAFgJIAIAAQgHAJgCALQgCAKAAALQAAALACALQACAKAHAKg");
	this.shape_38.setTransform(-309.5,514.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJAqQAGgKADgKQACgLAAgLQAAgLgCgKQgDgLgGgJIAJAAQAFAJACALQADALgBAKQABAMgDAKQgCAKgFAKg");
	this.shape_39.setTransform(-312.7,514.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAEAgIAAg1IgPAIIAAgIIAQgJIAHAAIAAA+g");
	this.shape_40.setTransform(-317.025,513.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AABAqQgEgJgDgLQgCgKgBgMQAAgLADgKQADgLAEgJIAIAAQgFAJgDALQgCAKAAALQAAALACALQADAKAFAKg");
	this.shape_41.setTransform(-320.25,514.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(4));

	// Calque_2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(102,204,255,0.008)").s().p("AoTBPIAAidIQnAAIAACdg");
	this.shape_42.setTransform(-273.725,513.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.9,505.5,119.49999999999997,15.899999999999977);


(lib.ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.txtML = new lib.txtML();
	this.txtML.name = "txtML";
	this.txtML.parent = this;
	this.txtML.setTransform(0.65,143.2);

	this.timeline.addTween(cjs.Tween.get(this.txtML).wait(1));

	// fond
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(-3,469.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ML, new cjs.Rectangle(-153,169.2,300,600), null);


(lib.animML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
		this.ML.play();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// ML
	this.ML = new lib.ML();
	this.ML.name = "ML";
	this.ML.parent = this;
	this.ML.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ML).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// selector
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("AgZApIAAhRIARAAIAABDIAhAAIAAAOg");
	this.shape.setTransform(-153.2,107.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("AAiApIgIg1IgTA1IgOAAIgTg2IgIA2IgQAAIANhRIAQAAIAVA/IAVg/IARAAIANBRg");
	this.shape_1.setTransform(-162.35,107.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99FF").s().p("AhGBHQgdgdAAgqQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAAqgdAdQgeAdgpAAQgoAAgegdg");
	this.shape_2.setTransform(-160,128.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,94.4,317,674.8000000000001);


// stage content:
(lib.DACIA_DUSTER_2019_Octobre_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_101 = function() {
		this.button.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.ML.gotoAndPlay(2);
		}
		
		
		this.button.addEventListener("mouseout", fl_ClickToGoToAndStopAtFrame2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame2()
		{
			this.ML.gotoAndPlay(11);
		}
	}
	this.frame_137 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(36).call(this.frame_137).wait(3));

	// CONTOUR
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	// ML
	this.ML = new lib.animML();
	this.ML.name = "ML";
	this.ML.parent = this;
	this.ML.setTransform(153,-169.05);
	this.ML._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ML).wait(101).to({_off:false},0).wait(39));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.05,1,1,0,0,0,-299.8,-249.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// BTN ML
	this.button = new lib.ButtonML();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(341.2,77.3);
	this.button.alpha = 0;
	this.button._off = true;
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.ButtonML(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(101).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(29));

	// CTA
	this.instance_1 = new lib.CTABtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.1,279.95);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({y:227.95},11,cjs.Ease.cubicOut).wait(35));

	// Tout Simplement
	this.instance_2 = new lib.ToutSimplement();
	this.instance_2.parent = this;
	this.instance_2.setTransform(225.15,331);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).wait(19));

	// OFFRE
	this.instance_3 = new lib.OFFRE();
	this.instance_3.parent = this;
	this.instance_3.setTransform(63.15,82);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(59));

	// Titre
	this.instance_4 = new lib.Titre();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.55,32.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},11,cjs.Ease.get(1)).wait(129));

	// VISUEL
	this.instance_5 = new lib.Visuel();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156,222,1,1,0,0,0,-153,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:332},16,cjs.Ease.get(1)).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,145,168,565);
// library properties:
lib.properties = {
	id: '1014A875E09F4E0EB29777C151320DFB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1568799431610", id:"logo"},
		{src:"images/VISUEL.jpg?1568799431610", id:"VISUEL"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1014A875E09F4E0EB29777C151320DFB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;