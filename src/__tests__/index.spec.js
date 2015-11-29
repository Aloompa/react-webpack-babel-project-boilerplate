const Index = require('../index');
const assert = require('assert');
const ReactTestUtils = require('react-addons-test-utils');
const React = require('react');

describe('The react-webpack-babel-project-boilerplate Test Suite', () => {
    describe('When we test the project', () => {
        it('Should have some tests', () => {
            const node = <Index />;
            const renderer = ReactTestUtils.createRenderer();
            renderer.render(node);
            assert.equal(renderer.getRenderOutput().props.children, 'Hello World!');
        });
    });
});
