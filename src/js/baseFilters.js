var config = require('./../../config');

module.exports = [
    {
        type:      'blur',
        label:     'Blur',
        active:    false,
        radius:    1,
        component: require('./components/filters/BlurFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.radius + ')';
        }
    },
    {
        type:      'brightness',
        label:     'Brightness',
        active:    false,
        amount:    0,
        component: require('./components/filters/BrightnessFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'contrast',
        label:     'Contrast',
        active:    false,
        amount:    1,
        component: require('./components/filters/ContrastFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'equalize',
        label:     'Equalize',
        active:    false,
        component: require('./components/filters/EqualizeFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:      'fill',
        label:     'Fill',
        active:    false,
        color:     'fff',
        component: require('./components/filters/FillFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.color + ')';
        }
    },
    {
        type:      'noise',
        label:     'Noise',
        active:    false,
        amount:    0,
        component: require('./components/filters/NoiseFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }

    },
    {
        type:      'grayscale',
        label:     'Grayscale',
        active:    false,
        component: require('./components/filters/GrayscaleFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:      'no_upscale',
        label:     'No upscale',
        active:    false,
        component: require('./components/filters/NoUpscaleFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:         'watermark',
        label:        'Watermark',
        active:       false,
        image:        config.watermarkImages[0].src,
        x:            10,
        y:            10,
        transparency: 0,
        component:    require('./components/filters/WatermarkFilter.jsx'),
        stringify:    function () {
            return this.type + '(' + this.image + ',' + this.x + ',' + this.y + ',' + this.transparency +')';
        }
    }
];